import React from "react";
import { useNavigate } from "react-router-dom";
import UserAPI from "api/user";
import { URL } from "libs/constants";
import { useKYC } from "contexts/KycContext";
import { FaEthereum } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import WalletAddressInput from "components/util/WalletAddressInput";

const KYCWallet = () => {
    const navigate = useNavigate();
    const { setStep, walletAddress, setWallet, submit } = useKYC();
    const onChange = val => setWallet(val);
    const onComplete = () => {
        if(!walletAddress?.trim().length) return;
        UserAPI.confirmWallet(walletAddress)
        .then(res => {
            if(res.data.success) return submit().then(res => {
                alert("Submitted successfully.");
                navigate(URL.DASHBOARD);
            })
            else return alert('Wallet address is already in use.');
        })
        .catch(err => alert(err.message));
    }
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
                <WalletAddressInput value={walletAddress} onChange={onChange} />
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