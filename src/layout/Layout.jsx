import PropTypes from 'prop-types';
import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from '../components/Footer/Footer'
import { Portrait} from '../components/Portrait/Portrait'
import { Card } from "../components/Card/Card"

export const Layout = ({children}) => {
  return (
    <body className="flex flex-col md:flex-row h-screen">
      <aside className="md:w-1/3">
        <Portrait />
        <Card/>
      </aside>
      <main className="md:w-2/3">
        <Navbar />
          {children}
        <Footer />
        </main>
    </body>
  )
}

Layout.propTypes = {
 children: PropTypes.node.isRequired,
};
