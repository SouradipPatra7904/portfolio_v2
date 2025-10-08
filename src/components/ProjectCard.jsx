import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { techIconMap } from "../icons/TechIcons";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p className="description">{project.description}</p>

      <div className="tech-stack">
        {project.tech.map((t, i) => (
          <span key={i} className="tech">
            <FontAwesomeIcon icon={techIconMap[t]} className="tech-icon" /> {t}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  );
};

export default ProjectCard;
