export default function Skills() {
  const skillGroups = [
    {
      icon: "fas fa-code",
      title: "Languages",
      skills: ["Golang", "JavaScript", "Python", "C++", "C#", "Java", "SQL"],
    },
    {
      icon: "fas fa-layer-group",
      title: "Frameworks",
      skills: [
        "Gin",
        "React",
        "React Native",
        "Next.js",
        "Spring Boot",
        "Django",
        "MERN",
      ],
    },
    {
      icon: "fas fa-tools",
      title: "Tools",
      skills: [
        "Git",
        "Docker",
        "Kubernetes",
        "RabbitMQ",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      icon: "fas fa-brain",
      title: "AI & ML",
      skills: [
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "TensorFlow",
      ],
    },
  ];

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <h2 className="section-title" id="skills-title">
          Technical Skills
        </h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="card skill-card" key={group.title}>
              <h3>
                <i className={group.icon} aria-hidden="true" /> {group.title}
              </h3>
              <div className="tags" role="list">
                {group.skills.map((skill) => (
                  <span className="tag" role="listitem" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
