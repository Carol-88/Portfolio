import { AboutMe } from "../../components/AboutMe/AboutMe";
import { Experience } from "../../components/Experience/Experience";
import { Contact } from "../../components/Contact/Contact";
import { Techs } from "../../components/Logos/Techs";

export const Home = () => {
  return (
    <>
      <AboutMe />
      <Techs />
      <Experience />
      <Contact />
    </>
  );
};
