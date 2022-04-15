import React, { createContext, useContext, useEffect, useState } from "react";
import UserAPI from "api/user";
import { useAuth } from "./AuthContext";

const KycContext = createContext<any>(undefined);

export const useKYC = () => useContext(KycContext);

const KycProvider = ({children}) => {
    const { user } = useAuth();
    const [ step, setStep ] = useState<number>(1);
    const [ firstName, setFirst ] = useState<string>("");
    const [ lastName, setLast ] = useState<string>("");
    const [ country, setCountry ] = useState<any>({});
    const [ phone, setPhone ] = useState<string>("");
    const [ zipCode, setZip ] = useState<string>("");
    const [ city, setCity ] = useState<string>("");
    const [ address, setAddress ] = useState<string>("");
    const [ identifyType, setType ] = useState<number>(1);
    const [ identifyNumber, setNumber ] = useState<string>("");
    const [ identifyExpire, setExpire ] = useState<string>("");
    const [ doc1, setDoc1 ] = useState<any>();
    const [ doc2, setDoc2 ] = useState<any>();
    const [ walletAddress, setWallet ] = useState<string>("");

    useEffect(() => {
        if(!user.loggedIn) return;
        setFirst(user.firstName);
        setLast(user.lastName);
        setCountry(user.country);
        setPhone(user.phone);
        setZip(user.zipCode);
        setCity(user.city);
        setAddress(user.address);
        setType(user.identifyType);
        setNumber(user.identifyNumber);
        setExpire(user.identifyExpire);
        setWallet(user.walletAddress);
    }, [user])

    const submit = () => {
        const formData = new FormData();
        formData.append('doc1', doc1);
        formData.append('doc2', doc2);
        return UserAPI.docUpload(formData)
        .then(res => ({
            firstName,
            lastName,
            country,
            zipCode,
            city,
            address,
            identifyType,
            identifyNumber,
            identifyExpire,
            walletAddress,
            phone: country.code + phone,
            doc1: res.data.path1,
            doc2: res.data.path2,
        }))
        .then(data => UserAPI.kyc(data))
    }

    return (
        <KycContext.Provider value={{
            step, setStep,
            firstName, setFirst,
            lastName, setLast,
            country, setCountry,
            phone, setPhone,
            zipCode, setZip,
            city, setCity,
            address, setAddress,
            identifyType, setType,
            identifyNumber, setNumber,
            identifyExpire, setExpire,
            doc1, setDoc1,
            doc2, setDoc2,
            walletAddress, setWallet,
            submit
        }}>
            {children}
        </KycContext.Provider>
    )
}

export default KycProvider;