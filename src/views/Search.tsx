import SearchButtons from "components/Search/SearchButtons";
import SearchProjects from "components/Search/SearchProjects";
import SearchTop from "components/Search/SearchTop";
import React from "react";

const Search = () => {
    return (
        <div className="">
            <SearchTop />
            <SearchButtons />
            <SearchProjects />
        </div>
    )
}

export default Search;