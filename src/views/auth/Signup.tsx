import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import { URL } from "libs/constants";
import Auth from "api/auth";
import { useAuth } from "contexts/authContext";
import iconLogo from "assets/img/svg/logo.svg";
import iconMetamask from "assets/img/svg/metamask.svg";

const Signup = () => {
    const navigate = useNavigate();
    const [ name, setName ] = useState<string>("");
    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ valid, setValid ] = useState<boolean>(true);
    const [ error, setError ] = useState<string>("");
    const { logIn } = useAuth();

    const handleChangeName = e => setName(e.target.value);
    const handleChangeEmail = e => setEmail(e.target.value);
    const handleChangePassword = e => setPassword(e.target.value);

    const signUp = () => {
        if(!validator.isLength(name, { min: 2 })) {
            setValid(false);
            setError("Name must be at least 2 characters");
        }
        else if(!validator.isEmail(email)) {
            setValid(false);
            setError("Input email correctly.");
        }
        else if(!validator.isLength(password, { min: 8 })) {
            setValid(false);
            setError("Password must be at least 8 characters");
        }
        else {
            Auth.signup({ name, email, password })
            .then(res => {
                logIn(res.data.token);
                setValid(true);
                navigate(URL.EMAIL_VERIFY);
            })
            .catch(err => {
                setValid(false);
                if(err.response.status === 409) setError(err.response.data.message);
                else setError(err);
            });
        }
    }

    return (
        <div className="flex justify-center py-40 text-sm">
            <div className="flex flex-col items-center w-[350px]">
                <Link to={URL.HOME}><img src={iconLogo} className="w-8" alt="" /></Link>
                <div className="pt-6 text-2xl font-bold">Create an account</div>
                <div className="pt-3 text-gray-500">Welcome! You must be Ape Gorilla holder to sign up.</div>
                <div className="flex flex-col w-full pt-6">
                    <div className="pb-1 font-bold">Name*</div>
                    <input type="text" value={name} onChange={handleChangeName} className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter your name" />
                </div>
                <div className="flex flex-col w-full pt-6">
                    <div className="pb-1 font-bold">Email*</div>
                    <input type="email" value={email} onChange={handleChangeEmail} className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter your email" />
                </div>
                <div className="flex flex-col w-full py-6">
                    <div className="pb-1 font-bold">Password*</div>
                    <input type="password" value={password} onChange={handleChangePassword} className="w-full py-2 px-3 focus:outline-none border-[1px] border-slate-200" placeholder="Enter your password" />
                    <div className="pt-2 text-gray-500">Must be at least 8 characters.</div>
                </div>
                { !valid && <div className="w-full py-3 mb-6 text-center bg-red-400">{error}</div> }
                <button onClick={signUp} className="w-full py-2 font-bold text-white bg-teal-700">Sign up</button>
                <button className="flex justify-center w-full py-2 mt-3 border-[1px] border-slate-200">
                    <img src={iconMetamask} alt="" />
                    <div className="pl-1 font-bold border-slate-200">Sign in with Metamsk</div>
                </button>
                <div className="pt-6 text-gray-500">
                    Already have an account?
                    <Link to={URL.LOGIN} className="pl-1 font-bold text-teal-700">Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;