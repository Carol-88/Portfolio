import { useState } from "react";
import { RRSS } from "../Logos/RRSS";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/aboutme", label: "Sobre mí" },
    { path: "/experience", label: "Experiencia" },
    {
      path: "https://www.linkedin.com/newsletters/7059940563789189120/",
      label: "Newsletter",
      external: true,
    },
    { path: "/services", label: "Servicios" },
  ];

  return (
    <nav className="relative z-30">
      <button
        onClick={toggleMenu}
        className="fixed right-0 top-0 p-2 focus:outline-none z-50 block"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen.toString()}
      >
        <svg
          className="h-6 w-6 m-3 text-black hover:font-bold fill-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
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
          isOpen ? "block" : "hidden"
        } absolute right-0 top-0 mt-2 w-48 rounded-md shadow-lg bg-burguer`}
        aria-hidden={!isOpen}
      >
        <div
          className="md:w-3/5 w-full h-full text-center content-around pt-5 fixed bg-burguer p-4 right-0 top-0 shadow-md"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.external ? "#" : item.path}
              className="block px-4 py-5 text-sm hover:font-bold"
              role="menuitem"
              onClick={(e) => {
                if (item.external) {
                  e.preventDefault();
                  handleLinkClick(item.path);
                }
              }}
            >
              {item.label}
            </a>
          ))}
          <RRSS />
        </div>
      </div>
    </nav>
  );
};
