import React from "react";
import { URL } from "libs/constants";
import Home from "views/Home";
import Login from "views/auth/Login";
import Signup from "views/auth/Signup";
import Email from "views/auth/Email";
import Reset from "views/auth/Reset";
import Verify from "views/auth/Verify";
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