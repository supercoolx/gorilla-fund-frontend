import React, { useMemo } from "react";
import { FaEthereum } from "react-icons/fa";

const DashboardTop = ({ funds }) => {
    const { raised, donate, active, finish, success } = useMemo(() => {
        const overview = {
            raised: 0,
            donate: 0,
            active: 0,
            finish: 0,
            success: 0
        }
        funds?.forEach(fund => {
            let raised = fund.donates.reduce((sum, donate) => sum + donate.ethAmount, 0);
            overview.raised += raised;
            overview.donate += fund.donates.length;
            if(raised > fund.amount) overview.finish ++;
            else overview.active ++;
        })
        return overview;
    }, [funds]);

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
                                <div className="text-xl font-bold">{raised.toLocaleString('en')}</div>
                            </div>
                            <div className="pt-3 text-sm text-gray-500">Total raised</div>
                        </div>
                        <div className="p-4">
                            <div className="text-xl font-bold">{donate.toLocaleString('en')}</div>
                            <div className="pt-3 text-sm text-gray-500">Raised donations</div>
                        </div>
                        <div className="p-4">
                            <div className="text-xl font-bold">{active.toLocaleString('en')}</div>
                            <div className="pt-3 text-sm text-gray-500">Active campaigns</div>
                        </div>
                        <div className="p-4">
                            <div className="text-xl font-bold">{finish.toLocaleString('en')}</div>
                            <div className="pt-3 text-sm text-gray-500">Finished campaigns</div>
                        </div>
                        <div className="p-4">
                            <div className="text-xl font-bold">{success.toLocaleString('en')}</div>
                            <div className="pt-3 text-sm text-gray-500">Successful campaigns</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardTop;