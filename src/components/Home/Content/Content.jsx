import { Contact } from "./Contact/Contact"
import { Experience } from "./Experience/Experience"
import { Skills } from "./Skills/Skills"


export const Content = () => {
  return (
      <div className="columns-1 min-w-52 md:columns-2">
          <Skills />
          <Experience />
          <Contact/>
      </div>
  )
}
