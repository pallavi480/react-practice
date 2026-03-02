import React from 'react';
import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project3 from '../assets/project3.png';

const projects = [
  { name: 'Portfolio Website', img: Project1, tech: 'React, CSS', link: '#' },
  { name: 'E-commerce App', img: Project2, tech: 'MERN Stack', link: '#' },
  { name: 'Chat App', img: Project3, tech: 'React, Firebase', link: '#' },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((proj) => (
          <div key={proj.name} className="project-card" data-aos="zoom-in">
            <img src={proj.img} alt={proj.name} />
            <h3>{proj.name}</h3>
            <p>{proj.tech}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
