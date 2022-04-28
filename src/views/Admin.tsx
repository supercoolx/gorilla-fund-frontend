import React, { Fragment } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { URL, APP_NAME } from "libs/constants";
import { AiOutlineFund } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import avatar from "assets/img/home/banner_big.png";
import logo from "assets/img/svg/gorilla.svg";

const Admin = () => {

    return (
        <Fragment>
            <div className="w-full text-white">
                <div className="flex flex-wrap items-center justify-between w-full h-16 px-3 mx-auto bg-neutral-700">
                    <Link to={URL.ADMIN} className="flex items-center gap-3">
                        <img src={logo} className="w-10 h-10 p-1 bg-white rounded-full" alt="" />
                        <div className="hidden text-lg font-bold sm:flex">{APP_NAME}</div>
                    </Link>
                    <div className="flex flex-row items-center gap-3">
                        <div>@admin</div>
                        <img src={avatar} className="w-8 h-8 bg-white border rounded-full" alt="" />
                    </div>
                </div>
                <div className="flex items-center w-full h-12 gap-10 px-8 border-b border-slate-300 bg-slate-200">
                    <NavLink to={URL.ADMIN_USERS} className={({ isActive }) => isActive ? "text-teal-700" : "text-slate-400"}><FiUsers size={25} /></NavLink>
                    <NavLink to={URL.ADMIN_FUNDS} className={({ isActive }) => isActive ? "text-teal-700" : "text-slate-400"}><AiOutlineFund size={25} /></NavLink>
                    <NavLink to={URL.ADMIN_DONATES} className={({ isActive }) => isActive ? "text-teal-700" : "text-slate-400"}><BiDonateHeart size={25} /></NavLink>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Admin;