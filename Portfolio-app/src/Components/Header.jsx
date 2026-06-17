import React from "react";

export default function Header() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid justify-content-end">
          <ul className="nav ">
            <li className="nav-item">
              <a className="nav-link active fs-2" aria-current="page" href="#">
                information
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-2" href="#">
                projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-2" href="#">
                contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-2" aria-disabled="true">
                footer
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
