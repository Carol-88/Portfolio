import { Hero } from "../../components/Hero/Hero";
import { Projects } from "../../components/Projects/Projects";
import { Contact } from "../../components/Contact/Contact";
import { Techs } from "../../components/commons/Techs";

export const Home = () => {
  return (
    <section className="container max-w-4xl mx-auto px-6 py-4 mt-4 bg-red-50 shadow-xl rounded-lg overflow-hidden text-pretty">
      <Hero />
      <Techs />
      <Projects />
      <Contact />
    </section>
  );
};
