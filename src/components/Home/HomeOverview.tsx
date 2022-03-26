import React from "react";
import hand from "assets/img/svg/hand.svg";
import box from "assets/img/svg/box.svg";
import active from "assets/img/svg/active.svg";
import money from "assets/img/svg/money.svg";

const HomeOverview = () => {
    return (
        <div className="grid grid-cols-2 justify-between gap-3 px-3 py-8 text-white bg-teal-700 md:gap-0 md:py-16 lg:grid-cols-4 xl:px-56 sm:px-10">
            <div className="flex items-center flex-col sm:flex-row">
                <img src={hand} className="h-10" alt="" />
                <div className="flex flex-col items-center sm:items-start sm:pl-5">
                    <div className="text-3xl font-bold">1,000+</div>
                    <div className="text-teal-100">GorillaFunds Finished</div>
                </div>
            </div>
            <div className="flex items-center flex-col sm:flex-row">
                <img src={box} className="h-10" alt="" />
                <div className="flex flex-col items-center sm:items-start sm:pl-5">
                    <div className="text-3xl font-bold">$10M</div>
                    <div className="text-teal-100">Funds raised</div>
                </div>
            </div>
            <div className="flex items-center flex-col sm:flex-row">
                <img src={active} className="h-10" alt="" />
                <div className="flex flex-col items-center sm:items-start sm:pl-5">
                    <div className="text-3xl font-bold">250+</div>
                    <div className="text-teal-100">Active GorillaFunds</div>
                </div>
            </div>
            <div className="flex items-center flex-col sm:flex-row">
                <img src={money} className="h-10" alt="" />
                <div className="flex flex-col items-center sm:items-start sm:pl-5">
                    <div className="text-3xl font-bold">$60M</div>
                    <div className="text-teal-100">Goals in last Year</div>
                </div>
            </div>
        </div>
    )
}

export default HomeOverview;