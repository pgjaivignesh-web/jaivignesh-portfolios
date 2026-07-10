function Contact() {
  return (
    <section id="contact" className="contact">

      <p className="section-subtitle">GET IN TOUCH</p>

      <h2 className="section-title">Contact Me</h2>

      <div className="contact-box">

        <div className="contact-item">
          <h3>📧 Email</h3>
          <p>pgjaivignesh@gmail.com</p>
        </div>

        <div className="contact-item">
          <h3>📱 Phone</h3>
          <p>+91 9003669312</p>
        </div>

        <div className="contact-item">
          <h3>📍 Location</h3>
          <p>Tamil Nadu, India</p>
        </div>

        <div className="contact-item">
          <h3>💼 LinkedIn</h3>

          <a
            href="https://www.linkedin.com/in/p-g-jai-vignesh-259473358"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;