import API from "./config";

const KYC = {
    upload: formData => API.post('/kyc/upload', formData),
    create: data => API.post('/kyc/create', data)
}

export default KYC;