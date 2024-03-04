const CheckDoneIcon: React.FC<React.SVGAttributes<{}>> = ({ ...rest }) => {
  return (
    <svg
      className="mb-2rem"
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4351 24.2884L25.5221 15.2014C25.9131 14.8104 25.9131 14.1784 25.5221 13.7874C25.1321 13.3964 24.4991 13.3964 24.1081 13.7874L15.7281 22.1674L11.8921 18.3314C11.5011 17.9404 10.8681 17.9404 10.4771 18.3314C10.0871 18.7224 10.0871 19.3544 10.4771 19.7454L15.0211 24.2884C15.2161 24.4834 15.4721 24.5814 15.7281 24.5814C15.9841 24.5814 16.2401 24.4834 16.4351 24.2884ZM18.0321 0.400391C8.23206 0.400391 0.289062 8.34539 0.289062 18.1434C0.289062 27.9434 8.23206 35.8874 18.0321 35.8874C27.8311 35.8874 35.7751 27.9434 35.7751 18.1434C35.7751 8.34539 27.8311 0.400391 18.0321 0.400391ZM18.0321 2.40039C26.7121 2.40039 33.7751 9.46339 33.7751 18.1434C33.7751 26.8244 26.7121 33.8874 18.0321 33.8874C9.35106 33.8874 2.28906 26.8244 2.28906 18.1434C2.28906 9.46339 9.35106 2.40039 18.0321 2.40039Z"
        fill="#24A148"
      />
    </svg>
  );
};

export default CheckDoneIcon;
