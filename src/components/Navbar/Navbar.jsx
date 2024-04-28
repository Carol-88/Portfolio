import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
 setIsOpen(prevIsOpen => {
    const newIsOpen = !prevIsOpen;
    console.log(newIsOpen); // Verificar el nuevo estado
    return newIsOpen;
 });
};



 return (
    <nav className="relative">
     <button
 onClick={toggleMenu}
 className="absolute right-0 p-2 focus:outline-none z-50 block"
>
 <svg
    className="h-6 w-6 text-black fill-current"
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
        } absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-bg-color ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out`}
      >
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <NavLink
            to="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Home
          </NavLink>
          <NavLink
            to="/#aboutme"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Sobre mí
          </NavLink>
          <NavLink
            to="/#skills"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Skills
          </NavLink>
          <NavLink
            to="/#experience"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Experiencia
          </NavLink>
          <NavLink
            to="/#contact"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
 );
};










//cambiar el hover bold a otro color