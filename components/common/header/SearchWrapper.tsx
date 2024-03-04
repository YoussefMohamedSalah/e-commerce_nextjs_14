import React from "react";
import Search from "./Search";
import { useTranslations } from "next-intl";

const SearchWrapper = () => {
  const t = useTranslations("Header");
  return (
    <Search
      className="header-search-form flex-grow-1"
      searchText={`${t("menu-search")}`}
    />
  );
};

export default SearchWrapper;
