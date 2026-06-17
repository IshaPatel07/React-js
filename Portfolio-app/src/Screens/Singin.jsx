import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import Home from "./Home";
import signup from "./signup";

const realemail = "isha@gmail.com";
const realpass = "09052024";

export default function Singin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const getemail = (e) => {
    setEmail(e.target.value);
  };

  const getpassword = (e) => {
    setPass(e.target.value);
  };

  const handlelogin = () => {
    if (realemail == email && realpass == pass) {
      navigate("/home");
    } else {
      alert("again enter email and pass");
    }
  };

  return (
    <>
      <form className="container text-center my-5 d-flex flex-column justify-content-center align-items-center">
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

        <p>
          Already have an account ? <Link to={"/signup"}>signup</Link>
        </p>
      </form>
    </>
  );
}
