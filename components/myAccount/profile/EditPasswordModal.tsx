import Image from "@/components/ui/image";
import React from "react";

interface Props {
  tProfile: any;
};

export default function EditPasswordModal({ tProfile }: Props) {
  return (
    <div
      className="modal fade"
      id="edit-password-modal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header p-0 mb24">
            <button
              type="button"
              data-bs-target="#edit-personal-information-modal"
              data-bs-toggle="modal"
              className="close btn p-0 shadow-none border-0"
              data-bs-dismiss="modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.57141 18.8201C9.38141 18.8201 9.19141 18.7501 9.04141 18.6001L2.97141 12.5301C2.68141 12.2401 2.68141 11.7601 2.97141 11.4701L9.04141 5.40012C9.33141 5.11012 9.81141 5.11012 10.1014 5.40012C10.3914 5.69012 10.3914 6.17012 10.1014 6.46012L4.56141 12.0001L10.1014 17.5401C10.3914 17.8301 10.3914 18.3101 10.1014 18.6001C9.96141 18.7501 9.76141 18.8201 9.57141 18.8201Z"
                  fill="#161616"
                />
                <path
                  d="M20.5019 12.75H3.67188C3.26188 12.75 2.92188 12.41 2.92188 12C2.92188 11.59 3.26188 11.25 3.67188 11.25H20.5019C20.9119 11.25 21.2519 11.59 21.2519 12C21.2519 12.41 20.9119 12.75 20.5019 12.75Z"
                  fill="#161616"
                />
              </svg>
            </button>
            <h1 className="modal-title fz20 fw-600">{tProfile.change_password}</h1>
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
            <form action="" className="text-black">
              <div className="row">
                <div className="col-12">
                  <div className="input-wrapper">
                    <label className="fz16 fw-500  d-block mb-2">
                      {tProfile.your_current_password}{" "}
                    </label>
                    <div className="password-input-wrapper position-relative">
                      <input
                        type="password"
                        className="form-control password-input mb24 w-100"
                        value="123456"
                      />
                      <button className="togglePassword">
                        <Image
                          src="/assets/icons/eye-slash.png"
                          alt=""
                          width={16}
                          height={16}
                        />
                        <Image
                          src="/assets/icons/eye.png"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-wrapper">
                    <label className="fz16 fw-500  d-block mb-2">
                      {tProfile.your_new_password}{" "}
                    </label>
                    <div className="password-input-wrapper position-relative">
                      <input
                        type="password"
                        className="form-control password-input mb24 w-100"
                        value="123456"
                      />
                      <button className="togglePassword">
                        <Image
                          src="/assets/icons/eye-slash.png"
                          alt=""
                          width={16}
                          height={16}
                        />
                        <Image
                          src="/assets/icons/eye.png"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-wrapper">
                    <label className="fz16 fw-500  d-block mb-2">
                      {tProfile.retype}
                    </label>
                    <div className="password-input-wrapper position-relative">
                      <input
                        type="password"
                        className="form-control password-input mb24 w-100"
                        value="123456"
                      />
                      <button className="togglePassword">
                        <Image
                          src="/assets/icons/eye-slash.png"
                          alt=""
                          width={16}
                          height={16}
                        />
                        <Image
                          src="/assets/icons/eye.png"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" className="btn btn-primary rounded10 w-100 fz14 ">
                {tProfile.update}
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
