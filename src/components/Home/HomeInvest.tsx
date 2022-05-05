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
            title: "Project Proposals",
            content: "Owning an Ape Gorilla NFT allows you to submit a proposal for a project, business, or charity of yours to receive crypto donations ..."
        },
        {
            icon: iconSecurity,
            title: "Secure",
            content: "All donations received go from the donors ETH wallet to your ETH wallet, no middle man in the process ..."
        },
        {
            icon: iconPolicy,
            title: "Transparency",
            content: "Donations are given from the community/public directly to the projects proposed by Ape Gorilla holders ..."
        },
        {
            icon: iconHand,
            title: "Community Benefits",
            content: "Ape Gorilla community benefits from receiving support from others in the community and public to fund their missions to make a positive impact ..."
        },
        {
            icon: iconFlash,
            title: "One Stop Funding",
            content: "This is the best way to receive crowd-funding, or donations for a mission that is driven to doing good! ..."
        },
        {
            icon: iconGorilla,
            title: "Ape Gorilla Club",
            content: "Ape Gorilla Club will hold 20% of the public sale of the NFT's to directly fund proposals upto $100,000 each in the GorillaFund platform ..."
        }
    ]);

    return (
        <div className="w-full bg-white">
            <div className="flex flex-col items-center px-3 py-24 max-w-[900px] mx-auto">
                <div className="text-2xl font-bold text-black">Receive Crypto Donations and Funding</div>
                <div className="text-2xl font-bold text-teal-700">Gorilla Fund</div>
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
                <Link to={URL.SIGNUP} className="px-6 py-3 font-bold text-white transition-all duration-200 rounded-[4px] bg-teal-700 hover:shadow-lg hover:-translate-y-1">Create account</Link>
            </div>
        </div>
    )
}

export default HomeInvest;
