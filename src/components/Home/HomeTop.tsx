import React from "react";
import esport from "assets/img/home/e-sport.png";
import { Link } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";

const HomeTop = () => {
    return (
        <div className="flex bg-slate-50">
            <div className="w-[60%] py-32 pl-52 pr-20 flex flex-col gap-8">
                <div className="text-5xl font-bold">Trusted fundraising for all of life's moments</div>
                <div className="text-sm text-gray-500">We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support.</div>
                <div className="flex items-center gap-10">
                    <Link to="#" className="px-5 py-3 font-bold text-white bg-teal-700">Start a GorillaFund</Link>
                    <Link to="#" className="flex items-center gap-3">
                        <FaRegPlayCircle size={30} color="gray" />
                        <div className="text-gray-500">How it works?</div>
                    </Link>
                </div>
            </div>
            <div className="bg-[url('../../assets/img/home/e-sport.png')] bg-cover bg-center w-[40%]"></div>
        </div>
    )
}

export default HomeTop;