import React from "react";
import { Link } from "react-router-dom";
import { URL } from "libs/constants";

const StartFundraising = () => {
    return (
        <div className="flex flex-col items-center px-3 py-12 bg-teal-700 gap-7">
            <div className="text-2xl font-bold text-center text-white">Ready to start fundraising?</div>
            <div className="flex flex-col items-center text-sm text-teal-50">
                <p className="text-center">"My life has changed forever because of Norma and what happened.</p>
                <p className="text-center">It gave me hope again. Changing someone's life will change your own forever."</p>
            </div>
            <Link to={URL.HOME} className="px-5 py-2 font-bold text-teal-700 bg-white">Start a GorillaFund</Link>
        </div>
    )
}

export default StartFundraising;