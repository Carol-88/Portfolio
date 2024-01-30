import { Hero } from "../Header/Hero/Hero"
import { Navbar } from "../Header/Navbar/Navbar"
import { AboutMe } from '../AboutMe/AboutMe'
import { Skills } from '../Skills/Skills'
import { Experience } from '../Experience/Experience'
import { Footer } from '../Footer/Footer'

export const Home = () => {
  return (
      <div>
        <Hero />
        <Navbar />
        <AboutMe />
        <Skills />
        <Experience />
        <Footer />
      </div>
  )
}
