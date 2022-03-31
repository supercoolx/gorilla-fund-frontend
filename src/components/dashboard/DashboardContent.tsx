import React from "react";
import imgAvatar from "assets/img/home/avatar.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const DashboardContent = () => {
    return (
        <div className="flex flex-col text-sm text-gray-500 bg-white max-w-[876px] my-6 mx-auto">
            <div className="flex gap-5 px-6">
                <div className="py-3 font-bold text-black border-b-2 border-teal-700 cursor-pointer">Donations(389)</div>
                <div className="py-3 font-bold cursor-pointer">Comments</div>
                <div className="py-3 font-bold cursor-pointer">Update</div>
            </div>
            <hr />
            <div className="flex flex-col items-center gap-3 py-5">
                <div className="font-bold text-black">No updates yet!</div>
                <div className="text-xs">Keep your donors and followers up to date on your fundraisers!</div>
                <button className="px-3 py-2 font-bold text-black border-[1px]">Post an update</button>
            </div>
            {/* <div className="grid grid-cols-1 divide-y-[1px]">
                {
                    [1,1,1,1,1,1,1,1,1,1].map((val, index) => 
                        <div className="flex gap-3 px-6 py-4">
                            <img src={imgAvatar} className="w-10 h-10" alt="" />
                            <div className="flex-1 text-gray-500">
                                <div className="flex justify-between">
                                    <div className="font-bold"><span className="text-black">Wade Warren</span> donated 0.05 ETH</div>
                                    <div className="text-xs">30 minutes ago</div>
                                </div>
                                <div className="text-xs">Today's Fortune 500 list rolls over faster than ever. Today, only 12 percent of the companies that made the list in 1955 still remain. And 94 percent of the Fortune 500 list believes they'll change more in the next five years than in the past 50.</div>
                            </div>
                        </div>
                    )
                }
            </div>
            <hr />
            <div className="flex items-center justify-between px-6 py-4">
                <button className="flex items-center gap-3 text-black">
                    <FiArrowLeft />
                    <div className="font-bold">Previous</div>
                </button>
                <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-slate-300">1</div>
                    <div className="flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-slate-300">2</div>
                    <div className="flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-slate-300">3</div>
                    <div className="px-3">...</div>
                    <div className="flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-slate-300">8</div>
                    <div className="flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-slate-300">9</div>
                    <div className="flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-slate-300">10</div>
                </div>
                <button className="flex items-center gap-3 text-black">
                    <div className="font-bold">Next</div>
                    <FiArrowRight />
                </button>
            </div> */}
        </div>
    )
}

export default DashboardContent;