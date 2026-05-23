import PropTypes from "prop-types";

export const PageShell = ({ children, className = "" }) => (
  <div className={`page-shell ${className}`.trim()}>{children}</div>
);

PageShell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
