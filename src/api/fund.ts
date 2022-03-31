import API from "./config";

const FundAPI = {
    photoUpload: formData => API.post('/fund/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } }),
    create: data => API.post('/fund/create', data),
    findByUid: uid => API.get('/fund/' + uid),
    topRated: count => API.get('/fund/top_rated', { params: { count: count }}),
    search: condition => API.get('/fund/search', { params: condition })
}

export default FundAPI;