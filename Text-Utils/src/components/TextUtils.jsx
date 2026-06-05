import React, { useState } from "react";

export default function TextUtils() {
  const [text, setText] = useState("");
  const [time, setTime] = useState(0);
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-3">Text Utils</h2>
        <div className="form-floating my-4">
          <textarea
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 100 }}
            defaultValue={""}
          />
          <label htmlFor="floatingTextarea2">content</label>
        </div>
        <hr />
        <p>{text}</p>
        <ul>
          <li>Total Lenth : {text.length}</li>
          <li>Total Words Lenth : {text.split(" ").length}</li>
          <li>Reading speed : {time.toFixed(1)} sec</li>
        </ul>
        <div>
          <button
            onClick={() => {
              setText(text.toUpperCase());
            }}
            className="btn btn-primary mt-4 mx-3"
          >
            Uppercase
          </button>
          <button
            onClick={() => {
              setText(text.toLowerCase());
            }}
            className="btn btn-primary mt-4 "
          >
            Lowercase
          </button>
          <button
            onClick={() => {
              setTime((text.split(" ").length / 150) * 60);
            }}
            className="btn btn-primary mt-4 mx-3"
          >
            Reeding speed
          </button>
        </div>
      </div>
    </>
  );
}