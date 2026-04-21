import Image from "next/image";

type Project = {
  image: string;
  alt: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    image: "/assets/valerix.png",
    alt: "Valerix project screenshot",
    icon: "fas fa-server",
    title: "Valerix",
    description:
      "A Kubernetes-orchestrated microservices platform demonstrating service resilience, controlled failures, and production-style cloud deployment using Docker and AWS EKS.",
    tags: ["Microservices", "RabbitMQ", "Kubernetes", "AWS EKS"],
    links: [
      { label: "Code", href: "https://github.com/rawadhossain/Valerix" },
    ],
  },
  {
    image: "/assets/curiokids.png",
    alt: "CurioKids project screenshot",
    icon: "fas fa-child",
    title: "CurioKids",
    description:
      "AI-driven learning app for kids with personalised puzzles and progress tracking, built with React Native & Firebase.",
    tags: ["React Native", "Firebase", "AI"],
    links: [
      {
        label: "Code",
        href: "https://github.com/AlchemistReturns/CurioKids",
      },
    ],
  },
  {
    image: "/assets/healthx.png",
    alt: "HealthX project screenshot",
    icon: "fas fa-heart",
    title: "HealthX",
    description:
      "Hackathon-winning AI-powered application bridging the gap in medical support for Bangladesh's Hill Tracts and rural regions.",
    tags: ["React", "Node.js", "Firebase", "Gemini"],
    links: [
      {
        label: "Demo",
        href: "https://futurebuilders2025frontend.vercel.app/",
      },
      {
        label: "Code",
        href: "https://github.com/AlchemistReturns/FutureBuilders2025_IUT_CGPA_Doesnt_Matter",
      },
    ],
  },
  {
    image: "/assets/agriculture.png",
    alt: "Agri-Predictive Model screenshot",
    icon: "fas fa-seedling",
    title: "Agri-Predictive Model",
    description:
      "Supervised ML model to identify predictive soil attributes for crop classification using Python & Scikit-learn.",
    tags: ["Python", "Scikit-learn", "ML"],
    links: [
      {
        label: "Code",
        href: "https://github.com/AlchemistReturns/Predictive_modeling_for_agriculture",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <h2 className="section-title" id="projects-title">
          Featured Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="card project-card" key={project.title}>
              {/* <div className="project-thumb">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={720}
                  height={210}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div> */}
              <div className="project-body">
                <header className="card-header">
                  <i className={`${project.icon} project-icon`} aria-hidden="true" />
                  <h3>{project.title}</h3>
                </header>
                <p>{project.description}</p>
                <div className="tags" role="list">
                  {project.tags.map((tag) => (
                    <span className="tag" role="listitem" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <footer className="project-footer">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm"
                    >
                      {link.label}{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  ))}
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
