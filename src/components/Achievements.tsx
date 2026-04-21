import Image from "next/image";

type Achievement = {
  image: string;
  alt: string;
  title: string;
  headline: string;
  detail: string;
  tags: string[];
};

const achievements: Achievement[] = [
  {
    image: "/assets/ac_valerix.jpg",
    alt: "Champion award at BUET CSE Fest 2026 Hackathon",
    title: "Champion",
    headline:
      "Became champion at the Microservice & DevOps Hackathon of BUET CSE Fest 2026.",
    detail:
      "Built Valerix, a Kubernetes-orchestrated microservices platform with service resilience and production-style cloud deployment.",
    tags: ["Hackathon", "Winner", "2026"],
  },
  {
    image: "/assets/ac_futurebuilder.jpg",
    alt: "1st Runner Up at Future Builders 2025",
    title: "1st Runner Up",
    headline: "Secured 2nd place at Future Builders 2025 Hackathon.",
    detail:
      "Built HealthX, an AI-powered medical support app for rural regions. Recognised for innovative use of Gemini AI.",
    tags: ["Hackathon", "Winner", "2025"],
  },
  {
    image: "/assets/ac_icpc.png",
    alt: "ACM ICPC Dhaka Regional participant",
    title: "Participant",
    headline: "ACM ICPC Dhaka Regionals",
    detail:
      "The thrill, pressure, and adrenaline of competing at this level reminded me why I love problem-solving and critical thinking.",
    tags: ["ACM ICPC", "Problem Solving", "2025"],
  },
  {
    image: "/assets/ac_diagra.png",
    alt: "HackCSB 2024 Finalist",
    title: "Finalist",
    headline: "HackCSB Hackathon",
    detail:
      "Achieved a top 7 finalist position out of 116 teams at the hackCSB hackathon.",
    tags: ["Finalist", "Hackathon", "2024"],
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section"
      aria-labelledby="achievements-title"
    >
      <div className="container">
        <h2 className="section-title" id="achievements-title">
          Achievements
        </h2>
        <div className="projects-grid">
          {achievements.map((item) => (
            <article className="card project-card" key={item.title + item.headline}>
              <div className="project-thumb">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={720}
                  height={210}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className="project-body">
                <header className="card-header">
                  <i
                    className="fas fa-trophy project-icon trophy-icon"
                    aria-hidden="true"
                  />
                  <h3>{item.title}</h3>
                </header>
                <p>{item.headline}</p>
                <p className="detail-text">{item.detail}</p>
                <div className="tags" role="list">
                  {item.tags.map((tag) => (
                    <span className="tag" role="listitem" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
