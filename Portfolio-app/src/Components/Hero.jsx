import React from "react";

export default function Hero() {
  return (
    <>
      <div id="hero">
        <section className="container d-flex mt-5">
          <h1 className="hero-title">
            Hi, my name is{" "}
            <span className="text-color-main name">isha patel</span>
            <br />
            I'm the full-stack Developer.
            <br />

            <span className="fs-6">Lorem ipsum dolor sit amet, consectetur adipisicing  elit. Magni nesciunt explicabo numquam. Libero nam<br />  sequibr  dolorem recusandae illum dignissimos quod.Lorem ipsum dolor sit amet, consectetur adipisicing  elit. <br />Magni nesciunt explicabo numquam. Libero nam sequibr   dolorem recusandae illum dignissimos quod.</span>
          </h1>
          <img className="rounded-circle"
            src="https://voca-land.sgp1.cdn.digitaloceanspaces.com/0/1757655723636/5659d4e2.jpg"
            alt=""
          />
          {/* <p className="hero-cta">  
            <a className="cta-btn cta-btn--hero" href="#about">
              Get in touch
            </a>
          </p> */}
        </section>
        <a href="#about" className="scroll-down-link" aria-label="scroll-down">
          <div className="scroll-down" />
        </a>
      </div>
    </>
  );
}
