import Web3 from "web3";

export const isWeb3Enable = !!window.ethereum;

export const switchNetwork = (chainId: number) => {
    return web3.eth.net.getId().then(id => {
        if (id === chainId) return null;
        else return window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: Web3.utils.toHex(chainId) }],
        });
    })
}

const web3 = new Web3(window.ethereum);

export default web3;