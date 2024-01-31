import { Hero } from "../Header/Hero/Hero"
import { Footer } from '../Footer/Footer'
import { Header } from "../Header/Header"
import { Content } from "./Content/Content"

export const Home = () => {
  return (
    <div>
       <Header/>
        <Hero />
        <Content/>
        <Footer />
      </div>
  )
}
