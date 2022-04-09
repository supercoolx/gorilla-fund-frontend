import React from "react";
import imgBanner from "assets/img/home/banner_big.png";
import { SOCIAL } from "libs/constants";

const HomeCommunity = () => {
    return (
        <div className="w-full bg-white">
            <div className="flex flex-col-reverse px-3 pt-24 md:flex-row max-w-[900px] mx-auto">
                <img src={imgBanner} className="md:h-[410px] px-10 sm:px-32 pt-10 md:pt-0 md:px-0" alt="" />
                <div className="flex flex-col items-start pl-4 md:pt-20 lg:pl-24">
                    <div className="text-2xl font-bold text-black">Ape Gorilla Club</div>
                    <div className="text-2xl font-bold text-teal-700">Community Benefits</div>
                    <div className="pt-5 pb-8 text-sm text-gray-500">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</div>
                    <a href={SOCIAL.WEBSITE} className="px-6 py-3 font-bold text-white transition-all duration-200 bg-teal-700 hover:-translate-y-1 hover:shadow-lg">More about us</a>
                </div>
            </div>
        </div>
    )
}

export default HomeCommunity;