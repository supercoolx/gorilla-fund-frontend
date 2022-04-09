import React, { useState } from "react";
import { Menu, MenuItem, MenuDivider } from "@szhsin/react-menu";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "libs/constants";
import { useAuth } from "contexts/AuthContext";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import logo from "assets/img/svg/logo.svg";
import { ImSearch } from "react-icons/im";

const NavAuth = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState<string>("");
    const onChangeKeyword = e => setKeyword(e.target.value);
    const onKeydownKeyword = e => {
        if(e.keyCode !== 13) return;
        alert('search');
    }
    const handleLogout = () => {
        logOut();
        navigate(URL.HOME);
    }

    return (
        <div className="w-full bg-white">
            <div className="flex flex-wrap items-center justify-between w-full h-16 px-3 max-w-[900px] mx-auto">
                <div className="flex gap-3">
                    <Link to={URL.HOME} className="flex items-center gap-3">
                        <img src={logo} className="w-7" alt="" />
                        <div className="hidden font-extrabold sm:block">Logoipsum</div>
                    </Link>
                    <div className="flex bg-white border-[1px] border-white border-l-slate-200">
                        <div className="flex items-center justify-center px-2">
                            <ImSearch className="text-gray-500" size={16} />
                        </div>
                        <input type="text" value={keyword} onChange={onChangeKeyword} onKeyDown={onKeydownKeyword} className="w-48 pr-4 text-sm focus:outline-none" placeholder="Search by name, category" />
                    </div>
                </div>
                <div className="">
                    <Menu menuButton={
                        <div className="flex items-center justify-end gap-3 cursor-pointer">
                            <div className="hidden xs:block">{user.name}</div>
                            <img src={user.avatar} className="rounded-full w-8 border-[1px] bg-teal-300" alt="" />
                        </div>
                    } align="end" transition>
                        <MenuItem><Link to={URL.DASHBOARD}>Dashboard</Link></MenuItem>
                        <MenuItem><Link to={URL.KYC}>KYC</Link></MenuItem>
                        <MenuDivider />
                        <MenuItem onClick={handleLogout}>Log out</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default NavAuth;