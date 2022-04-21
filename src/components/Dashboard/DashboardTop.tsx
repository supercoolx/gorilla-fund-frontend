import React from "react";
import { FaEthereum } from "react-icons/fa";

const DashboardTop = () => {
    return (
        <div className="w-full">
            <div className="bg-white">
                <div className="max-w-[900px] px-2 mx-auto font-bold py-4">My campaigns</div>
            </div>
            <div className="py-8 bg-slate-50">
                <div className="max-w-[900px] mx-auto">
                    <div className="grid grid-cols-3 mx-2 bg-white md:grid-cols-5 rounded-[4px] shadow-md">
                        <div className="p-4">
                            <div className="flex items-center gap-1">
                                <FaEthereum className="text-teal-700" />
                                <div className="text-xl font-bold">30,000</div>
                            </div>
                            <div className="pt-3 text-sm text-gray-500">Total raised</div>
                        </div>
                        <div className="p-4">
                            <div className="text-xl font-bold">30,000</div>
                            <div className="pt-3 text-sm text-gray-500">Raised donations</div>
                        </div>
                        <div className="p-4">
                            <div className="text-xl font-bold">3</div>
                            <div className="pt-3 text-sm text-gray-500">Active campaigns</div>
                        </div>
                        <div className="p-4">
                            <div className="text-xl font-bold">4</div>
                            <div className="pt-3 text-sm text-gray-500">Finished campaigns</div>
                        </div>
                        <div className="p-4">
                            <div className="text-xl font-bold">3</div>
                            <div className="pt-3 text-sm text-gray-500">Successful campaigns</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardTop;