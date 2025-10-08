import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faExternalLinkAlt, faLaptopCode, faLayerGroup,} from "@fortawesome/free-solid-svg-icons";
import { techIconMap } from "../icons/TechIcons";
import "../styles/Projects.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">
        <FontAwesomeIcon icon={faLaptopCode} className="project-title-icon" />
        {project.title}
      </h3>

      <p className="description">
        <FontAwesomeIcon icon={faLayerGroup} className="desc-icon" />
        {project.description}
      </p>

      <div className="tech-stack">
        {project.tech.map((t, i) => (
          <span key={i} className="tech">
            <FontAwesomeIcon icon={techIconMap[t]} className="tech-icon" /> {t}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FontAwesomeIcon icon={faCodeBranch} /> Code
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
