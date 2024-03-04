"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { BASE_API_URL } from "@/constants/baseUrl";

interface Props {
  tAccount: any;
}

export default function ComplaintsForm({ tAccount }: Props) {
  const session = useSession();

  const handleSubmitComplaints = async (e: any) => {
    e.preventDefault();
    if (!session) return;
    let url = `${BASE_API_URL}/profile/ContactMessage`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.data?.user?.token!}`
        },
        body: JSON.stringify({
          message: "test message",
          type: "complaint",
        }),
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return (
    <form className="contact-us-form text-black" onSubmit={(e) => handleSubmitComplaints(e)}>
      <div className="row">
        <div className="col-12">
          <div className="input-wrapper">
            <label className="fz16 fw-500  d-block mb-2">
              {tAccount.subject}
            </label>
            <input
              type="text"
              className="form-control mb24"
              placeholder={`${tAccount.message_title}`}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="input-wrapper">
            <label className="fz16 fw-500  d-block mb-2">
              {tAccount.your_message}
            </label>
            <textarea
              rows={3}
              className="form-control mb24 w-100"
              placeholder={`${tAccount.what_to_say}`}
            />
          </div>
        </div>
        <div className="col-md-2">
          <input
            type="submit"
            value={tAccount.submit}
            className="btn btn-primary px-5 py-3 w-100 fz14"
          />
        </div>
      </div>
    </form>
  );
}
