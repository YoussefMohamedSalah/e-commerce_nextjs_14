"use client";

import LogOutOneIcon from "@/components/svg/logout1";
import { PAGES } from "@/constants/pages";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

interface Props {
  logoutText: string;
}

export default function LogoutBtnClient({ logoutText }: Props) {
  return (
    <li className="dropdown-item py-2" onClick={() => signOut()}>
      <Link
        className="p-0 dropdown-item pointer position-relative d-flex ms-auto"
        href="#"
      >
        <LogOutOneIcon fill={"black"} className="mx-1" />
        {logoutText}
      </Link>
    </li>
  );
}
