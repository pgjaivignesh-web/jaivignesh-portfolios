function Projects() {
  return (
    <section id="projects" className="projects-section">
      <p className="section-subtitle">MY WORK</p>
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <h3>🛡️ Cyberbullying Detection & Social Media Comments</h3>

          <div className="tech-stack">
            <span>Python</span>
            <span>DistilBERT</span>
            <span>Hugging Face</span>
            <span>PyTorch</span>
            <span>Pandas</span>
            <span>Streamlit</span>
          </div>

          <p>
            Fine-tuned DistilBERT on the Jigsaw Toxic Comment Dataset for
            multi-label classification across six toxicity categories,
            achieving an F1-score of 0.87+.
          </p>

          <p>
            Built and deployed a real-time inference pipeline using
            Streamlit and a Chrome Extension for live content moderation
            on social media platforms.
          </p>

          <a
            href="https://github.com/pgjaivignesh-web"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>🎤 Voice-Based Hospital Appointment System</h3>

          <div className="tech-stack">
            <span>n8n</span>
            <span>REST API</span>
            <span>Voice Recognition</span>
            <span>Automation</span>
          </div>

          <p>
            Architected an end-to-end voice-enabled hospital appointment
            booking system using n8n automation workflows and third-party
            REST APIs.
          </p>

          <p>
            Automated patient intake and appointment slot allocation,
            significantly reducing manual scheduling effort while improving
            user experience.
          </p>

          <a
            href="https://github.com/pgjaivignesh-web"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>🫁 Lung Disease Prediction using Machine Learning</h3>

          <div className="tech-stack">
            <span>Python</span>
            <span>Scikit-learn</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Machine Learning</span>
          </div>

          <p>
            Developed a machine learning classification model for lung
            disease prediction using advanced data preprocessing and
            feature selection techniques.
          </p>

          <p>
            Applied cross-validation and hyperparameter tuning to improve
            prediction accuracy and ensure robust performance on unseen
            data.
          </p>

          <a
            href="https://github.com/pgjaivignesh-web"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;