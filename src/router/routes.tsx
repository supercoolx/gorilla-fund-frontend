import React from "react";
import Login from "views/auth/Login";
import Search from "views/Search";
import { URL } from "libs/constants";
import Home from "views/Home";
import NotFound from "views/NotFound";
import Signup from "views/auth/Signup";

const routes = [
    {
        component: <Home />,
        url: URL.HOME
    },
    {
        component: <Login />,
        url: URL.LOGIN
    },
    {
        component: <Signup />,
        url: URL.SIGNUP
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