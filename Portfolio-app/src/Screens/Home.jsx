import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Contact from "../Components/contact";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
