import PropTypes from 'prop-types';
import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from '../components/Footer/Footer'
import { Portrait} from '../components/Profile/Portrait'
import { ProfileCard } from "../components/Profile/ProfileCard"

export const Layout = ({children}) => {
 return (
  //TIENES QUE HACER QUE EL TEMPLATE COLUMNS DE MOBILE Y TABLET SEA DE SOLO 1FR , TAMBIEN RECUERDA AJUSTAR EL COL-START Y COL-END YA QUE AL 
  //HABER SOLO UNA COLUMNA DEBERAS JUGAR CON EL GRID-ROW EN MOBILE Y TABLET 
    <div className="sm:grid sm:grid-cols-[40%_1fr_1fr] m-auto">
      <aside className="object-contain sm:h-screen col-start-1 col-end-1">
        <Portrait />
        <ProfileCard/>
      </aside>
      <main className="col-start-2 col-end-4 px-10 h-screen">
        <Navbar />
          {children}
        <Footer />
      </main>
    </div>
 )
}

Layout.propTypes = {
 children: PropTypes.node.isRequired,
};


