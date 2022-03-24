import React from "react";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
import { URL } from "libs/constants";
import { FaEthereum, FaExchangeAlt } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsExclamationOctagon } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
import logo from "assets/img/svg/logo.svg";
import imgPhoto from "assets/img/home/fund_photo.png";
import Progress from "components/util/element/Progress";

const Donate = () => {
    return (
        <div className="bg-slate-50">
            <div className="flex flex-col gap-1 w-full px-3 max-w-[900px] mx-auto text-sm pb-10">
                <div className="flex items-center justify-between w-full h-16">
                    <Link to={URL.FUND} className="flex items-center justify-center text-gray-500">
                        <FiArrowLeft size={16} />
                        <div className="hidden pl-1 font-semibold sm:block">Back to fundraising</div>
                    </Link>
                    <Link to={URL.HOME} className="flex items-center gap-3">
                        <img src={logo} className="h-8" alt="" />
                        <div className="text-lg font-bold">Logoipsum</div>
                    </Link>
                    <div className="flex gap-2 text-right">
                        <div className="hidden text-gray-500 sm:block">Already have an account? </div>
                        <Link to={URL.LOGIN} className="font-bold text-teal-700">Sign in</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-[2px] pt-6">
                    <div>
                        <img src={imgPhoto} className="object-cover w-full h-60" alt="" />
                        <div className="flex flex-wrap items-center justify-between gap-3 p-6 bg-white">
                            <div className="flex flex-col gap-2">
                                <div className="text-lg font-bold">Hexarchy - Historical Deck Building Strategy Royale</div>
                                <div className="text-gray-500">An innovative historical 4x game. 1 to 10 players. One-hour games.</div>
                            </div>
                            <Link to="#" className="flex items-center gap-2 font-semibold text-gray-500">
                                <BsExclamationOctagon />
                                Report fundraising
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-[2px] bg-slate-50">
                        <div className="flex flex-col w-full p-6 bg-white">
                            <div className="font-semibold text-gray-500"><span className="text-lg font-bold text-teal-700">$527,260 </span>pledged of US$ 2,500,000 goal</div>
                            <div className="pt-1 text-teal-700">9.4K donations</div>
                            <Progress percent={40} className="py-4" />
                            <hr className="mt-3" />
                            <div className="pt-6 pb-2 font-bold">Enter your donation</div>
                            <div className="relative">
                                <div className="border-[1px] flex items-center justify-center px-2 mb-2">
                                    <FaEthereum size={24} className="text-gray-700" />
                                    <input className="w-full p-2 font-semibold text-right focus:outline-none" />
                                </div>
                                <div className="border-[1px] flex items-center justify-center px-2">
                                    <AiFillDollarCircle size={24} className="text-teal-700" />
                                    <input className="w-full p-2 font-semibold text-right text-gray-500 focus:outline-none" />
                                </div>
                                <div className="absolute bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center w-8 h-8 border-[1px] rounded-full">
                                    <FaExchangeAlt className="text-gray-500 rotate-90" />
                                </div>
                            </div>
                            <div className="pt-8 text-gray-500">Please ensure before making any transaction that the address entered matches the address displayed here.</div>
                        </div>
                        <div className="w-full p-6 bg-white">
                            <div className="flex justify-center">
                                <div className="border-[1px] p-2 border-gray-500">
                                    <QRCode value="ethereum:0x9216879A3fBB0fdFbEF5931A59319B9430d8BDaF" level="M" size={130} />
                                </div>
                            </div>
                            <div className="pt-6 pb-2 font-semibold text-gray-500">Send your ETH donation to:</div>
                            <div className="border-[1px] flex items-center justify-center px-2">
                                <input className="w-full p-2 font-semibold focus:outline-none" />
                                <MdOutlineContentCopy size={24} className="text-gray-700 cursor-pointer" />
                            </div>
                            <div className="pt-8 text-gray-500">Please ensure before making any transaction that the address entered matches the address displayed here.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate;