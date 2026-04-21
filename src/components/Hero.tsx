import Image from "next/image";

export default function Hero() {
  return (
    <header className="hero" aria-label="Introduction">
      <div className="container hero-container">
        <div className="hero-image-wrapper">
          <Image
            src="/assets/image.jpg"
            alt="Abrar Mahmud Hasan"
            width={200}
            height={240}
            className="profile-img"
            priority
          />
        </div>
        <div className="hero-content">
          <span className="greeting">Hello, I&apos;m</span>
          <h1 className="hero-name">
            Abrar Mahmud
            <br />
            Hasan
          </h1>
          <p className="subtitle">and I love building softwares</p>
          <p className="bio">
            Backend-focused AI engineer who loves building intelligent systems
            that don&apos;t just work — they last.
          </p>
          <div className="contact-links" role="list">
            <a
              href="https://www.linkedin.com/in/abrar-mahmud-hasan-75a630222/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              aria-label="LinkedIn profile"
            >
              <i className="fab fa-linkedin" aria-hidden="true" /> LinkedIn
            </a>
            <a
              href="https://github.com/AlchemistReturns"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              aria-label="GitHub profile"
            >
              <i className="fab fa-github" aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1Wvb6U7F29JNNOmgnnMHMfaOYNuVp3lYQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              aria-label="View resume"
            >
              <i className="fas fa-file-alt" aria-hidden="true" /> Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
