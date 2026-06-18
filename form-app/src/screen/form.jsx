import React, { useState } from "react";
import { useNavigate } from "react-router";
import user from "./user";

export default function Form() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({ skill: [] });

  const getName = (e) => {
    setStudent({ ...student, name: e.target.value });
  };
  const getEmail = (e) => {
    setStudent({ ...student, email: e.target.value });
  };
  const getPhone = (e) => {
    setStudent({ ...student, phone: e.target.value });
  };
  const getGender = (e) => {
    setStudent({ ...student, gender: e.target.value });
  };
  const getSkills = (e) => {
    setStudent({ ...student, skill: [...student.skill, e.target.value] });
  };
  const getCity = (e) => {
    setStudent({ ...student, city: e.target.value });
  };
  const getAddrest = (e) => {
    setStudent({ ...student, addrest: e.target.value });
  };

  const formValid =
    student.name &&
    student.email &&
    student.phone &&
    student.gender &&
    student.skill &&
    student.city &&
    student.addrest;

  const handlesubbmit = () => {
    navigate("/user");
    disabled = !formValid;
    localStorage.setItem("studentdata", JSON.stringify(student));
  };

  return (
    <>
      <form>
        <div className="container mt-5  ">
          <h2 className="text-center">Student Register Form</h2>
          <hr />
          <div className="d-flex justify-content-center mt-3">
            <input
              onChange={getName}
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <input
              onChange={getEmail}
              type="email"
              placeholder="Enter Your Email    "
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <input
              onChange={getPhone}
              type="text"
              placeholder="Enter Your Phone"
            />
          </div>
          <div className="d-flex justify-content-center m-3 fs-5">
            <span className="fs-4 me-3">Gender :</span>
            <input
              onChange={getGender}
              className=""
              value={"male"}
              type="radio"
              name="gender"
            />
            mail
            <input
              onChange={getGender}
              className=""
              value={"female"}
              type="radio"
              name="gender"
            />
            Femail
          </div>
          <div className="d-flex justify-content-center fs-5">
            <span className="fs-4  ">Skills :</span>
            <input
              onChange={getSkills}
              className=" m-2"
              value={"HTML"}
              type="checkbox"
              name="gender"
            />
            HTML
            <input
              onChange={getSkills}
              className="m-2"
              value={"CSS"}
              type="checkbox"
              name="gender"
            />
            CSS
            <input
              onChange={getSkills}
              className="m-2"
              value={"JAVASCRIPT"}
              type="checkbox"
              name="gender"
            />
            JS
            <input
              onChange={getSkills}
              className="m-2"
              value={"REACTJS"}
              type="checkbox"
              name="gender"
            />
            ReactJS
          </div>
          <div className="d-flex justify-content-center">
            <span className="fs-4  ">City :</span>
            <select onChange={getCity}>
              <option value="Surat">Surat</option>
              <option value="Ahmdabad">Ahmdabad</option>
              <option value="baroda">baroda</option>
              <option value="gadhinagar">Gandhinagar</option>
            </select>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <textarea onChange={getAddrest} placeholder="Addrest"></textarea>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button onClick={handlesubbmit} className="btn btn-primary">
              Subbmit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
