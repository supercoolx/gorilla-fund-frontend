import React from "react";
import { getUserName, timeAgoFormat } from "libs/utils";

const FundDonations = ({ organizer, donations }) => {
    return (
        <div className="p-3 max-w-[500px] text-gray-500 text-sm">
            <div className="">
                <div className="text-lg font-bold text-black">Organizer</div>
                <div className="flex justify-between py-3">
                    <div className="flex gap-3">
                        <img src={organizer?.avatar} className="w-10 h-10 bg-teal-300 rounded-full" alt="" />
                        <div className="flex flex-col">
                            <div className="flex-wrap gap-3 font-bold text-black">{getUserName(organizer)}</div>
                            <div className="text-gray-500">Organizer</div>
                        </div>
                    </div>
                    <button className="font-bold rounded-[4px] px-4 transition-all duration-200 text-center bg-slate-200 text-black hover:text-white hover:bg-teal-700">Contact organizer</button>
                </div>
            </div>
            <hr className="my-3" />
            <div className="flex flex-col gap-5">
                <div className="flex items-end justify-between pt-2">
                    <div className="text-lg font-bold text-black">Donations ({donations?.length})</div>
                    <div className="text-teal-700 cursor-pointer">See all</div>
                </div>
                {
                    donations?.length ?
                    donations?.map((donation, key) => (
                        <div className="flex gap-3" key={key}>
                            <img src={donation.user.avatar} className="w-10 h-10 bg-teal-300 rounded-full" alt="" />
                            <div className="flex flex-col flex-1 gap-2">
                                <div className="flex flex-wrap justify-between gap-3">
                                    <div className="text-gray-500"><span className="font-bold text-black">{donation.user.firstName + ' ' + donation.user.lastName}</span> donated {donation.ethAmount} ETH</div>
                                    <div className="text-gray-500">{timeAgoFormat(donation.createdAt)}</div>
                                </div>
                                <div>{donation.comment || "No comments ..."}</div>
                            </div>
                        </div>
                    )) :
                    <div className="pl-3">No donations yet ...</div>
                }
                <hr />
                <div className="pl-12">
                    <button className="font-bold rounded-[4px] px-4 py-2 transition-all duration-200 text-center bg-slate-200 text-black hover:text-white hover:bg-teal-700">Load more</button>
                </div>
            </div>
        </div>
    )
}

export default FundDonations;