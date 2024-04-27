import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
  <nav id="mySidebar" className="flex justify-center gap-14 p-5 md:justify-end text-nav-color min-w-52 md:columns-2" >
    <NavLink to="/" className='hover:font-bold max-w-4'>Home</NavLink>
    <NavLink to="#aboutme" className='hover:font-bold max-w-4 text-nowrap'>Sobre mí</NavLink>
    <NavLink to="#skills" className='hover:font-bold max-w-4'>Skills</NavLink>
    <NavLink to="#experience" className='hover:font-bold max-w-4'>Experiencia</NavLink>
    <NavLink to="#footer" className='hover:font-bold max-w-4'></NavLink>
  </nav>
  )
}


//cambiar el hover bold a otro color