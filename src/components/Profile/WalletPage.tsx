import React from "react";
import { FiLink2 } from "react-icons/fi";

const WalletPage = () => {
    return (
        <div className="py-5 bg-slate-50">
            <div className="max-w-[900px] w-full mx-auto px-3">
                <div className="p-5 bg-white">
                    <div className="font-bold">Wallet</div>
                    <div className="text-sm text-gray-500">Connect your wallet and get exclusive access to GorillaFund.</div>
                </div>
                <hr />
                <div className="p-5 bg-white">
                    <div className="max-w-[400px] text-sm">
                        <div className="text-sm font-bold">Your wallet</div>
                        <button className="flex items-center px-3 py-2 mt-3 text-white bg-teal-700 rounded-sm">
                            <FiLink2 />
                            <div className="pl-2">Connect wallet</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletPage;