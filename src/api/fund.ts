import API from "./config";

const FundAPI = {
    photoUpload: formData => API.post('/fund/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } }),
    create: data => API.post('/fund/create', data)
}

export default FundAPI;