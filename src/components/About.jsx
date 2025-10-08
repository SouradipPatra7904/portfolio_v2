import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about-content">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I’m <span>Souradip Patra</span>, a Java & Spring Boot developer passionate about building scalable backends, distributed systems, and high-performance applications. 
          I enjoy turning complex ideas into elegant, maintainable code.
        </p>
        <p className="about-text">
          Over the past few years, I’ve built multiple enterprise-grade projects including microservices architectures, event-driven systems, and SAGA-based transaction management solutions.
        </p>
      </div>
    </section>
  );
}
