import API from "./config";

const UserAPI = {
    docUpload: formData => API.post('/user/doc_upload', formData),
    kyc: data => API.put('/user/kyc', data),
    changeEmailSetting: val => API.put('/user/email_setting', { val: val }),
    confirmWallet: address => API.post('/user/confirmWallet', { walletAddress: address })
}

export default UserAPI;