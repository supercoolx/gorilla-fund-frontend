import React, { useEffect, useState } from "react";
import { Navigate, useLocation, createSearchParams } from "react-router-dom";
import Auth from "api/auth";
import { URL } from "libs/constants";
import NotFound from "views/NotFound";

const PrivatePage = ({ children }) => {
    const [ component, setComponent ] = useState<JSX.Element>(<></>);
    const { pathname, search } = useLocation();
    const params = createSearchParams({
        redirect: pathname + search
    }).toString();
    useEffect(() => {
        Auth.me()
        .then(res => setComponent(children))
        .catch(err => {
            if(err?.response?.status === 401) setComponent(<Navigate to={URL.LOGIN + '?' + params} />);
            else setComponent(<NotFound />);
        })
    }, [children, params]);
    
    return component;
}

export default PrivatePage;