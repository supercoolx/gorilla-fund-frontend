import React from "react";
import { useAuth } from "contexts/AuthContext";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";
import logo from "assets/img/svg/logo.svg"

const Nav = () => {
    const { user } = useAuth();

    return (
        <div className="w-full bg-white">
            <div className="flex flex-wrap items-center justify-between w-full h-16 px-3 max-w-[900px] mx-auto">
                <Link to={URL.HOME} className="flex items-center gap-3">
                    <img src={logo} className="w-7" alt="" />
                    <div className="hidden font-extrabold sm:flex">Logoipsum</div>
                </Link>
                {
                    user.email ?
                    <Link to={URL.DASHBOARD} className="flex items-center justify-end gap-3 cursor-pointer">
                        <div>{user.name}</div>
                        <img src={user.avatar} className="rounded-full w-8 border-[1px] bg-teal-300" alt="" />
                    </Link> :
                    <div className="flex flex-row items-center gap-3 xl:gap-8">
                        <Link to={URL.SEARCH} className="text-gray-500">
                            <div>Discover</div>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <div>How it works</div>
                        </Link>
                        <Link to={URL.LOGIN} className="px-5 py-1 text-teal-600 border-[1px] border-teal-600 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300">
                            <div>Get started</div>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Nav;