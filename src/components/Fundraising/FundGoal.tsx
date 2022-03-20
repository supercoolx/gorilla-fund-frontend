import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";

const FundGoal = () => {
    const [goal, setGoal] = useState<number>(3000000);

    const handleChange = val => setGoal(val);

    return (
        <>
            <div className="pt-6 text-2xl font-bold">Set your fundraising goal</div>
            <div className="pt-3 text-center text-gray-500">Raise or lower your goal at any time. We recommend starting with a small, achievable goal and increasing it as you go.</div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">How much would you like to raise?</div>
                <CurrencyInput prefix="$ " defaultValue={goal} onValueChange={handleChange} placeholder="Please enter your goal" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" />
            </div>
            <div className="w-full p-3 mt-6 text-gray-500 bg-emerald-100">
                To receive money raised, please make sure the person withdrawing has:
                <li className="indent-2">At least one Ape Gorilla</li>
                <li className="indent-2">Legally authorized to run a business</li>
            </div>
        </>
    )
}

export default FundGoal;