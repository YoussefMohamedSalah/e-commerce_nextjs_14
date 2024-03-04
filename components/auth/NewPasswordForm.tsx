import { useState } from 'react';
import Link from "@/components/ui/link";
import { PAGES } from "@/constants/pages";
import FingerPrint from "../svg/fingerPrint";
import Alert from './Alert';

type FormValues = {
  password: string;
  password_confirmation: string;
};

interface Props {
  email: string;
  otp: string;
  lang: string;
  tAuth: any;
  onSuccess: () => void;
};

const NewPasswordForm = ({ email, otp, lang, tAuth, onSuccess }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormValues>({
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let dataObj = {
      ...formData,
      otp,
      email
    }
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/password/update-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": `${lang}`
          },
          body: JSON.stringify(dataObj)
        }
      );

      let res = await response.json()

      if (res) {
        if (res?.error) {
          let errorMsg = res.error.split(":");
          setError(errorMsg[1]);
        } else {
          onSuccess()
        }
      } else {
        // Handle the case where res is null or undefined
        console.error("Reset password response is null or undefined");
        setError("An unexpected error occurred during Reset password.");
      }
    } catch (error) {
      // Handle other errors, if any
      console.error("Error during Reset password:", error);
      setError("An error occurred during Reset password.");
    } finally {
      setIsLoading(false);
    }
  };

  if (email && otp) {
    return (
      <>
        <div className="form-wrapper asides-gap">
          <FingerPrint />
          <div className="text-primary fz24 mb-2">{tAuth.set_new_password}</div>
          <div className="fz14 text-black-50 mb-2rem">
            {tAuth.new_password_msg}
          </div>
          <form onSubmit={onSubmit}>
            <div className=" text-black">
              <div className="row">
                <Alert error={error} close={() => setError(null)} />
                <div className="col-12">
                  <div className="input-wrapper">
                    <label className="fz16 fw-500  d-block mb-2">{tAuth.password}</label>
                    <input
                      type="password"
                      className="form-control mb24"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-wrapper">
                    <label className="fz16 fw-500  d-block mb-2">{tAuth.confirm_password}</label>
                    <input
                      type="password"
                      className="form-control mb24"
                      name="password_confirmation"
                      value={formData.password_confirmation}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex justify-content-between gap-2 align-items-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary fz16 py-3 w-75"
                      disabled={isLoading}
                    >
                      {isLoading ? <div className="spinner-border" style={{ width: "1.4rem", height: "1.4rem" }} role="status" /> : tAuth.reset}
                    </button>
                    <Link
                      href={PAGES.LOGIN}
                      className="text-primary hover-link fz14 fw-500"
                    >
                      {tAuth.back_to_login}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default NewPasswordForm;
