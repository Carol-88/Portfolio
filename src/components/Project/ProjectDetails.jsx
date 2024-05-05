import { useParams } from "react-router-dom";
import jsonData from "../Experience/projects.json";

export const ProjectDetails = () => {
 const { id } = useParams();
 const project = jsonData.projects.find((p) => p.id === Number(id));

 if (!project) {
    return <div>Proyecto no encontrado</div>;
 }

 const hasVideo = project.video && project.video.length > 0;

 return (
    <section>
      <div className="flex justify-center items-center p-12">
        <img src={project.logo} alt="Logo" className="w-12 h-12 rounded-full" />
        <a href={project.web} target="_blank" rel="noopener noreferrer" className="ml-4">
          <h1 className="text-2xl font-bold hover:text-cyan-700">{project.name}</h1>
        </a>
      </div>
      <h3 className="pt-4 text-start text-lg font-semibold text-gray-700">{project.subtitle}</h3>
      <em className="pb-4 text-sm font-semibold text-gray-500">
        {project.role}
      </em>
      {/* Renderiza la descripción del proyecto de manera estructurada */}
      <h4 className="pt-6 text-lg font-semibold text-gray-700">{project.description.goal}</h4>
      <p className="pt-4 text-base text-gray-600 text-start"><b>Servicios:</b> {project.description.services}</p>
      <p className="pt-4 text-base text-gray-600 text-start"><b>Plataforma:</b> {project.description.platform}</p>
      {hasVideo && (
        <div className="embed-responsive embed-responsive-16by9 flex justify-center w-full h-full">
          <iframe className="embed-responsive-item w-4/5 h-72 m-8 rounded-lg" src={project.video} allowFullScreen></iframe>
        </div>
      )}
    </section>
 );
};


