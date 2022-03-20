import React, { useMemo, useState } from "react";
import Select from "react-select";
import { SelectOptionInterface } from "libs/interfaces";
import countryList from "react-select-country-list";
import "assets/styles/ReactSelect.css";
import { ImSearch } from "react-icons/im";

const FundPersonalDetail = () => {

    const countryOptions: SelectOptionInterface[] = useMemo(() => countryList().getData(), []);
    const [typeOptions] = useState<SelectOptionInterface[]>([
        {
            value: "1",
            label: "Education & Learning"
        }
    ]);
    const [country, setCountry] = useState<SelectOptionInterface>(countryOptions[0]);
    const [type, setType] = useState<SelectOptionInterface>(typeOptions[0]);
    const handleChangeCountry = val => setCountry(val);
    const handleChangeType = val => setType(val);

    return (
        <>
            <div className="pt-6 text-2xl font-bold">Let's start with the basics</div>
            <div className="pt-3 text-center text-gray-500">We're here to guide you through your fundraising journey.</div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">What is your name?</div>
                <div className="flex gap-3">
                    <input type="text" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="First name" />
                    <input type="text" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Last name" />
                </div>
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Where do you live?</div>
                <Select options={countryOptions} value={country} onChange={handleChangeCountry} />
                <div className="flex pt-3 bg-white">
                    <div className="flex items-center justify-center px-2 border-[1px] border-slate-200 border-r-0">
                        <ImSearch className="text-gray-500" size={18} />
                    </div>
                    <input type="text" className="w-full py-2 pr-3 focus:outline-none border-[1px] border-slate-200 border-l-0" placeholder="Search for your zip code..." />
                </div>
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">What are you fundarising for?</div>
                <Select options={typeOptions} value={type} onChange={handleChangeType} />
            </div>
        </>
    )
}

export default FundPersonalDetail;