import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";
import { ProjectInterface } from "libs/interfaces";
import { ImFire } from "react-icons/im";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import imgEsport from "assets/img/home/e-sport.png";
import imgRobot from "assets/img/home/robot.png";
import imgStories from "assets/img/home/stories.png";
import imgSupport from "assets/img/home/support.png";
import Progress from "components/util/element/Progress";

const HomeProjects = () => {
    const [ data ] = useState<ProjectInterface[]>([
        {
            uid: "uid",
            img: imgEsport,
            title: "E-Sports Startup",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ...",
            donate: "Last donation is  a minute ago",
            goal: 30.0,
            raise: 14.2,
        },
        {
            uid: "uid",
            img: imgStories,
            title: "Fundraising School for IT",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ...",
            donate: "Last donation is 7 minute ago",
            goal: 15.0,
            raise: 7.5,
        },
        {
            uid: "uid",
            img: imgRobot,
            title: "Smart Robots",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ...",
            donate: "Last donation is 23 minute ago",
            goal: 5.0,
            raise: 3.4,
        },
        {
            uid: "uid",
            img: imgSupport,
            title: "Support Ukraine",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ...",
            donate: "Last donation is 23 minute ago",
            goal: 2.7,
            raise: 3.5,
        },
        {
            uid: "uid",
            img: imgRobot,
            title: "Smart Robots",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ...",
            donate: "Last donation is 23 minute ago",
            goal: 5.0,
            raise: 3.4,
        },
        {
            uid: "uid",
            img: imgRobot,
            title: "Smart Robots",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ...",
            donate: "Last donation is 23 minute ago",
            goal: 5.0,
            raise: 3.4,
        },
        {
            uid: "uid",
            img: imgRobot,
            title: "Smart Robots",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ...",
            donate: "Last donation is 23 minute ago",
            goal: 5.0,
            raise: 3.4,
        },
        {
            uid: "uid",
            img: imgRobot,
            title: "Smart Robots",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ...",
            donate: "Last donation is 23 minute ago",
            goal: 5.0,
            raise: 3.4,
        }
    ]);

    const [pos, setPos] = useState(0);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setPos(-index * 276);
    }, [index]);

    const nextProject = () => {
        if(index + 1 >= data.length) {
            setIndex(0);
        }
        else setIndex(index + 1);
    }

    const prevProject = () => {
        if(index - 1 < 0) {
            setIndex(data.length - 1);
        }
        else setIndex(index -1);
    }

    return (
        <div className="px-3 pt-24 overflow-hidden lg:px-56 md:px-20 sm:px-10 bg-slate-50">
            <div className="flex flex-wrap items-end justify-between gap-3">
                <div className="flex items-center text-2xl font-bold text-black">
                    <ImFire /> Top Rated Project
                </div>
                <Link to={URL.SEARCH} className="flex items-center">
                    <div className="pr-3">See more</div>
                    <IoIosArrowForward />
                </Link>
            </div>
            <div className="relative flex gap-5 pt-10 transition-all duration-200 w-max" style={{ left: `${pos}px` }}>
                {
                    data.map((prop: ProjectInterface, key: number) => (
                        <Link to={URL.FUNDRAISE + "/uid"} className="flex flex-col w-64 text-sm text-gray-500 bg-white" key={key}>
                            <img src={prop.img} className="object-cover h-44" alt="" />
                            <div className="flex flex-col px-4 py-5">
                                <div className="text-lg font-bold text-black">{prop.title}</div>
                                <div className="pt-2">{prop.content}</div>
                                <div className="pt-10 pb-3">{prop.donate}</div>
                                <Progress percent={prop.raise /  prop.goal * 100} />
                                <div className="flex justify-between pt-5">
                                    <div className="font-bold text-black">${prop.raise}M raised</div>
                                    <div>${prop.goal}M Goal</div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className="relative z-10 left-8 sm:-top-60 w-min">
                <button className="flex items-center justify-center w-12 h-12 bg-teal-700 rounded-full" onClick={prevProject}>
                    <IoIosArrowBack className="text-white" size={20} />
                </button>
            </div>
            <div className="relative flex justify-end right-8 sm:-top-72 -top-12">
                <button className="flex items-center justify-center w-12 h-12 bg-teal-700 rounded-full" onClick={nextProject}>
                    <IoIosArrowForward className="text-white" size={20} />
                </button>
            </div>
        </div>
    )
}

export default HomeProjects;