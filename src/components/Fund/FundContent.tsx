import React from "react";
import { Link } from "react-router-dom";
import { BsExclamationOctagon } from "react-icons/bs";
import { FUNDCATEGORY } from "libs/constants";
import { timeAgoFormat } from "libs/utils";

const FundContent = ({ photo, categoryId, date, story }) => {

    return (
        <div className="max-w-[500px] text-gray-500 text-sm">
            <img src={photo} alt="" />
            <div className="flex justify-between py-5">
                <div className="flex gap-2">
                    <Link to="#" className="px-3 text-teal-700 bg-teal-100 rounded-full">{FUNDCATEGORY[categoryId - 1]?.label}</Link>
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