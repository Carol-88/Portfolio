/* eslint-disable react/prop-types */

import jobsData from "../../assets/experiences.json";
import { Contact } from "../../components/Contact/Contact";

// Componente para mostrar una lista de habilidades
const SkillsList = ({ skills }) => (
  <ul className="flex flex-wrap gap-2 mb-8">
    {skills.map((skill, index) => (
      <li
        key={index}
        className="px-2 py-1 rounded-lg shadow-md bg-red-300 hover:animate-bounce text-red-800 font-semibold"
      >
        {skill}
      </li>
    ))}
  </ul>
);

// Componente para mostrar experiencias profesionales
const ExperienceItem = ({ jobTitle, period, tasks }) => (
  <article className="bg-white shadow-md rounded-lg p-4 m-2 ">
    <h3 className="font-semibold text-xl mb-2">{jobTitle}</h3>
    <p className="text-sm text-gray-600 mb-2">{period}</p>
    <ul className="list-disc pl-5">
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </article>
);

export const Experience = () => {
  const jobsArray = jobsData.jobs;

  // Lista de habilidades técnicas y personales
  const techSkills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "TailwindCSS",
    "Git",
    "Github",
    "Metodologías Ágiles",
    "TypeScript",
    "Next.js",
    "Vue.js",
  ];
  const personalSkills = [
    "Trabajo en equipo multidisciplinar",
    "Comunicación efectiva",
    "Organización",
    "Asertividad",
    "Proactividad",
    "Compromiso",
    "Gestión de equipo",
  ];

  return (
    <section className="container max-w-4xl mx-auto p-8 rounded-lg overflow-hidden">
      <section aria-labelledby="experience-section">
        <h2 id="experience-section" className="text-2xl font-semibold mb-8">
          Experiencia Profesional
        </h2>
        {jobsArray.map((experience, index) => (
          <ExperienceItem key={experience.id || index} {...experience} /> // Usa experience.id si existe, de lo contrario usa index
        ))}
      </section>
      <button className=" text-md mt-14 mb-14 border-2 border-rose-400 bg-white p-4 font-bold rounded-lg shadow-lg text-center hover:animate-pulse">
        <a
          href="/CarolinaRomero_Frontend.pdf"
          download
          className="text-red-800"
        >
          Descarga mi currículum si quieres saber más
        </a>
      </button>
      <section aria-labelledby="education-skills-section">
        <h2
          id="education-skills-section"
          className="text-2xl font-semibold mb-8"
        >
          Habilidades técnicas
        </h2>
        <SkillsList skills={techSkills} />
      </section>
      <section aria-labelledby="personal-skills-section">
        <h2
          id="personal-skills-section"
          className="text-2xl font-semibold mb-8"
        >
          Habilidades personales
        </h2>
        <SkillsList skills={personalSkills} />
      </section>
      <Contact />
    </section>
  );
};
