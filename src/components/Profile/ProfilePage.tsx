import React from "react";
import Select from "react-select";
import countries from "libs/countries";
import { useAuth } from "contexts/AuthContext";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import "assets/styles/ReactSelect.css";

const ProfilePage = () => {
    const { user } = useAuth();

    return (
        <div className="py-5 bg-slate-50">
            <div className="max-w-[900px] w-full mx-auto px-3">
                <div className="p-5 bg-white">
                    <div className="font-bold">Profile</div>
                    <div className="text-sm text-gray-500">Update your photo and personal details here.</div>
                </div>
                <hr />
                <div className="p-5 bg-white">
                    <div className="text-sm font-bold">Your photo</div>
                    <div className="flex items-center py-3">
                        <img src={user.avatar} className="w-12 bg-teal-300 rounded-full" alt="" />
                        <div className="pl-5">
                            <div className="flex gap-3">
                                <button className="px-3 py-2 text-xs font-bold text-white bg-teal-700 rounded-sm">Update photo</button>
                                <button className="px-3 py-2 text-xs font-bold bg-gray-200 rounded-sm">Delete photo</button>
                            </div>
                            <div className="pt-1 text-xs font-bold text-gray-500">SVG, PNG, JPG or GIF (max. 500x500px)</div>
                        </div>
                    </div>
                    <hr />
                    <div className="max-w-[400px] py-5 text-sm">
                        <div className="flex gap-3">
                            <div className="w-full">
                                <div className="pb-2 font-bold">First name</div>
                                <input type="text" className="py-2 rounded-sm px-3 w-full focus:outline-none border-[1px] border-slate-200" placeholder="First name" />
                            </div>
                            <div className="w-full">
                                <div className="pb-2 font-bold">Last name</div>
                                <input type="text" className="py-2 rounded-sm px-3 w-full focus:outline-none border-[1px] border-slate-200" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="pb-2 font-bold">Username</div>
                            <input type="text" className="py-2 rounded-sm px-3 w-full focus:outline-none border-[1px] border-slate-200" placeholder="Username" />
                        </div>
                        <div className="pt-4">
                            <div className="pb-2 font-bold">Email address</div>
                            <div className="flex rounded-sm bg-white w-full border-[1px] border-slate-200">
                                <div className="flex items-center justify-center px-3">
                                    <AiOutlineMail className="text-gray-500" size={16} />
                                </div>
                                <input type="text" className="w-full py-2 pr-4 focus:outline-none" placeholder="Email address" />
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="pb-2 font-bold rounded-sm">Phone number</div>
                            <div className="flex rounded-sm bg-white w-full border-[1px] border-slate-200">
                                <div className="flex items-center justify-center px-3">
                                    <MdOutlinePhone className="text-gray-500" size={16} />
                                </div>
                                <input type="text" className="w-full py-2 pr-4 focus:outline-none" placeholder="Phone number" />
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="pb-2 font-bold">Residental address</div>
                            <div className="flex rounded-sm bg-white w-full border-[1px] border-slate-200">
                                <div className="flex items-center justify-center px-3">
                                    <GoLocation className="text-gray-500" size={16} />
                                </div>
                                <input type="text" className="w-full py-2 pr-4 focus:outline-none" placeholder="Residental address" />
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="pb-2 font-bold">Country</div>
                            <Select options={countries} className="w-full" />
                        </div>
                        <div className="flex gap-3 pt-4">
                            <div className="w-full">
                                <div className="pb-2 font-bold">City</div>
                                <input type="text" className="py-2 rounded-sm px-3 w-full focus:outline-none border-[1px] border-slate-200" placeholder="City" />
                            </div>
                            <div className="w-full">
                                <div className="pb-2 font-bold">Zip code</div>
                                <input type="text" className="py-2 rounded-sm px-3 w-full focus:outline-none border-[1px] border-slate-200" placeholder="Zip code" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-wrap items-center justify-between gap-2 py-3">
                        <div className="">
                            <div className="pb-1 text-sm font-bold">Delete your account</div>
                            <div className="text-xs text-gray-500">You will no longer have access to this fundraiser after deleting.</div>
                            <div className="text-xs text-gray-500">If your received donations, your donors will still be able to view a summary.</div>
                        </div>
                        <button className="px-3 py-2 text-sm font-bold text-white bg-red-400 rounded-sm hover:bg-red-500">Delete my account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;