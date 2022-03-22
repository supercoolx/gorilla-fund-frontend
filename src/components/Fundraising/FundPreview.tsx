import React from "react";
import imgFund from "assets/img/home/fund_photo.png";

const FundPreview = () => {

    return (
        <>
            <div className="pt-6 text-2xl font-bold">Preview of your fundraiser</div>
            <div className="pt-3 text-center text-gray-500">Explain who you are and why you're fundraising.</div>
            <img src={imgFund} className="pt-5 w-full h-[180px] object-cover" alt="" />
            <div className="flex flex-col w-full px-3 py-5">
                <div className="text-base font-bold">Hexarchy - Historical Deck Building Strategy Royale</div>
                <div className="pt-3 text-gray-500">An innovative historical 4x game. 1 to 10 players. One-hour games.</div>
                <hr className="mt-5" />
                <div className="pt-5 text-base font-bold">Story</div>
                <div className="pt-3 text-gray-500">Turn-based grand strategy video games are beloved by many but are often time consuming and inconvenient to play multiplayer. We set out to make a battle royale style turn-based 4x game that meets the following criteria...</div>
                <hr className="mt-5" />
                <div className="flex justify-between pt-5">
                    <div className="text-base font-bold">$0.0M raised</div>
                    <div className="text-base text-gray-500">$30.0M Goal</div>
                </div>
            </div>
        </>
    )
}

export default FundPreview;