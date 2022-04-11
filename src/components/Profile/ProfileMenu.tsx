import React from "react";

const ProfileMenu = () => {
    return (
        <div className="w-full bg-white">
            <div className="max-w-[900px] mx-auto px-3">
                <div className="pt-3 font-bold">Settings</div>
                <div className="flex items-center justify-between pt-3 text-sm">
                    <div className="flex gap-1">
                        <div className="px-3 py-2 font-bold text-teal-700 rounded-sm cursor-pointer bg-teal-700/20">Profile</div>
                        <div className="px-3 py-2 text-gray-500 rounded-sm cursor-pointer hover:bg-teal-700/20 hover:text-teal-700">Password</div>
                        <div className="px-3 py-2 text-gray-500 rounded-sm cursor-pointer hover:bg-teal-700/20 hover:text-teal-700">Wallet</div>
                        <div className="px-3 py-2 text-gray-500 rounded-sm cursor-pointer hover:bg-teal-700/20 hover:text-teal-700">Notification</div>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-2 font-semibold bg-gray-300 rounded-sm">Discard changes</button>
                        <button className="px-3 py-2 font-semibold text-white bg-teal-700 rounded-sm">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileMenu;