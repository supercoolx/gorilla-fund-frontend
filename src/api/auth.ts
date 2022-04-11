import API from "./config";

const Auth = {
    login: credentials => API.post('/auth/signin', credentials),
    signup: credentials => API.post('/auth/signup', credentials),
    forgetPassword: (email: string) => API.post('/auth/forget_password', { email }),
    resetPassword: (email: string, token: string, password: string) => API.post('/auth/reset_password', { email, token, password }),
    verifyResetLink: (email: string, token: string) => API.post('/auth/verify_reset_link', { email, token }),
    setVerifyEmail: () => API.post('/auth/set_verify_email', {}),
    verifyEmail: (token: string) => API.post('/auth/verify_email', { token }),
    getMetamaskToken: (address: string) => API.post('/auth/getMetamaskToken', {address}),
    signinMetamask: credentials => API.post('/auth/signinMetamask', credentials),
    signupMetamask: credentials => API.post('/auth/signupMetamask', credentials),
    me: () => API.get('/auth/me')
}

export default Auth;