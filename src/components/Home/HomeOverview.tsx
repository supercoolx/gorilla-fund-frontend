import React, { useEffect, useState } from "react";
import FundAPI from "api/fund";
import hand from "assets/img/svg/hand.svg";
import box from "assets/img/svg/box.svg";
import active from "assets/img/svg/active.svg";
import money from "assets/img/svg/money.svg";
import toast from "react-hot-toast";

const HomeOverview = () => {
    const [ finish, setFinish ] = useState<number>(0);
    const [ raised, setRaised ] = useState<number>(0);
    const [ funds, setFunds ] = useState<number>(0);
    const [ goals, setGoals ] = useState<number>(0);

    useEffect(() => {
        FundAPI.overview()
        .then(res => {
            setFinish(res.data.finish || 0);
            setRaised(res.data.raised || 0);
            setFunds(res.data.funds || 0);
            setGoals(res.data.goals || 0);
        })
        .catch(err => toast.error(err.message));
    }, []);

    return (
        <div className="w-full py-8 text-white bg-teal-700 md:py-16">
            <div className="px-10 grid grid-cols-2 gap-3 md:gap-0 lg:grid-cols-4 mx-auto max-w-[900px]">
                <div className="flex flex-col items-center sm:flex-row">
                    <img src={hand} className="h-10" alt="" />
                    <div className="flex flex-col items-center sm:items-start sm:pl-5">
                        <div className="text-3xl font-bold">{finish}</div>
                        <div className="text-teal-100">Funds Finished</div>
                    </div>
                </div>
                <div className="flex flex-col items-center sm:flex-row">
                    <img src={box} className="h-10" alt="" />
                    <div className="flex flex-col items-center sm:items-start sm:pl-5">
                        <div className="text-3xl font-bold">{raised}</div>
                        <div className="text-teal-100">Funds raised</div>
                    </div>
                </div>
                <div className="flex flex-col items-center sm:flex-row">
                    <img src={active} className="h-10" alt="" />
                    <div className="flex flex-col items-center sm:items-start sm:pl-5">
                        <div className="text-3xl font-bold">{funds}</div>
                        <div className="text-teal-100">Active GorillaFunds</div>
                    </div>
                </div>
                <div className="flex flex-col items-center sm:flex-row">
                    <img src={money} className="h-10" alt="" />
                    <div className="flex flex-col items-center sm:items-start sm:pl-5">
                        <div className="text-3xl font-bold">{goals} <span className="text-base">ETH</span></div>
                        <div className="text-teal-100">Goals in last Year</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeOverview;