import React from "react";
import { Link } from "react-router-dom";
import { BsExclamationOctagon } from "react-icons/bs";
import { URL } from "libs/constants";
import { timeAgoFormat } from "libs/utils";
import { FUNDCATEGORY } from "libs/constants";

const FundContent = ({ photo, categoryId, date, story }) => {

    return (
        <div className="max-w-[500px] text-gray-500 text-sm">
            <img src={photo} alt="" />
            <div className="flex justify-between py-5">
                <div className="flex items-center gap-2">
                    <Link to={URL.SEARCH + '?category=' + categoryId} className="px-3 py-1 text-teal-700 transition-all duration-200 rounded-full bg-teal-700/20 hover:text-white hover:bg-teal-700">{FUNDCATEGORY[categoryId]?.label}</Link>
                    <div className="">{"Created " + timeAgoFormat(date)}</div>
                </div>
                <Link to="#" className="flex items-center gap-2 font-semibold">
                    <BsExclamationOctagon />
                    Report fundraising
                </Link>
            </div>
            <hr />
            <div className="py-5 text-lg font-bold text-black">Story</div>
            <div className="pb-5 whitespace-pre-wrap">{story}</div>
        </div>
    )
}

export default FundContent;