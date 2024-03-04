import React from "react";

interface Props {
  title: string;
}

const NoFavoriteProductsMessage = ({ title }: Props) => {
  return (
    <div
      className="text-center border-1 border-dashd rounded-4 mb-4"
      style={{
        paddingTop: "40px",
        paddingBottom: "40px",
        borderStyle: "dashed",
        color: "rgb(136, 136, 136)"
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        className="icon mb-3"
        width="65px"
        height="65px"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M178 34c-21 0-39.26 9.47-50 25.34C117.26 43.47 99 34 78 34a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.68 334.68 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.68 334.68 0 0 0 53.06-37C219.8 153.59 238 123.2 238 94a60.07 60.07 0 0 0-60-60m-50 175.11C111.59 199.64 30 149.72 30 94a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 56.83 157.72 46 178 46a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11"
        />
      </svg>
      <p
        className="fz24 mb24"
        style={{ color: "rgb(136, 136, 136)!important" }}
      >
        {title}
      </p>
    </div>
  );
};

export default NoFavoriteProductsMessage;
