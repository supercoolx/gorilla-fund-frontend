import React, { useState } from "react";
import { FiCheck, FiArrowLeft, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";
import ReactInputVerificationCode from "react-input-verification-code";
import "assets/styles/ReactInputVerificationCode.css";

const Verify = ({ email }: { email: string }) => {
    const [ code, setCode ] = useState<string>("");
    const [ isVerified, setIsVerified ] = useState<boolean>(false);

    const handleClick = () => {
        if(code === "1234") {
            setIsVerified(true);
            sendEmail();
        }
    }
    const sendEmail = () => {
        alert('Email Sent');
    }

    return (
        <div className="flex justify-center py-40 text-sm">
            { isVerified ? (
                <div className="flex flex-col items-center w-[350px]">
                    <div className="flex items-center justify-center w-10 h-10 bg-teal-100 rounded-full">
                        <FiCheck className="text-teal-700" size={24} />
                    </div>
                    <div className="pt-6 text-2xl font-bold">Email verified</div>
                    <div className="py-4 text-center text-gray-500">Your email has been successfully verified. Click below to log in automatically.</div>
                    <button className="w-full py-2 font-bold text-center text-white bg-teal-700">Get started</button>
                    <Link to={URL.LOGIN} className="flex items-center justify-center w-full py-2 mt-3">
                        <FiArrowLeft size={16} />
                        <div className="pl-1 font-bold">Back to log in</div>
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col items-center w-[350px]">
                    <div className="flex items-center justify-center w-10 h-10 bg-teal-100 rounded-full">
                        <FiMail className="text-teal-700" size={24} />
                    </div>
                    <div className="pt-6 text-2xl font-bold">Check your email</div>
                    <div className="pt-3 text-center text-gray-500">We sent a verification link to  <span className="font-bold">{email}</span></div>
                    <div className="flex justify-center w-full py-6">
                        <ReactInputVerificationCode passwordMask="x" onChange={setCode} />
                    </div>
                    <button onClick={handleClick} className="w-full py-2 font-bold text-white bg-teal-700">Get started</button>
                    <div className="pt-5 text-gray-500">Didn't receive the email? <span onClick={sendEmail} className="font-bold text-teal-700 cursor-pointer">Resend</span></div>
                    <Link to={URL.LOGIN} className="flex items-center justify-center w-full py-2 mt-3">
                        <FiArrowLeft size={16} />
                        <div className="pl-1 font-bold">Back to log in</div>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Verify;