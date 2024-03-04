"use client"
import React from 'react'

export default function EditAddressesBtn() {
  return (
    <button
      data-bs-target="#edit-address-modal"
      data-bs-toggle="modal"
      className="btn px-3 py-2 border rounded50 bg-transparent fz14 text-black fw-normal d-inline-flex align-items-center hover-bg-secondary "
    >
      Edit
      <svg
        className="ms-2"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z"
          fill="#292D32"
        />
        <path
          d="M8.49935 17.6896C7.88935 17.6896 7.32935 17.4696 6.91935 17.0696C6.42935 16.5796 6.21935 15.8696 6.32935 15.1196L6.75935 12.1096C6.83935 11.5296 7.21935 10.7796 7.62935 10.3696L15.5093 2.48957C17.4993 0.49957 19.5193 0.49957 21.5093 2.48957C22.5993 3.57957 23.0893 4.68957 22.9893 5.79957C22.8993 6.69957 22.4193 7.57957 21.5093 8.47957L13.6293 16.3596C13.2193 16.7696 12.4693 17.1496 11.8893 17.2296L8.87935 17.6596C8.74935 17.6896 8.61935 17.6896 8.49935 17.6896ZM16.5693 3.54957L8.68935 11.4296C8.49935 11.6196 8.27935 12.0596 8.23935 12.3196L7.80935 15.3296C7.76935 15.6196 7.82935 15.8596 7.97935 16.0096C8.12935 16.1596 8.36935 16.2196 8.65935 16.1796L11.6693 15.7496C11.9293 15.7096 12.3793 15.4896 12.5593 15.2996L20.4393 7.41957C21.0893 6.76957 21.4293 6.18957 21.4793 5.64957C21.5393 4.99957 21.1993 4.30957 20.4393 3.53957C18.8393 1.93957 17.7393 2.38957 16.5693 3.54957Z"
          fill="#292D32"
        />
        <path
          d="M19.8515 9.83027C19.7815 9.83027 19.7115 9.82027 19.6515 9.80027C17.0215 9.06027 14.9315 6.97027 14.1915 4.34027C14.0815 3.94027 14.3115 3.53027 14.7115 3.41027C15.1115 3.30027 15.5215 3.53027 15.6315 3.93027C16.2315 6.06027 17.9215 7.75027 20.0515 8.35027C20.4515 8.46027 20.6815 8.88027 20.5715 9.28027C20.4815 9.62027 20.1815 9.83027 19.8515 9.83027Z"
          fill="#292D32"
        />
      </svg>
    </button>
  )
}