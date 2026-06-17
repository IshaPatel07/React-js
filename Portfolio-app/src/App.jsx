import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Signin from "./Screens/Singin";
import Signup from "./Screens/signup";

// const credintial = {
//   email = "isha@gmail.com",
//   pass = "09052024",
// }

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
export default App;
