import React, { useState } from "react";
import Logo from "assets/img/svg/logo.svg";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";
import { StepInterface } from "libs/interfaces";
import { FiCheck } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

const FundStep = ({step}: {step: number}) => {
    const [ data ] = useState<StepInterface[]>([
        {
            title: "Your details",
            text: "Please provide your personal details."
        },
        {
            title: "Set your fundraising goal",
            text: "Set amount that you are expecting to raise for the project."
        },
        {
            title: "Account details",
            text: "Sign in with your account or create an account if you don't have."
        },
        {
            title: "Fundraising setup",
            text: "Setup your Fundraising with all useful information."
        },
        {
            title: "Last step",
            text: "Setup your Fundraising with all useful information."
        }
    ]);

    return (
        <div className="flex flex-col gap-16 p-12 bg-white">
            <Link to={URL.HOME} className="flex items-center gap-2">
                <img src={Logo} className="w-7" alt="" />
                <div className="text-lg font-bold">Logoipsum</div>
            </Link>
            <div className="flex">
                <div className="relative w-[1px] h-full left-[17px] bg-gray-200"></div>
                <div className="relative flex flex-col gap-10">
                    {
                        data.map((item: StepInterface, key: number) => (
                            <div className="flex items-center gap-2 bg-white" key={key}>
                                {
                                    step > key + 1 && 
                                    <div className="flex items-center justify-center h-8 border-[1px] border-teal-700 w-[33px] rounded-full">
                                        <FiCheck className="text-teal-700" />
                                    </div>
                                }
                                {
                                    step === key + 1 &&
                                    <div className="flex items-center justify-center h-8 border-[1px] border-teal-700 w-[33px] rounded-full">
                                        <FaCircle className="text-teal-700" />
                                    </div>
                                }
                                {
                                    step < key + 1 &&
                                    <div className="flex items-center justify-center h-8 border-[1px] border-gray-200 w-[33px] rounded-full">
                                        <FaCircle className="text-gray-200" />
                                    </div>
                                }
                                <div className="flex flex-col gap-1">
                                    <div className="font-bold">{item.title}</div>
                                    <div className="text-sm">{item.text}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FundStep;