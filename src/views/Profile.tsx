import React from "react";
import NavAuth from "components/Nav/NavAuth";
import ProfileMenu from "components/Profile/ProfileMenu";
import Footer from "components/Footer/Footer";

const Profile = () => {
    return (
        <div>
            <NavAuth />
            <ProfileMenu />
            <Footer />
        </div>
    )
}

export default Profile;