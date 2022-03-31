import React from "react";
import imgPhoto from "assets/img/home/fund_photo.png";
import Progress from "components/util/element/Progress";
import { MdOutlineSettings } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";

const DashboardTop = () => {
    return (
        <div className="bg-white">
            <img src={imgPhoto} className="object-cover w-full opacity-30 h-44" alt="" />
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 max-w-[900px] px-3 mx-auto -translate-y-20 -mb-20">
                <img src={imgPhoto} className="object-cover h-40 w-72" alt="" />
                <div className="flex flex-col w-full gap-2 sm:flex-1">
                    <div className="text-sm text-gray-500">Fundraising progress</div>
                    <Progress percent={50} />
                    <div className="flex justify-between">
                        <div className="text-sm font-bold">15.00 ETH raised</div>
                        <div className="text-sm text-gray-500">50.00 ETH Goal</div>
                    </div>
                </div>
            </div>
            <hr className="my-6" />
            <div className="flex items-center flex-wrap gap-3 pb-3 justify-between max-w-[900px] mx-auto px-3">
                <div className="flex flex-col gap-2">
                    <div className="font-bold">Hexarchy - Historical Deck Building Strategy Royale</div>
                    <div className="text-sm text-gray-500">An innovative historical 4x game. 1 to 10 players. One-hour games.</div>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 border-[1px] py-2 px-3">
                        <MdOutlineSettings size={20} />
                        <div className="text-sm font-bold">Setting</div>
                    </button>
                    <button className="flex items-center gap-2 border-[1px] py-2 px-3">
                        <FiShare2 size={20} />
                        <div className="text-sm font-bold">Share fundraiser</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DashboardTop;