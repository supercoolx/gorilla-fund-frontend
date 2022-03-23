import React, { useState } from "react";
import { ProjectInterface } from "libs/interfaces";
import { IoIosArrowForward } from "react-icons/io";
import imgEsport from "assets/img/home/e-sport.png";
import imgRobot from "assets/img/home/robot.png";
import imgStories from "assets/img/home/stories.png";

const FundProject = () => {
    const [ top ] = useState<ProjectInterface[]>([
        {
            img: imgEsport,
            title: "E-Sports Startup",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ...",
            donate: "Last donation is  a minute ago",
            goal: 30.0,
            raise: 14.2
        },
        {
            img: imgStories,
            title: "Fundraising School for IT",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ...",
            donate: "Last donation is 7 minute ago",
            goal: 15.0,
            raise: 7.5
        },
        {
            img: imgRobot,
            title: "Smart Robots",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ...",
            donate: "Last donation is 23 minute ago",
            goal: 5.0,
            raise: 3.4
        }
    ]);

    return (
        <div className="px-3 py-20">
            <div className="flex flex-wrap items-end justify-between gap-3">
                <div className="flex items-center text-2xl font-bold text-black">Featured Projects</div>
                <div className="flex items-center">
                    <div className="pr-3">See more</div>
                    <IoIosArrowForward />
                </div>
            </div>
            <div className="grid gap-6 py-10 sm:grid-cols-2 md:grid-cols-3">
                {
                    top.map((prop: ProjectInterface, key: number) => (
                        <div className="flex flex-col text-sm text-gray-500 bg-white" key={key}>
                            <img src={prop.img} className="object-cover h-44" alt="" />
                            <div className="flex flex-col px-4 py-5">
                                <div className="text-lg font-bold text-black">{prop.title}</div>
                                <div className="pt-2">{prop.content}</div>
                                <div className="pt-10 pb-3">{prop.donate}</div>
                                <div className="w-full h-1 bg-gray-50">
                                    <div className="h-1 bg-teal-700" style={{ maxWidth: '100%', width: `${prop.raise /  prop.goal * 100}%` }}></div>
                                </div>
                                <div className="flex justify-between pt-5">
                                    <div className="font-bold text-black">${prop.raise}M raised</div>
                                    <div>${prop.goal}M Goal</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FundProject;