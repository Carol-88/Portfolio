import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { site, navItems } from "../../config/site";
import { RRSS } from "../commons/RRSS";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => setIsOpen(false);

  const handleProjectsClick = (event) => {
    handleNavClick();
    if (location.pathname !== "/") {
      return;
    }
    event.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (path) => {
    if (path === "/#projects") {
      return location.pathname === "/";
    }
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  const renderNavLink = (item) => {
    if (item.path === "/#projects") {
      return (
        <Link
          key={item.path}
          to="/#projects"
          onClick={handleProjectsClick}
          className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
            isActive(item.path)
              ? "bg-primary/10 text-primary"
              : "text-primary-dark hover:bg-surface hover:text-primary"
          }`}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <Link
        key={item.path}
        to={item.path}
        onClick={handleNavClick}
        className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
          isActive(item.path)
            ? "bg-primary/10 text-primary"
            : "text-primary-dark hover:bg-surface hover:text-primary"
        }`}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 border-b border-accent-soft/20 bg-surface-muted/95 backdrop-blur">
      <nav
        className="page-shell flex items-center justify-between py-4"
        aria-label="Navegación principal"
      >
        <Link
          to="/"
          className="text-lg font-bold text-primary-dark hover:text-primary"
          onClick={handleNavClick}
        >
          {site.shortName}
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-primary-dark hover:bg-surface md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-1 border-b border-accent-soft/20 bg-surface-muted px-4 py-4 shadow-card md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {navItems.map((item) => renderNavLink(item))}
          <div className="pt-2 md:pt-0">
            <RRSS />
          </div>
        </div>
      </nav>
    </header>
  );
};
