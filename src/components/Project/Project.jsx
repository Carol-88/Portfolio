import projects from '../../components/Experience/projects.json';
import ProjectCard from '../Experience/Experience'

export const Project = () => {
 return (
    <section>
      {projects.map((project, index) => (
        <div key={index}>
          <ProjectCard
            banner={project.banner}
            name={project.name}
            subtitle={project.subtitle}
            id={project.id} // Pasa el ID del proyecto aquí
          />
        </div>
      ))}
    </section>
 );
};
