function Certificates() {
  const certificates = [
    {
      title: "Introduction to Large Language Models",
      file: `${import.meta.env.BASE_URL}Certificate/Introduction To Large Language Models.jpeg`,
    },
    {
      title: "Introduction to AI",
      file: `${import.meta.env.BASE_URL}Certificate/Introduction To AI.jpeg`,
    },
    {
      title: "Introduction to Generative AI",
      file: `${import.meta.env.BASE_URL}Certificate/Introduction To Generative AI.jpeg`,
    },
    {
      title: "Introduction to Responsible AI",
      file: `${import.meta.env.BASE_URL}Certificate/Introduction To Responsible AI.jpeg`,
    },
    {
      title: "AI For Everyone",
      file: `${import.meta.env.BASE_URL}Certificate/AI For Everyone.jpeg`,
    },
    {
      title: "Software Engineering in AI",
      file: `${import.meta.env.BASE_URL}Certificate/Software Engineering in Ai.jpeg`,
    },
    {
      title: "Develop Generative AI Applications",
      file: `${import.meta.env.BASE_URL}Certificate/Develop Generative AI Applications.jpeg`,
    },
    {
      title: "Generative AI and LLMs: Architecture and Data Preparation",
      file: `${import.meta.env.BASE_URL}Certificate/Generative AI and LLMs Architecture and Data Preparation.jpeg`,
    },
    {
      title: "Database Structures and Management with MySQL",
      file: `${import.meta.env.BASE_URL}Certificate/Data structure and management with mysql.jpeg`,
    },
    {
      title: "Discover The Art Of Prompting",
      file: `${import.meta.env.BASE_URL}Certificate/Discover The Art Of Prompting.jpeg`,
    },
    {
      title: "Use AI Responsibly",
      file: `${import.meta.env.BASE_URL}Certificate/Use AI Responsibly.jpeg`,
    },
    {
      title: "Maximize Productivity With AI Tools",
      file: `${import.meta.env.BASE_URL}Certificate/Maximize Productivity With AI Tools.jpeg`,
    },
    {
      title: "Responsible AI: Applying AI Principles with Google Cloud",
      file: `${import.meta.env.BASE_URL}Certificate/Responsible AI Applying AI Principles with Google Cloud.jpeg`,
    },
    {
      title: "Basic Data Descriptors, Statistical Distributions",
      file: `${import.meta.env.BASE_URL}Certificate/Basic Data Descriptors, Statistical Distributions, and Application to Business Decisions.jpeg`,
    },
    {
      title: "Optimize Deep Learning Models for Peak AI",
      file: `${import.meta.env.BASE_URL}Certificate/Optimize Deep Learning models for Peak AI.jpeg`,
    },
    {
      title: "Design And Build Custom Neural Networks",
      file: `${import.meta.env.BASE_URL}Certificate/Design And Build Custom Neural Network.jpeg`,
    },
    {
      title: "Merge Sort",
      file: `${import.meta.env.BASE_URL}Certificate/Merge Sort.jpeg`,
    },
    {
      title: "Getting Started With Artificial Intelligence",
      file: `${import.meta.env.BASE_URL}Certificate/Getting_Started_With_Artificial_Intelligence_Badge.png`,
    },
    {
      title: "NOOB HACKFEST 2026",
      file: `${import.meta.env.BASE_URL}Certificate/NOOB HACKFEST.jpeg`,
    },
    {
      title: "BIT V-PRAYUKTI '25",
      file: `${import.meta.env.BASE_URL}Certificate/BIT V-PRAYUKTI’ 25.pdf`,
    },
    {
      title: "NMBA Certificate",
      file: `${import.meta.env.BASE_URL}Certificate/nmba_certificate.pdf`,
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