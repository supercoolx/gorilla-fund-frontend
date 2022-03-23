import React, { useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import "assets/styles/ReactSelect.css";
import { FaRegUser, FaMapMarkerAlt } from "react-icons/fa";
import { ImSearch } from "react-icons/im";

const KYCDetail = () => {
    const [ country, setCountry ] = useState<any>('');
    const options = useMemo(() => countryList().getData(), []);

    const changeCountry = val => setCountry(val);

    return (
        <>
            <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full">
                <FaRegUser className="text-teal-700" size={20} />
            </div>
            <div className="pt-6 text-2xl font-bold">Basic Information</div>
            <div className="pt-3 text-center text-gray-500">Enter your details as they appear on your indentification document.</div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">What is your name</div>
                <div className="flex gap-3">
                    <input type="text" className="py-2 px-3 w-full focus:outline-none border-[1px] border-slate-200" placeholder="First name" />
                    <input type="text" className="py-2 px-3 w-full focus:outline-none border-[1px] border-slate-200" placeholder="Last name" />
                </div>
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Where do you live</div>
                <div className="flex gap-3">
                    <Select options={options} value={country} onChange={changeCountry} className="w-full" />
                    <div className="w-full">
                        <input type="tel" className="py-2 px-3 w-full focus:outline-none border-[1px] border-slate-200" placeholder="Phone number" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Zip code</div>
                <div className="flex gap-3">
                    <div className="flex bg-white w-full border-[1px] border-slate-200">
                        <div className="flex items-center justify-center px-3">
                            <ImSearch className="text-gray-500" size={14} />
                        </div>
                        <input type="text" className="py-2 pr-4 focus:outline-none" placeholder="Search for your zip code..." />
                    </div>
                    <div className="w-full">
                        <input type="text" className="py-2 px-3 w-full focus:outline-none border-[1px] border-slate-200" placeholder="City" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Residental address</div>
                <div className="flex bg-white w-full border-[1px] border-slate-200">
                    <div className="flex items-center justify-center px-3">
                        <FaMapMarkerAlt className="text-gray-500" size={14} />
                    </div>
                    <input type="text" className="py-2 pr-4 focus:outline-none" placeholder="Search for your zip code..." />
                </div>
            </div>
        </>
    )
}

export default KYCDetail;