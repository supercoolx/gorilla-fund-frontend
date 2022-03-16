import React from "react";
import iconLogo from "assets/img/svg/logo.svg";
import iconMetamask from "assets/img/svg/metamask.svg";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";

const Signup = () => {
    return (
        <div className="flex justify-center py-40 text-sm">
            <div className="flex flex-col items-center w-[350px]">
                <img src={iconLogo} className="w-8" alt="" />
                <div className="pt-6 text-2xl font-bold">Create an account</div>
                <div className="pt-3 text-gray-500">Welcome! You must be Ape Gorilla holder to sign up.</div>
                <div className="flex flex-col w-full pt-6">
                    <div className="pb-1 font-bold">Name*</div>
                    <input type="text" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter your name" />
                </div>
                <div className="flex flex-col w-full pt-6">
                    <div className="pb-1 font-bold">Email*</div>
                    <input type="email" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter your email" />
                </div>
                <div className="flex flex-col w-full py-6">
                    <div className="pb-1 font-bold">Password*</div>
                    <input type="password" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter your password" />
                    <div className="pt-2 text-gray-500">Must be at least 8 characters.</div>
                </div>
                <button className="w-full py-2 font-bold text-white bg-teal-700">Sign in</button>
                <button className="flex justify-center w-full py-2 mt-3 border-[1px] border-slate-200">
                    <img src={iconMetamask} alt="" />
                    <div className="pl-1 font-bold border-slate-200">Sign in with Metamsk</div>
                </button>
                <div className="pt-6 text-gray-500">
                    Already have an account?
                    <Link to={URL.LOGIN} className="pl-1 font-bold text-teal-700">Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;