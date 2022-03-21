import Auth from "api/auth";
import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext<any>(undefined);
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState<any>(undefined);
    const logIn = token => {
        localStorage.setItem('token', token);
        Auth.me().then(res => setUser(res.data));
    } 
    const logOut = () => {
        localStorage.removeItem('token');
        setUser(undefined);
    }

    useEffect(() => {
        const token = localStorage.getItem('token') || '';
        if (token) Auth.me().then(res => setUser(res.data));
    }, [])

    return (
        <AuthContext.Provider value={{ user, logIn, logOut }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;