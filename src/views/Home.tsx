import React from "react";
import Nav from 'components/Nav/Nav';
import HomeTop from "components/Home/HomeTop"
import HomeOverview from "components/Home/HomeOverview";
import HomeProjects from "components/Home/HomeProjects";
import HomeInvest from "components/Home/HomeInvest";
import HomeStories from "components/Home/HomeStories";
import HomeCommunity from "components/Home/HomeCommunity";
import StartFundraising from 'components/Footer/StartFundraising';
import Footer from 'components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Nav />
            <HomeTop />
            <HomeOverview />
            <HomeProjects />
            <HomeInvest />
            <HomeStories />
            <HomeCommunity />
			<StartFundraising />
			<Footer />
        </div>
    )
}

export default Home;