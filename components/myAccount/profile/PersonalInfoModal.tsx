"use client";
import Image from "@/components/ui/image";
import React, { useEffect, useState } from "react";
import { Session, SessionUser } from "@/types/session";
import Alert from "@/components/auth/Alert";

interface Props {
  userInfo: SessionUser;
  tProfile: any;
  lang: string;
  session: Session | null;
};

export default function PersonalInfoModal({ userInfo, tProfile, lang, session }: Props) {
  const [initialized, setInitialized] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  // toggle eye-slash
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  useEffect(() => {
    if (userInfo && !initialized) {
      if (userInfo.name) {
        let nameArr = userInfo.name?.split(' ')!;
        setFirstName(nameArr?.[0] || '')
        setLastName(nameArr?.[1] || '')
      }
      if (userInfo.email) setEmail(userInfo.email)
      if (userInfo.phone) setPhoneNumber(userInfo.phone || "")
      setInitialized(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!session) return null;

    setIsLoading(true);

    let dataObj = {
      email: email,
      name: firstName,
      last_name: lastName,
      phone: phoneNumber,
      password: password,
      password_confirmation: passwordConfirmation
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/profile/update`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": `${lang}`,
            Authorization: `Bearer ${session?.user?.token!}`,
          },
          body: JSON.stringify(dataObj)
        }
      );

      let res = await response.json();

      if (res) {
        if (res?.message && !res.success) {
          setError(res?.message);
        } else {
          // Handle successful login
          // window.location.reload();
        }
      } else {
        // Handle the case where res is null or undefined
        console.error("Update Profile response is null or undefined");
        setError("An unexpected error occurred during Update Profile.");
      }
    } catch (error) {
      // Handle other errors, if any
      console.error("Error during Update Profile:", error);
      setError("An error occurred during Update Profile.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="modal fade"
      id="edit-personal-information-modal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header p-0 mb24">
            <h1 className="modal-title fz20 fw-600">{tProfile.edit_profile_info}</h1>
            <button
              type="button"
              className="close btn p-0 shadow-none border-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.0006 6.92319L6.92368 18.0001C6.67137 18.2524 6.25291 18.2524 6.0006 18.0001C5.74829 17.7478 5.74829 17.3293 6.0006 17.077L17.0775 6.00011C17.3298 5.7478 17.7483 5.7478 18.0006 6.00011C18.2529 6.25242 18.2529 6.67088 18.0006 6.92319Z"
                  fill="#161616"
                />
                <path
                  d="M6.92368 5.99989L18.0006 17.0768C18.2529 17.3291 18.2529 17.7476 18.0006 17.9999C17.7483 18.2522 17.3298 18.2522 17.0775 17.9999L6.0006 6.92296C5.74829 6.67066 5.74829 6.25219 6.0006 5.99989C6.25291 5.74758 6.67137 5.74758 6.92368 5.99989Z"
                  fill="#161616"
                />
              </svg>
            </button>
          </div>

          <div className="modal-body p-0">
            <form onSubmit={handleSubmit} className="text-black">
              <div className="row">
                <Alert error={error} close={() => setError(null)} />
                <div className="col-md-6">
                  <div className="input-wrapper">
                    <label className="fz16 fw-500 d-block mb-2">
                      {tProfile.first_name}
                    </label>
                    <input
                      type="text"
                      className="form-control mb24"
                      placeholder={`${tProfile.first_name_holder}`}
                      value={firstName}
                      onChange={(e: any) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-wrapper">
                    <label className="fz16 fw-500 d-block mb-2">
                      {tProfile.last_name}
                    </label>
                    <input
                      type="text"
                      className="form-control mb24"
                      placeholder={`${tProfile.last_name_holder}`}
                      value={lastName}
                      onChange={(e: any) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-wrapper">
                    <label className="fz16 fw-500 d-block mb-2">
                      {tProfile.email}
                    </label>
                    <input
                      type="email"
                      className="form-control mb24"
                      placeholder={`${tProfile.email_holder}`}
                      value={email}
                      onChange={(e: any) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-wrapper">
                    <label className="fz16 fw-500 d-block mb-2">
                      {tProfile.phone_number}
                    </label>
                    <input
                      id="phone"
                      type="text"
                      className="form-control mb24 w-100"
                      placeholder={`${tProfile.phone_number_holder}`}
                      value={phoneNumber}
                      defaultValue={phoneNumber}
                      onChange={(e: any) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                {/* <div className="col-6">
                  <div className="input-wrapper">
                    <label className="fz16 fw-500 d-block mb-2">
                      {tProfile.password}{" "}
                    </label>
                    <div className="password-input-wrapper position-relative">
                      <input
                        type="password"
                        className="form-control password-input mb24 w-100"
                        value=""
                      />
                    </div>
                  </div>
                </div> */}

                {/* Password */}
                <div className="col-6">
                  <div className="input-wrapper">
                    <label className="fz16 fw-500 d-block mb-2">
                      {tProfile.password}
                    </label>
                    <div className="password-input-wrapper position-relative">
                      <input
                        type={`${showPassword ? "text" : "password"}`}
                        className="form-control password-input mb24 w-100"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                      />
                      <button className="togglePassword" onClick={(e: any) => {
                        e.preventDefault();
                        setShowPassword(!showPassword)
                      }}>
                        {showPassword ? (
                          <>
                            <Image
                              src="/assets/icons/eye.png"
                              alt=""
                              width={16}
                              height={16}
                            />
                          </>
                        ) : (
                          <>
                            <Image
                              src="/assets/icons/eye-slash.png"
                              alt=""
                              width={16}
                              height={16}
                            />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-wrapper">
                    <label className="fz16 fw-500 d-block mb-2">
                      {tProfile.confirm_password}
                    </label>
                    <div className="password-input-wrapper position-relative">
                      <input
                        type={`${showConfirmPassword ? "text" : "password"}`}
                        className="form-control password-input mb24 w-100"
                        value={passwordConfirmation}
                        onChange={(e: any) => setPasswordConfirmation(e.target.value)}
                      />
                      <button className="togglePassword" onClick={(e: any) => {
                        e.preventDefault();
                        setShowConfirmPassword(!showConfirmPassword)
                      }}>
                        {showConfirmPassword ? (
                          <>
                            <Image
                              src="/assets/icons/eye.png"
                              alt=""
                              width={16}
                              height={16}
                            />
                          </>
                        ) : (
                          <>
                            <Image
                              src="/assets/icons/eye-slash.png"
                              alt=""
                              width={16}
                              height={16}
                            />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                {/* Password End */}
              </div>
              <div className="d-flex gap-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary rounded10 flex-grow-1  fz14 "
                >
                  {isLoading ? <div className="spinner-border" style={{ width: "1.4rem", height: "1.4rem" }} role="status" /> : tProfile.save}

                </button>
                {/* <a
                  href="#edit-password-modal"
                  data-bs-toggle="modal"
                  className="btn btn-secondary rounded10 flex-grow-1  fz14 "
                >
                  {tProfile.change_password}
                </a> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
