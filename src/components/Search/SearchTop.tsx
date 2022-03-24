import React from "react";
import imgGorilla from "assets/img/home/gorilla_suit.png";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";

const SearchTop = () => {
    return (
        <div className="flex flex-col items-end px-3 bg-slate-50 md:flex-row sm:px-10 md:px-20 lg:px-56">
            <div className="flex flex-col gap-8 pt-16 pr-4 lg:pr-6 md:pb-16">
                <div className="text-3xl font-bold xl:text-5xl">Discover fundraisers on GoFundMe</div>
                <div className="text-sm text-gray-500">Help others by donating to their fundraiser, or start one for someone you care about.</div>
                <div>
                    <Link to={URL.FUNDRAISE} className="px-6 py-3 font-bold text-white bg-teal-700">Start a GorillaFund</Link>
                </div>
            </div>
            <img src={imgGorilla} className="md:h-[410px] px-10 sm:px-32 md:px-0" alt="" />
        </div>
    )
}

export default SearchTop;