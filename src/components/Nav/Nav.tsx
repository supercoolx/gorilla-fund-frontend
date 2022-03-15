import React from "react";
import logo from "assets/img/svg/logo.svg"
import { Link } from "react-router-dom";
import { URL } from "libs/constants";

const Nav = () => {
    return (
        <div className="flex flex-wrap items-center justify-between w-full h-16 px-3 bg-white lg:px-56 md:px-20 sm:px-10">
            <Link to={URL.HOME} className="flex items-center gap-3">
                <img src={logo} alt="" />
                <div className="hidden text-lg font-bold sm:flex">Logoipsum</div>
            </Link>
            <div className="flex flex-row items-center gap-3 xl:gap-8">
                <Link to={URL.HOME} className="text-gray-500">
                    <div>Discover</div>
                </Link>
                <Link to={URL.HOME} className="text-gray-500">
                    <div>How it works</div>
                </Link>
                <Link to={URL.HOME} className="px-5 py-1 text-teal-600 border-[1px] border-teal-600 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300">
                    <div>Get started</div>
                </Link>
            </div>
        </div>
    )
}

export default Nav;