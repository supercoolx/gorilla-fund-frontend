import React from "react";
import Select from "react-select";
import toast from "react-hot-toast";
import CurrencyInput from "react-currency-input-field";
import { useFund } from "contexts/FundContext";
import { FUNDCATEGORY } from "libs/constants";
import "assets/styles/ReactSelect.css";
import WalletAddressInput from "components/util/WalletAddressInput";

const FundGoal = () => {
    const { setStep, name, setName, category, setCategory, amount, setAmount, address, setAddress } = useFund();

    const handleChangeName = e => setName(e.target.value);
    const handleChangeAmount = val => setAmount(val);
    const handleChangeAddress = val => setAddress(val);
    const handleNext = () => {
        let isValid = true;
        if(name.trim().length < 10) isValid = false;
        if(!amount) isValid = false;
        if(!category) isValid = false;
        if(!address) isValid = false;
        if(isValid) setStep(2);
        else toast.error("Please provide correct details.");
    }

    return (
        <>
            <div className="pt-6 text-2xl font-bold">Goal and Details about fundraiser</div>
            <div className="pt-3 text-center text-gray-500">We're here to guide you through your fundraising journey.</div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Name of Fundraising</div>
                <input type="text" value={name} onChange={handleChangeName} className="w-full rounded-[4px] py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter fundraising name" />
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">How much would you like to raise?</div>
                <CurrencyInput suffix=" ETH" allowDecimals={false} defaultValue={amount} onValueChange={handleChangeAmount} placeholder="Please enter your goal" className="w-full py-2 px-3 focus:outline-none rounded-[4px] border-[1px] border-slate-200" />
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">What are you fundarising for?</div>
                <Select options={FUNDCATEGORY} value={category} onChange={setCategory} />
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Ethereum Address*</div>
                <WalletAddressInput value={address} onChange={handleChangeAddress} />
            </div>
            <button onClick={handleNext} className="w-full rounded-[4px] py-2 mt-6 text-white bg-teal-700">Next</button>
            <div className="pt-5 text-center text-gray-500">By continuing, you agree to the GorillaFund terms and privacy policy.</div>
        </>
    )
}

export default FundGoal;