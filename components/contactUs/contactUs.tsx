import React from "react";
import { useTranslations } from "next-intl";
import ContactForm from "./contactForm";

export const metadata = {
  title: "Contact Us",
  description: "Page Description"
};

interface Props {
  data: any;
}

export default function ContactUs({ data }: Props) {
  const t = useTranslations("ContactUs");

  const tContact = {
    name: `${t("name")}`,
    your_name: `${t("your-name")}`,
    email: `${t("email")}`,
    your_email: `${t("your-email")}`,
    subject: `${t("subject")}`,
    message_title: `${t("message-title")}`,
    message: `${t("message")}`,
    what_to_say: `${t("what-to-say")}`,
    submit: `${t("submit")}`
  };

  return (
    <section className="contact-us-page py-5 mt--2rem">
      <div className="">
        <div className="row">
          <div className="col-lg-5">
            <div className="fz20 fw-600 text-black mb-4">
              {t("title")}
            </div>
            <div className="fz24 fw-600 text-blue mb-4 text-capitalize">
              {t("we-would")} <br /> {t("love-to-hear")} <br />
              {t("from-you")}
            </div>
            <div className="fz14 text-black mb-4">
              {t("send-message")}
            </div>
            <div className="fz20 fw-600 text-black mb-4">Email PlaceHolder</div>
            <div className="fz14 text-black mb-4">
              {t("or-call")}
            </div>
            <div className="fz20 fw-600 text-black mb-4">
              {data.whatsapp_number}
            </div>
          </div>
          <ContactForm tContact={tContact} className={"col-lg-7"} />
        </div>
      </div>
    </section>
  );
}
