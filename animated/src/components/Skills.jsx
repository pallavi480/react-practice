import React from 'react';

const skills = [
  { name: 'HTML', level: '90%' },
  { name: 'CSS', level: '85%' },
  { name: 'JavaScript', level: '80%' },
  { name: 'React', level: '75%' },
  { name: 'Node.js', level: '70%' },
  { name: 'MongoDB', level: '65%' },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      {skills.map((skill) => (
        <div key={skill.name} className="skill-bar" data-aos="fade-right">
          <span>{skill.name}</span>
          <div className="progress">
            <div className="progress-fill" style={{ width: skill.level }}></div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
