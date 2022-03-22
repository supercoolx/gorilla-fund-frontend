import React, { useState } from "react";
import Stepper from "components/util/Stepper";
import FundPreview from "components/Fundraising/FundPreview";
import { StepInterface } from "libs/interfaces";
import { URL } from "libs/constants";
import { Link } from "react-router-dom";
import StepBar from "components/util/StepBar";
import FundGoal from "components/Fundraising/FundGoal";
import { FiArrowLeft } from "react-icons/fi";
import Logo from "assets/img/svg/logo.svg";
import FundPhoto from "components/Fundraising/FundPhoto";
import FundStory from "components/Fundraising/FundStory";

const Fundraising = () => {
    const [ step, setStep ] = useState<number>(1);
    const [ data ] = useState<StepInterface[]>([
        {
            title: "Detail and Goal",
            text: "Please provide your personal details."
        },
        {
            title: "Cover photo",
            text: "Set amount that you are expecting to raise for the project."
        },
        {
            title: "Story",
            text: "Sign in with your account or create an account if you don't have."
        },
        {
            title: "Preview",
            text: "Setup your Fundraising with all useful information."
        }
    ]);
    const stepComponent = [
        <FundGoal />,
        <FundPhoto />,
        <FundStory />,
        <FundPreview />
    ]

    const onNext = () => step < data.length && setStep(step + 1);
    const onPrev = () => step > 1 && setStep(step - 1);

    return (
        <div className="flex flex-wrap bg-slate-50">
            <Stepper step={step} data={data} />
            <div className="flex flex-col flex-1 gap-16 px-2 py-12">
                <div className="pr-10 text-right">Already have an account? <Link to={URL.LOGIN} className="font-bold text-teal-700">Sign in</Link></div>
                <div className="flex justify-center text-sm">
                    <div className="flex flex-col items-center w-full max-w-[500px]">
                        <img src={Logo} className="w-8" alt="" />
                        { stepComponent[step - 1] }
                        {
                            step === data.length ?
                            <button onClick={onNext} className="w-full py-2 mt-6 text-white bg-teal-700">Complete fundraiser</button> :
                            <button className="w-full py-2 mt-6 text-white bg-teal-700">Next</button>
                        }
                        {
                            step === 1 ? <div className="pt-5 text-center text-gray-500">By continuing, you agree to the GorillaFund terms and privacy policy.</div> :
                            <button onClick={onPrev} className="flex items-center justify-center w-full py-2 mt-3 bg-white">
                                <FiArrowLeft size={16} />
                                <div className="pl-1 font-bold">Go back</div>
                            </button>
                        }
                        <StepBar step={step} length={data.length} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fundraising;