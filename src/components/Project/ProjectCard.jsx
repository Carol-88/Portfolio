import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ProjectCard = ({ banner, name, subtitle, web, id }) => (
  <article className="flex flex-col justify-around card shadow-lg hover:shadow-xl w-full max-w-80 text-sm bg-white">
    <img
      src={banner}
      alt={name}
      className="w-full h-48 object-cover shadow-md  saturate-50 hover:saturate-100"
    />
    <div className="flex flex-col justify-center items-start gap-8 p-4 h-56">
      <Link to={web} target="_blank">
        <h2 className="text-xl font-semibold hover:font-bold">{name}</h2>
      </Link>
      <p className="text-gray-600 text-start">{subtitle}</p>
      <Link
        to={`/projects/${id}`}
        className="text-[#7f1d1d] font-semibold hover:font-bold"
      >
        Ver más
      </Link>
    </div>
  </article>
);

ProjectCard.propTypes = {
  banner: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  web: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
