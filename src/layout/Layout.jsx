import PropTypes from 'prop-types';
import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from '../components/Footer/Footer'
import { Portrait} from '../components/Profile/Portrait'
import { ProfileCard } from "../components/Profile/ProfileCard"

export const Layout = ({children}) => {
 return (
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


