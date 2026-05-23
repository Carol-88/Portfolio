import PropTypes from "prop-types";

export const SectionTitle = ({
  title,
  subtitle,
  id,
  headingLevel = "h2",
}) => {
  const HeadingTag = headingLevel;

  return (
    <header className="mb-8" id={id}>
      <HeadingTag className="text-2xl sm:text-3xl font-bold text-primary-dark">
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="mt-2 text-base text-primary-dark/70 max-w-2xl">{subtitle}</p>
      )}
    </header>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  id: PropTypes.string,
  headingLevel: PropTypes.oneOf(["h1", "h2", "h3"]),
};
