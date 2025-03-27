import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ProjectCard = ({ banner, name, id }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-w-[200px] sm:min-w-[250px] md:min-w-[300px] flex-shrink-0">
      <article className="shadow-lg hover:shadow-xl bg-white rounded-xl overflow-hidden m-2">
        <img src={banner} alt={name} className="w-full h-40 object-fill" />
        <div className="p-2 text-center">
          <Link
            to={`/projects/${id}`}
            onClick={handleClick}
            className="text-lg font-semibold hover:underline"
          >
            {name}
          </Link>
        </div>
      </article>
    </div>
  );
};

ProjectCard.propTypes = {
  banner: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
