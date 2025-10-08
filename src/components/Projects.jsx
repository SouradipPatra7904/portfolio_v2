
import React, { useState } from "react";
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import projectsData from "./ProjectTopics.json";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="carousel">
        <button className="nav-btn prev" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel-track">
          <ProjectCard project={projectsData[currentIndex]} />
        </div>

        <button className="nav-btn next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="carousel-dots">
        {projectsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Projects;
