import PropTypes from "prop-types";

export const SectionTitle = ({ title, subtitle, id }) => (
  <header className="mb-8" id={id}>
    <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark">{title}</h2>
    {subtitle && (
      <p className="mt-2 text-base text-primary-dark/70 max-w-2xl">{subtitle}</p>
    )}
  </header>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  id: PropTypes.string,
};
