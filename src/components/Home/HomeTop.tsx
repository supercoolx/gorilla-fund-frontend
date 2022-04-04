import React from "react";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";
import { FaRegPlayCircle } from "react-icons/fa";

const HomeTop = () => {
    return (
        <div className="flex flex-col md:flex-row bg-slate-50">
            <div className="max-w-[450px] flex flex-col gap-8 flex-1 mx-auto my-4 px-3 md:m-auto">
                <div className="text-3xl font-bold xl:text-5xl">Trusted fundraising for all of life's moments</div>
                <div className="text-sm text-gray-500">We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support.</div>
                <div className="flex flex-wrap items-center gap-3">
                    <Link to={URL.FUNDRAISE} className="px-4 py-3 font-bold text-white bg-teal-700">Start a GorillaFund</Link>
                    <Link to="#" className="flex items-center gap-3 px-4 py-2 text-gray-500 transition-all duration-200 hover:text-teal-700">
                        <FaRegPlayCircle size={30} />
                        <div className="font-bold">How it works?</div>
                    </Link>
                </div>
            </div>
            <div className="bg-[url('../../assets/img/home/e-sport.png')] w-full mb-0 mt-4 md:mt-0 bg-cover bg-center md:w-[500px] h-[400px]"></div>
        </div>
    )
}

export default HomeTop;