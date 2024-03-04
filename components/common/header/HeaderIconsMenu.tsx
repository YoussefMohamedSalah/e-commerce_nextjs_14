import React from "react";
import ShoppingCart from "./ShoppingCart";
import LanguageSwitcher from "./LanguageSwitcher";
import AuthMenu from "./AuthMenu";
import NotificationsBar from "./NotificationsBar";
import { notificationService } from "@/services/notification.service";
import { Session } from "@/types/session";

interface Props {
  lang: string;
  session: Session | null;
};

async function getAllNotifications() {
  const response = await notificationService.getAllNotifications();
  if (response && response.success) {
    return response.data;
  }
};

export default async function HeaderIconsMenu({ lang, session }: Props) {
  const userNotifications = await getAllNotifications();


  console.log(userNotifications)

  return (
    <ul className="user-nav list-inline mb-0 flex-shrink-0 d-none d-md-flex">
      <AuthMenu />
      {session && session.user && <NotificationsBar data={userNotifications} lang={lang} session={session ? session : null} />}
      <ShoppingCart session={session ? session : null} />
      <LanguageSwitcher lang={lang} />
    </ul>
  );
}
