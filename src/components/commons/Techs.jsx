import PropTypes from "prop-types";

export const Techs = () => {
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
        className="w-10 h-10 saturate-50 hover:saturate-100 hover:animate-bounce"
      />
    </div>
  );

  TechnologyLogo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };
  return (
    <div id="techs" className=" bg-red-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-8 text-center text-red-800">
        Tecnologías
      </h2>
      <div id="logos" className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, index) => (
          <TechnologyLogo key={index} {...tech} />
        ))}
      </div>
    </div>
  );
};
