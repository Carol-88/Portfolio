import PropTypes from "prop-types";
import projectsData from "../../assets/projects.json";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "../commons/SectionTitle";

export const ProjectGrid = ({
  featuredOnly = false,
  secondaryOnly = false,
  businessOnly = false,
  showTitle = true,
}) => {
  let projects = projectsData.projects;

  if (featuredOnly) {
    projects = projects.filter(
      (project) => project.featured && project.category !== "business"
    );
  } else if (secondaryOnly) {
    projects = projects.filter(
      (project) => !project.featured && project.category !== "business"
    );
  } else if (businessOnly) {
    projects = projects.filter((project) => project.category === "business");
  }

  if (projects.length === 0) {
    return null;
  }

  const title = featuredOnly
    ? "Proyectos destacados"
    : secondaryOnly
      ? "Otros proyectos"
      : businessOnly
        ? "Webs para negocios"
        : "Proyectos";

  const subtitle = featuredOnly
    ? "Productos propios donde aplico dominio nutricional, visión de producto y desarrollo full stack."
    : secondaryOnly
      ? "Proyectos complementarios que refuerzan mi perfil mobile y backend."
      : businessOnly
        ? "Demos y landings pensadas para pymes y negocios locales: modernas, responsive y listas para desplegar."
        : "Selección de proyectos propios y formativos que representan mi perfil técnico.";

  return (
    <section>
      {showTitle && (
        <SectionTitle
          id={
            businessOnly
              ? "business-projects"
              : featuredOnly
                ? undefined
                : "projects-heading"
          }
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
  businessOnly: PropTypes.bool,
  showTitle: PropTypes.bool,
};
