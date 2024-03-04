import React from 'react';
import { useTranslations } from "next-intl";
import OrdersList from './OrdersList';

interface Props {
	data: any;
	name: string;
};

export default function Orders({ data, name }: Props) {
	const t = useTranslations("Account");

	const tOrder = {
		id: `${t("id")}`,
		name: `${t("name")}`,
		date: `${t("date")}`,
		price: `${t("price")}`,
		status: `${t("status")}`,
		action: `${t("action")}`,
		refund: `${t("refund")}`,
		cancel_order: `${t("cancel-order")}`,
		tDelete: `${t("delete")}`,
		invoice: `${t("invoice")}`,
		no_orders: `${t("no-orders")}`,
		delete_order_msg: `${t("delete-order-msg")}`,
		yes: `${t("yes")}`,
		no: `${t("no")}`,
		cancel_order_msg: `${t("cancel-order-msg")}`,
		invoice_no: `${t("invoice-no")}`,
		issued_on: `${t("issued-on")}`,
		total: `${t("total")}`,
		issued_num: `${t("issued-num")}`,
		payment_due: `${t("payment-due")}`,
	};

	return (
		<>
			{data ? (<>
				<div className="col-lg-9">
					<div className="profile-wrapper pt-4">
						<div className="fz20 fw-600 text-black mb-3">{t("welcome")} {name}</div>
						<div className="fz14 text-secondary mb-3">
							{t("manage-orders")}
						</div>
						<div className="fz16 fw-600 text-primary my-4">{t("your-orders")}
							{data?.data?.length > 0 && (
								<small className="bg-secondary rounded50 px-3 py-1 ms-3">{data?.data?.length}</small>
							)}
						</div>
						<OrdersList tOrder={tOrder} data={data} />
					</div>
				</div>
			</>) : (<>loading...</>)}
		</>
	)
}
