function Certificates() {
  const certificates = [
    {
      title: "Introduction to Large Language Models",
      file: "/Certificate/Introduction To Large Language Models.jpeg",
    },
    {
      title: "Introduction to AI",
      file: "/Certificate/Introduction To AI.jpeg",
    },
    {
      title: "Introduction to Generative AI",
      file: "/Certificate/Introduction To Generative AI.jpeg",
    },
    {
      title: "Introduction to Responsible AI",
      file: "/Certificate/Introduction To Responsible AI.jpeg",
    },
    {
      title: "AI For Everyone",
      file: "/Certificate/AI For Everyone.jpeg",
    },
    {
      title: "Software Engineering in AI",
      file: "/Certificate/Software Engineering in Ai.jpeg",
    },
    {
      title: "Develop Generative AI Applications",
      file: "/Certificate/Develop Generative AI Applications.jpeg",
    },
    {
      title: "Generative AI and LLMs: Architecture and Data Preparation",
      file: "/Certificate/Generative AI and LLMs Architecture and Data Preparation.jpeg",
    },
    {
      title: "Database Structures and Management with MySQL",
      file: "/Certificate/Data structure and management with mysql.jpeg",
    },
    {
      title: "Discover The Art Of Prompting",
      file: "/Certificate/Discover The Art Of Prompting.jpeg",
    },
    {
      title: "Use AI Responsibly",
      file: "/Certificate/Use AI Responsibly.jpeg",
    },
    {
      title: "Maximize Productivity With AI Tools",
      file: "/Certificate/Maximize Productivity With AI Tools.jpeg",
    },
    {
      title: "Responsible AI: Applying AI Principles with Google Cloud",
      file: "/Certificate/Responsible AI Applying AI Principles with Google Cloud.jpeg",
    },
    {
      title: "Basic Data Descriptors, Statistical Distributions",
      file: "/Certificate/Basic Data Descriptors, Statistical Distributions and Application to Business Decisions.jpeg",
    },
    {
      title: "Optimize Deep Learning Models for Peak AI",
      file: "/Certificate/Optimize Deep Learning models for Peak AI.jpeg",
    },
    {
      title: "Design And Build Custom Neural Networks",
      file: "/Certificate/Design And Build Custom Neural Networks.jpeg",
    },
    {
      title: "Merge Sort",
      file: "/Certificate/Merge Sort.jpeg",
    },
    {
      title: "Getting Started With Artificial Intelligence",
      file: "/Certificate/Getting_Started_With_Artificial_Intelligence.pdf",
    },
    {
      title: "NOOB HACKFEST 2026",
      file: "/Certificate/NOOB HACKFEST.jpeg",
    },
    {
      title: "BIT V-PRAYUKTI '25",
      file: "/Certificate/BIT V-PRAYUKTI 25.pdf",
    },
    {
      title: "NMBA Certificate",
      file: "/Certificate/nmba_certificate.pdf",
    },
  ];

  return (
    <section id="certificates">
      <h2 className="section-title">Certificates</h2>

      <div className="projects-grid">
        {certificates.map((cert, index) => (
          <div className="project-card" key={index}>
            <h3>{cert.title}</h3>

            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;