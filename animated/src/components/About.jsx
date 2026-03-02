import React from "react";
import Profile from "../assets/profile.png";

function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="about-container">
        <img src={Profile} alt="Pallavi" className="about-img" />

        <div className="about-content">
          <h2>About Me</h2>
          <h3>Pallavi — Web Developer | MERN Stack</h3>

          <p>
            I am a passionate Web Developer who loves building modern,
            responsive, and interactive web applications using clean
            and scalable code.
          </p>

          <p>
            I work with the MERN stack and enjoy creating animated,
            performance-optimized, and user-friendly websites.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
