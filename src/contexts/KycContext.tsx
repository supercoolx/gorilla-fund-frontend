import React, { createContext, useContext, useState } from "react";
import UserAPI from "api/user";
import { useAuth } from "./AuthContext";

const KycContext = createContext<any>(undefined);

export const useKYC = () => useContext(KycContext);

const KycProvider = ({children}) => {
    const { user } = useAuth();
    const [ step, setStep ] = useState<number>(1);
    const [ firstName, setFirst ] = useState<string>(user.firstName);
    const [ lastName, setLast ] = useState<string>(user.lastName);
    const [ country, setCountry ] = useState<any>(user.country);
    const [ phone, setPhone ] = useState<string>(user.phone);
    const [ zipCode, setZip ] = useState<string>(user.zipCode);
    const [ city, setCity ] = useState<string>(user.city);
    const [ address, setAddress ] = useState<string>(user.address);
    const [ identifyType, setType ] = useState<number>(user.identifyType);
    const [ identifyNumber, setNumber ] = useState<string>(user.identifyNumber);
    const [ identifyExpire, setExpire ] = useState<string>(user.identifyExpire);
    const [ doc1, setDoc1 ] = useState<string>(user.doc1);
    const [ doc2, setDoc2 ] = useState<string>(user.doc2);
    const [ walletAddress, setWallet ] = useState<string>(user.walletAddress);
    const submit = () => {
        const formData = new FormData();
        formData.append('doc1', doc1);
        formData.append('doc2', doc2);
        return UserAPI.docUpload(formData)
        .then(res => {
            let data = {
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
            }
            return data;
        })
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