export default function Education() {
  return (
    <section
      id="education"
      className="section"
      aria-labelledby="education-title"
    >
      <div className="container">
        <h2 className="section-title" id="education-title">
          Education &amp; Certifications
        </h2>
        <div className="timeline">
          <article className="timeline-item">
            <header className="timeline-header">
              <h3>Islamic University of Technology</h3>
              <time className="date" dateTime="2027">
                Graduating 2027
              </time>
            </header>
            <p>B.Sc. in Computer Science &amp; Engineering</p>
            <p className="highlight">CGPA: 3.80 / 4.00</p>
          </article>

          <article className="timeline-item">
            <h3>Datacamp Certifications</h3>
            <ul className="cert-list">
              <li>
                <a
                  href="https://www.datacamp.com/statement-of-accomplishment/course/66101d402d66aa0c8e17e06d3e4b9be4f036d2e6?raw=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link"
                >
                  Supervised Learning with Scikit-learn{" "}
                  <i
                    className="fas fa-external-link-alt"
                    aria-hidden="true"
                    style={{ fontSize: "0.7em" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.datacamp.com/statement-of-accomplishment/course/150de95409cb1339846831cbc4121f1446f19aab?raw=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link"
                >
                  Unsupervised Learning in Python{" "}
                  <i
                    className="fas fa-external-link-alt"
                    aria-hidden="true"
                    style={{ fontSize: "0.7em" }}
                  />
                </a>
              </li>
            </ul>
          </article>

          <article className="timeline-item">
            <h3>Other Certifications</h3>
            <ul className="cert-list">
              <li>
                <a
                  href="https://nextjs.org/learn/certificate?course=react-foundations&user=69091&certId=react-foundations-69091-1749562350365"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link"
                >
                  [Vercel] React Foundations{" "}
                  <i
                    className="fas fa-external-link-alt"
                    aria-hidden="true"
                    style={{ fontSize: "0.7em" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-18f822dd-11d5-4e90-89e0-5168a8ba2949/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link"
                >
                  [Udemy] The Web Developer Bootcamp{" "}
                  <i
                    className="fas fa-external-link-alt"
                    aria-hidden="true"
                    style={{ fontSize: "0.7em" }}
                  />
                </a>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
