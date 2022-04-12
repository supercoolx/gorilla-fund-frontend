import React from "react";
import { MdLockOutline } from "react-icons/md";

const PasswordPage = () => {
    return (
        <div className="py-5 bg-slate-50">
            <div className="max-w-[900px] w-full mx-auto px-3">
                <div className="p-5 bg-white">
                    <div className="font-bold">Password and Security</div>
                    <div className="text-sm text-gray-500">Update your photo and personal details here.</div>
                </div>
                <hr />
                <div className="p-5 bg-white">
                    <div className="max-w-[400px] text-sm">
                        <div className="">
                            <div className="pb-2 font-bold">Current password</div>
                            <div className="flex rounded-sm bg-white w-full border-[1px] border-slate-200">
                                <div className="flex items-center justify-center px-3">
                                    <MdLockOutline className="text-gray-500" size={16} />
                                </div>
                                <input type="password" className="w-full py-2 pr-4 focus:outline-none" placeholder="Current password" />
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="pb-2 font-bold">New password</div>
                            <div className="flex rounded-sm bg-white w-full border-[1px] border-slate-200">
                                <div className="flex items-center justify-center px-3">
                                    <MdLockOutline className="text-gray-500" size={16} />
                                </div>
                                <input type="password" className="w-full py-2 pr-4 focus:outline-none" placeholder="New password" />
                            </div>
                            <div className="pt-1 text-gray-500">Must be at least 8 characters.</div>
                        </div>
                        <div className="pt-4">
                            <div className="pb-2 font-bold">Re-enter password</div>
                            <div className="flex rounded-sm bg-white w-full border-[1px] border-slate-200">
                                <div className="flex items-center justify-center px-3">
                                    <MdLockOutline className="text-gray-500" size={16} />
                                </div>
                                <input type="password" className="w-full py-2 pr-4 focus:outline-none" placeholder="Re-enter password" />
                            </div>
                            <div className="pt-1 text-gray-500">Password must match with new password.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordPage;