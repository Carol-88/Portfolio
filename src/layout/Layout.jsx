import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from '../components/Footer/Footer'
import { Portrait} from '../components/Portrait/Portrait'
import { Card } from "../components/Card/Card"

export const Layout = ({children}) => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/3">
        <Portrait />
        <Card/>
      </div>
      <div className="md:w-2/3">
        <Navbar />
          {children}
        <Footer />
        </div>
    </div>
  )
}
