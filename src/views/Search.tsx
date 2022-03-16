import React from "react";
import Nav from 'components/Nav/Nav';
import SearchTop from "components/Search/SearchTop";
import SearchButtons from "components/Search/SearchButtons";
import SearchProjects from "components/Search/SearchProjects";
import StartFundraising from 'components/Footer/StartFundraising';
import Footer from 'components/Footer/Footer';

const Search = () => {
    return (
        <div className="">
            <Nav />
            <SearchTop />
            <SearchButtons />
            <SearchProjects />
			<StartFundraising />
			<Footer />
        </div>
    )
}

export default Search;