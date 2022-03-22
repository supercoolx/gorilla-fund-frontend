import React, { useState } from "react";

const FundStory = () => {
    
    return (
        <>
            <div className="pt-6 text-2xl font-bold">Create an account to save and continue</div>
            <div className="pt-3 text-center text-gray-500">Please fill in your information to proceed with creating a fundraising.</div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Headline</div>
                <input type="text" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter a headline" />
            </div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Description</div>
                <textarea className="w-full h-[150px] py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter a description..." />
            </div>
        </>
    )
}

export default FundStory;