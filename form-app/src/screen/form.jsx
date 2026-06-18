import React from "react";

export default function Form() {
  return (
    <>
      <form>
        <div className="container mt-5  ">
          <h2 className="text-center">Student Register Form</h2>
          <hr />
          <div className="d-flex justify-content-center mt-3">
            <input type="text" placeholder="Enter Your Name" />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <input type="email" placeholder="Enter Your Email    " />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <input type="text" placeholder="Enter Your Phone" />
          </div>
          <div className="d-flex justify-content-center m-3 fs-5">
            <span className="fs-4 me-3">Gender :</span>
            <input className="" type="radio" name="gender" />
            mail
            <input className="" type="radio" name="gender" />
            Femail
          </div>
          <div className="d-flex justify-content-center m-3 fs-5">
            <span className="fs-4 me-3">Skills :</span>
            <input className="" type="checkbox" name="gender" />
                HTML
            <input className="" type="checkbox" name="gender" />
            CSS
          </div>
        </div>
      </form>
    </>
  );
}
