import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from '../components/Footer/Footer'
import { Portrait} from '../components/Portrait/Portrait'

export const Layout = ({children}) => {
  return (
      <div>
          <Portrait/>
          <Navbar />
          {children}
          <Footer/>
    </div>
  )
}
