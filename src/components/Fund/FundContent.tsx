import React from "react";
import { BsExclamationOctagon } from "react-icons/bs";
import imgPhoto from "assets/img/home/fund_photo.png";
import imgGame from "assets/img/home/game_play.png";

const FundContent = () => {
    const story = "Turn-based grand strategy video games are beloved by many but are often time consuming and inconvenient to play multiplayer. We set out to make a battle royale style turn-based 4x game that meets the following criteria:\n\n - One-hour games\n - Up to 10 players online with simultaneous turns\n - Consequential decisions every turn -- no clicking through turns\n - Engaging and well-paced game loop that is accessible for non-hardcore 4x strategy gamers\n - Layered systems offering true strategic depth with difficult decisions even for the most experienced players\n\nWe believe we've cracked the code and come up with a game that crushes all 5 of those objectives. We've made a fun and innovative game that has already been enjoyed by thousands of players. Now we need some support to finish the job.";
    const challenge = "Hexarchy is already 100% playable, so the chances that you'll never have a playable game in front of you are close to 0% unless we both get hit by a bus the day after this campaign ends. Backers with instant access will have access to the latest stable build as soon as the Kickstarter campaign completes and backer surveys are processed. We have testers that play every day because they think it's fun. They aren't paid and aren't friends and family (well, not all of them).\n\nWe have maintained a playable, stable game for the past year while making progress on development. Because of this experience, we believe we have a realistic method for forecasting how long different features will take to implement.\n\nOf course, all software development has risks, especially when it comes to timelines. Things can and often do take longer than expected. We have decades of experience in software development projects, both large and small, but only a few years of experience in game development. We plan to lean on our experience shipping a game in January 2022, as well as our past year supporting an active player base in Hexarchy, while making substantial development progress.\n\nWe have an outstanding 2D illustrator on contract and have commissioned great demo tracks from two composers. We will likely need to contract with additional talented people to get this done. We're committed to finding the right fit with any employee or contractor before entering into an agreement with them.\n\nAll of our rewards are digital, so there is no risk of problems caused by materials or shipping.";
    return (
        <div className="max-w-[500px] text-gray-500 text-sm">
            <img src={imgPhoto} alt="" />
            <div className="flex justify-between py-5">
                <div className="flex gap-2">
                    <div className="px-3 text-teal-700 bg-teal-100 rounded-full">Business</div>
                    <div className="px-3 text-teal-700 bg-teal-100 rounded-full">Education</div>
                    <div className="">Created 3 days ago</div>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                    <BsExclamationOctagon />
                    Report fundraising
                </div>
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