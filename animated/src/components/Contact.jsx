import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="mailto:rudra@example.com"><FaEnvelope /></a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </section>
  );
}

export default Contact;
