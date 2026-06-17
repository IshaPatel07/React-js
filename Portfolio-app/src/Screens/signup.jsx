import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import Home from "./Home";
import signup from "./signup";

const realemail = "";
const realpass = "";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const getemail = (e) => {
    setEmail(e.target.value);
  };
  const getName = (e) => {
    setName(e.target.value);
  };

  const getpassword = (e) => {
    setPass(e.target.value);
  };

  const handlelogin = () => {
    if (name && email && pass) {
      navigate("/Home");
    } else {
      alert("again enter email and pass");
    }
  };

  return (
    <>
      <form className="container text-center my-5 d-flex flex-column justify-content-center align-items-center">
        <div className="mb-3 container">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter your name
          </label>
          <input
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter your Name"
            onChange={getName}
          />
        </div>
        <div className="mb-3 container">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your Email"
            onChange={getemail}
          />
        </div>
        <div className="mb-3 container">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your password"
            onChange={getpassword}
          />
        </div>

        <button onClick={handlelogin} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
