import React from 'react';

interface Props {
    error: string | null;
    close: () => void;
};

const Alert = ({ error, close }: Props) => {
    return (
        <>
            {error && (
                <div className="alert alert-danger">
                    <svg
                        onClick={close}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="icon"
                        width="20px"
                        height="20px"
                        viewBox="0 0 48 48"
                        style={{ color: 'white', margin: '0px 10px', cursor: "pointer" }}
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="4"
                            d="m8 8l32 32M8 40L40 8"
                        ></path>
                    </svg>
                    <span className="ms-md-4">
                        {error}
                    </span>
                </div>
            )}
        </>
    );
};

export default Alert;
