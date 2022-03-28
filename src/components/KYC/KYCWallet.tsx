import React from "react";
import { useKYC } from "contexts/KycContext";
import { FaEthereum } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

const KYCWallet = () => {
    const { setStep, ether, setEther, submit } = useKYC();
    const onChange = e => setEther(e.target.value);
    const onComplete = () => ether.trim().length > 0 && submit();
    const onPrev = () => setStep(2);

    return (
        <>
            <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full">
                <FaEthereum className="text-teal-700" size={30} />
            </div>
            <div className="pt-6 text-2xl font-bold">Confirm your wallet</div>
            <div className="pt-3 text-center text-gray-500">To verify corporate's identity, fill evidence of identification and upload a preferred form or forms of identification.</div>
            <div className="flex flex-col w-full pt-6">
                <div className="pb-1 font-bold">Ethereum Address*</div>
                <input type="text" value={ether} onChange={onChange} className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Your ethereum address" />
            </div>
            <button onClick={onComplete} className="w-full py-2 mt-6 text-white bg-teal-700">Confirm</button>
            <button onClick={onPrev} className="flex items-center justify-center w-full py-2 mt-3 bg-white">
                <FiArrowLeft size={16} />
                <div className="pl-1 font-bold">Go back</div>
            </button>
        </>
    )
}

export default KYCWallet;