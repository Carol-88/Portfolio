import projectsData from "./projects.json"; // Asegúrate de que la ruta sea correcta
import { ProjectCard } from "../Project/ProjectCard";

export const Experience = () => {
  const projects = projectsData.projects;

  return (
    <section id="experience" className="container mx-auto">
      <h2 className="text-center text-2xl font-bold mb-8 text-red-800">
        Experiencia
      </h2>
      <div id="projects" className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
