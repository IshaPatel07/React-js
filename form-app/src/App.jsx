import React from "react";
import { Route, Routes } from "react-router";
import Form from "./screen/form";
import User from "./screen/user";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}
