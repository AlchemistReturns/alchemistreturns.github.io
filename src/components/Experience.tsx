export default function Experience() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <h2 className="section-title" id="experience-title">
          Technical Experience
        </h2>

        <article className="card">
          <header className="timeline-header">
            <h3>Software Engineering Intern</h3>
            <time className="date" dateTime="2026-02">
              Feb 2026 — Present
            </time>
          </header>
          <p className="org-name">@ Intelsense.ai</p>
          <ul className="bullet-list">
            <li>
              Currently working with the frontend team to visualise backend APIs
              and develop interfaces that meet business requirements.
            </li>
          </ul>
        </article>

        <article className="card">
          <header className="timeline-header">
            <h3>Junior Software Engineer</h3>
            <time className="date" dateTime="2024-12">
              Dec 2024 — Sep 2025
            </time>
          </header>
          <p className="org-name">
            @ Shahrish Engineering &amp; Construction Limited
          </p>
          <ul className="bullet-list">
            <li>
              Designed and delivered production-grade web and ERP solutions
              using React, Tailwind CSS, and Django.
            </li>
            <li>
              Built the company&apos;s official website and internal
              supply-chain modules, improving workflows and reducing manual data
              handling by 90%.
            </li>
          </ul>
        </article>

        <h2
          className="section-title"
          id="leadership-title"
          style={{ marginTop: "3.5rem" }}
        >
          Leadership Experience
        </h2>

        <article className="card">
          <header className="timeline-header">
            <h3>Joint Secretary</h3>
            <time className="date" dateTime="2025-12">
              Dec 2025 — Present
            </time>
          </header>
          <p className="org-name">@ IUT Computer Society</p>
          <ul className="bullet-list">
            <li>
              Organised and supported technical workshops, coding competitions,
              and seminars for university students.
            </li>
            <li>
              Collaborated with cross-functional teams to manage event
              logistics, coordination, and member engagement.
            </li>
            <li>
              Managed documentation, communications, and execution of multiple
              seminars and workshops.
            </li>
          </ul>
        </article>

        <article className="card">
          <header className="timeline-header">
            <h3>General Secretary</h3>
            <time className="date" dateTime="2022-05">
              May 2022 — May 2023
            </time>
          </header>
          <p className="org-name">@ Notre Dame Science Club</p>
          <ul className="bullet-list">
            <li>
              Led administrative operations, meeting coordination, and
              inter-school event planning.
            </li>
            <li>
              Managed documentation, communications, and execution of science
              fairs and competitions.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
