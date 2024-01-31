import { Portrait } from "./Portrait/Portrait"
import { AboutMe } from "./AboutMe/AboutMe"

export const Hero = () => {
  return (
      <div className="columns-1 min-w-52 md:columns-2">
      <Portrait />
      <AboutMe/>
      </div>
  )
}
