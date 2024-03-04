"use client";

import React, { useContext } from "react";
import SiteSettingsContext from "@/contexts/SiteSettingsContext";
import Truck from "../svg/truck";
import CopySvg from "../svg/copy";
import BoxSvg from "../svg/box";
import SecureSvg from "../svg/secure";
import ShareBtn from "./ShareBtn";

interface Props {
  tShare: any;
}
export default function ShareProduct({ tShare }: Props) {
  const siteSettingsContext = useContext(SiteSettingsContext);
  const { siteSettings } = siteSettingsContext || {};

  const { share_this_product, estimated_delivery, free_return_within, secure_shopping, data_safe, days_of, purchase, work_days } = tShare;
  return (
    <>
      {/* -------- */}
      <div className="share">
        <ShareBtn content={share_this_product} />
      </div>

      <div className="shopping-features">
        <ul className="list-unstyled">
          <li>
            <Truck className="icon" />
            <span >{estimated_delivery}:</span> {siteSettings?.delivery_days! || '??'} {work_days}
          </li>
          <li>
            <BoxSvg className="icon" />
            {free_return_within}: <span>{siteSettings?.free_return! || '??'} {days_of} </span> {purchase}
          </li>
          <li>
            <SecureSvg className="icon" />
            <span>{secure_shopping}</span> {data_safe}
          </li>
        </ul>
      </div>
    </>
  );
}
