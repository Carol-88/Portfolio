import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export const ProjectCard = ({ banner, name, subtitle, web, projectLink }) => (
    
 <article className="card shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-80">
    <img
      src={banner}
      alt={name}
      className="w-full h-64 object-cover shadow-md"
    />
    <div className="flex flex-col justify-center items-start gap-4 p-4">
      <Link to={web} target="_blank"><h2 className="text-xl font-semibold hover:font-bold">{name}</h2></Link>
      <p className="text-gray-600 text-start">{subtitle}</p>
      <a href={projectLink} className="text-[#7f1d1d] font-semibold hover:font-bold">
        Ver más
      </a>
    </div>
 </article>
);

ProjectCard.propTypes = {
 banner: PropTypes.string.isRequired,
 name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  web: PropTypes.string.isRequired,
 projectLink: PropTypes.string.isRequired
};
