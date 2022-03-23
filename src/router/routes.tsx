import React from "react";
import { URL } from "libs/constants";
import Home from "views/Home";
import Search from "views/Search";
import Fundraising from "views/Fundraising";
import Fund from "views/Fund";
import NotFound from "views/NotFound";

const routes = [
    {
        component: <Home />,
        url: URL.HOME
    },
    {
        component: <Search />,
        url: URL.SEARCH
    },
    {
        component: <Fundraising />,
        url: URL.FUNDRAISE
    },
    {
        component: <Fund />,
        url: URL.FUND
    },
    {
        component: <NotFound />,
        url: "*"
    }
];

export default routes;