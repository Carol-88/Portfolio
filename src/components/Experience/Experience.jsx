import PropTypes from "prop-types";
import projectsData from './projects.json'; // Asegúrate de que la ruta sea correcta
import { ProjectCard } from "../Project/ProjectCard";


const technologies = [
 { src: "/icons/html.png", alt: "HTML" },
 { src: "/icons/css.png", alt: "CSS" },
 { src: "/icons/js.png", alt: "JavaScript" },
 { src: "/icons/nextjs.png", alt: "NextJS" },
 { src: "/icons/react.png", alt: "React" },
 { src: "/icons/tailwind.png", alt: "TailwindCSS" },
 { src: "/icons/ts.png", alt: "TypeScript" },
 { src: "/icons/vuejs.png", alt: "VueJS" },
 { src: "/icons/vite.png", alt: "Vite" },
 { src: "/icons/vsc.png", alt: "Visual Studio Code" },
 { src: "/icons/git.png", alt: "Git" },
 { src: "/icons/github.png", alt: "GitHub" },
];

const TechnologyLogo = ({ src, alt }) => (
 <div className="p-2">
    <img
      src={src}
      alt={alt}
      className="w-10 h-10 grayscale hover:grayscale-0 transition-colors duration-300"
    />
 </div>
);

TechnologyLogo.propTypes = {
 src: PropTypes.string.isRequired,
 alt: PropTypes.string.isRequired,
};

export const Experience = () => {
 const projects = projectsData.projects; // Asegúrate de que los datos del JSON coincidan con la estructura esperada

 return (
    <section id="experience" className="container mx-auto">
      <h2 className="text-center text-2xl font-bold mb-8">Experiencia</h2>
      <div id="projects" className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div id="techs" className="mt-8">
        <h2 className="text-2xl font-bold mb-4 mt-14">Tecnologías</h2>
        <div id="logos" className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <TechnologyLogo key={index} {...tech} />
          ))}
        </div>
      </div>
    </section>
 );
};

