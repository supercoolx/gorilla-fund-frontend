import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/img/svg/logo.svg";
import { URL } from "libs/constants";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="px-56 py-12 text-sm text-gray-500 bg-white">
            <div className="flex justify-between">
                <div className="flex flex-col gap-4 w-[270px]">
                    <div className="flex items-center gap-4">
                        <img src={logo} />
                        <div className="text-lg font-bold text-teal-700">GorillaFundMe</div>
                    </div>
                    <div>My life has changed forever because of Norma and what happend. It gave me hope again.</div>
                </div>
                <div className="flex gap-20">
                    <div className="flex flex-col gap-3">
                        <div className="font-bold text-teal-700">Fundraising for</div>
                        <Link to="#">Gaming</Link>
                        <Link to="#">Charity</Link>
                        <Link to="#">Startups</Link>
                        <Link to="#">School</Link>
                        <Link to="#">IT Industry</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="font-bold text-teal-700">Learn more</div>
                        <Link to="#">How GorillaFundMe works</Link>
                        <Link to="#">Frequently Asked Questions</Link>
                        <Link to="#">Success Stories</Link>
                        <Link to="#">Allowed users</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="font-bold text-teal-700">Resources</div>
                        <Link to="#">Help center</Link>
                        <Link to="#">Blog</Link>
                        <Link to="#">Press Center</Link>
                        <Link to="#">About</Link>
                        <Link to="#">Founders</Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between pt-16">
                <div>© 2020 All rights reserved - GorillaFundMe</div>
                <div className="flex items-center gap-5">
                    <a href="#"><FaInstagram size={30} /></a>
                    <a href="#"><FaTwitter size={30} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;