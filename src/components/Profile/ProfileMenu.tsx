import React from "react";

const ProfileMenu = ({index, setIndex}) => {
    const isActive = i => index === i ? ' font-bold text-teal-700 rounded-sm bg-teal-700/20' : ' text-gray-500 rounded-sm cursor-pointer hover:bg-teal-700/20 hover:text-teal-700';
    const setActive = i => (() => setIndex(i));
    return (
        <div className="w-full bg-white">
            <div className="max-w-[900px] mx-auto px-3">
                <div className="pt-3 text-lg font-bold">Settings</div>
                <div className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm">
                    <div className="flex gap-1">
                        <div onClick={setActive(0)} className={"px-3 py-2" + isActive(0)}>Profile</div>
                        <div onClick={setActive(1)} className={"px-3 py-2" + isActive(1)}>Password</div>
                        <div onClick={setActive(2)} className={"px-3 py-2" + isActive(2)}>Wallet</div>
                        <div onClick={setActive(3)} className={"px-3 py-2" + isActive(3)}>Notification</div>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-2 font-semibold bg-gray-300 rounded-sm hover:shadow-md">Discard changes</button>
                        <button className="px-3 py-2 font-semibold text-white bg-teal-700 rounded-sm hover:shadow-md">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileMenu;