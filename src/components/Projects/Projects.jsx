import projectsData from "../../assets/projects.json";
import { ProjectCard } from "../Project/ProjectCard";

export const Projects = () => {
  const projects = projectsData.projects;

  return (
    <section id="experience" className=" bg-red-50 p-8 rounded-lg">
      <h2 className="text-center text-2xl font-bold mb-8 text-red-800">
        Proyectos
      </h2>
      <div id="projects" className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
