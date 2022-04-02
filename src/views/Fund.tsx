import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FundAPI from "api/fund";
import Nav from "components/Nav/Nav";
import StartFundraising from "components/Footer/StartFundraising";
import FundContent from "components/Fund/FundContent";
import FundDonations from "components/Fund/FundDonation";
import FundLeft from "components/Fund/FundLeft";
import FundProject from "components/Fund/FundProject";
import Footer from "components/Footer/Footer";
import NotFound from "views/NotFound";

const Fund = () => {
    const { uid } = useParams();
    const [ data, setData ] = useState<any>({});
    const [ error, setError ] = useState<boolean>(false);
    
    useEffect(() => {
        FundAPI.findByUid(uid)
        .then(res => setData(res.data))
        .catch(err => setError(true));
    }, [uid]);

    return error ? <NotFound /> : (
        <div className="bg-slate-50">
            <Nav />
            <div className="flex flex-col max-w-[900px] mx-auto">
                <div className="px-3">
                    <div className="pt-16 text-lg font-bold">{data.name}</div>
                    <div className="py-6 pt-1 text-sm text-gray-500">{data.headline}</div>
                </div>
                <div className="flex flex-wrap gap-5 px-3">
                    <FundContent photo={data.image} categoryId={data.categoryId} date={data.createdAt} story={data.description} />
                    <FundLeft uid={data.uid} donate={527260} goal={data.amount} />
                </div>
                <hr className="my-5" />
                <FundDonations />
                <FundProject />
            </div>
            <StartFundraising />
            <Footer />
        </div>
    )
}

export default Fund;