import React from "react";
import hand from "assets/img/svg/hand.svg";
import box from "assets/img/svg/box.svg";
import active from "assets/img/svg/active.svg";
import money from "assets/img/svg/money.svg";

const HomeOverview = () => {
    return (
        <div className="flex justify-between px-56 py-16 text-white bg-teal-700">
            <div className="flex items-center">
                <img src={hand} className="h-10" alt="" />
                <div className="flex flex-col pl-5">
                    <div className="text-3xl font-bold">1,000+</div>
                    <div className="text-teal-100">GorillaFunds Finished</div>
                </div>
            </div>
            <div className="flex items-center">
                <img src={box} className="h-10" alt="" />
                <div className="flex flex-col pl-5">
                    <div className="text-3xl font-bold">$10M</div>
                    <div className="text-teal-100">Funds raised</div>
                </div>
            </div>
            <div className="flex items-center">
                <img src={active} className="h-10" alt="" />
                <div className="flex flex-col pl-5">
                    <div className="text-3xl font-bold">250+</div>
                    <div className="text-teal-100">Active GorillaFunds</div>
                </div>
            </div>
            <div className="flex items-center">
                <img src={money} className="h-10" alt="" />
                <div className="flex flex-col pl-5">
                    <div className="text-3xl font-bold">$60M</div>
                    <div className="text-teal-100">Goals in last Year</div>
                </div>
            </div>
        </div>
    )
}

export default HomeOverview;