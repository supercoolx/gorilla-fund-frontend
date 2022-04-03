import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { Link, useParams } from "react-router-dom";
import EthAPI from "api/eth";
import FundAPI from "api/fund";
import { URL } from "libs/constants";
import { useAuth } from "contexts/AuthContext";
import NotFound from "views/NotFound";
import Progress from "components/util/Progress";
import CopyInput from "components/util/CopyInput";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsExclamationOctagon } from "react-icons/bs";
import { FaEthereum, FaExchangeAlt } from "react-icons/fa";
import logo from "assets/img/svg/logo.svg";

const Donate = () => {
    const { user } = useAuth();
    const { uid } = useParams();
    const [ data, setData ] = useState<any>({});
    const [ error, setError ] = useState<boolean>(false);
    const [ amount, setAmount ] = useState<any>('0');
    const [ USD, setUSD ] = useState<any>('0');
    
    const handleChange = e => setAmount(e.target.value);

    useEffect(() => {
        EthAPI.get('/exchange-rates?currency=ETH')
        .then(res => setUSD((amount * res.data.data.rates.USD).toLocaleString('en')))
        .catch(err => setUSD("Cannot fetch exchange rate."));
    }, [amount]);
    useEffect(() => {
        FundAPI.findByUid(uid)
        .then(res => setData(res.data))
        .catch(err => setError(true));
    }, [uid]);
    
    return error ? <NotFound /> : (
        <div className="bg-slate-50">
            <div className="flex flex-col gap-1 w-full px-3 max-w-[900px] mx-auto text-sm pb-10">
                <div className="flex items-center justify-between w-full h-16">
                    <Link to={URL.FUND.replace(':uid', data.uid)} className="flex items-center justify-center text-gray-500">
                        <FiArrowLeft size={16} />
                        <div className="hidden pl-1 font-semibold sm:block">Back to fundraising</div>
                    </Link>
                    <Link to={URL.HOME} className="flex items-center gap-3">
                        <img src={logo} className="h-8" alt="" />
                        <div className="text-lg font-bold">Logoipsum</div>
                    </Link>
                    {
                        user.email ? 
                        <Link to={URL.DASHBOARD} className="flex items-center justify-end gap-3 cursor-pointer">
                            <div>{user.name}</div>
                            <img src={user.avatar} className="rounded-full w-8 border-[1px] bg-teal-300" alt="" />
                        </Link> :
                        <div className="flex gap-2 text-right">
                            <div className="hidden text-gray-500 sm:block">Already have an account? </div>
                            <Link to={URL.LOGIN} className="font-bold text-teal-700">Sign in</Link>
                        </div>
                    }
                </div>
                <div className="flex flex-col gap-[2px] pt-6">
                    <div>
                        <img src={data.image} className="object-cover w-full h-60" alt="" />
                        <div className="flex flex-wrap items-center justify-between gap-3 p-6 bg-white">
                            <div className="flex flex-col gap-2">
                                <div className="text-lg font-bold">{data.name}</div>
                                <div className="text-gray-500">{data.headline}</div>
                            </div>
                            <Link to="#" className="flex items-center gap-2 font-semibold text-gray-500">
                                <BsExclamationOctagon />
                                Report fundraising
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-[2px] bg-slate-50">
                        <div className="flex flex-col w-full p-6 bg-white">
                            <div className="font-semibold text-gray-500"><span className="text-lg font-bold text-teal-700">$527,260 </span>pledged of US$ {data.amount?.toLocaleString('en')} goal</div>
                            <div className="pt-1 text-teal-700">9.4K donations</div>
                            <Progress percent={40} className="py-4" />
                            <hr className="mt-3" />
                            <div className="pt-6 pb-2 font-bold">Enter your donation</div>
                            <div className="relative">
                                <div className="border-[1px] flex items-center justify-center px-2 mb-2">
                                    <FaEthereum size={24} className="text-gray-700" />
                                    <input type="number" min={0} value={amount} onChange={handleChange} step={0.1} className="w-full p-2 pr-0 font-semibold text-right focus:outline-none" />
                                </div>
                                <div className="border-[1px] flex items-center justify-center px-2">
                                    <AiFillDollarCircle size={24} className="text-teal-700" />
                                    <input value={USD} className="w-full p-2 pr-4 font-semibold text-right text-gray-500 focus:outline-none" readOnly />
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
                                    <QRCode value={`ethereum:${data.walletAddress}`} level="M" size={130} />
                                </div>
                            </div>
                            <div className="pt-6 pb-2 font-semibold text-gray-500">Send your ETH donation to:</div>
                            <CopyInput value={data.walletAddress || ''} />
                            <div className="pt-8 text-gray-500">Please ensure before making any transaction that the address entered matches the address displayed here.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate;