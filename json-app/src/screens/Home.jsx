import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({});

  const getTitle = (e) => setData({ ...data, title: e.target.value });
  const getNotes = (e) => setData({ ...data, notes: e.target.value });
  const updateField = (x) => setData(x);

  const handleSendUser = async () => {
    const res = await axios.post("http://localhost:3000/users", data);
    if (res.status == 201) {
      alert("user inserted successfully ! ");
    } else {
      alert("cant add user !");
    }
  };

  const handleFetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  };

  const handleDeleteUser = async (id) => {
    const res = await axios.delete("http://localhost:3000/users/" + id);
    handleFetchUsers();
  };

  const handleUpdateUser = async () => {
    const res = await axios.put("http://localhost:3000/users/" + data.id, data);
    handleFetchUsers();
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);
  return (
    <div className="container">
      <div className="d-flex m-3">
        <input className="m-3"
          value={data.title}
          onChange={getTitle}
          type="text"
          placeholder="Enter name"
        />
        <textarea
          value={data.notes}
          onChange={getNotes}
          className="form-control"
          style={{ height: 70 }}
        />
        <button
          className=" m-3 btn btn-primary"
          onClick={() => {
            handleSendUser();
            handleFetchUsers();
          }}
        >
          Submit
        </button>
      </div>
      <div className="d-flex">
        {users.length == 0 ? (
          <p>No Users</p>
        ) : (
          users.map((user, i) => (
            <div key={i} onClick={() => updateField(user)} className="card text-center m-3 " style={{ width: "18rem" }}>
              <div className="card-body">
                <h2 className="card-title" >{user.title}</h2>
                <p className="card-text">
                  {user.notes}
                </p>
                <button className="btn btn-primary" onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>
              </div>
            </div>
            // 
          ))
        )}
      </div>
    </div>
  );
}
