import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tag } from "../commons/Tag";

export const ProjectCard = ({
  banner,
  name,
  id,
  subtitle,
  badge,
  status,
  tech = [],
  featured = false,
}) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl border border-accent-soft/20 bg-white shadow-card transition hover:shadow-card-hover ${
        featured ? "md:col-span-1" : ""
      }`}
    >
      <Link to={`/projects/${id}`} onClick={handleClick} className="block">
        <div
          className={`flex items-center justify-center border-b border-accent-soft/20 bg-white p-2 ${
            featured ? "h-44 sm:h-52" : "h-44 sm:h-48"
          }`}
        >
          <img
            src={banner}
            alt={name}
            className="h-full w-full rounded-md object-contain object-center"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {badge && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {badge}
            </span>
          )}
          {status && (
            <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-primary-dark">
              {status}
            </span>
          )}
        </div>
        <Link
          to={`/projects/${id}`}
          onClick={handleClick}
          className="text-lg font-semibold text-primary-dark hover:text-primary"
        >
          {name}
        </Link>
        {subtitle && (
          <p className="mt-2 text-sm text-primary-dark/70">{subtitle}</p>
        )}
        {tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.slice(0, 4).map((item) => (
              <Tag key={item} label={item} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  banner: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  subtitle: PropTypes.string,
  badge: PropTypes.string,
  status: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string),
  featured: PropTypes.bool,
};
