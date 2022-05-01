import React from "react";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";
import { FiCheck, FiArrowLeft } from "react-icons/fi";

const FundSuccess = () => {
    return (
        <div className="flex justify-center py-40 text-sm">
            <div className="flex flex-col items-center w-[350px]">
                <div className="flex items-center justify-center w-10 h-10 bg-teal-100 rounded-full">
                    <FiCheck className="text-teal-700" size={24} />
                </div>
                <div className="pt-6 text-2xl font-bold text-center">Your fundariser is ready. Let's start getting donations.</div>
                <div className="py-4 text-center text-gray-500">Turn-based grand strategy video games are beloved by many but are often time consuming and inconvenient to play multiplayer.</div>
                <Link to={URL.DASHBOARD} className="w-full py-2 font-bold text-center text-white bg-teal-700">Next</Link>
                <Link to={URL.HOME} className="flex items-center justify-center w-full py-2 mt-3">
                    <FiArrowLeft size={16} />
                    <div className="pl-1 font-bold">Back to home page</div>
                </Link>
            </div>
        </div>
    )
}

export default FundSuccess;