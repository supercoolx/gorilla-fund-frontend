import React, { useState } from "react";
import Select from "react-select";
import { SelectOptionInterface } from "libs/interfaces";
import CurrencyInput from "react-currency-input-field";
import "assets/styles/ReactSelect.css";

const FundGoal = () => {
    const [ name, setName ] = useState<string>("");
    const [ typeOptions ] = useState<SelectOptionInterface[]>([
        {
            value: "1",
            label: "Education & Learning"
        }
    ]);
    const [ goal, setGoal] = useState<number>(3000000);
    const [ address, setAddress ] = useState<string>("");
    
    const [ type, setType ] = useState<SelectOptionInterface>(typeOptions[0]);

    const handleChangeName = e => setName(e.target.value);
    const handleChangeGoal = val => setGoal(val);
    const handleChangeType = val => setType(val);
    const handleChangeAddress = e => setAddress(e.target.value);

    return (
        <>
            <div className="pt-6 text-2xl font-bold">Goal and Details about fundraiser</div>
            <div className="pt-3 text-center text-gray-500">We're here to guide you through your fundraising journey.</div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Name of Fundraising</div>
                <input type="text" value={name} onChange={handleChangeName} className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter fundraising name" />
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">How much would you like to raise?</div>
                <CurrencyInput prefix="$ " defaultValue={goal} onValueChange={handleChangeGoal} placeholder="Please enter your goal" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" />
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">What are you fundarising for?</div>
                <Select options={typeOptions} value={type} onChange={handleChangeType} />
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Ethereum Address*</div>
                <input type="text" value={address} onChange={handleChangeAddress} className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter your wallet address" />
            </div>
        </>
    )
}

export default FundGoal;