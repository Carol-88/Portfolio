import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Button = ({
  children,
  href,
  to,
  variant = "primary",
  external = false,
  className = "",
  onClick,
}) => {
  const styles =
    variant === "secondary" ? "btn-secondary" : "btn-primary";
  const classes = `${styles} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  external: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
