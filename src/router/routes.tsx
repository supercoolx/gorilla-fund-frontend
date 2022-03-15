import React from "react";
import Search from "views/Search";
import { URL } from "../libs/constants";
import Home from "../views/Home";
import NotFound from "../views/NotFound";

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
        component: <NotFound />,
        url: "*"
    }
];

export default routes;