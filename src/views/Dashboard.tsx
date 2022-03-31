import React from "react";
import Nav from "components/Nav/Nav";
import DashboardTop from "components/dashboard/DashboardTop";
import DashboardContent from "components/dashboard/DashboardContent";
import Footer from "components/Footer/Footer";

const Dashboard = () => {
    return (
        <div className="bg-slate-100">
            <Nav />
            <DashboardTop />
            <DashboardContent />
            <Footer />
        </div>
    )
}

export default Dashboard;