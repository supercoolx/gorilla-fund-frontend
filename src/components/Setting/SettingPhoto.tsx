import React from "react";
import FundAPI from "api/fund";
import toast from "react-hot-toast";

const SettingPhoto = ({data, setData}) => {
    var imageInput;
    const imageType = ["image/png", "image/jpeg", "image/gif", "image/svg+xml"];
    const handleClick = () => imageInput.click();
    const handleChange = e => {
        const file = e.target.files[0];
        if(!(file && imageType.includes(file.type))) return;
        const formData = new FormData();
        formData.append('photo', file);
        FundAPI.photoUpload(formData)
        .then(res => {
            setData({ ...data, image: res.data.filePath });
        })
        .catch(err => toast.error(err.message));
    }
    
    return (
        <div className="w-full bg-slate-50">
            <div className="max-w-[900px] mx-auto px-3 py-5">
                <div className="flex flex-col items-center p-5 text-sm bg-white rounded-md">
                    <input ref={el => imageInput = el} type="file" accept="image/*" onChange={handleChange} className="hidden" />
                    <img src={data.image} className="border-2 border-teal-700 rounded-md" alt="" />
                    <button onClick={handleClick} className="px-10 py-3 mt-5 font-semibold text-white bg-teal-700 rounded-[4px]">Change Photo</button>
                </div>
            </div>
        </div>
    )
}

export default SettingPhoto;