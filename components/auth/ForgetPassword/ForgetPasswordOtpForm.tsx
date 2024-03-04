import React, { useState, useEffect, FormEvent, useRef } from "react";
import Link from "../../ui/link";
import { PAGES } from "@/constants/pages";
import FingerPrintSvg from "../FingerPrintSvg";
import PasswordDone from "../PasswordDone";
import { useRouter } from "next/navigation";
import Alert from "../Alert";

interface Props {
    email: string;
    tAuth: any;
    lang: string;
};

const ForgetPasswordOtpForm: React.FC<Props> = ({ tAuth, email, lang }: Props) => {
    const [counter, setCounter] = useState<number>(180);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

    const inputRefs = useRef<Array<HTMLInputElement | null>>(
        Array.from({ length: 6 }, () => null)
    );

    const handleInputKeyDown = (
        index: number,
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        const currentValue = e.currentTarget.value;
        if (e.key === "Backspace" && index > 0 && currentValue === "") {
            // If Backspace is pressed and the current input is empty, focus on the previous input
            const prevRef = inputRefs.current[index - 1];
            if (prevRef) {
                prevRef.focus();
            }
        } else if (e.key.length === 1 && index < inputRefs.current.length - 1 && currentValue !== "") {
            // If a digit is entered and it's not the last input, focus on the next input
            const nextRef = inputRefs.current[index + 1];
            if (nextRef) {
                nextRef.focus();
            }
        }
    };

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const otpValues = Array.from(Array(7).keys()).map((index) => formData.get(`otp-${index}`));
        const otp = otpValues.join('');

        const activationObj = {
            email: email,
            otp: otp,
        };

        let statusCode;
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/password/request-token/validate`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Accept-Language": `${lang}`
                    },
                    body: JSON.stringify(activationObj)
                }
            );

            let res = await response.json();
            statusCode = response.status;

            if (statusCode === 200) {
                // Your existing code for API call and verification
                if (typeof window !== "undefined") {
                    localStorage.setItem("reset_password", JSON.stringify(activationObj))
                    router.push(PAGES.FORGET_PASSWORD + '/new');
                }
                if (!res.data.success) {
                    setError(res.data.message)
                } else {
                    return {
                        status: true,
                        data: res.data
                    }
                }
            } else if (statusCode === 422) {
                setError(res.message)
            } else {
                setError('Network error you have error in your network')
            }
            setIsLoading(false);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleResendCode = async () => {
        let statusCode;
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/activate/resend`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(email),
                }
            );
            let res = await response.json();
            statusCode = response.status;

            if (statusCode === 200) {
                setCounter(180)
                if (!res.data.success) {
                    setError(res.data.message)
                } else {
                    return {
                        status: true,
                        data: res.data
                    }
                }
            } else if (statusCode === 422) {
                setError(res.message)
            } else {
                setError('Network error you have error in your network')
            }
            setIsLoading(false);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        let id: NodeJS.Timeout | null = null;
        if (counter > 0 && !intervalId) {
            id = setInterval(() => {
                setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
            }, 1000);
            setIntervalId(id);
        } else if ((counter === 0) && intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(null);
            }
        };
    }, [counter, intervalId]);

    return (
        <>
            <FingerPrintSvg />
            <div className="text-primary fz24 mb-3">{tAuth.activate_account}</div>
            <div className="fz14 text-black-50 mb-2rem">
                {tAuth.we_send_code}
                <span className="text-primary">{email}</span>
            </div>
            <form onSubmit={onSubmit}>
                <div className="reset-code-wrapper text-black">
                    <div className="row">
                        <Alert error={error} close={() => setError(null)} />
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="col-2">
                                <div className="input-wrapper">
                                    <input
                                        ref={(el) => (inputRefs.current[index] = el)}
                                        type="text"
                                        className="form-control mb24"
                                        maxLength={1}
                                        placeholder="-"
                                        name={`otp-${index}`}
                                        onKeyDown={(e) => handleInputKeyDown(index, e)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-12">
                        <div className="fz14 text-black-50 mt-2 mb-2rem">
                            {counter > 0 && (
                                <span>
                                    {tAuth.resend_in} {counter} {tAuth.seconds}
                                </span>
                            )}
                            {counter === 0 && (
                                <span>
                                    {tAuth.do_not_receive_code}{" "}
                                    <a
                                        href="#"
                                        className="text-primary fw-500"
                                        onClick={handleResendCode}
                                    >
                                        {tAuth.resend_code}
                                    </a>
                                </span>
                            )}
                        </div>
                        <div className="d-flex justify-content-between gap-2 align-items-center mt-4">
                            <button
                                type="submit"
                                className="btn btn-primary fz16 py-3 w-75 "
                                disabled={isLoading}
                            >
                                {isLoading ? <div className="spinner-border" style={{ width: "1.4rem", height: "1.4rem" }} role="status" /> : tAuth.continue}
                            </button>
                            <Link
                                href={PAGES.LOGIN}
                                className="text-primary hover-link fz14 fw-500 "
                            >
                                {tAuth.back_to_login}
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ForgetPasswordOtpForm;
