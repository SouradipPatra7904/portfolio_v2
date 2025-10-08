import "../styles/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero section">
      <div className="container hero-content">
        <h1 className="hero-title">Hi, I’m <span>Souradip Patra</span></h1>
        <p className="hero-subtitle">
          Java & Spring Boot Developer crafting scalable backends and distributed systems.
        </p>
        <a href="#projects" className="cta-btn">View My Work</a>
      </div>
    </section>
  );
}
