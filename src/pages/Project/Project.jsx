import projects from '../../components/Experience/projects.json';

export const Project = () => {
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

