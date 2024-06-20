import PropTypes from "prop-types";

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
