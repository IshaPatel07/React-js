import React from "react";
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <>
      <div className="container mt-5 bg-black rounded-3 ">
        <nav className="navbar p-2 bg-black d-flex justify-content-center ">
          <p className="fst-italic  text-secondary text-decoration-underline">@{year} isha patel</p>
        </nav>
      </div>
    </>
  );
}
