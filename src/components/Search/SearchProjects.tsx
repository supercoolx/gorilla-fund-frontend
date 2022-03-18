import React, { useState } from "react";
import { ProjectInterface } from "libs/interfaces";
import { ImFire, ImSearch } from "react-icons/im";
import imgEsport from "assets/img/home/e-sport.png";
import imgRobot from "assets/img/home/robot.png";
import imgStories from "assets/img/home/stories.png";

const SearchProjects = () => {
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

    const [ data ] = useState<ProjectInterface[]>([
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
        },
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
        },
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
        <div className="px-3 py-24 bg-slate-50 sm:px-10 md:px-20 lg:px-56">
            <div className="flex flex-wrap items-end justify-between gap-3">
                <div className="flex items-center text-2xl font-bold text-black">
                    <ImFire /> Top Rated Project
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
            <hr />
            <div className="flex flex-wrap items-center justify-between gap-5 py-10 text-sm">
                <div className="flex bg-white">
                    <div className="flex items-center justify-center px-4">
                        <ImSearch className="text-gray-500" size={18} />
                    </div>
                    <input type="text" className="py-2 pr-4 focus:outline-none" placeholder="Search by name, category" />
                </div>
                <div className="flex gap-3">
                    <div className="flex px-2 bg-white">
                        <div className="flex items-center justify-center text-gray-500">
                            Categories:
                        </div>
                        <select className="p-2 font-bold focus:outline-none" placeholder="Search">
                            <option>All</option>
                            <option>Not all</option>
                        </select>
                    </div>
                    <div className="flex px-2 bg-white">
                        <div className="flex items-center justify-center text-gray-500">
                            Sort by:
                        </div>
                        <select className="p-2 font-bold focus:outline-none" placeholder="Search">
                            <option>Most rated</option>
                            <option>Most recent</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="grid gap-6 py-10 sm:grid-cols-2 md:grid-cols-3">
                {
                    data.map((prop: ProjectInterface, key: number) => (
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
            <div className="flex justify-center">
                <button className="border-[1px] border-teal-700 text-teal-700 font-bold px-6 py-3 text-sm">Load more</button>
            </div>
        </div>
    )
}

export default SearchProjects;