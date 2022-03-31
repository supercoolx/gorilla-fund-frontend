import Footer from "components/Footer/Footer";
import StartFundraising from "components/Footer/StartFundraising";
import Nav from "components/Nav/Nav";
import React from "react";

const NotFound = () => {
    return (
        <div>
            <Nav />
            <div className="py-10 text-5xl font-bold text-center bg-slate-50">404 ERROR</div>
            <Footer />
        </div>
    )
}

export default NotFound;