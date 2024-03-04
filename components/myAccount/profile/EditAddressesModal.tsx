import React from "react";

export default function EditAddressesModal() {
  return (
    <div
      className="modal fade"
      id="edit-address-modal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header p-0 mb24">
            <h1 className="modal-title fz20 fw-600">Edit your address</h1>
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
                      Street name and house number
                    </label>
                    <input
                      type="text"
                      className="form-control mb24"
                      placeholder="Enter your house or street number"
                      value="St Fared nada 55"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="input-wrapper">
                    <label className="fz16 fw-500  d-block mb-2">Country</label>
                    <select className="nice-select custom-nice-select form-control mb24">
                      <option value="">Choose...</option>
                      <option value="" selected>
                        Egypt
                      </option>
                      <option value="">Qatar</option>
                      <option value="">Oman</option>
                      <option value="">USA</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="input-wrapper ">
                    <label className="fz16 fw-500  d-block mb-2">City</label>
                    <input
                      type="text"
                      className="form-control mb24"
                      placeholder="Enter your city"
                      value="Benha"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-wrapper">
                    <label className="fz16 fw-500  d-block mb-2">
                      Postal code
                    </label>
                    <input
                      type="text"
                      className="form-control mb24"
                      placeholder="Enter your postal code"
                      value="65552"
                    />
                  </div>
                </div>
              </div>

              <a href="#" className="btn btn-primary rounded10 w-100 fz14 ">
                Save
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
