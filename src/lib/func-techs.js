import PropTypes from "prop-types";
export const technologies = [
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

export const TechnologyLogo = ({ src, alt }) => (
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
