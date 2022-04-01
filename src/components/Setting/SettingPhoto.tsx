import React from "react";
import imgPhoto from "assets/img/home/fund_photo.png";

const SettingPhoto = () => {
    return (
        <div className="w-full bg-slate-50">
            <div className="max-w-[900px] mx-auto px-3 py-5">
                <div className="flex flex-col items-center p-5 text-sm bg-white">
                    <img src={imgPhoto} alt="" />
                    <button className="px-10 py-3 mt-5 font-semibold text-white bg-teal-700">Change Photo</button>
                </div>
            </div>
        </div>
    )
}

export default SettingPhoto;