import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FundAPI from "api/fund";
import Nav from "components/Nav/Nav";
import MyFundTop from "components/MyFund/MyFundTop";
import MyFundContent from "components/MyFund/MyFundContent";
import Footer from "components/Footer/Footer";
import NotFound from "views/NotFound";

const MyFund = () => {
    const { uid } = useParams();
    const [ is404, set404 ] = useState<boolean>(true);
    useEffect(() => {
        FundAPI.myFund(uid).then(res => set404(false)).catch(err => set404(true));
    }, [uid]);

    return is404 ? <NotFound /> : (
        <div className="bg-slate-100">
            <Nav />
            <MyFundTop />
            <MyFundContent />
            <Footer />
        </div>
    )
}

export default MyFund;