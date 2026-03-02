import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import HeroBg from "../assets/hero-bg.png";
import Profile from "../assets/profile.png";

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Web Developer",
        "MERN Stack Developer",
        "Frontend Enthusiast",
      ],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <img src={Profile} alt="Profile" className="profile-img" />
      <h1>Hello, I'm Rudra</h1>

      <h2>
        <span ref={typedRef} className="typed-text"></span>
      </h2>

      <p>Building interactive and responsive websites.</p>
    </section>
  );
}

export default Hero;

