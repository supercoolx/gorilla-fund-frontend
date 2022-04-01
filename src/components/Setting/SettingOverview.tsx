import React from "react";
import ReactSelect from "react-select";
import CurrencyInput from "react-currency-input-field";
import Toggle from "components/util/Toggle";
import CopyInput from "components/util/CopyInput";

const SettingOverview = () => {
    const handleChange = () => {}

    return (
        <div className="w-full bg-slate-50">
            <div className="max-w-[900px] mx-auto px-3 py-5">
                <div className="p-5 text-sm bg-white">
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <div className="pb-1 font-bold">Name</div>
                            <input type="text" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter fundraising name" />
                        </div>
                        <div className="flex-1">
                            <div className="pb-1 font-bold">Goal</div>
                            <CurrencyInput prefix="$ " placeholder="Please enter your goal" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" />
                        </div>
                    </div>
                    <div className="pt-4">
                        <div className="pb-1 font-bold">Category</div>
                        <ReactSelect />
                    </div>
                    <div className="pt-4">
                        <div className="pb-1 font-bold">Address</div>
                        <input type="text" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Your ethereum address" />
                    </div>
                    <div className="pt-4">
                        <div className="pb-1 font-bold">Campaign link</div>
                        <CopyInput value="q8fb9-Hexarchy-Historical-Deck-Building-Strategy-Royale" />
                        <div className="pt-1 text-gray-500">This link can be only changed once. Changing your link does not break your previous link.</div>
                    </div>
                    <hr className="my-5" />
                    <div className="font-bold">Fundraising setting</div>
                    <div className="flex justify-between pt-5 font-semibold">
                        <div className="text-gray-700">Allow donors to leave comments on my fundraiser.</div>
                        <Toggle onChange={handleChange} checked={true} />
                    </div>
                    <div className="flex justify-between pt-6 font-semibold">
                        <div className="text-gray-700">Allow visitors leave comments on my fundraiser.</div>
                        <Toggle onChange={handleChange} checked={true} />
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between font-semibold">
                        <div className="text-gray-700">Allow donations to my fundraiser.</div>
                        <Toggle onChange={handleChange} checked={true} />
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between pb-1 font-semibold">
                        <div className="text-gray-700">Remove from search results</div>
                        <Toggle onChange={handleChange} checked={false} />
                    </div>
                    <div className="text-xs text-gray-500">Your fundraiser will not appear in online search engines or GoFundMe search results.</div>
                    <div className="text-xs text-gray-500">AnyOne with a link will still be able to view the fundraiser.</div>
                </div>
                <div className="flex items-center justify-between p-5 mt-5 text-sm bg-white">
                    <div className="">
                        <div className="pb-1 font-bold">Delete my fundraiser</div>
                        <div className="text-xs text-gray-500">You will no longer have access to this fundraiser after deleting.</div>
                        <div className="text-xs text-gray-500">If you received donations, your donors will still be able to view a summary.</div>
                    </div>
                    <div className="">
                        <button className="px-4 py-2 font-semibold text-white bg-red-400">Delete fundraiser</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingOverview;