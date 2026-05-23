import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer as SiteFooter } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";

export const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.replace("#", ""));
      target?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content" className="flex-1 pb-24" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
