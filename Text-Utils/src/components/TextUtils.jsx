import React from "react";

export default function TextUtils() {
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-3">Text Utils</h2>
        <div className="form-floating my-4">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 100 }}
            defaultValue={""}
          />
          <label htmlFor="floatingTextarea2">content</label>
        </div>
        <hr />
        <ul>
          <li>
            
          </li>
        </ul>
      </div>
    </>
  );
}
