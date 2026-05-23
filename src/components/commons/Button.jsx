import PropTypes from "prop-types";

export const Button = ({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
  onClick,
}) => {
  const styles =
    variant === "secondary" ? "btn-secondary" : "btn-primary";

  if (href) {
    return (
      <a
        href={href}
        className={`${styles} ${className}`.trim()}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={`${styles} ${className}`.trim()} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  external: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
