import React from "react";

const WalletAddressInput = ({value, onChange}: {value?: string, onChange: Function}) => {

    const handleClick = () => {
        // web3.eth.requestAccounts()
        // .then(users => window.console.log(users));
        // window.console.log(web3);
    }
    return (
        <button
            onClick={handleClick}
            className="text-left text-gray-500 w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200"
        >{value || "Enter your wallet address"}</button>
    )
}

export default WalletAddressInput;