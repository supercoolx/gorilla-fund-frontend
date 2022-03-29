import React, { useMemo } from "react";
import Select from "react-select";
import countries from "libs/countries";
import { useKYC } from "contexts/KycContext";
import { ImSearch } from "react-icons/im";
import { MdOutlineSecurity } from "react-icons/md";
import { FaRegUser, FaMapMarkerAlt } from "react-icons/fa";
import "assets/styles/ReactSelect.css";

const KYCDetail = () => {
    const { setStep, firstName, setFirst, lastName, setLast, country, setCountry, phone, setPhone, zip, setZip, city, setCity, address, setAddress } = useKYC();
    const changeFirst = e => setFirst(e.target.value);
    const changeLast = e => setLast(e.target.value);
    const changePhone = e => setPhone(e.target.value);
    const changeZip = e => setZip(e.target.value);
    const changeCity = e => setCity(e.target.value);
    const changeAddress = e => setAddress(e.target.value);
    const onNext = () => {
        let isValid = true;
        if(firstName.trim().length < 3) isValid = false;
        if(lastName.trim().length < 3) isValid = false;
        if(!country) isValid = false;
        if(phone.trim().length < 8) isValid = false;
        if(zip.trim().length < 4) isValid = false;
        if(city.trim().length < 2) isValid = false;
        if(address.trim().length < 3) isValid = false;
        isValid && setStep(2);
    };

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
                    <input type="text" value={firstName} onChange={changeFirst} className="py-2 px-3 w-full focus:outline-none border-[1px] border-slate-200" placeholder="First name" />
                    <input type="text" value={lastName} onChange={changeLast} className="py-2 px-3 w-full focus:outline-none border-[1px] border-slate-200" placeholder="Last name" />
                </div>
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Where do you live</div>
                <div className="flex gap-3">
                    <Select options={countries} value={country} onChange={setCountry} className="w-full" />
                    <div className="flex w-full border-[1px] border-slate-200">
                        <div className="flex items-center h-full px-2 bg-white">+{country.code}</div>
                        <div className="w-[1px] my-2 bg-slate-200"></div>
                        <input type="text" value={phone} onChange={changePhone} className="w-full px-3 py-2 focus:outline-none" placeholder="Phone number" />
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
                        <input type="text" value={zip} onChange={changeZip} className="w-full py-2 pr-4 focus:outline-none" placeholder="Search for your zip code..." />
                    </div>
                    <div className="w-full">
                        <input type="text" value={city} onChange={changeCity} className="py-2 px-3 w-full focus:outline-none border-[1px] border-slate-200" placeholder="City" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Residental address</div>
                <div className="flex bg-white w-full border-[1px] border-slate-200">
                    <div className="flex items-center justify-center px-3">
                        <FaMapMarkerAlt className="text-gray-500" size={14} />
                    </div>
                    <input type="text" value={address} onChange={changeAddress} className="w-full py-2 pr-4 focus:outline-none" placeholder="Search for your zip code..." />
                </div>
            </div>
            <button onClick={onNext} className="w-full py-2 mt-6 text-white bg-teal-700">Next</button>
            <div className="flex items-center pt-5">
                <MdOutlineSecurity className="mr-3 text-teal-700" size={30} />
                <div className="flex-1 text-gray-500">Ape Gorilla gives you 100% insurance, so you can experience our platform without any risk of leaking your information. <span className="text-teal-700">Read more</span></div>
            </div>
        </>
    )
}

export default KYCDetail;