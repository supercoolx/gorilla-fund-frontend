import React, { useEffect, useState } from "react";
import FundAPI from "api/fund";
import { FaEthereum } from "react-icons/fa";

const DashboardTop = () => {
    const [ raised, setRaised ] = useState<number>(0);
    const [ donate, setDonate ] = useState<number>(0);
    const [ active, setActive ] = useState<number>(0);
    const [ finish, setFinish ] = useState<number>(0);
    const [ success, setSuccess ] = useState<number>(0);

    useEffect(() => {
        FundAPI.myOverview()
        .then(res => {
            setRaised(res.data.raised || 0);
            setDonate(res.data.donate || 0);
            setActive(res.data.active || 0);
            setFinish(res.data.finish || 0);
            setSuccess(res.data.success || 0);
        })
        .catch(err => alert(err.message));
    }, [])

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