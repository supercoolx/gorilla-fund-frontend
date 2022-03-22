import React, { useState } from "react";
import { FiPaperclip } from "react-icons/fi";

const FundPhoto = () => {
    const imageType = ["image/png", "image/jpeg", "image/gif", "image/svg+xml"];
    const [ image, setImage ] = useState<any>("");
    const fileReader = new window.FileReader();
    fileReader.onload = () => setImage(fileReader.result);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if(!(file && imageType.includes(file.type))) {
            setImage("");
            return;
        }
        fileReader.readAsDataURL(file);
    }
    
    return (
        <>
            <div className="pt-6 text-2xl font-bold">Add a cover photo</div>
            <div className="pt-3 text-center text-gray-500">A high-quality photo will help tell your story.</div>
            {
                image ? <img src={image} className="pt-6" alt="" /> :
                <div className="flex flex-col w-full pt-6">
                    <div className="pb-1 font-bold">Cover Image*</div>
                    <div className="relative">
                        <input type="file" accept="image/*" id="image" onChange={handleChange} className="absolute w-full py-2 opacity-0"  />
                        <div className="border-[1px] bg-white flex items-center justify-center px-2">
                            <FiPaperclip size={20} className="rotate-45" />
                            <div className="w-full px-3 py-2 text-gray-500">Attach or drag and drop file</div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default FundPhoto;