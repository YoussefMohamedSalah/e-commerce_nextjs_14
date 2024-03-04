import React from 'react';
import Image from "@/components/ui/image";
import FooterWidgetSubscription from './FooterWidgetSubscription';
import FooterWidgetLink from './FooterWidgetLink';
import { useTranslations } from "next-intl";
import Link from '@/components/ui/link';
import { Session } from '@/types/session';


interface Props {
	widgets: any;
	session: Session | null;
};

export default function FooterWidgets({ widgets, session }: Props) {
	const t = useTranslations("Footer");

	const tSubscription = {
		exclusive_benefits: `${t("exclusive-benefits")}`,
		subscript_input_text: `${t("subscript-input-text")}`,
		subscript_text: `${t("subscript-text")}`,
	}

	return (
		<>
			<div className="d-flex justify-content-between">
				<FooterWidgetSubscription tSubscription={tSubscription} session={session ? session : null} />
				<div className="footer-lists d-flex">
					{widgets?.slice(0, 3).map((widget: any) => (
						<FooterWidgetLink
							key={`footer-widget--key${widget.id}`}
							data={widget}
							className="footer-list-wrapper"
						/>
					))}
					{/* --- Get The App --- */}
					<div className="footer-list-wrapper d-flex flex-column">
						<h6>{t("get-the-app")}</h6>
						<div className="d-flex gap-1rem flex-column">
							<Link href="#" className="d-block">
								<Image
									width={130}
									height={45}
									src="/assets/app-store.jpg"
									// className="img-fluid"
									alt="app-store"
								/>
							</Link>
							<Link href="#" className="d-block">
								<Image
									width={130}
									height={45}
									src="/assets/google-play.jpg"
									// className="img-fluid"
									alt="google-play"
								/>
							</Link>
						</div>
						<div className="payments d-flex gap-2 mt-3">
							<Link href="#" className="d-block">
								<Image
									width={40}
									height={30}
									src="/assets/payments/knet.png"
									// className="img-fluid"
									alt="knet"
								/>
							</Link>
							<Link href="#" className="d-block">
								<Image
									width={40}
									height={30}
									src="/assets/payments/visa.png"
									// className="img-fluid"
									alt="visa"
								/>
							</Link>
							<Link href="#" className="d-block">
								<Image
									width={40}
									height={30}
									src="/assets/payments/master.png"
									// className="img-fluid"
									alt="master"
								/>
							</Link>
							<Link href="#" className="d-block">
								<Image
									width={40}
									height={30}
									src="/assets/payments/cod.png"
									// className="img-fluid"
									alt="cod"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
