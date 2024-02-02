import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
  <nav id="mySidebar" className="flex justify-center  gap-4 p-5 md:justify-end text-nav-color min-w-52 md:columns-2" >
    <NavLink to="/" className='hover:font-bold'>Home</NavLink>
    <NavLink to="#aboutme" className='hover:font-bold'>Sobre mí</NavLink>
    <NavLink to="#skills" className='hover:font-bold'>Skills</NavLink>
    <NavLink to="#experience" className='hover:font-bold'>Experiencia</NavLink>
    <NavLink to="#footer" className='hover:font-bold'></NavLink>
  </nav>
  )
}
