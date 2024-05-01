import { useState } from 'react';

export const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
 };

 const menuItems = [
    { id: 'aboutme', label: 'Sobre mí' },
    { id: 'experience', label: 'Experiencia' },
   { id: 'techs', label: 'Tecnologías' },
   { id: 'contact', label: 'Contacto' },
 ];

 return (
    <nav className="relative z-30">
      <button
        onClick={toggleMenu}
        className="fixed right-0 top-0 p-2 focus:outline-none z-50 block"
      >
        <svg
          className="h-6 w-6 m-3 text-black fill-current"
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
          isOpen ? 'block' : 'hidden'
        } absolute right-0 top-0 mt-2 w-48 rounded-md shadow-lg bg-burguer`}
      >
        <div className="w-1/2 rounded-lg max-w-[430px] text-center m-3 pt-5 fixed bg-burguer p-4 right-0 top-0 shadow-md" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {menuItems.map((item, index) => (
            <div key={index}>
              <a
                href={`#${item.id}`}
                className="block px-4 py-5 text-sm hover:ease-out"
                role="menuitem"
              >
                {item.label}
              </a>
              {index < menuItems.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </nav>
 );
};












//cambiar el hover bold a otro color