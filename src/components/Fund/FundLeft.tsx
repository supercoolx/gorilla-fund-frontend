import React from "react";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";
import imgAvatar from "assets/img/home/avatar.png";
import Progress from "components/util/element/Progress";

const FundLeft = () => {
    return (
        <div className="flex flex-col flex-1 gap-8 p-5 min-w-[300px] text-sm bg-white">
            <div className="w-full">
                <div className="text-gray-500"><span className="text-lg font-bold text-teal-700">$527,260</span> pledged of US$ 2,500,000 goal</div>
                <div className="text-teal-700">9.4K donations</div>
                <Progress percent={50} className="mt-3 mb-8" />
                <Link to={URL.DONATE} className="inline-block w-full py-2 text-center text-white bg-teal-700">Donate now</Link>
            </div>
            <div className="flex flex-col gap-8">
                <div className="text-base font-bold">Top donations</div>
                <div className="flex gap-3">
                    <img src={imgAvatar} className="h-10 rounded-full" alt="" />
                    <div className="">
                        <div className="text-gray-500"><span className="font-bold text-black">Wade Warren</span> donated $5,400.00</div>
                        <div className="text-gray-500">30 minutes ago</div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <img src={imgAvatar} className="h-10 rounded-full" alt="" />
                    <div className="">
                        <div className="text-gray-500"><span className="font-bold text-black">Wade Warren</span> donated $5,400.00</div>
                        <div className="text-gray-500">30 minutes ago</div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <img src={imgAvatar} className="h-10 rounded-full" alt="" />
                    <div className="">
                        <div className="text-gray-500"><span className="font-bold text-black">Wade Warren</span> donated $5,400.00</div>
                        <div className="text-gray-500">30 minutes ago</div>
                    </div>
                </div>
                <button className="w-full py-2 text-gray-500 border-[1px]">See all donations</button>
            </div>
        </div>
    )
}

export default FundLeft;