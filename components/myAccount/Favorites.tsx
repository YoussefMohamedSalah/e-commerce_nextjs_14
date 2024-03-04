import React from 'react';
import { useTranslations } from "next-intl";
import FavoritesWrapper from './FavoritesWrapper';
import { Session } from '@/types/session';


interface Props {
	session: Session | null;
};

export default function Favorites({ session }: Props) {
	const t = useTranslations("Account");

	const tFavorites = {
		saved_items: `${t("saved-items")}`,
		no_favorites_title: `${t("no-favorites-title")}`,
	};

	const tAction = {
		buy_now: `${t("buy-now")}`,
		remove: `${t("remove")}`
	};

	return (
		<>
			<div className="col-lg-9">
				<div className="profile-wrapper pt-4">
					<div className="fz20 fw-600 text-black mb-3">{t('welcome')} {session?.user?.name!}</div>
					<div className="fz14 text-secondary mb-3">
						{t('manage-favorites')}
					</div>
					<FavoritesWrapper tFavorites={tFavorites} tAction={tAction} session={session ? session : null} />
				</div>
			</div>
		</>
	)
}
