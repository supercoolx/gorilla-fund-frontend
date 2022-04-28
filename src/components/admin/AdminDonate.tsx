import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Loading from "components/util/Loading";
import CopyButton from "components/util/CopyButton";
import AdminAPI from "api/admin";
import { URL } from "libs/constants";
import { timeAgoFormat, getUserName } from "libs/utils";
import { CgArrowTopRightR } from "react-icons/cg";

const AdminDonate = () => {
    const [ DOM, setDOM ] = useState<JSX.Element>(<Loading />);
    const loadDOM = (donates: any[]) => setDOM(
        <div className="flex flex-col gap-2 px-5 py-5">
            {
                donates.length ?
                donates.map((donate, key) => (
                    <div key={key} className="rounded-[4px] border hover:shadow-md">
                        <div className="px-3 py-2 flex items-center justify-between text-white rounded-t-[4px] bg-teal-700">
                            <div className="flex items-center gap-3 cursor-pointer">
                                <img src={donate.user.avatar} alt="" className="w-8 h-8 bg-teal-300 rounded-full" />
                                <div>{getUserName(donate.user)}</div>
                            </div>
                            <div>Created {timeAgoFormat(donate.createdAt)}</div>
                        </div>
                        <div className="px-3 py-2 text-gray-600">
                            <div>Project: <Link to={URL.FUND.replace(':uid', donate.fund.uid)} target="_blank" className="hover:underline hover:text-blue-600">{donate.fund.name}</Link></div>
                            <div className="flex items-center gap-3">
                                <div>From: {donate.fromAddress}</div>
                                <CopyButton text={donate.fromAddress} />
                            </div>
                            <div className="flex items-center gap-3">
                                <div>To: {donate.toAddress}</div>
                                <CopyButton text={donate.toAddress} />
                            </div>
                        </div>
                        <hr />
                        <div className="flex justify-between px-3 py-2 text-sm">
                            <div>Donated: {donate.ethAmount} ETH</div>
                            <div className="flex items-center gap-3">
                                <div>View transaction</div>
                                <a href={"https://etherscan.io/tx/" + donate.transactionId} target="_blank" rel="noreferrer"><CgArrowTopRightR size={20} /></a>
                            </div>
                        </div>
                    </div>
                )) :
                <div>Nothing to show ...</div>
            }
        </div>
    );
    useEffect(() => {
        AdminAPI.donates()
        .then(res => loadDOM(res.data))
        .catch(err => toast.error(err.message));
    }, []);

    return DOM;
}

export default AdminDonate;