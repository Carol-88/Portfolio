import { useParams } from "react-router-dom";
import jsonData from "../Experience/projects.json";

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = jsonData.projects.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <section>
      <div className="flex justify-center">
        <img src={project.banner} alt="Logo" width={50} height={50} />
        <a href={project.web} target="_blank" rel="noopener noreferrer">
          <h1 className="hover:text-cyan-700">{project.name}</h1>
        </a>
      </div>
      <h3 className="pt-4 text-start">{project.subtitle}</h3>
      <em className="pb-4 text-title-color text-start text-xs font-semibold">
        {project.role}
      </em>
      <p className="pt-12">{project.description}</p>
    </section>
  );
};
