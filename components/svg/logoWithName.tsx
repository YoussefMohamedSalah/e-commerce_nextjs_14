const LogoWithName: React.FC<React.SVGAttributes<{}>> = ({ ...rest }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        {...rest}
      >
        <g clipPath="url(#clip0_164_132050)">
          <path
            d="M29.0285 0H6.97149C3.12124 0 0 3.12124 0 6.97149V29.0285C0 32.8788 3.12124 36 6.97149 36H29.0285C32.8788 36 36 32.8788 36 29.0285V6.97149C36 3.12124 32.8788 0 29.0285 0Z"
            fill="#F4F4F4"
          />
          <path
            d="M23.6027 13.1691L18.7616 25.4597H21.684L22.3054 30.0436H25.2642L23.6027 13.1691ZM22.8903 5.9541H18.3382L16.1032 10.8134L23.2294 9.35905L22.8903 5.9541ZM14.2687 14.8306L7.29492 30.0436H12.3022L19.062 13.6562L14.2687 14.8306Z"
            fill="#264AEC"
          />
        </g>
        <defs>
          <clipPath id="clip0_164_132050">
            <rect width="36" height="36" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="text-white fz24 fw-bold">A2Z</span>
    </>
  );
};

export default LogoWithName;