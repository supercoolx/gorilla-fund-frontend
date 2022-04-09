import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavAuth from "components/Nav/NavAuth";
import Footer from "components/Footer/Footer";
import FundAPI from "api/fund";
import { URL } from "libs/constants";

const Dashboard = () => {
    const [ data, setData ] = useState<any[]>([]);

    useEffect(() => {
        FundAPI.getMyFunds().then(res => setData(res.data.funds)).catch(err => alert(err.message));
    }, []);

    return (
        <div>
            <NavAuth />
            <div className="w-full bg-slate-50">
                <div className="flex flex-col gap-3 max-w-[900px] mx-auto px-3 py-5">
                    {
                        data.map((item, key) => (
                            <Link to={URL.MYFUND.replace(':uid', item.uid)} className="p-5 text-sm bg-white shadow-lg" key={key}>
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;