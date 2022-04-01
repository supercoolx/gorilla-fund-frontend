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
import KYC from "views/KYC";
import Donate from "views/Donate";
import Dashboard from "views/Dashboard";
import Setting from "views/Setting";

const routes = [
    {
        url: URL.HOME,
        component: <Home />,
    },
    {
        url: URL.LOGIN,
        component: <Login />,
    },
    {
        url: URL.SIGNUP,
        component: <Signup />,
    },
    {
        url: URL.PASSWORD_EMAIL,
        component: <Email />,
    },
    {
        url: URL.PASSWORD_RESET,
        component: <Reset />,
    },
    {
        url: URL.EMAIL_VERIFY,
        component: <Verify />,
    },
    {
        url: URL.SEARCH,
        component: <Search />,
    },
    {
        url: URL.FUNDRAISE,
        component: <Fundraising />,
    },
    {
        url: URL.FUND,
        component: <Fund />,
    },
    {
        url: URL.DONATE,
        component: <Donate />,
    },
    {
        url: URL.KYC,
        component: <KYC />,
    },
    {
        url: URL.DASHBOARD,
        component: <Dashboard />,
    },
    {
        url: URL.SETTING,
        component: <Setting />
    },
    {
        url: "*",
        component: <NotFound />,
    }
];

export default routes;