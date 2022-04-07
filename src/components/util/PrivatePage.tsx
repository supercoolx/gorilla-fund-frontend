import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Auth from "api/auth";
import { URL } from "libs/constants";
import NotFound from "views/NotFound";

const PrivatePage = ({ children }) => {
    const [ component, setComponent ] = useState<JSX.Element>(<></>);
    useEffect(() => {
        Auth.me()
        .then(res => setComponent(children))
        .catch(err => {
            if(err.response.status === 401) setComponent(<Navigate to={URL.LOGIN} />);
            else setComponent(<NotFound />);
        })
    }, []);
    
    return component;
}

export default PrivatePage;