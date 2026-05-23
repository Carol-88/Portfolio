import PropTypes from "prop-types";
import projectsData from "../../assets/projects.json";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "../commons/SectionTitle";

export const ProjectGrid = ({
  featuredOnly = false,
  secondaryOnly = false,
  showTitle = true,
}) => {
  let projects = projectsData.projects;

  if (featuredOnly) {
    projects = projects.filter((project) => project.featured);
  } else if (secondaryOnly) {
    projects = projects.filter((project) => !project.featured);
  }

  if (projects.length === 0) {
    return null;
  }

  const title = featuredOnly
    ? "Proyectos destacados"
    : secondaryOnly
      ? "Otros proyectos"
      : "Proyectos";

  const subtitle = featuredOnly
    ? "Productos propios donde aplico dominio nutricional, visión de producto y desarrollo full stack."
    : secondaryOnly
      ? "Proyectos complementarios que refuerzan mi perfil mobile y backend."
      : "Selección de proyectos propios y formativos que representan mi perfil técnico.";

  return (
    <section id={secondaryOnly ? "projects" : featuredOnly ? undefined : "projects"}>
      {showTitle && (
        <SectionTitle
          id={featuredOnly ? undefined : "projects-heading"}
          title={title}
          subtitle={subtitle}
        />
      )}
      <div
        className={`grid gap-6 ${
          featuredOnly
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} featured={project.featured} />
        ))}
      </div>
    </section>
  );
};

ProjectGrid.propTypes = {
  featuredOnly: PropTypes.bool,
  secondaryOnly: PropTypes.bool,
  showTitle: PropTypes.bool,
};
