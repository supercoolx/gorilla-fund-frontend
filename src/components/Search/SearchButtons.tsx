import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ButtonInterface } from "libs/interfaces";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWatch, MdOutlineGamepad, MdOutlineStar, MdOutlineMedicalServices } from "react-icons/md";

const SearchButtons = () => {
    const [ , setSearchParam ] = useSearchParams();
    const [ data ] = useState<ButtonInterface[]>([
        { icon: <MdOutlineGamepad size={22} />, text: "Gaming", value: 2 },
        { icon: <MdOutlineMedicalServices size={22} />, text: "Medical", value: 3 },
        { icon: <FaGraduationCap size={22} />, text: "Education", value: 1 },
        { icon: <MdOutlineWatch size={22} />, text: "Industry", value: 4 },
        { icon: <MdOutlineStar size={22} />, text: "Startup", value: 5 },
        { icon: <FaGraduationCap size={22} />, text: "Education", value: 1 },
        { icon: <MdOutlineWatch size={22} />, text: "Industry", value: 4 },
        { icon: <MdOutlineStar size={22} />, text: "Startup", value: 5 },
        { icon: <MdOutlineStar size={22} />, text: "Startup", value: 5 }
    ]);

    const handleClick = (category: number) => {
        return () => setSearchParam({ category: category + '' });
    }

    return (
        <div className="w-full py-10 bg-white">
            <div className="grid grid-cols-3 md:grid-cols-9 max-w-[900px] mx-auto px-3">
                {
                    data.map((prop: ButtonInterface, key: number) => (
                        <div className="flex flex-col items-center" key={key}>
                            <button onClick={handleClick(prop.value)} className="flex items-center justify-center w-12 h-12 text-teal-700 transition-all duration-200 rounded-full bg-teal-700/20 hover:text-white hover:bg-teal-700 hover:shadow-md">
                                {prop.icon}
                            </button>
                            <div className="pt-3 text-sm text-gray-500">{prop.text}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchButtons;