import React, { useEffect, useState } from "react";
import validator from "validator";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "libs/constants";
import Auth from "api/auth";
import { useAuth } from "contexts/AuthContext";
import iconLogo from "assets/img/svg/logo.svg";
import iconMetamask from "assets/img/svg/metamask.svg";

const Login = () => {
    var loginButton;
    var errMessage;
    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ error, setError ] = useState<string>("");
    const { logIn } = useAuth();
    const navigate = useNavigate();

    const handleChangeEmail = e => setEmail(e.target.value);
    const handleChangePassword = e => setPassword(e.target.value);

    const handleLogin = () => {
        loginButton.disabled = true;
        errMessage.style.display = 'none';
        if(!validator.isEmail(email)) {
            errMessage.style.display = 'block';
            setError("Input email correctly.");
            loginButton.disabled = false;
        }
        else if(!validator.isLength(password, { min: 8 })) {
            errMessage.style.display = 'block';
            setError("Password must be at least 8 characters");
            loginButton.disabled = false;
        }
        else {
            Auth.login({ email, password})
            .then(res => {
                logIn(res.data.token);
                navigate(URL.HOME);
                errMessage.style.display = 'none';
                loginButton.disabled = false;
            })
            .catch(err => {
                errMessage.style.display = 'block';
                loginButton.disabled = false;
                if(!err.response) setError("You're offline.");
                else if(err.response.data.message) setError(err.response.data.message);
                else setError(err.message);
            });
        }
    }

    useEffect(() => {
        Auth.me().then(res => navigate(URL.HOME)).catch();
    }, [navigate]);

    return (
        <div className="flex justify-center py-40 text-sm">
            <div className="flex flex-col items-center w-[350px]">
                <Link to={URL.HOME}><img src={iconLogo} className="w-8" alt="" /></Link>
                <div className="pt-6 text-2xl font-bold">Log in to your account</div>
                <div className="pt-3 text-gray-500">Welcome back! Please enter your details.</div>
                <div className="flex flex-col w-full pt-6">
                    <div className="pb-1 font-bold">Email</div>
                    <input type="email" value={email} onChange={handleChangeEmail} className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter your email" />
                </div>
                <div className="flex flex-col w-full pt-6">
                    <div className="pb-1 font-bold">Password</div>
                    <input type="password" value={password} onChange={handleChangePassword} className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter your password" />
                </div>
                <div className="flex justify-between w-full py-5">
                    <div className="flex items-center">
                        <input type="checkbox" name="rememeber" id="remember" className="w-4 h-4 rounded-none cursor-pointer" />
                        <label htmlFor="remember" className="pl-2 font-bold cursor-pointer">Remember me</label>
                    </div>
                    <Link to={URL.PASSWORD_EMAIL} className="font-bold text-teal-700">Forget password</Link>
                </div>
                <div ref={el => errMessage = el} className="hidden w-full py-3 mb-5 text-center bg-red-400">{error}</div>
                <button onClick={handleLogin} ref={el => loginButton = el} className="w-full py-2 font-bold text-white bg-teal-700 disabled:opacity-50">Sign in</button>
                <button className="flex justify-center w-full py-2 mt-3 border-[1px] border-slate-200">
                    <img src={iconMetamask} alt="" />
                    <div className="pl-1 font-bold border-slate-200">Sign in with Metamask</div>
                </button>
                <div className="pt-6 text-gray-500">
                    Don't have an account?
                    <Link to={URL.SIGNUP} className="pl-1 font-bold text-teal-700">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;