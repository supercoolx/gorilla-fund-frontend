import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";
import { getUserName, timeAgoFormat } from "libs/utils";
import Progress from "components/util/Progress";
import { FaEthereum } from "react-icons/fa";

const FundLeft = ({ uid, donations, goal }) => {
    const donated = useMemo(() => {
        if(donations?.length) return donations?.reduce((sum, donation) => sum + donation.ethAmount, 0);
        else return 0;
    }, [donations])

    return (
        <div className="flex flex-col flex-1 gap-8 p-5 min-w-[300px] text-sm bg-white">
            <div className="w-full">
                <div className="flex items-center">
                    <FaEthereum className="text-teal-700" size={20} />
                    <div className="text-gray-500">
                        <span className="text-lg font-bold text-teal-700">
                            {donated?.toLocaleString('en')}
                        </span> pledged of {goal?.toLocaleString('en')} ETH goal
                    </div>
                </div>
                <div className="text-teal-700">{donations?.length} donations</div>
                <Progress percent={50} className="mt-3 mb-8" />
                <Link to={URL.DONATE.replace(':uid', uid)} className="inline-block font-bold rounded-[4px] w-full py-2 text-center text-white bg-teal-700">Donate now</Link>
            </div>
            <div className="flex flex-col gap-8">
                <div className="text-base font-bold">Top donations</div>
                {
                    donations?.length ?
                    donations?.map((donation, key) => (
                        <div className="flex gap-3" key={key}>
                            <img src={donation.user.avatar} className="w-10 h-10 bg-teal-300 rounded-full" alt="" />
                            <div className="">
                                <div className="text-gray-500"><span className="font-bold text-black">{getUserName(donation.user)}</span> donated {donation.ethAmount} ETH</div>
                                <div className="text-gray-500">{timeAgoFormat(donation.createdAt)}</div>
                            </div>
                        </div>
                    )) :
                    <div className="pl-3">No donations yet ...</div>
                }
                <button className="w-full bg-slate-200 rounded-[4px] transition-all duration-200 py-2 text-black font-bold hover:border-teal-700 hover:bg-teal-700 hover:text-white">See all donations</button>
            </div>
        </div>
    )
}

export default FundLeft;