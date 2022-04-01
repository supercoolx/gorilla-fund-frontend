import React, { useEffect, useState } from "react";
import SettingOverview from "components/Setting/SettingOverview";
import SettingPhoto from "components/Setting/SettingPhoto";
import SettingStory from "components/Setting/SettingStory";
import SettingNotification from "components/Setting/SettingNotification";
import imgPhoto from "assets/img/home/fund_photo.png";
import { FiCheck, FiArrowLeft } from "react-icons/fi";

const SettingPage = () => {
    const [ index, setIndex ] = useState<number>(1);
    const [ content, setContent ] = useState<any>();
    const changeContent = i => (() => setIndex(i));

    useEffect(() => {
        index === 1 && setContent(<SettingOverview />);
        index === 2 && setContent(<SettingPhoto />);
        index === 3 && setContent(<SettingStory />);
        index === 4 && setContent(<SettingNotification />);
    }, [index])
    
    return (
        <div className="bg-white">
            <div className="bg-center bg-image" style={{backgroundImage: `url(${imgPhoto})`}}>
                <div className="w-full bg-white bg-opacity-70">
                    <div className="flex gap-2 items-center py-6 max-w-[900px] mx-auto px-3 text-gray-800">
                        <FiArrowLeft size={16} />
                        <div className="text-sm font-semibold opacity-100">Back to manage</div>
                    </div>
                </div>
            </div>
            <div className="max-w-[900px] mx-auto px-3 flex flex-wrap justify-between items-end pt-3">
                <div className="pr-5">
                    <div className="text-lg font-bold text-black">Edit campaign</div>
                    <div className="text-sm text-gray-500">Hexarchy - Historical Deck Building Strategy Royale</div>
                </div>
                <button className="flex items-center gap-2 px-3 py-2 mt-3 text-white bg-teal-700">
                    <FiCheck />
                    <div className="text-sm font-semibold">Save changes</div>
                </button>
            </div>
            <div className="flex gap-5 mt-10 max-w-[900px] mx-auto px-3">
                <div onClick={changeContent(1)} className={`py-3 text-sm font-semibold${index === 1 ? " border-b-teal-700 border-b-2" : " cursor-pointer text-gray-500"}`}>Overview</div>
                <div onClick={changeContent(2)} className={`py-3 text-sm font-semibold${index === 2 ? " border-b-teal-700 border-b-2" : " cursor-pointer text-gray-500"}`}>Photo</div>
                <div onClick={changeContent(3)} className={`py-3 text-sm font-semibold${index === 3 ? " border-b-teal-700 border-b-2" : " cursor-pointer text-gray-500"}`}>Story</div>
                <div onClick={changeContent(4)} className={`py-3 text-sm font-semibold${index === 4 ? " border-b-teal-700 border-b-2" : " cursor-pointer text-gray-500"}`}>Notifications</div>
            </div>
            {content}
        </div>
    )
}

export default SettingPage;