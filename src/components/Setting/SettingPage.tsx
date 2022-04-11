import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FundAPI from "api/fund";
import { URL } from "libs/constants";
import SettingOverview from "components/Setting/SettingOverview";
import SettingPhoto from "components/Setting/SettingPhoto";
import SettingStory from "components/Setting/SettingStory";
import SettingNotification from "components/Setting/SettingNotification";
import { FiCheck, FiArrowLeft } from "react-icons/fi";

const SettingPage = () => {
    const { uid } = useParams();
    const [ data, setData ] = useState<any>({});
    const [ index, setIndex ] = useState<number>(1);
    const [ content, setContent ] = useState<any>();
    const changeContent = i => (() => setIndex(i));
    const updateFund = () => FundAPI.update(data).then(res => alert("Saved successfully.")).catch(err => alert(err.message));

    useEffect(() => {
        FundAPI.findByUid(uid).then(res => setData(res.data)).catch(err => {});
    }, [uid]);
    useEffect(() => {
        index === 1 && setContent(<SettingOverview data={data} setData={setData} />);
        index === 2 && setContent(<SettingPhoto data={data} setData={setData} />);
        index === 3 && setContent(<SettingStory data={data} setData={setData} />);
        index === 4 && setContent(<SettingNotification />);
    }, [index, data]);
    
    return (
        <div className="bg-white">
            <div className="bg-center bg-image" style={{backgroundImage: `url(${data.image})`}}>
                <div className="w-full bg-white bg-opacity-70">
                    <div className="flex gap-2 items-center py-6 max-w-[900px] mx-auto px-3 text-gray-800">
                        <FiArrowLeft size={16} />
                        <Link to={URL.MYFUND.replace(':uid', uid || "")} className="text-sm font-semibold opacity-100">Back to manage</Link>
                    </div>
                </div>
            </div>
            <div className="max-w-[900px] mx-auto px-3 flex flex-wrap justify-between items-end pt-3">
                <div className="pr-5">
                    <div className="text-lg font-bold text-black">Edit campaign</div>
                    <div className="text-sm text-gray-500">{data.name}</div>
                </div>
                <button onClick={updateFund} className="flex items-center gap-2 px-3 py-2 mt-3 text-white bg-teal-700">
                    <FiCheck />
                    <div className="text-sm font-semibold">Save changes</div>
                </button>
            </div>
            <div className="flex gap-5 mt-10 max-w-[900px] mx-auto px-3">
                <div onClick={changeContent(1)} className={`py-3 text-sm font-semibold hover:border-b-teal-700 hover:border-b-2${index === 1 ? " border-b-teal-700 border-b-2" : " cursor-pointer text-gray-500"}`}>Overview</div>
                <div onClick={changeContent(2)} className={`py-3 text-sm font-semibold hover:border-b-teal-700 hover:border-b-2${index === 2 ? " border-b-teal-700 border-b-2" : " cursor-pointer text-gray-500"}`}>Photo</div>
                <div onClick={changeContent(3)} className={`py-3 text-sm font-semibold hover:border-b-teal-700 hover:border-b-2${index === 3 ? " border-b-teal-700 border-b-2" : " cursor-pointer text-gray-500"}`}>Story</div>
                <div onClick={changeContent(4)} className={`py-3 text-sm font-semibold hover:border-b-teal-700 hover:border-b-2${index === 4 ? " border-b-teal-700 border-b-2" : " cursor-pointer text-gray-500"}`}>Notifications</div>
            </div>
            {content}
        </div>
    )
}

export default SettingPage;