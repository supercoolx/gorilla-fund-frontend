import React, { useState } from "react";
import Stepper from "components/util/Stepper";
import { StepInterface } from "libs/interfaces";
import { URL } from "libs/constants";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { MdOutlineSecurity } from "react-icons/md";
import KYCDetail from "components/KYC/KYCDetail";
import KYCID from "components/KYC/KYCID";
import KYCWallet from "components/KYC/KYCWallet";

const KYC = () => {
    const [ step, setStep ] = useState<number>(1);
    const data: StepInterface[] = [
        {
            title: "Personal Details",
            text: "Please provide your personal details."
        },
        {
            title: "ID Proof",
            text: "Set amount that you are expecting to raise for the project."
        },
        {
            title: "Wallet",
            text: "Sign in with your account or create an account if you don't have."
        }
    ];
    const stepComponent = [
        <KYCDetail />,
        <KYCID />,
        <KYCWallet />
    ];

    const onNext = () => step < data.length && setStep(step + 1);
    const onPrev = () => step > 1 && setStep(step - 1);
    const onComplete = () => void(0);

    return (
        <div className="flex flex-wrap bg-slate-50">
            <Stepper step={step} data={data} />
            <div className="flex flex-col flex-1 min-w-[360px] gap-16 px-2 py-12">
                <div className="pr-10 text-right">Already have an account? <Link to={URL.LOGIN} className="font-bold text-teal-700">Sign in</Link></div>
                <div className="flex justify-center text-sm">
                    <div className="flex flex-col items-center w-full max-w-[500px]">
                        { stepComponent[step -1] }
                        {
                            step === data.length ?
                            <button onClick={onComplete} className="w-full py-2 mt-6 text-white bg-teal-700">Confirm</button> :
                            <button onClick={onNext} className="w-full py-2 mt-6 text-white bg-teal-700">Next</button>
                        }
                        {
                            step === 1 ? 
                            <div className="flex items-center pt-5">
                                <MdOutlineSecurity className="mr-3 text-teal-700" size={30} />
                                <div className="flex-1 text-gray-500">Ape Gorilla gives you 100% insurance, so you can experience our platform without any risk of leaking your information. <span className="text-teal-700">Read more</span></div>
                            </div> :
                            <button onClick={onPrev} className="flex items-center justify-center w-full py-2 mt-3 bg-white">
                                <FiArrowLeft size={16} />
                                <div className="pl-1 font-bold">Go back</div>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KYC;