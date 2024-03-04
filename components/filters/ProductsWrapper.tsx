import React from "react";
import { useTranslations } from "next-intl";
import FiltersWrapper from "./FiltersWrapper";
import { ResponseType } from "../../types/response";
import { UrlParams } from "@/app/[locale]/(site)/products/page";
import { Session } from "@/types/session";

interface Props {
  searchFilters: any;
  searchedData: ResponseType;
  searchParams: UrlParams;
  lang: string;
  session: Session | null;
};

export default function ProductsWrapper({
  searchFilters,
  searchedData,
  searchParams,
  lang,
  session
}: Props) {
  const t = useTranslations("Search");
  const tP = useTranslations("Common");

  const tSideFilters = {
    category: `${t("category")}`,
    brand: `${t("brand")}`,
    price: `${t("price")}`,
    apply: `${t("apply")}`,
    to: `${t("to")}`,
    see_all: `${t("see-all")}`
  };

  const tUpperFilters = {
    showing_the_results_for: `${t("showing-the-results-for")}`,
    sort_by: `${t("sort-by")}`,
    clear_all_filters: `${t("clear-all-filters")}`,
    new_arrivals: `${t("new-arrivals")}`,
    lowest_price: `${t("lowest-price")}`,
    highest_price: `${t("highest-price")}`,
    most_relevant: `${t("most-relevant")}`,
    see_all: `${t("see-all")}`
  };

  const tProduct = {
    add_to_cart: `${tP("add-to-cart")}`,
    not_available: `${tP("not-available")}`,
    all: `${tP("all")}`,
    show_cart: `${tP("show-cart")}`
  };

  return (
    <section className="search-page-wrapper mb100 mt--2rem ">
      <div className="">
        <FiltersWrapper
          tSideFilters={tSideFilters}
          tProduct={tProduct}
          tUpperFilters={tUpperFilters}
          lang={lang}
          session={session ? session : null}
          // ----
          searchParams={searchParams}
          searchedData={searchedData}
          searchFilters={searchFilters}
        />
      </div>
    </section>
  );
}
