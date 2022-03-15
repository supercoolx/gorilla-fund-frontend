import React from "react";
import HomeTop from "components/Home/HomeTop"
import HomeOverview from "components/Home/HomeOverview";
import HomeProjects from "components/Home/HomeProjects";
import HomeInvest from "components/Home/HomeInvest";
import HomeStories from "components/Home/HomeStories";
import HomeCommunity from "components/Home/HomeCommunity";

const Home = () => {
    return (
        <div>
            <HomeTop />
            <HomeOverview />
            <HomeProjects />
            <HomeInvest />
            <HomeStories />
            <HomeCommunity />
        </div>
    )
}

export default Home;