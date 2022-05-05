import React from "react";
import imgBanner from "assets/img/home/banner_big.png";
import { SOCIAL } from "libs/constants";

const HomeCommunity = () => {
    return (
        <div className="w-full bg-white">
            <div className="flex flex-col-reverse px-3 pt-24 md:flex-row max-w-[900px] mx-auto">
                <img src={imgBanner} className="md:h-[410px] px-10 sm:px-32 pt-10 md:pt-0 md:px-0" alt="" />
                <div className="flex flex-col items-start pl-4 md:pt-20 lg:pl-24">
                    <div className="text-2xl font-bold text-black">Community Benefits</div>
                    <div className="text-2xl font-bold text-teal-700">Ape Gorilla NFT Community Proposals</div>
                    <div className="pt-5 pb-8 text-sm text-gray-500">It's now a possibility to receive crypto donations, grants and support for your mission of helping others or making a positive impact in your community. Imagine the possibility of receiving financial support from the community and public, and receiving donations for the missions you want to accomplish with your passions.</div>
                    <a href={SOCIAL.WEBSITE} className="px-6 py-3 font-bold text-white transition-all duration-200 bg-teal-700 rounded-[4px] hover:-translate-y-1 hover:shadow-lg">More about us</a>
                </div>
            </div>
        </div>
    )
}

export default HomeCommunity;
