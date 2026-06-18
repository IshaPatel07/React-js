import React, { useEffect, useState } from "react";

export default function user() {
  const [data, setData] = useState();

  useEffect(() => {
    const student = JSON.parse(localStorage.getItem("studentdata"));
    setData(student);
  }, []);
  return (
    <>
      <div className="container text-center">
        <h2>Student Details</h2>

        <div className="">
          <p>Name : {data?.name}</p>
        </div>
        <div className="">
          <p> Email : {data?.email}</p>
        </div>
        <div className="">
          <p>Number : {data?.Phone}</p>
        </div>
        <div className="">
          <p>Gender : {data?.gender}</p>
        </div>
        <div className="">
          <p>Skill : {data?.skill?.join(", ")}</p>
        </div>
        <div className="">
          <p>City : {data?.gender}</p>
        </div>
        <div className="">
          <p>Addrest : {data?.addrest}</p>
        </div>
      </div>
    </>
  );
}
