import React, { useState } from "react";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";
import { WhyFundInterface } from "libs/interfaces";
import iconPencil from "assets/img/svg/pencil.svg";
import iconSecurity from "assets/img/svg/security.svg";
import iconPolicy from "assets/img/svg/policy.svg";
import iconHand from "assets/img/svg/hand-green.svg";
import iconFlash from "assets/img/svg/flash.svg";
import iconGorilla from "assets/img/svg/gorilla.svg";

const HomeInvest = () => {
    const [ data ] = useState<WhyFundInterface[]>([
        {
            icon: iconPencil,
            title: "Simple Setup",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ..."
        },
        {
            icon: iconSecurity,
            title: "Secure",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ..."
        },
        {
            icon: iconPolicy,
            title: "Transparency",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ..."
        },
        {
            icon: iconHand,
            title: "Community Benefits",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ..."
        },
        {
            icon: iconFlash,
            title: "One Stop Funding",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ..."
        },
        {
            icon: iconGorilla,
            title: "Ape Gorilla Club",
            content: "We've spent the last 5 years helping over 35,000 teams just like yourself to create and sustain successful online support ..."
        }
    ]);

    return (
        <div className="flex flex-col items-center px-3 py-24 bg-white sm:px-10 md:px-20 lg:px-56">
            <div className="text-2xl font-bold text-black">Why Should I Invest Though</div>
            <div className="text-2xl font-bold text-teal-700">GorillaFundMe</div>
            <div className="grid grid-cols-1 gap-4 pt-6 pb-16 sm:grid-cols-2 md:grid-cols-3">
                {
                    data.map((prop: WhyFundInterface, key: number) => (
                        <div className="flex flex-col items-center pt-6 sm:items-start" key={key}>
                            <img src={prop.icon} className="h-12" alt="" />
                            <div className="py-4 text-lg font-bold text-black">{prop.title}</div>
                            <div className="text-sm text-gray-500">{prop.content}</div>
                        </div>
                    ))
                }
            </div>
            <Link to={URL.SIGNUP} className="px-6 py-3 font-bold text-white bg-teal-700">Create account</Link>
        </div>
    )
}

export default HomeInvest;