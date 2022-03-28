import React, { useState } from "react";
import { useFund } from "contexts/FundContext";
import FundAPI from "api/fund";
import { FiArrowLeft, FiPaperclip } from "react-icons/fi";

const FundPhoto = () => {
    var imageInput;
    const imageType = ["image/png", "image/jpeg", "image/gif", "image/svg+xml"];
    const { setStep, image, setImage } = useFund();
    const [ photo, setPhoto ] = useState<any>(image);
    const [ img, setIMG ] = useState<any>();

    const fileReader = new window.FileReader();
    fileReader.onload = () => setPhoto(fileReader.result);

    const handleClick = () => imageInput.click();
    const handleChange = (e) => {
        const file = e.target.files[0];
        if(!(file && imageType.includes(file.type))) {
            setPhoto("");
            return;
        }
        setIMG(file);
        setPhoto(window.URL.createObjectURL(file));
    }
    const handleNext = () => {
        if(!photo) return;
        if(img) {
            const formData = new FormData();
            formData.append('photo', img);
            FundAPI.photoUpload(formData)
            .then(res => {
                setImage(res.data.filePath);
                setStep(3);
            })
            .catch(err => alert(err));
        }
        else setStep(3);
    }
    const handlePrev = () => setStep(1);
    
    return (
        <>
            <div className="pt-6 text-2xl font-bold">Add a cover photo</div>
            <div className="pt-3 text-center text-gray-500">A high-quality photo will help tell your story.</div>
            <input ref={el => imageInput = el} type="file" accept="image/*" onChange={handleChange} className="hidden" />
            {
                photo ? <img onClick={handleClick} src={photo} className="w-full mt-6 border-2 border-teal-700 cursor-pointer" alt="" /> :
                <div className="flex flex-col w-full pt-6">
                    <div className="pb-1 font-bold">Cover Image*</div>
                    <div onClick={handleClick} className="border-[1px] bg-white flex items-center justify-center px-2 cursor-pointer">
                        <FiPaperclip size={20} className="rotate-45" />
                        <div className="w-full px-3 py-2 text-gray-500">Attach or drag and drop file</div>
                    </div>
                </div>
            }
            <button onClick={handleNext} className={`w-full py-2 mt-6 text-white ${photo ? "bg-teal-700" : "bg-teal-700/50 cursor-default"}`}>Save</button>
            <button onClick={handlePrev} className="flex items-center justify-center w-full py-2 mt-3 bg-white">
                <FiArrowLeft size={16} />
                <div className="pl-1 font-bold">Go back</div>
            </button>
        </>
    )
}

export default FundPhoto;