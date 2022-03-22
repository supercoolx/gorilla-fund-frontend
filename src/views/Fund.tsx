import Footer from "components/Footer/Footer";
import StartFundraising from "components/Footer/StartFundraising";
import Nav from "components/Nav/Nav";
import React from "react";
import { useParams } from "react-router-dom";

const Fund = () => {
    const { id } = useParams<string>();

    return (
        <div>
            <Nav />
            <StartFundraising />
            <Footer />
        </div>
    )
}

export default Fund;