import projects from '../../components/Experience/projects.json';
import ProjectCard from '../Experience/Experience'

export const Project = () => {
 return (
    <section>
      {projects.map((project, index) => (
        <div key={index}>
          <ProjectCard
            key={project.id}
            banner={project.banner}
            name={project.name}
            subtitle={project.subtitle}
            projectLink={`/projects/${project.id}`}
            id={project.id} // Pasa el ID del proyecto aquí
          />
        </div>
      ))}
    </section>
 );
};
