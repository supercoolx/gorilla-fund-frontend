import React from "react";
import iconLogo from "assets/img/svg/logo.svg";
import iconMetamask from "assets/img/svg/metamask.svg";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";

const Login = () => {
    return (
        <div className="flex justify-center py-40 text-sm">
            <div className="flex flex-col items-center w-[350px]">
                <img src={iconLogo} className="w-8" alt="" />
                <div className="pt-6 text-2xl font-bold">Log in to your account</div>
                <div className="pt-3 text-gray-500">Welcome back! Please enter your details.</div>
                <div className="flex flex-col w-full pt-6">
                    <div className="pb-1 font-bold">Email</div>
                    <input type="email" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter your email" />
                </div>
                <div className="flex flex-col w-full pt-6">
                    <div className="pb-1 font-bold">Password</div>
                    <input type="password" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter your password" />
                </div>
                <div className="flex justify-between w-full py-5">
                    <div className="flex items-center">
                        <input type="checkbox" name="rememeber" id="remember" className="w-4 h-4 rounded-none cursor-pointer" />
                        <label htmlFor="remember" className="pl-2 font-bold cursor-pointer">Remember me</label>
                    </div>
                    <Link to="#" className="font-bold text-teal-700">Forget password</Link>
                </div>
                <button className="w-full py-2 font-bold text-white bg-teal-700">Sign in</button>
                <button className="flex justify-center w-full py-2 mt-3 border-[1px] border-slate-200">
                    <img src={iconMetamask} alt="" />
                    <div className="pl-1 font-bold border-slate-200">Sign in with Metamsk</div>
                </button>
                <div className="pt-6 text-gray-500">
                    Don't have an account?
                    <Link to={URL.SIGNUP} className="pl-1 font-bold text-teal-700">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;