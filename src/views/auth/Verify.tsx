import React, { useEffect, useState } from "react";
import iconEmail from "assets/img/svg/email.svg";
import iconCheck from "assets/img/svg/check.svg";
import iconBack from "assets/img/svg/back.svg";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";

const Verify = ({ email }: { email: string }) => {
    const [ password, setPassword ] = useState<string[]>(['', '', '', '']);
    const [ isVerified, setIsVerified ] = useState<boolean>(false);

    const sendEmail = () => {}

    return (
        <div className="flex justify-center py-40 text-sm">
            { isVerified ? (
                <div className="flex flex-col items-center w-[350px]">
                    <div className="flex justify-center w-10 h-10 bg-teal-100 rounded-full">
                        <img src={iconCheck} className="w-6" alt="" />
                    </div>
                    <div className="pt-6 text-2xl font-bold">Email verified</div>
                    <div className="py-4 text-center text-gray-500">Your email has been successfully verified. Click below to log in automatically.</div>
                    <button className="w-full py-2 font-bold text-center text-white bg-teal-700">Get started</button>
                    <Link to={URL.LOGIN} className="flex justify-center w-full py-2 mt-3">
                        <img src={iconBack} alt="" />
                        <div className="pl-1 font-bold">Back to log in</div>
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col items-center w-[350px]">
                    <div className="flex justify-center w-10 h-10 bg-teal-100 rounded-full">
                        <img src={iconEmail} className="w-6" alt="" />
                    </div>
                    <div className="pt-6 text-2xl font-bold">Check your email</div>
                    <div className="pt-3 text-center text-gray-500">We sent a verification link to  <span className="font-bold">{email}</span></div>
                    <div className="grid w-full grid-cols-4 gap-4 py-6">
                        <input type="text" className="focus:outline-none focus:border-teal-700 capitalize h-20 border-[1px] border-slate-200 text-center text-3xl font-bold" />
                        <input type="text" className="focus:outline-none focus:border-teal-700 capitalize h-20 border-[1px] border-slate-200 text-center text-3xl font-bold" />
                        <input type="text" className="focus:outline-none focus:border-teal-700 capitalize h-20 border-[1px] border-slate-200 text-center text-3xl font-bold" />
                        <input type="text" className="focus:outline-none focus:border-teal-700 capitalize h-20 border-[1px] border-slate-200 text-center text-3xl font-bold" />
                    </div>
                    <button className="w-full py-2 font-bold text-white bg-teal-700">Get started</button>
                    <div className="pt-5 text-gray-500">Didn't receive the email? <span onClick={sendEmail} className="font-bold text-teal-700 cursor-pointer">Resend</span></div>
                    <Link to={URL.LOGIN} className="flex justify-center w-full py-2 mt-3">
                        <img src={iconBack} alt="" />
                        <div className="pl-1 font-bold">Back to log in</div>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Verify;