import React, { createContext, useContext, useState } from "react";
import FundAPI from "api/fund";

const FundContext = createContext<any>(undefined);

const FundProvider = ({children}) => {
    const [step, setStep] = useState<number>(1);
    const [name, setName] = useState<string>("");
    const [amount, setAmount] = useState<string>("1000");
    const [forId, setFor] = useState<any>(0);
    const [address, setAddress] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [head, setHead] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [welcome, setWel] = useState<boolean>(false);

    const submit = () => {
        FundAPI.create({
            name, amount, image,
            forId: forId.value,
            walletAddress: address,
            headline: head,
            description: desc
        })
        .then(res => {
            setWel(true);
        })
        .catch(err => alert(err.message));
    }

    return (
        <FundContext.Provider value={{ 
            step,
            setStep,
            name,
            setName,
            amount,
            setAmount,
            forId,
            setFor,
            address,
            setAddress,
            image,
            setImage,
            head,
            setHead,
            desc,
            setDesc,
            submit,
            welcome
        }}>
            {children}
        </FundContext.Provider>
    )
}

export const useFund = () => useContext(FundContext);
export default FundProvider;
