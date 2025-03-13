import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import projectsData from "../../assets/projects.json";
import { ProjectCard } from "./ProjectCard";

export const ProjectSlider = () => {
  const projects = projectsData.projects; // Usa los datos del JSON correctamente

  return (
    <div className="w-full overflow-hidden py-4">
      <ScrollMenu>
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))
        ) : (
          <p className="text-center text-gray-500">
            No hay proyectos disponibles.
          </p>
        )}
      </ScrollMenu>
    </div>
  );
};

// Como ya no recibe props, eliminamos la validación de PropTypes
