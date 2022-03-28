import React from "react";
import { useKYC } from "contexts/KycContext";
import { MdOutlineCameraEnhance } from "react-icons/md";
import { FiArrowLeft, FiPaperclip } from "react-icons/fi";
import iconID from "assets/img/svg/id.svg";
import iconIDGray from "assets/img/svg/id-gray.svg";
import iconDrive from "assets/img/svg/drive.svg";
import iconDriveGray from "assets/img/svg/drive-gray.svg";
import iconPassport from "assets/img/svg/passport.svg";
import iconPassportGray from "assets/img/svg/passport-gray.svg";

const KYCID = () => {
    var imgElement1, imgElement2;
    const imageType = ["image/png", "image/jpeg", "image/gif", "image/svg+xml"];
    const { setStep, idType, setType, number, setNumber, expire, setExpire, img1, setImage1, img2, setImage2 } = useKYC();

    const changeType = type => (() => setType(type));
    const changeNumber = e => setNumber(e.target.value);
    const changeExpire = e => setExpire(e.target.value);
    const changeImg1 = e => {
        let file = e.target.files[0];
        if(!(file && imageType.includes(file.type))) return;
        setImage1(file);
    }
    const changeImg2 = e => {
        let file = e.target.files[0];
        if(!(file && imageType.includes(file.type))) return;
        setImage2(file);
    }
    const inputImg1 = () => imgElement1.click();
    const inputImg2 = () => imgElement2.click();
    const onNext = () => {
        let isValid = true;
        if(!(0 < idType && idType < 3)) isValid = false;
        if(number.trim().length < 2) isValid = false;
        if(!expire) isValid = false;
        if(!img1) isValid = false;
        if(!img2) isValid = false;
        isValid && setStep(3);
    }
    const onPrev = () => setStep(1);

    return (
        <>
            <input ref={el => imgElement1 = el} onChange={changeImg1} type="file" accept="image/*" className="hidden" />
            <input ref={el => imgElement2 = el} onChange={changeImg2} type="file" accept="image/*" className="hidden" />
            <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full">
                <MdOutlineCameraEnhance className="text-teal-700" size={30} />
            </div>
            <div className="pt-6 text-2xl font-bold">Identification</div>
            <div className="pt-3 text-center text-gray-500">To verify corporate's identity, fill evidence of identification and upload a preferred form or forms of identification.</div>
            <div className="grid w-full grid-cols-3 gap-3 pt-6 text-gray-500">
                <div onClick={changeType(1)} className={`flex items-center gap-3 border-[1px] px-2 py-4 cursor-pointer ${idType === 1 && "border-teal-700"}`}>
                    <img src={idType === 1 ? iconPassport : iconPassportGray} alt="" />
                    <div className={`font-semibold ${idType === 1 && "text-teal-700"}`}>Passport</div>
                </div>
                <div onClick={changeType(2)} className={`flex items-center gap-3 border-[1px] px-2 py-4 cursor-pointer ${idType === 2 && "border-teal-700"}`}>
                    <img src={idType === 2 ? iconID : iconIDGray} alt="" />
                    <div className={`font-semibold ${idType === 2 && "text-teal-700"}`}>National ID</div>
                </div>
                <div onClick={changeType(3)} className={`flex items-center gap-3 border-[1px] px-2 py-4 cursor-pointer ${idType === 3 && "border-teal-700"}`}>
                    <img src={idType === 3 ? iconDrive : iconDriveGray} alt="" />
                    <div className={`font-semibold ${idType === 3 && "text-teal-700"}`}>Driving Licence</div>
                </div>
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Identify Number*</div>
                <input type="text" value={number} onChange={changeNumber} className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Identity Number" />
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Date of Expiry*</div>
                <input type="date" value={expire} onChange={changeExpire} className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Identity Number" />
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Document upload*</div>
                <div onClick={inputImg1} className="border-[1px] bg-white flex items-center justify-center px-2 cursor-pointer">
                    <FiPaperclip size={20} className="rotate-45" />
                    <div className="w-full px-3 py-2 text-gray-500">{img1 ? img1.name : "Attach or drag and drop file"}</div>
                </div>
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Document upload*</div>
                <div onClick={inputImg2} className="border-[1px] bg-white flex items-center justify-center px-2 cursor-pointer">
                    <FiPaperclip size={20} className="rotate-45" />
                    <div className="w-full px-3 py-2 text-gray-500">{img2 ? img2.name : "Attach or drag and drop file"}</div>
                </div>
            </div>
            <button onClick={onNext} className="w-full py-2 mt-6 text-white bg-teal-700">Next</button>
            <button onClick={onPrev} className="flex items-center justify-center w-full py-2 mt-3 bg-white">
                <FiArrowLeft size={16} />
                <div className="pl-1 font-bold">Go back</div>
            </button>
        </>
    )
}

export default KYCID;