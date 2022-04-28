import AdminAPI from "api/admin";
import React, { useContext, useEffect, useState } from "react";

const AdminContext = React.createContext<any>(undefined);

const AdminProvider = ({children}) => {
    const [ email, setEmail ] = useState<string>("");
    useEffect(() => {
        AdminAPI.check()
        .then(res => setEmail(res.data.email))
        .catch(() => {});
    }, []);

    return (
        <AdminContext.Provider value={{ email, setEmail }} >
            {children}
        </AdminContext.Provider>
    )
}

export const useAdminAuth = () => useContext(AdminContext);
export default AdminProvider;