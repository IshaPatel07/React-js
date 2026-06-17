import React from "react";

export default function contact() {
  return (
    <>
      <h1 className="d-flex justify-content-center">contact uss</h1>

      <div className="container">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Your name"
              aria-label="First name"
            />
          </div>
          <div className="col">
            <input
              type="numbers"
              className="form-control"
              placeholder="Number"
              aria-label="Number"
            />
          </div>
        </div>
        <div className="input-group mb-3 mt-4">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 100 }}
            defaultValue={""}
          />
          <label htmlFor="floatingTextarea2">Query</label>
        </div>
      </div>
    </>
  );
}
