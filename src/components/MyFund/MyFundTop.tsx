import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "components/util/Modal";
import Progress from "components/util/Progress";
import CopyInput from "components/util/CopyInput";
import FundAPI from "api/fund";
import { URL } from "libs/constants";
import { FiShare2 } from "react-icons/fi";
import { ImTwitter } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { BsFacebook, BsInstagram, BsDiscord } from "react-icons/bs";

const MyFundTop = () => {
    const { uid } = useParams();
    const [ data, setData ] = useState<any>({});
    const [ isOpen, setOpen ] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        FundAPI.myFund(uid).then(res => setData(res.data)).catch(err => alert(err.message));
    }, [uid]);

    return (
        <div className="bg-white">
            <img src={data.image} className="object-cover w-full opacity-30 h-44" alt="" />
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 max-w-[900px] px-3 mx-auto -translate-y-20 -mb-20">
                <img src={data.image} className="object-cover h-40 w-72" alt="" />
                <div className="flex flex-col w-full gap-2 sm:flex-1">
                    <div className="text-sm text-gray-500">Fundraising progress</div>
                    <Progress percent={50} />
                    <div className="flex justify-between">
                        <div className="text-sm font-bold">15.00 ETH raised</div>
                        <div className="text-sm text-gray-500">50.00 ETH Goal</div>
                    </div>
                </div>
            </div>
            <hr className="my-6" />
            <div className="flex items-center flex-wrap gap-3 pb-3 justify-between max-w-[900px] mx-auto px-3">
                <div className="flex flex-col gap-2">
                    <div className="font-bold">{data.name}</div>
                    <div className="text-sm text-gray-500">{data.headline}</div>
                </div>
                <div className="flex gap-3">
                    <Link to={URL.SETTING.replace(':uid', uid || '')} className="flex items-center gap-2 border-[1px] py-2 px-3">
                        <MdOutlineSettings size={20} />
                        <div className="text-sm font-bold">Setting</div>
                    </Link>
                    <button onClick={handleOpen} className="flex items-center gap-2 border-[1px] py-2 px-3">
                        <FiShare2 size={20} />
                        <div className="text-sm font-bold">Share fundraiser</div>
                    </button>
                </div>
            </div>
            <Modal isOpen={isOpen}>
                <div className="w-full max-w-md p-6 bg-white">
                    <div className="flex items-end justify-between">
                        <div className="font-bold text-black">Help by sharing</div>
                        <div onClick={handleClose} className="text-2xl font-bold text-gray-500 cursor-pointer">&times;</div>
                    </div>
                    <div className="pt-2 text-sm text-gray-500">Fundraisers shared on social networks raise up to 5x more</div>
                    <hr className="my-5" />
                    <div className="grid grid-cols-3 gap-3 text-sm font-semibold text-gray-500">
                        <div className="border-[1px] cursor-pointer flex flex-col gap-3 items-center py-5">
                            <BsFacebook size={30} className="text-blue-600" />
                            <div>Facebook</div>
                        </div>
                        <div className="border-[1px] cursor-pointer flex flex-col gap-3 items-center py-5">
                            <ImTwitter size={30} className="text-sky-500" />
                            <div>Twitter</div>
                        </div>
                        <div className="border-[1px] cursor-pointer flex flex-col gap-3 items-center py-5">
                            <BsInstagram size={30} />
                            <div>Instagram</div>
                        </div>
                        <div className="border-[1px] cursor-pointer flex flex-col gap-3 items-center py-5">
                            <BsDiscord size={30} className="text-indigo-400" />
                            <div>Discord</div>
                        </div>
                        <div className="border-[1px] cursor-pointer flex flex-col gap-3 items-center py-5">
                            <AiOutlineMail size={30} />
                            <div>Email</div>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div className="pb-1 font-bold text-gray-800">Share via link</div>
                    <CopyInput value="https://www.gorillafund.me/f/p35aef-help-me" className="text-sm text-gray-500" />
                </div>
            </Modal>
        </div>
    )
}

export default MyFundTop;