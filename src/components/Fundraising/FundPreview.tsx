import React from "react";
import imgFund from "assets/img/home/fund_photo.png";

const FundPreview = () => {

    return (
        <>
            <div className="pt-6 text-2xl font-bold">Preview of your fundraiser</div>
            <div className="pt-3 text-center text-gray-500">Explain who you are and why you're fundraising.</div>
            <img src={imgFund} className="pt-5 w-full h-[180px] object-cover" alt="" />
            <div className="flex flex-col w-full px-3 py-5">
                <div className="font-bold">Hexarchy - Historical Deck Building Strategy Royale</div>
                <div className="pt-3 text-gray-500">An innovative historical 4x game. 1 to 10 players. One-hour games.</div>
                
            </div>
        </>
    )
}

export default FundPreview;