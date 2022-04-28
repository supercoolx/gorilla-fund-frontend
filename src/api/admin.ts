import API from "./config";

const AdminAPI = {
    funds: () => API.get('/admin/funds'),
    fund: (uid: string) => API.get('/admin/fund/' + uid),
    approve: (uid: string) => API.put('/admin/approve/' + uid)
}

export default AdminAPI;