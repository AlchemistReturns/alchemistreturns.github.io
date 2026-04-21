export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} Abrar Mahmud Hasan</p>
        <div className="social-links">
          <a
            href="https://github.com/AlchemistReturns"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <i className="fab fa-github" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/abrar-mahmud-hasan-75a630222/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <i className="fab fa-linkedin" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
