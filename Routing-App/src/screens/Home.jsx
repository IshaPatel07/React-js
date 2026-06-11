import React, { useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../screens/Nav";

const realemail = "isha@gmail.com";
const realpass = "09052024";

export default function Home() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <form className="container text-center my-5">
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
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
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>

        <button
          onClick={() => {
            if (realemail == email && realpass == pass) {
              navigate("/Nav");
            } else {
              alert("again enter email and pass");
            }
          }}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}
