import React from "react";
import NavAuth from "components/Nav/NavAuth";
import DashboardTop from "components/Dashboard/DashboardTop";
import DashboardFund from "components/Dashboard/DashboardFund";
import Footer from "components/Footer/Footer";

const Dashboard = () => {

    return (
        <div>
            <NavAuth />
            <DashboardTop />
            <DashboardFund />
            <Footer />
        </div>
    )
}

export default Dashboard;