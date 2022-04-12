import React, { useState } from "react";
import NavAuth from "components/Nav/NavAuth";
import ProfileMenu from "components/Profile/ProfileMenu";
import ProfilePage from "components/Profile/ProfilePage";
import PasswordPage from "components/Profile/PasswordPage";
import WalletPage from "components/Profile/WalletPage";
import NotificationPage from "components/Profile/NotificationPage";
import Footer from "components/Footer/Footer";

const Profile = () => {
    const [ index, setIndex ] = useState<number>(0);
    const pages = [
        <ProfilePage />,
        <PasswordPage />,
        <WalletPage />,
        <NotificationPage />
    ];

    return (
        <div>
            <NavAuth />
            <ProfileMenu index={index} setIndex={setIndex} />
            {pages[index]}
            <Footer />
        </div>
    )
}

export default Profile;