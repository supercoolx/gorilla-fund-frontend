import React from "react";
import { Link } from "react-router-dom";
import { URL, APP_NAME, SOCIAL } from "libs/constants";
import gorilla from "assets/img/svg/gorilla.svg";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="py-12 text-sm text-gray-500 bg-white">
            <div className="max-w-[900px] mx-auto px-3">
                <div className="flex flex-col justify-between gap-10 md:flex-row">
                    <div className="flex flex-col gap-4 w-[270px]">
                        <Link to={URL.HOME} className="flex items-center gap-4">
                            <img src={gorilla} alt="" />
                            <div className="text-lg font-bold text-teal-700">{APP_NAME}</div>
                        </Link>
                        <div>My life has changed forever because of Norma and what happend. It gave me hope again.</div>
                    </div>
                    <div className="flex flex-col justify-between gap-5 sm:flex-row md:justify-start">
                        <div className="flex flex-col gap-3">
                            <div className="font-bold text-teal-700">Fundraising for</div>
                            <Link to={URL.SEARCH + '?category=2'} className="hover:text-black">Gaming</Link>
                            <Link to={URL.SEARCH + '?category=3'} className="hover:text-black">Medical</Link>
                            <Link to={URL.SEARCH + '?category=5'} className="hover:text-black">Startups</Link>
                            <Link to={URL.SEARCH + '?category=1'} className="hover:text-black">School</Link>
                            <Link to={URL.SEARCH + '?category=4'} className="hover:text-black">IT Industry</Link>
                        </div>
                        {/* <div className="flex flex-col gap-3">
                            <div className="font-bold text-teal-700">Learn more</div>
                            <Link to="#" className="hover:text-black">How GorillaFundMe works</Link>
                            <Link to="#" className="hover:text-black">Frequently Asked Questions</Link>
                            <Link to="#" className="hover:text-black">Success Stories</Link>
                            <Link to="#" className="hover:text-black">Allowed users</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="font-bold text-teal-700">Resources</div>
                            <Link to="#" className="hover:text-black">Help center</Link>
                            <Link to="#" className="hover:text-black">Blog</Link>
                            <Link to="#" className="hover:text-black">Press Center</Link>
                            <Link to="#" className="hover:text-black">About</Link>
                            <Link to="#" className="hover:text-black">Founders</Link>
                        </div> */}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-5 pt-16 sm:flex-row">
                    <div>© {(new Date()).getFullYear()} All rights reserved - GorillaFundMe</div>
                    <div className="flex items-center gap-5">
                        <a href={SOCIAL.INSTAGRAM}><FaInstagram size={30} className="transition-all duration-200 hover:text-black" /></a>
                        <a href={SOCIAL.TWITTER}><FaTwitter size={30} className="transition-all duration-200 hover:text-sky-500" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;