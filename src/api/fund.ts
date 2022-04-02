import API from "./config";

const FundAPI = {
    create: data => API.post('/fund/create', data),
    update: data => API.put('/fund/' + data.uid, data),
    findByUid: uid => API.get('/fund/' + uid),
    myFund: uid => API.get('/fund/my/' + uid),
    getMyFunds: () => API.get('/fund/get_by_user'),
    topRated: count => API.get('/fund/top_rated', { params: { count: count }}),
    search: condition => API.get('/fund/search', { params: condition }),
    photoUpload: formData => API.post('/fund/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } }),
    delete: uid => API.delete('/fund/' + uid)
}

export default FundAPI;