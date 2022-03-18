import React, { useState } from "react";
import { FundStoryInterface } from "libs/interfaces";
import imgStory from "assets/img/home/stories.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const HomeStories = () => {
    const [ data ] = useState<FundStoryInterface[]>([
        {
            title: "Fundarising School for IT Academy",
            content: "\"My life has changed forever because of Norma and what happened. It gave me hope again. Changing someone's life will change your own forever.\""
        },
        {
            title: "E-Sports Startup",
            content: "\"My life has changed forever because of Norma and what happened. It gave me hope again. Changing someone's life will change your own forever.\""
        },
        {
            title: "Smart Robots",
            content: "\"My life has changed forever because of Norma and what happened. It gave me hope again. Changing someone's life will change your own forever.\""
        },
        {
            title: "Support Ukraine",
            content: "\"My life has changed forever because of Norma and what happened. It gave me hope again. Changing someone's life will change your own forever.\""
        },
        {
            title: "Ape Gorilla Club",
            content: "\"My life has changed forever because of Norma and what happened. It gave me hope again. Changing someone's life will change your own forever.\""
        },
    ]);
    const [index, setIndex] = useState(0);

    const nextStory = () => {
        if(index >= data.length - 1) setIndex(0);
        else setIndex(index + 1);
    }
    
    const prevStory = () => {
        if(index <= 0) setIndex(data.length - 1);
        else setIndex(index - 1);
    }

    const zeroPad = (num: number, places: number) => String(num).padStart(places, '0');

    return (
        <div className="flex flex-col px-3 py-24 sm:px-10 md:px-20 lg:px-56 md:flex-row bg-slate-50">
            <div className="flex flex-col pt-0 pr-5 text-sm md:pt-8">
                <div className="font-bold text-teal-700">GORILLAFUNDME STORIES</div>
                <div className="py-5 text-3xl font-bold text-black">{data[index].title}</div>
                <div className="text-gray-500">{data[index].content}</div>
                <div className="py-5 font-bold text-gray-500">Raised $15.0M to help build online school for IT Industry.</div>
                <div className="flex items-center gap-5">
                    <button className="flex items-center justify-center w-10 h-10 rounded-full border-[1px] border-gray-300" onClick={prevStory}>
                        <IoIosArrowBack size={15} />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full border-[1px] border-gray-300" onClick={nextStory}>
                        <IoIosArrowForward size={15} />
                    </button>
                    <div className="flex">
                        <div className="font-bold text-black">{zeroPad(index + 1, 2)}</div>
                        &nbsp;/&nbsp;{zeroPad(data.length, 2)}
                    </div>
                </div>
            </div>
            <img src={imgStory} className="md:w-[60%] pt-5 md:pt-0" alt="" />
        </div>
    )
}

export default HomeStories;