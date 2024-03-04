"use client"

import React, { useEffect, useState } from "react";
import NotificationIcon from "@/components/svg/notification";
import Link from "@/components/ui/link";
import { BASE_API_URL } from '@/constants/baseUrl';
import { calculateUnreadCount } from "@/utils/notificationsCounter";
import { Session } from "@/types/session";

interface Props {
  data: any;
  lang: string;
  session: Session | null;
};

export default function NotificationsBar({ data, lang, session }: Props) {
  const [unreadCount, setUnreadCount] = useState<number>(0);
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (!initialized && data) {
      let count = calculateUnreadCount(data);
      setUnreadCount(count)
      setInitialized(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const handleMarkAsRed = async (id: string) => {
    if (!session) return null;
    try {
      const favoritesUrl = `${BASE_API_URL}/user/notifications/mark-as-read`;
      const res = await fetch(`${favoritesUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${session?.user?.token!}`,
        },
        body: JSON.stringify({ notification_id: id })
      });
      if (!res.ok) {
        throw new Error("Failed to Mark As Read");
      } else {
        setUnreadCount(unreadCount - 1)
      }
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  return (
    <li className="list-inline-item ">
      <div className="dropdown">
        <a
          href="#"
          data-bs-display="static"
          role="button"
          data-bs-toggle="dropdown"
        >
          <NotificationIcon />
          <span>
            {unreadCount || 0}
          </span>
        </a>
        <div className="dropdown-menu notifications">
          <div className="notification-heading p-3 d-flex justify-content-between align-items-center">
            <div className="fz16 fw-500"> {lang === 'ar' ? "الإشعارات" : "Notifications"}</div>
            <Link
              href="#"
              className="fz16 fw-500 p-0 fz12 hover-link bg-transparent"
            >
              {lang === 'ar' ? "مشاهدة الكل" : "View all"}
            </Link>
          </div>
          {data &&
            data.length > 0 &&
            <div className="notifications-wrapper">
              {data.map((notification: any, i: number) => {
                return (
                  <div className="notification-item" key={i}>
                    <h4 className="fz14 mb-3 fw-normal">
                      {notification.message}
                    </h4>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="fz12 text-helper">{notification.created_at_human}</div>
                      <Link
                        href={"#"}
                        onClick={() => handleMarkAsRed(notification.id)}
                        className="fw-500 p-0 fz12 text-blue hover-link bg-transparent"
                      >
                        {lang === 'ar' ? "وضع كمقروء" : "Mark as read"}
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>}
        </div>
      </div>
    </li>
  );
}
