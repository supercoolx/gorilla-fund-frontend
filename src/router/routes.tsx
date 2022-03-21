import React from "react";
import Login from "views/auth/Login";
import Search from "views/Search";
import { URL } from "libs/constants";
import Home from "views/Home";
import NotFound from "views/NotFound";
import Signup from "views/auth/Signup";
import Email from "views/auth/Email";
import Reset from "views/auth/Reset";
import Verify from "views/auth/Verify";
import Fundraising from "views/Fundraising";

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
        component: <Email />,
        url: URL.PASSWORD_EMAIL
    },
    {
        component: <Reset />,
        url: URL.PASSWORD_RESET
    },
    {
        component: <Verify />,
        url: URL.EMAIL_VERIFY
    },
    {
        component: <Search />,
        url: URL.SEARCH
    },
    {
        component: <Fundraising />,
        url: URL.FUNDRAISING
    },
    {
        component: <NotFound />,
        url: "*"
    }
];

export default routes;