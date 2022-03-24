import API from "./config";

const Auth = {
    login: credentials => API.post('/auth/signin', credentials),
    signup: credentials => API.post('/auth/signup', credentials),
    me: () => API.get('/auth/me')
}

export default Auth;