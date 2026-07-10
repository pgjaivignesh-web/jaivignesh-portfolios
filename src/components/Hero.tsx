import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="hero-left">

        <div className="hero-image">
          <img src={profile} alt="Jaivignesh" />
        </div>

        <h3>Hi, I'm</h3>

        <h1>Jaivignesh P G</h1>

        <h2>AI & Machine Learning Engineer</h2>

        <p>
          Passionate AI & ML student specializing in Machine Learning,
          Deep Learning, Generative AI, Python, React and Full Stack
          Development. I build intelligent solutions that solve
          real-world problems.
        </p>

        <div className="social-icons">

          <a
            href="https://github.com/pgjaivignesh-web"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/p-g-jai-vignesh-259473358"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          

        </div>

        <div className="hero-buttons">

          <a
  href="/resume.pdf"
  download="Jaivignesh_P_G_Resume.pdf"
  className="btn btn-primary"
>
  Download Resume
</a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;