import React from "react";
import { Link } from "react-router";

export default function Nav() {
  return (
    <>
      <div className="container d-flex justify-content-center my-5">
        <h1>Welcome to my Portfolio</h1>
      </div>
      <div className="container d-flex flex-column  my-5">
        
        <p className="fs-3 d-flex justify-content-center">
          Tap here to Enter in my Profile{" "}
          <Link className="btn btn-outline-success mx-3 btn-lg" to={"/Profile"}>
            Profile
          </Link>
        </p>
        <p className="fs-3 d-flex justify-content-center">
          Tap here to Enter About section{" "}
          <Link className="btn btn-outline-info btn-lg mx-3" to={"/About"}>
            about
          </Link>
        </p>
        <p className="fs-3 d-flex justify-content-center">
          Tap here to Enter in my contact{" "}
          <Link className="btn btn-outline-dark btn-lg mx-3" to={"/contact"}>
            contact
          </Link>
        </p>
      </div>
    </>
  );
}

//<nav className="my-3 container d-flex justify-content-center">
//

//   </nav>
