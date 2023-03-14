import React, { useState } from "react";
import LoginBg from "../login1.png";

import { NavLink, useNavigate } from "react-router-dom";

import "./index.css";
// import { application } from 'express';

const Login = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 422 || !data) {
      window.alert("invalid Credentials");
    } else if (!name || !password) {
      window.alert("plz filled property");
    } else {
      window.alert("login Successfull");

      navigate("/main2");
    }
  };

  return (
    <>
      <div
        className="bg"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(150, 0, 250, 0.1), rgba(0, 19, 100, 0)), url(${LoginBg}) `,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // opacity: 1,
          width: "100%",
        }}
      >
        <div className="Auth-form-container">
          <form method="POST" className="Auth-form">
            <div className="Auth-form-content">
              <h2 className="Auth-form-title">Sign In</h2>
              <div className="form-group mt-3">
                {/* <label>Email address</label>
                                <input
                                    type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                                    className="form-control mt-1" name='email'
                                    placeholder="Enter email"
                                /> */}

                <input
                  type="text"
                  className="form-control mt-1"
                  name="name"
                  id="name"
                  autoComplete="on"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name*"
                ></input>
              </div>
              <div className="form-group mt-3">
                {/* <label>Password</label>
                                <input
                                    type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                                    className="form-control mt-1"   name='password'
                                    placeholder="Enter password"
                                /> */}
                <input
                  type="text"
                  className="form-control mt-1"
                  name="password"
                  id="password"
                  autoComplete="on"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your Password*"
                ></input>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" onClick={loginUser} className="btn btn">
                  {/* <NavLink to="/main2" style={{color:'white',textDecoration:'none'}}>Submit</NavLink> */}
                  <NavLink style={{ color: "white", textDecoration: "none" }}>
                    Submit
                  </NavLink>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
