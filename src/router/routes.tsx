import React from "react";
import { URL } from "../libs/constants";
import Home from "../views/Home";
import NotFound from "../views/NotFound";

const routes = [
    {
        component: <Home />,
        url: URL.HOME
    },
    {
        component: <NotFound />,
        url: "*"
    }
];

export default routes;