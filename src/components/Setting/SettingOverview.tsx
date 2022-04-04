import React from "react";
import { useNavigate } from "react-router-dom";
import ReactSelect from "react-select";
import CurrencyInput from "react-currency-input-field";
import Toggle from "components/util/Toggle";
import CopyInput from "components/util/CopyInput";
import WalletAddressInput from "components/util/WalletAddressInput";
import FundAPI from "api/fund";
import { FUNDCATEGORY, URL } from "libs/constants";

const SettingOverview = ({data, setData}) => {

    const navigate = useNavigate();
    const changeName = e => setData({ ...data, name: e.target.value });
    const changeAmount = val => setData({ ...data, amount: val });
    const changeAddress = val => setData({ ...data, walletAddress: val  });
    const changeCategory = val => setData({ ...data, categoryId: val.value });
    const changeDonor = val => setData({ ...data, allowDonorComment: val });
    const changeVisitor = val => setData({ ...data, allowVisitorComment: val });
    const changeDonation = val => setData({ ...data, allowDonation: val });
    const changeSearch = val => setData({ ...data, allowSearch: val });

    const handleDelete = () => {
        let sure = window.confirm("Are you sure?");
        sure && FundAPI.delete(data.uid).then(res => navigate(URL.DASHBOARD)).catch(err => alert(err.message));
    }

    return (
        <div className="w-full bg-slate-50">
            <div className="max-w-[900px] mx-auto px-3 py-5">
                <div className="p-5 text-sm bg-white">
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <div className="pb-1 font-bold">Name</div>
                            <input type="text" value={data.name || ""} onChange={changeName} className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter fundraising name" />
                        </div>
                        <div className="flex-1">
                            <div className="pb-1 font-bold">Goal</div>
                            <CurrencyInput value={data.amount} onValueChange={changeAmount} prefix="$ " placeholder="Please enter your goal" className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" />
                        </div>
                    </div>
                    <div className="pt-4">
                        <div className="pb-1 font-bold">Category</div>
                        <ReactSelect options={FUNDCATEGORY} value={FUNDCATEGORY[data.categoryId]} onChange={changeCategory} />
                    </div>
                    <div className="pt-4">
                        <div className="pb-1 font-bold">Address</div>
                        <WalletAddressInput value={data.walletAddress || ""} onChange={changeAddress} />
                    </div>
                    <div className="pt-4">
                        <div className="pb-1 font-bold">Campaign link</div>
                        <CopyInput value={window.location.origin + URL.FUND.replace(':uid', data.uid)} />
                        <div className="pt-1 text-gray-500">This link can be only changed once. Changing your link does not break your previous link.</div>
                    </div>
                    <hr className="my-5" />
                    <div className="font-bold">Fundraising setting</div>
                    <div className="flex justify-between pt-5 font-semibold">
                        <div className="text-gray-700">Allow donors to leave comments on my fundraiser.</div>
                        <Toggle onChange={changeDonor} checked={data.allowDonorComment} />
                    </div>
                    <div className="flex justify-between pt-6 font-semibold">
                        <div className="text-gray-700">Allow visitors leave comments on my fundraiser.</div>
                        <Toggle onChange={changeVisitor} checked={data.allowVisitorComment} />
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between font-semibold">
                        <div className="text-gray-700">Allow donations to my fundraiser.</div>
                        <Toggle onChange={changeDonation} checked={data.allowDonation} />
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between pb-1 font-semibold">
                        <div className="text-gray-700">Remove from search results</div>
                        <Toggle onChange={changeSearch} checked={data.allowSearch} />
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
                        <button onClick={handleDelete} className="px-4 py-2 font-semibold text-white transition-all duration-200 bg-red-400 hover:bg-red-600 hover:shadow-md">Delete fundraiser</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingOverview;