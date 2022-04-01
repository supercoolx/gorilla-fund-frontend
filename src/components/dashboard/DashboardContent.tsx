import React, { useEffect, useState } from "react";
import Donation from "components/dashboard/content/Donation";
import Comment from "components/dashboard/content/Comment";
import Update from "components/dashboard/content/Update";

const DashboardContent = () => {
    const [ index, setIndex ] = useState<number>(1);
    const [ content, setContent ] = useState<any>(<Donation />);
    const changeContent = i => (() => setIndex(i));

    useEffect(() => {
        index === 1 && setContent(<Donation />);
        index === 2 && setContent(<Comment />);
        index === 3 && setContent(<Update />);
    }, [index])

    return (
        <div className="flex flex-col text-sm text-gray-500 bg-white max-w-[876px] my-6 mx-auto">
            <div className="flex gap-5 px-6">
                <div onClick={changeContent(1)} className={"py-3 font-bold cursor-pointer" + (index === 1 ? " text-black border-b-2 border-teal-700" : "")}>Donations</div>
                <div onClick={changeContent(2)} className={"py-3 font-bold cursor-pointer" + (index === 2 ? " text-black border-b-2 border-teal-700" : "")}>Comments</div>
                <div onClick={changeContent(3)} className={"py-3 font-bold cursor-pointer" + (index === 3 ? " text-black border-b-2 border-teal-700" : "")}>Update</div>
            </div>
            <hr />
            { content }
        </div>
    )
}

export default DashboardContent;