import React, { useState } from "react";

const FundAccount = () => {
    
    return (
        <>
            <div className="pt-6 text-2xl font-bold">Create an account to save and continue</div>
            <div className="pt-3 text-center text-gray-500">Please fill in your information to proceed with creating a fundraising.</div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Email</div>
                <input type="email" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Password</div>
                <input type="password" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter your password" />
            </div>
            <div className="w-full p-3 mt-6 text-gray-500 bg-emerald-100">
                Your password must have:
                <li className="indent-2">At least 12 characters</li>
                <li className="indent-2">1 uppercase letter</li>
                <li className="indent-2">1 lowercase letter</li>
                <li className="indent-2">1 number</li>
                <li className="indent-2">1 symbol</li>
            </div>
        </>
    )
}

export default FundAccount;