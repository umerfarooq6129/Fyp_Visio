import React, {useState} from 'react'
import LoginBg from '../login1.png'
import { NavLink, useNavigate } from "react-router-dom"; 

import './index.css'
// import { application } from 'express';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginh = async (e) =>{
        e.preventDefault();

        const res = await fetch('./login.js',{
            method : "POST",
            headers:{
                "content-Type":"application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = res.json();

        if (res.status === 400 || !data){
            window.alert("Invalid Credientials");
        } else {
            window.alert("Login Succesfully");
            navigate.push("/");
        }
    }
    
    return (
        <>
            <div className="bg" style={{
                backgroundImage: `linear-gradient(to bottom, rgba(150, 0, 250, 0.1), rgba(0, 19, 100, 0)), url(${LoginBg}) `,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // opacity: 1,
                width:'100%',

                
            }} >
                <div className="Auth-form-container">
                    <form method='POST' className="Auth-form">
                        <div className="Auth-form-content">
                            <h2 className="Auth-form-title">Sign In</h2>
                            <div className="form-group mt-3">
                                <label>Email address</label>
                                <input
                                    type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                                    className="form-control mt-1" name='email'
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                                    className="form-control mt-1"   name='password'
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" onClick={loginh} className="btn btn">
                                    
                                    {/* <NavLink to="/main2" style={{color:'white',textDecoration:'none'}}>Submit</NavLink> */}
                                    <NavLink  style={{color:'white',textDecoration:'none'}}>Submit</NavLink>
                                </button>
                                
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login