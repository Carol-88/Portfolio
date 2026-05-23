import PropTypes from "prop-types";

export const Tag = ({ label }) => (
  <span className="tag-pill">{label}</span>
);

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};
