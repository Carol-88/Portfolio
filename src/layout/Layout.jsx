import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer as SiteFooter } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";

export const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const target = document.getElementById(location.hash.replace("#", ""));
    target?.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pb-24">{children}</main>
      <SiteFooter />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
