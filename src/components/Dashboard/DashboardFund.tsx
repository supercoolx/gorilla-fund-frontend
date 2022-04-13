import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FundAPI from "api/fund";
import { URL } from "libs/constants";
import { timeAgoFormat } from "libs/utils";

const DashboardFund = () => {
    const [ data, setData ] = useState<any[]>([]);

    useEffect(() => {
        FundAPI.getMyFunds().then(res => setData(res.data.funds)).catch(err => alert(err.message));
    }, []);

    return (
        <div className="w-full bg-slate-50">
            <div className="flex flex-col max-w-[900px] mx-auto px-2 pb-5">
                <div className="flex gap-3">
                    <div className="p-3 text-sm font-bold border-b-2 cursor-pointer border-b-teal-700">Active campaigns</div>
                    <div className="p-3 text-sm font-bold text-gray-500 cursor-pointer">Finished campaigns</div>
                </div>
                <hr className="mb-8" />
                <div className="grid gap-3 pb-8 sm:grid-cols-2 md:grid-cols-3">
                    {
                        data.map((item, key) => (
                            <div className="flex flex-col overflow-hidden text-sm bg-white rounded-md shadow" key={key}>
                                <img src={item.image} className="object-cover h-44 opacity-20" alt="" />
                                <div className="flex flex-col px-4 py-5">
                                    <img src={item.image} className="object-cover w-16 h-16 mb-2 -mt-12 rounded-md" alt="" />
                                    <div className="text-lg font-bold line-clamp-1">{item.headline}</div>
                                    <div className="pt-10 pb-3 text-gray-500">{"Campaign created " + timeAgoFormat(item.createdAt)}</div>
                                    <Link to={URL.MYFUND.replace(':uid', item.uid)} className="w-full p-2 font-bold text-center transition-all duration-200 bg-gray-200 rounded-md hover:bg-teal-700 hover:text-white">Manage campaign</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DashboardFund;