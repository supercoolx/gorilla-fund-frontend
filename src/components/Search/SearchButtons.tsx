import React, { useState } from "react";
import { ButtonInterface } from "libs/interfaces";
import iconGaming from "assets/img/svg/gaming.svg";
import iconMedical from "assets/img/svg/medical.svg";
import iconEducation from "assets/img/svg/education.svg";
import iconIndustry from "assets/img/svg/industry.svg";
import iconStartup from "assets/img/svg/startup.svg";

const SearchButtons = () => {
    const [ data ] = useState<ButtonInterface[]>([
        {
            icon: iconGaming,
            text: "Gaming"
        },
        {
            icon: iconMedical,
            text: "Medical"
        },
        {
            icon: iconEducation,
            text: "Education"
        },
        {
            icon: iconIndustry,
            text: "Industry"
        },
        {
            icon: iconStartup,
            text: "Startup"
        },
        {
            icon: iconEducation,
            text: "Education"
        },
        {
            icon: iconIndustry,
            text: "Industry"
        },
        {
            icon: iconStartup,
            text: "Startup"
        },
        {
            icon: iconStartup,
            text: "Startup"
        }
    ]);

    return (
        <div className="px-3 py-10 bg-white sm:px-10 md:px-20 lg:px-56">
            <div className="grid grid-cols-3 md:grid-cols-9">
                {
                    data.map((prop: ButtonInterface, key: number) => (
                        <div className="flex flex-col items-center" key={key}>
                            <button className="flex items-center justify-center w-12 h-12 rounded-full hover:shadow-md bg-teal-50">
                                <img src={prop.icon} alt="" />
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