import React from "react";
import { Link } from "react-router-dom";
import { BsExclamationOctagon } from "react-icons/bs";
import { FUNDCATEGORY } from "libs/constants";
import { timeAgoFormat } from "libs/utils";
import imgGame from "assets/img/home/game_play.png";

const FundContent = ({ photo, categoryId, date, story }) => {
    const challenge = "Hexarchy is already 100% playable, so the chances that you'll never have a playable game in front of you are close to 0% unless we both get hit by a bus the day after this campaign ends. Backers with instant access will have access to the latest stable build as soon as the Kickstarter campaign completes and backer surveys are processed. We have testers that play every day because they think it's fun. They aren't paid and aren't friends and family (well, not all of them).\n\nWe have maintained a playable, stable game for the past year while making progress on development. Because of this experience, we believe we have a realistic method for forecasting how long different features will take to implement.\n\nOf course, all software development has risks, especially when it comes to timelines. Things can and often do take longer than expected. We have decades of experience in software development projects, both large and small, but only a few years of experience in game development. We plan to lean on our experience shipping a game in January 2022, as well as our past year supporting an active player base in Hexarchy, while making substantial development progress.\n\nWe have an outstanding 2D illustrator on contract and have commissioned great demo tracks from two composers. We will likely need to contract with additional talented people to get this done. We're committed to finding the right fit with any employee or contractor before entering into an agreement with them.\n\nAll of our rewards are digital, so there is no risk of problems caused by materials or shipping.";

    return (
        <div className="max-w-[500px] text-gray-500 text-sm">
            <img src={photo} alt="" />
            <div className="flex justify-between py-5">
                <div className="flex gap-2">
                    <Link to="#" className="px-3 text-teal-700 bg-teal-100 rounded-full">{FUNDCATEGORY[categoryId - 1]?.label}</Link>
                    <div className="">{"Created " + timeAgoFormat(date)}</div>
                </div>
                <Link to="#" className="flex items-center gap-2 font-semibold">
                    <BsExclamationOctagon />
                    Report fundraising
                </Link>
            </div>
            <hr />
            <div className="py-5 text-lg font-bold text-black">Story</div>
            <div className="pb-5 whitespace-pre-wrap">{story}</div>
            <img src={imgGame} alt="" />
            <div className="py-5 text-lg font-bold text-black">Risk and Challanges</div>
            <div className="pb-5 whitespace-pre-wrap">{challenge}</div>
        </div>
    )
}

export default FundContent;