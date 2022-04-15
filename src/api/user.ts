import API from "./config";

const UserAPI = {
    docUpload: formData => API.post('/user/doc_upload', formData),
    avatarUpload: formData => API.post('/user/avatar_upload', formData),
    updateProfile: data => API.put('/user/profile', data),
    kyc: data => API.put('/user/kyc', data),
    changeEmailSetting: val => API.put('/user/email_setting', { val: val }),
    confirmWallet: address => API.post('/user/confirmWallet', { walletAddress: address }),
    updateWallet: address => API.put('/user/change_wallet', { walletAddress: address }),
    confirmEmail: email => API.post('/user/confirmEmail', { email })
}

export default UserAPI;