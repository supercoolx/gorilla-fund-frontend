import React from "react";
import imgAvatar from "assets/img/home/avatar.png";

const FundDonations = () => {
    return (
        <div className="p-3 max-w-[500px] text-gray-500 text-sm">
            <div className="">
                <div className="text-lg font-bold text-black">Organizer</div>
                <div className="flex justify-between py-3">
                    <div className="flex gap-3">
                        <img src={imgAvatar} className="h-10 rounded-full" alt="" />
                        <div className="flex flex-col">
                            <div className="flex-wrap gap-3 font-bold text-black">Brooklyn Simmons</div>
                            <div className="text-gray-500">Organizer</div>
                        </div>
                    </div>
                    <button className="border-[1px] border-teal-700 hover:bg-teal-700 hover:text-white transition-all duration-200 text-teal-700 px-5 rounded-full">Contact</button>
                </div>
            </div>
            <hr className="my-3" />
            <div className="flex flex-col gap-5">
                <div className="flex items-end justify-between pt-2">
                    <div className="text-lg font-bold text-black">Donations (399)</div>
                    <div className="text-teal-700 cursor-pointer">See all</div>
                </div>
                <div className="flex gap-3">
                    <img src={imgAvatar} className="h-10 rounded-full" alt="" />
                    <div className="flex flex-col flex-1 gap-2">
                        <div className="flex flex-wrap justify-between gap-3">
                            <div className="text-gray-500"><span className="font-bold text-black">Wade Warren</span> donated 5.4 ETH</div>
                            <div className="text-gray-500">30 minutes ago</div>
                        </div>
                        <div>Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago.</div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <img src={imgAvatar} className="h-10 rounded-full" alt="" />
                    <div className="flex flex-col flex-1 gap-2">
                        <div className="flex flex-wrap justify-between gap-3">
                            <div className="text-gray-500"><span className="font-bold text-black">Wade Warren</span> donated 5.4 ETH</div>
                            <div className="text-gray-500">30 minutes ago</div>
                        </div>
                        <div>Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago.</div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <img src={imgAvatar} className="h-10 rounded-full" alt="" />
                    <div className="flex flex-col flex-1 gap-2">
                        <div className="flex flex-wrap justify-between gap-3">
                            <div className="text-gray-500"><span className="font-bold text-black">Wade Warren</span> donated 5.4 ETH</div>
                            <div className="text-gray-500">30 minutes ago</div>
                        </div>
                        <div>Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago.</div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <img src={imgAvatar} className="h-10 rounded-full" alt="" />
                    <div className="flex flex-col flex-1 gap-2">
                        <div className="flex flex-wrap justify-between gap-3">
                            <div className="text-gray-500"><span className="font-bold text-black">Wade Warren</span> donated 5.4 ETH</div>
                            <div className="text-gray-500">30 minutes ago</div>
                        </div>
                        <div>Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago.</div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <img src={imgAvatar} className="h-10 rounded-full" alt="" />
                    <div className="flex flex-col flex-1 gap-2">
                        <div className="flex flex-wrap justify-between gap-3">
                            <div className="text-gray-500"><span className="font-bold text-black">Wade Warren</span> donated 5.4 ETH</div>
                            <div className="text-gray-500">30 minutes ago</div>
                        </div>
                        <div>Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago.</div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <img src={imgAvatar} className="h-10 rounded-full" alt="" />
                    <div className="flex flex-col flex-1 gap-2">
                        <div className="flex flex-wrap justify-between gap-3">
                            <div className="text-gray-500"><span className="font-bold text-black">Wade Warren</span> donated 5.4 ETH</div>
                            <div className="text-gray-500">30 minutes ago</div>
                        </div>
                        <div>Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago.</div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <img src={imgAvatar} className="h-10 rounded-full" alt="" />
                    <div className="flex flex-col flex-1 gap-2">
                        <div className="flex flex-wrap justify-between gap-3">
                            <div className="text-gray-500"><span className="font-bold text-black">Wade Warren</span> donated 5.4 ETH</div>
                            <div className="text-gray-500">30 minutes ago</div>
                        </div>
                        <div>Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago.</div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <img src={imgAvatar} className="h-10 rounded-full" alt="" />
                    <div className="flex flex-col flex-1 gap-2">
                        <div className="flex flex-wrap justify-between gap-3">
                            <div className="text-gray-500"><span className="font-bold text-black">Wade Warren</span> donated 5.4 ETH</div>
                            <div className="text-gray-500">30 minutes ago</div>
                        </div>
                        <div>Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago.</div>
                    </div>
                </div>
                <hr />
                <div className="pl-12">
                    <button className="py-2 px-4 border-[1px] border-teal-700 text-teal-700 rounded-full hover:bg-teal-700 hover:text-white transition-all duration-200">Load more</button>
                </div>
            </div>
        </div>
    )
}

export default FundDonations;