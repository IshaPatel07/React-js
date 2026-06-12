import React from "react";
import { Routes, Route } from "react-router";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/contact";
import Profile from "./screens/Profile";
import Nav from "./screens/Nav";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Nav" element={<Nav />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
