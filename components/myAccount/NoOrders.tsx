import React from "react";

interface Props {
  title: string;
}

const NoOrdersMessage = ({ title }: Props) => {
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
        viewBox="0 0 512 512"
      >
        <rect
          width="416"
          height="288"
          x="48"
          y="144"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          rx="48"
          ry="48"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M411.36 144v-30A50 50 0 0 0 352 64.9L88.64 109.85A50 50 0 0 0 48 159v49"
        />
        <path
          fill="currentColor"
          d="M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
        />
      </svg>
      <p
        className="fz24 mb24"
        style={{ color: "rgb(136, 136, 136) !important" }}
      >
        {title}
      </p>
    </div>
  );
};

export default NoOrdersMessage;
