import { useParams } from 'react-router-dom';
import projects from '../Experience/projects.json';

export const ProjectDetails = () => {
 const { id } = useParams();
 const project = projects.find(p => p.id === Number(id));

 if (!project) {
    return <div>Proyecto no encontrado</div>;
 }
 return (
    <section>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.name}</h2>
          <p>{project.subtitle}</p>
          <p>Rol: {project.role}</p>
          <a href={project.web} target="_blank" rel="noopener noreferrer">{project.web}</a>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
 );
};