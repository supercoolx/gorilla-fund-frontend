import React from "react";
import { nFormatter } from "libs/utils";
import { useFund } from "contexts/FundContext";
import { FiArrowLeft } from "react-icons/fi";

const FundPreview = () => {
    const { setStep, name, amount, image, head, desc, submit } = useFund();
    const handleComplete = () => submit();
    const handlePrev = () => setStep(3);

    return (
        <>
            <div className="pt-6 text-2xl font-bold">Preview of your fundraiser</div>
            <div className="pt-3 text-center text-gray-500">Explain who you are and why you're fundraising.</div>
            <img src={image} className="pt-5 w-full h-[180px] object-cover" alt="" />
            <div className="flex flex-col w-full px-3 py-5">
                <div className="text-base font-bold">{name}</div>
                <div className="pt-3 text-gray-500">{head}</div>
                <hr className="mt-5" />
                <div className="pt-5 text-base font-bold">Story</div>
                <div className="pt-3 text-gray-500">{desc}</div>
                <hr className="mt-5" />
                <div className="flex justify-between pt-5">
                    <div className="text-base font-bold">$0.0M raised</div>
                    <div className="text-base text-gray-500">${nFormatter(amount, 1)} Goal</div>
                </div>
            </div>
            <button onClick={handleComplete} className="w-full py-2 mt-6 text-white bg-teal-700">Complete fundraiser</button>
            <button onClick={handlePrev} className="flex items-center justify-center w-full py-2 mt-3 bg-white">
                <FiArrowLeft size={16} />
                <div className="pl-1 font-bold">Go back</div>
            </button>
        </>
    )
}

export default FundPreview;