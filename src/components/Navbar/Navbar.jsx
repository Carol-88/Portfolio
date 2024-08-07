import { useState } from "react";
import { RRSS } from "../commons/RRSS";
import { handleLinkClick, menuItems } from "../../lib/funcs-navbar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

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
        } absolute right-0 top-0 mt-2 w-48 rounded-md shadow-lgbg-gradient-to-r from-orange-200 via-rose-200 to-orange-200`}
        aria-hidden={!isOpen}
      >
        <div
          className="md:w-3/5 w-full h-full text-center content-around pt-5 fixed bg-gradient-to-r from-orange-200 via-rose-200 to-orange-200 p-4 right-0 top-0 shadow-md"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.external ? "#" : item.path}
              className="block px-4 py-5 text-lg hover:font-bold"
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
