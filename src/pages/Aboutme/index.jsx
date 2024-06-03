/* eslint-disable react/prop-types */

import jobsData from "../../assets/experiences.json";
import { useState } from "react";

// Componente para mostrar una lista de habilidades
const SkillsList = ({ skills }) => (
  <ul className="flex flex-wrap gap-2 mb-8">
    {skills.map((skill, index) => (
      <li
        key={index}
        className={
          "px-2 py-1 rounded-lg shadow-md bg-orange-700 hover:animate-bounce text-white"
        }
      >
        {skill}
      </li>
    ))}
  </ul>
);

// Componente para mostrar experiencias profesionales
const ExperienceItem = ({ jobTitle, period, tasks }) => (
  <article className="bg-red-50 shadow-md rounded-lg p-4 mb-8">
    <h3 className="font-semibold text-xl mb-2">{jobTitle}</h3>
    <p className="text-sm text-gray-600 mb-2">{period}</p>
    <ul className="list-disc pl-5">
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </article>
);

// Componente principal
export const AboutMe = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
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
    "Trabajo en equipo multidisciplinario",
    "Comunicación efectiva",
    "Organización",
    "Asertividad",
    "Proactividad",
    "Compromiso",
    "Gestión de equipo",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      <div className="container max-w-4xl mx-auto px-6 py-4">
        <main className="w-full p-8" role="main">
          <header>
            <h1 className="text-4xl font-bold mb-4">
              Un poco más sobre mi trayectoria
            </h1>
          </header>
          <section>
            <p className="mb-4">
              ¡Hey! 👋
              <br />
              <br />
              Soy Carolina, una amante del{" "}
              <span className="font-bold">desarrollo web</span> en constante
              búsqueda de nuevas aventuras digitales. Siempre estoy buscando
              aprender algo nuevo y mejorar en lo que hago. Me considero una
              geek del código, con habilidades en{" "}
              <span className="font-bold">
                HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, VueJS, Git
                y GitHub.
              </span>{" "}
              <br />
              <br />
              Pero lo que realmente me define es mi actitud positiva y mi
              habilidad para{" "}
              <span className="font-bold">trabajar en equipo</span> . Cuando no
              estoy frente a la pantalla, me encontrarás inmersa en un buen
              libro de fantasía o terror, viendo series de suspense y doramas, o
              explorando el último episodio de true crime. También soy fanática
              del anime, el manga, me gusta dibujar, escribir y escuchar música
              rock.
              <br />
              <br /> Valorando la diversidad y el respeto, siempre busco{" "}
              <span className="font-bold">
                trabajar en equipo y crear un ambiente inclusivo y divertido
              </span>{" "}
              en cualquier equipo en el que esté. Estoy en busca de
              oportunidades que me desafíen y me permitan crecer tanto personal
              como profesionalmente. Así que, si estás buscando a alguien
              apasionada y lista para sumarse a tu equipo, ¡aquí estoy!
              <br />
              <br />
              <span
                className={`text-xl font-bold flex justify-center ${
                  isHovered ? "animate-ping" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a href="/contact">¡Vamos a hacer cosas geniales juntos! 🚀</a>
              </span>
            </p>
          </section>
          <section aria-labelledby="experience-section">
            <h2 id="experience-section" className="text-2xl font-semibold mb-2">
              Experiencia Profesional
            </h2>
            {jobsArray.map((experience, index) => (
              <ExperienceItem key={index} {...experience} />
            ))}
          </section>
          <section aria-labelledby="education-skills-section">
            <h2
              id="education-skills-section"
              className="text-2xl font-semibold mb-2"
            >
              Habilidades técnicas
            </h2>
            <SkillsList skills={techSkills} />
          </section>
          <section aria-labelledby="personal-skills-section">
            <h2
              id="personal-skills-section"
              className="text-2xl font-semibold mb-2"
            >
              Habilidades personales
            </h2>
            <SkillsList skills={personalSkills} />
          </section>
        </main>
      </div>
      <div className="text-lg">
        {" "}
        <a
          href="/CV2024_SIMPLE.pdf"
          download
          className="text-red-700 hover:font-bold"
        >
          Descarga mi currículum si quieres saber más
        </a>{" "}
        o{" "}
        <a href="/contact" className="text-green-700 hover:font-bold">
          Contacta conmigo directamente por email
        </a>
      </div>
    </div>
  );
};
