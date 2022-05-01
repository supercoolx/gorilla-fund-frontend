import Web3 from "web3";
import { AbiItem } from "web3-utils";
import Abi from "./abi.json";

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
export const contract = new web3.eth.Contract(Abi as AbiItem[], "0x15f8Fc209A1c97a40e64Bf14C8c7D1D9c0541D0f");

export default web3;