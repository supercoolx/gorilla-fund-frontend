import React from "react";
import { MdOutlineCameraEnhance } from "react-icons/md";
import { FiPaperclip } from "react-icons/fi";
import iconPassport from "assets/img/svg/passport.svg";
import iconID from "assets/img/svg/id.svg";
import iconDrive from "assets/img/svg/drive.svg";

const KYCID = () => {
    return (
        <>
            <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full">
                <MdOutlineCameraEnhance className="text-teal-700" size={30} />
            </div>
            <div className="pt-6 text-2xl font-bold">Identification</div>
            <div className="pt-3 text-center text-gray-500">To verify corporate's identity, fill evidence of identification and upload a preferred form or forms of identification.</div>
            <div className="grid w-full grid-cols-3 gap-3 pt-6">
                <div className="flex items-center gap-3 border-[1px] px-2 py-4 border-teal-700">
                    <img src={iconPassport} alt="" />
                    <div className="font-semibold text-teal-700">Passport</div>
                </div>
                <div className="flex items-center gap-3 border-[1px] px-2 py-4 border-teal-700">
                    <img src={iconID} alt="" />
                    <div className="font-semibold text-teal-700">National ID</div>
                </div>
                <div className="flex items-center gap-3 border-[1px] px-2 py-4 border-teal-700">
                    <img src={iconDrive} alt="" />
                    <div className="font-semibold text-teal-700">Driving Licence</div>
                </div>
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Identify Number*</div>
                <input type="text" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Identity Number" />
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Date of Expiry*</div>
                <input type="date" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Identity Number" />
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Document upload*</div>
                <div className="relative">
                    <input type="file" accept="image/*" className="absolute w-full py-2 opacity-0"  />
                    <div className="border-[1px] bg-white flex items-center justify-center px-2">
                        <FiPaperclip size={20} className="rotate-45" />
                        <div className="w-full px-3 py-2 text-gray-500">Attach or drag and drop file</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Document upload*</div>
                <div className="relative">
                    <input type="file" accept="image/*" className="absolute w-full py-2 opacity-0"  />
                    <div className="border-[1px] bg-white flex items-center justify-center px-2">
                        <FiPaperclip size={20} className="rotate-45" />
                        <div className="w-full px-3 py-2 text-gray-500">Attach or drag and drop file</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KYCID;