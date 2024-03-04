import React from "react";
import EditAddressesBtn from "./EditAddressesBtn";
import { Session } from "@/types/session";

interface Props {
  session: Session | null;
}

export default function AddressesInfo({ session }: Props) {
  const { name, email, phone } = session?.user!;
  let nameArr = name?.split(' ');
  let fName = nameArr?.[0] || '';
  let lName = nameArr?.[1] || '';

  return (
    <div className="border rounded10 p-3">
      <div className="d-flex justify-content-between align-items-center gap-3 mb-2rem">
        <div className="fz16 text-black fw-600">Address</div>
        <EditAddressesBtn />
      </div>
      <div className="row">
        <div className="col-md-6 mb-2rem">
          <div className="text-black fw-600 mb-2">Region</div>
          <div className="text-helper">Cairo</div>
        </div>
        <div className="col-md-6 mb-2rem">
          <div className="text-black fw-600 mb-2">City</div>
          <div className="text-helper">Benha</div>
        </div>
        <div className="col-md-6 mb-2rem">
          <div className="text-black fw-600 mb-2">Street name</div>
          <div className="text-helper">ST fared nada 87</div>
        </div>
        <div className="col-md-6 mb-2rem">
          <div className="text-black fw-600 mb-2">Postal code</div>
          <div className="text-helper">85565</div>
        </div>
      </div>
    </div>
  );
}
