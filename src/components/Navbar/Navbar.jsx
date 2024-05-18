import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClickLink = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/#aboutme", label: "Sobre mí" },
    { href: "/#experience", label: "Experiencia" },
    { href: "/#techs", label: "Tecnologías" },
    { href: "/#contact", label: "Contacto" },
  ];

  const rrss = [
    {
      src: "/icons/github.png",
      alt: "GitHub",
      url: "https://github.com/Carol-88",
    },
    {
      src: "/icons/linkedin.png",
      alt: "LinkedIn",
      url: "https://www.linkedin.com/in/carolina-romero-c/",
    },
    {
      src: "/icons/twitter.png",
      alt: "Twitter",
      url: "https://x.com/caroldev_",
    },
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
      >
        <div
          className="md:w-3/5 w-full h-full text-center content-around pt-5 fixed bg-burguer p-4 right-0 top-0 shadow-md"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-5 text-sm hover:font-bold"
              role="menuitem"
              onClick={handleClickLink}
            >
              {item.label}
            </a>
          ))}
          <div className="flex justify-center gap-4 pt-8">
            {rrss.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social.src}
                  alt={social.alt}
                  className="w-12 h-12 saturate-50 shadow-lg hover:shadow-red-900"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
