import React from "react";
import logo from "assets/img/svg/logo.svg"
import { Link } from "react-router-dom";
import { URL } from "libs/constants";

const Nav = () => {
    return (
        <div className="flex items-center justify-between w-full h-16 px-56 bg-white">
            <Link to={URL.HOME} className="flex items-center gap-3">
                <img src={logo} />
                <div className="text-lg font-bold">Logoipsum</div>
            </Link>
            <div className="flex flex-row items-center gap-8">
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