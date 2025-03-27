import { Hero } from "../../components/Hero/Hero";
import { ProjectSlider } from "../../components/Projects/ProjectSlider";
// import { Contact } from "../../components/Contact/Contact";
import { Techs } from "../../components/commons/Techs";
import { ExercisesPage } from "../Exercises";

export const Home = () => {
  return (
    <section className="container max-w-4xl mx-auto px-6 py-4 mt-4 bg-red-50 shadow-xl rounded-lg overflow-hidden text-pretty">
      <Hero />
      <Techs />
      <ProjectSlider />
      {/* <Contact /> */}
      <ExercisesPage />
    </section>
  );
};
