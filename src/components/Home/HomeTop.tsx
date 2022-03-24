import React from "react";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";
import { FaRegPlayCircle } from "react-icons/fa";

const HomeTop = () => {
    return (
        <div className="flex flex-col md:flex-row bg-slate-50">
            <div className="md:w-[60%] py-10 md:py-20 xl:py-32 pl-3 sm:pl-10 md:pl-20 lg:pl-56 pr-3 sm:pr-10 xl:pr-20 flex flex-col gap-8">
                <div className="text-3xl font-bold xl:text-5xl">Trusted fundraising for all of life's moments</div>
                <div className="text-sm text-gray-500">We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support.</div>
                <div className="flex flex-wrap items-center gap-3">
                    <Link to={URL.FUNDRAISE} className="px-4 py-3 font-bold text-white bg-teal-700">Start a GorillaFund</Link>
                    <Link to="#" className="flex items-center gap-3 px-4">
                        <FaRegPlayCircle size={30} color="gray" />
                        <div className="text-gray-500">How it works?</div>
                    </Link>
                </div>
            </div>
            <div className="bg-[url('../../assets/img/home/e-sport.png')] md:mb-0 mb-10 bg-cover bg-center sm:mx-10 mx-3 md:mx-0 w-auto md:w-[40%] h-[300px] md:h-auto"></div>
        </div>
    )
}

export default HomeTop;