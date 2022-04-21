import React from "react";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";
import imgAvatar from "assets/img/home/avatar.png";
import Progress from "components/util/Progress";
import { FaEthereum } from "react-icons/fa";

const FundLeft = ({ uid, donate, goal }) => {
    return (
        <div className="flex flex-col flex-1 gap-8 p-5 min-w-[300px] text-sm bg-white">
            <div className="w-full">
                <div className="flex items-center">
                    <FaEthereum className="text-teal-700" size={20} />
                    <div className="text-gray-500">
                        <span className="text-lg font-bold text-teal-700">
                            {donate?.toLocaleString('en')}
                        </span> pledged of {goal?.toLocaleString('en')} ETH goal
                    </div>
                </div>
                <div className="text-teal-700">9.4K donations</div>
                <Progress percent={50} className="mt-3 mb-8" />
                <Link to={URL.DONATE.replace(':uid', uid)} className="inline-block w-full py-2 text-center text-white bg-teal-700">Donate now</Link>
            </div>
            <div className="flex flex-col gap-8">
                <div className="text-base font-bold">Top donations</div>
                <div className="flex gap-3">
                    <img src={imgAvatar} className="h-10 rounded-full" alt="" />
                    <div className="">
                        <div className="text-gray-500"><span className="font-bold text-black">Wade Warren</span> donated 5.4 ETH</div>
                        <div className="text-gray-500">30 minutes ago</div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <img src={imgAvatar} className="h-10 rounded-full" alt="" />
                    <div className="">
                        <div className="text-gray-500"><span className="font-bold text-black">Wade Warren</span> donated 5.4 ETH</div>
                        <div className="text-gray-500">30 minutes ago</div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <img src={imgAvatar} className="h-10 rounded-full" alt="" />
                    <div className="">
                        <div className="text-gray-500"><span className="font-bold text-black">Wade Warren</span> donated 5.4 ETH</div>
                        <div className="text-gray-500">30 minutes ago</div>
                    </div>
                </div>
                <button className="w-full transition-all duration-200 py-2 text-gray-500 border-[1px] hover:border-teal-700 hover:bg-teal-700 hover:text-white">See all donations</button>
            </div>
        </div>
    )
}

export default FundLeft;