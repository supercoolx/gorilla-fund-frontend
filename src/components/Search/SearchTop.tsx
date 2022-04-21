import React from "react";
import imgGorilla from "assets/img/home/gorilla_suit.png";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";

const SearchTop = () => {
    return (
        <div className="w-full bg-slate-50">
            <div className="flex flex-col items-center px-3 sm:flex-row max-w-[900px] mx-auto">
                <div className="flex flex-col gap-8 pt-20 sm:pt-0">
                    <div className="text-3xl font-bold xl:text-5xl">Discover fundraisers on GoFundMe</div>
                    <div className="text-sm text-gray-500">Help others by donating to their fundraiser, or start one for someone you care about.</div>
                    <div>
                        <Link to={URL.FUNDRAISE} className="px-6 py-3 font-bold text-white bg-teal-700 rounded-[4px]">Start a GorillaFund</Link>
                    </div>
                </div>
                <img src={imgGorilla} className="h-[410px]" alt="" />
            </div>
        </div>
    )
}

export default SearchTop;