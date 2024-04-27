import PropTypes from 'prop-types';
import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from '../components/Footer/Footer'
import { Portrait} from '../components/Portrait/Portrait'
import { Card } from "../components/Card/Card"

export const Layout = ({children}) => {
 return (
    <div className="grid grid-cols-[1fr_1200px] m-auto">
      <aside className="  object-contain h-screen col-start-1 col-end-1">
        <Portrait />
        <Card/>
      </aside>
      <main className=" col-start-2">
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



