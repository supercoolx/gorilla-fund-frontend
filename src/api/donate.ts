import API from "./config";

const DonateAPI = {
    create: data => API.post('/donate/create', data),
}

export default DonateAPI;