function Skills() {
  const skills = [
    { name: "Python", level: "95%" },
    { name: "Machine Learning", level: "92%" },
    { name: "Deep Learning", level: "88%" },
    { name: "Generative AI", level: "90%" },
    { name: "React", level: "85%" },
    { name: "TypeScript", level: "82%" },
    { name: "Java", level: "80%" },
    { name: "MySQL", level: "82%" },
    { name: "Git & GitHub", level: "90%" },
    { name: "Prompt Engineering", level: "94%" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h4>MY SKILLS</h4>
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;