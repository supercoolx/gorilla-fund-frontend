import React from "react";
import { useMoralis } from "react-moralis";

const WalletAddressInput = ({value, onChange}: {value?: string, onChange: Function}) => {
    const { authenticate } = useMoralis();
    const handleClick = () => authenticate().then(user => onChange(user?.attributes.ethAddress));

    return (
        <button
            onClick={handleClick}
            className="text-left text-gray-500 w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200"
        >{value || "Enter your wallet address"}</button>
    )
}

export default WalletAddressInput;