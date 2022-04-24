import React, { useEffect, useState } from "react";
import FundAPI from "api/fund";
import NavAuth from "components/Nav/NavAuth";
import DashboardTop from "components/Dashboard/DashboardTop";
import DashboardFund from "components/Dashboard/DashboardFund";
import Footer from "components/Footer/Footer";

const Dashboard = () => {
    const [ funds, setFunds ] = useState<any[]>([]);

    useEffect(() => {
        FundAPI.getMyFunds().then(res => setFunds(res.data)).catch(err => alert(err.message));
    }, []);

    return (
        <div>
            <NavAuth />
            <DashboardTop funds={funds} />
            <DashboardFund funds={funds} />
            <Footer />
        </div>
    )
}

export default Dashboard;