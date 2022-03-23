import Footer from "components/Footer/Footer";
import StartFundraising from "components/Footer/StartFundraising";
import FundContent from "components/Fund/FundContent";
import FundDonations from "components/Fund/FundDonation";
import FundLeft from "components/Fund/FundLeft";
import FundProject from "components/Fund/FundProject";
import Nav from "components/Nav/Nav";
import React from "react";

const Fund = () => {

    return (
        <div className="bg-slate-50">
            <Nav />
            <div className="flex flex-col max-w-[900px] mx-auto">
                <div className="px-3">
                    <div className="pt-16 text-lg font-bold">Hexarchy - Historical Deck Building Strategy Royale</div>
                    <div className="py-6 pt-1 text-sm text-gray-500">An innovative historical 4x game. 1 to 10 players. One-hour games.</div>
                </div>
                <div className="flex flex-wrap gap-5 px-3">
                    <FundContent />
                    <FundLeft />
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