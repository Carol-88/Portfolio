import { Link } from "react-router-dom";
import { site } from "../../config/site";

export const Hero = () => {
  return (
    <section id="hero" className="section-card mb-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
        {site.role}
      </p>
      <h1 className="text-2xl sm:text-4xl font-bold text-primary-dark mb-4 leading-tight">
        Desarrollo productos web y mobile con foco en usuario y accesibilidad
      </h1>
      <p className="text-base sm:text-lg text-primary-dark/80 mb-6 max-w-3xl">
        {site.tagline}
      </p>
      <div className="flex flex-wrap gap-3">
        <a href="#projects" className="btn-primary">
          Ver proyectos
        </a>
        <a href={site.cvPath} download className="btn-secondary">
          Descargar CV
        </a>
        <Link to="/contact" className="btn-secondary">
          Contactar
        </Link>
      </div>
    </section>
  );
};
