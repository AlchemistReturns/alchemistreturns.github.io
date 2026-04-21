export default function Contact() {
  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <h2 className="section-title" id="contact-title">
          Get In Touch
        </h2>
        <p className="contact-desc">
          I love connecting with people, if you have any product ideas in mind
          that you want to turn into reality or just want to discuss, my inbox
          is always open.
        </p>
        <a href="mailto:abrarhasan2003@gmail.com" className="email-link">
          <i className="fas fa-envelope" aria-hidden="true" />{" "}
          abrarhasan2003@gmail.com
        </a>
      </div>
    </section>
  );
}
