import React from "react";
import imgBanner from "assets/img/home/banner_big.png";
import { Link } from "react-router-dom";

const HomeCommunity = () => {
    return (
        <div className="flex px-56 pt-24 bg-white">
            <img src={imgBanner} className="h-[410px]" />
            <div className="pt-20 pl-24">
                <div className="text-2xl font-bold text-black">Ape Gorilla Club</div>
                <div className="text-2xl font-bold text-teal-700">Community Benefits</div>
                <div className="pt-5 pb-8 text-sm text-gray-500">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</div>
                <Link to="#" className="px-6 py-3 font-bold text-white bg-teal-700">More about us</Link>
            </div>
        </div>
    )
}

export default HomeCommunity;