import React, { createContext, useContext, useState } from "react";
import KYC from "api/kyc";

const KycContext = createContext<any>(undefined);

export const useKYC = () => useContext(KycContext);

const KycProvider = ({children}) => {
    const [ step, setStep ] = useState<number>(1);
    const [ firstName, setFirst ] = useState<string>("");
    const [ lastName, setLast ] = useState<string>("");
    const [ country, setCountry ] = useState<any>("");
    const [ phone, setPhone ] = useState<string>("");
    const [ zip, setZip ] = useState<string>("");
    const [ city, setCity ] = useState<string>("");
    const [ address, setAddress ] = useState<string>("");
    const [ idType, setType ] = useState<number>(1);
    const [ number, setNumber ] = useState<string>("");
    const [ expire, setExpire ] = useState<string>("");
    const [ img1, setImage1 ] = useState<string>("");
    const [ img2, setImage2 ] = useState<string>("");
    const [ ether, setEther ] = useState<string>("");
    const submit = () => {
        const formData = new FormData();
        formData.append('img1', img1);
        formData.append('img2', img2);
        KYC.upload(formData)
        .then(res => {
            let data = {
                firstName, lastName, country, zip, city, address, idType, number, expire, ether,
                phone: country.code + phone,
                img1: res.data.path1,
                img2: res.data.path2,
            }
            return data;
        })
        .then(data => KYC.create(data))
        .then(res => alert("Submitted successfully."))
        .catch(err => alert(err.message));
    }

    return (
        <KycContext.Provider value={{
            step, setStep,
            firstName, setFirst,
            lastName, setLast,
            country, setCountry,
            phone, setPhone,
            zip, setZip,
            city, setCity,
            address, setAddress,
            idType, setType,
            number, setNumber,
            expire, setExpire,
            img1, setImage1,
            img2, setImage2,
            ether, setEther,
            submit
        }}>
            {children}
        </KycContext.Provider>
    )
}

export default KycProvider;