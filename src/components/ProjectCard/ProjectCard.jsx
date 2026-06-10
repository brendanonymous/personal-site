import { ExternalLink, CodeIcon } from "lucide-react";
import "./ProjectCard.css";

export default function ProjectCard({
  title,
  description,
  tech = [],
  image,
  websiteUrl,
  sourceUrl,
}) {
  return (
    <article className="project-card">
      <div className="project-info">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="tech-list">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-actions">
          {websiteUrl && (
            <a href={websiteUrl} target="_blank" rel="noreferrer">
              Website <ExternalLink size={20} />
            </a>
          )}

          {sourceUrl && (
            <a href={sourceUrl} target="_blank" rel="noreferrer">
              Source Code <CodeIcon size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="project-image">
        <img src={image} alt={`${title} screenshot`} />
      </div>
    </article>
  );
}