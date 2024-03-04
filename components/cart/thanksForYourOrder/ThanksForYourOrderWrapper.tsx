import React from 'react'
import { useTranslations } from "next-intl";
import ThanksForYourOrder from './ThanksForYourOrder';


const ThanksForYourOrderWrapper = () => {
    const t = useTranslations("Thanks");
    const tThanks = {
        thanks_title: `${t("thanks-title")}`,
        details_sent: `${t("details-sent")}`,
        continue_shopping: `${t("continue-shopping")}`,
    };

    return <ThanksForYourOrder tThanks={tThanks} />
}

export default ThanksForYourOrderWrapper

