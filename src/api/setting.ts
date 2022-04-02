import API from "./config";

const SettingAPI = {
    changeEmailSetting: val => API.post('/fund/email_setting', { val: val })
}

export default SettingAPI;