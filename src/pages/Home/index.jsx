import { Hero } from "../../components/Hero/Hero";
import { Projects } from "../../components/Projects/Projects";
import { Contact } from "../../components/Contact/Contact";
import { Techs } from "../../components/commons/Techs";

export const Home = () => {
  return (
    <>
      <Hero />
      <Techs />
      <Projects />
      <Contact />
    </>
  );
};
