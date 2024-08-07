import projectsData from "../../assets/projects.json";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export const SlideCards = () => {
  const projects = projectsData.projects;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projects.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projects.length - 1 : prevSlide - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section id="experience" className="bg-red-50 p-8 rounded-lg" {...handlers}>
      <h2 className="text-center text-2xl font-bold mb-8 text-red-800">
        Proyectos
      </h2>
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        {/* Botones ocultos en móvil */}
        <button onClick={prevSlide} className="w-1/6 hidden sm:block">
          <img src="/icons/anterior.png" alt="anterior" />
        </button>
        <div
          id="projects"
          className="flex flex-wrap justify-center gap-8 w-60 min-w-60"
        >
          <ProjectCard {...projects[currentSlide]} />
        </div>
        <button onClick={nextSlide} className="w-1/6 hidden sm:block">
          <img src="/icons/siguiente.png" alt="siguiente" />
        </button>
      </div>
    </section>
  );
};
