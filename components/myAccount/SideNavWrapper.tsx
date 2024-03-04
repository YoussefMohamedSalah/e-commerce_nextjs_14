"use client";
import { PAGES } from "@/constants/pages";
import { usePathname } from "next/navigation";
import Image from "@/components/ui/image";
import Link from "@/components/ui/link";
import { useState } from "react";
import LogOutOneIcon from "../svg/logout1";
import { signOut } from "next-auth/react";

interface Props {
    sideNavT: any;
};

export default function SideNavWrapper({ sideNavT }: Props) {
    const currentPath = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOver, setIsOver] = useState<boolean>(false);

    return (
        <div className="col-lg-3">
            <div
                className="profile-sidebar border-end pt-4 pe-3 h-100"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`fz24 text-primary mb-2rem toggle-mobile-trigger ${isOpen
                        ? "open"
                        : ""}`}
                >
                    {sideNavT.side_account}
                </div>
                <ul
                    className={`account-nav list-unstyled toggle-mobile-content p-0 ${isOpen
                        ? "d-block"
                        : ""}`}
                >
                    <li>
                        <Link
                            href={PAGES.PROFILE}
                            className={`${currentPath === PAGES.PROFILE ||
                                currentPath === `/ar${PAGES.PROFILE}`
                                ? "active"
                                : ""}`}
                        >
                            <Image
                                src="/assets/icons/user-profile-menu/4092564_profile_about_mobile%20ui_user_icon.png"
                                alt=""
                                width={20}
                                height={20}
                            />
                            {sideNavT.side_profile}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={PAGES.ORDERS}
                            className={`${currentPath === PAGES.ORDERS ||
                                currentPath === `/ar${PAGES.ORDERS}`
                                ? "active"
                                : ""}`}
                        >
                            <Image
                                src="/assets/icons/user-profile-menu/6457546_history_order_page_time_track_icon.png"
                                alt=""
                                width={20}
                                height={20}
                            />
                            {sideNavT.side_orders}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={PAGES.WALLET}
                            className={`${currentPath === PAGES.WALLET ||
                                currentPath === `/ar${PAGES.WALLET}`
                                ? "active"
                                : ""}`}
                        >
                            <Image
                                src="/assets/icons/user-profile-menu/4781810_coin_currency_dollar_finance_money_icon.png"
                                alt=""
                                width={20}
                                height={20}
                            />
                            {sideNavT.side_wallet}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={PAGES.COMPLAINTS}
                            className={`${currentPath === PAGES.COMPLAINTS ||
                                currentPath === `/ar${PAGES.COMPLAINTS}`
                                ? "active"
                                : ""}`}
                        >
                            <Image
                                src="/assets/icons/user-profile-menu/2931174_clipboard_copy_paste_analysis_report_icon.png"
                                alt=""
                                width={20}
                                height={20}
                            />
                            {sideNavT.side_complaints}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={PAGES.FAVORITES}
                            className={`${currentPath === PAGES.FAVORITES ||
                                currentPath === `/ar${PAGES.FAVORITES}`
                                ? "active"
                                : ""}`}
                        >
                            <Image
                                src="/assets/icons/user-profile-menu/1904657_bookmark_favorite_favourite_heart_like_icon.png"
                                alt=""
                                width={20}
                                height={20}
                            />
                            {sideNavT.side_favorites}
                        </Link>
                    </li>
                    <li>
                        <div
                            onMouseOver={() => setIsOver(true)}
                            onMouseLeave={() => setIsOver(false)}
                            onClick={() => signOut()}
                        >
                            <Link href="/">
                                <LogOutOneIcon fill={isOver ? "#264AEC" : "#fff"} />{" "}
                                {sideNavT.side_logout}
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
