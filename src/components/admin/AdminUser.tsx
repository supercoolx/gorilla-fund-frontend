import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Toggle from "components/util/Toggle";
import Loading from "components/util/Loading";
import CopyButton from "components/util/CopyButton";
import AdminAPI from "api/admin";
import { timeAgoFormat, getUserName } from "libs/utils";

const AdminUser = () => {
    const [ users, setUsers ] = useState<any[]>();
    const loadData = () => {
        AdminAPI.users()
        .then(res => setUsers(res.data))
        .catch(err => toast.error(err.message));
    }
    const onDelete = (id: number) => {
        return () => AdminAPI.deleteUser(id)
        .then(res => {
            loadData();
            let message = res.data.deleted ? "Disabled successfully." : "Recovered successfully.";
            toast.success(message);
        })
        .catch(err => toast.error(err.message));
    }

    useEffect(loadData, []);

    return (
        <div className="flex flex-col gap-2 px-5 py-5">
            {
                users ? (
                    users.length ?
                    users.map((user, key) => (
                        <div key={key} className="rounded-[4px] hover:shadow-md border">
                            <div className="px-3 py-2 flex items-center justify-between text-white rounded-t-[4px] bg-teal-700">
                                <div className="flex items-center gap-3 cursor-pointer">
                                    <img src={user?.avatar} alt="" className="w-8 h-8 bg-teal-300 rounded-full" />
                                    <div>{getUserName(user)}</div>
                                </div>
                                <div>Joined {timeAgoFormat(user.createdAt)}</div>
                            </div>
                            <div className="px-3 my-2 text-gray-600">
                                { user.username && <div>Username: {user.username}</div>}
                                { user.firstName && <div>Full Name: {user.firstName + ' ' + user.lastName}</div>}
                                { user.walletAddress && <div className="flex items-center gap-3">
                                                            <div>Wallet Address: {user.walletAddress}</div>
                                                            <CopyButton text={user.walletAddress} />
                                                        </div>
                                }
                            </div>
                            <hr />
                            <div className="flex justify-between px-3 py-2 text-sm">
                                <div className="flex items-center gap-3">
                                    <div>Funds: {user.funds?.length}</div>
                                    <div>Donates: {user.donates?.length}</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span>Disabled:</span>
                                    <Toggle onChange={onDelete(user.id)} checked={user.deleted} />
                                </div>
                            </div>
                        </div>
                    )) :
                    <div>Nothing to show ...</div>
                ) : <Loading />
            }
        </div>
    )
}

export default AdminUser;