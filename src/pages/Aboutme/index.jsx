import jobsData from "../../assets/experiences.json";

// Componente para mostrar una lista de habilidades
const SkillsList = ({ skills }) => (
  <ul className="flex flex-wrap gap-2">
    {skills.map((skill, index) => (
      <li
        key={index}
        className={
          "px-2 py-1 rounded-lg shadow-md bg-red-800 hover:bg-red-400 text-white"
        }
      >
        {skill}
      </li>
    ))}
  </ul>
);

// Componente para mostrar experiencias profesionales
const ExperienceItem = ({ jobTitle, period, tasks }) => (
  <article className="bg-white shadow-md rounded-lg p-4 mb-4">
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
        <main className="w-full p-8">
          <header>
            <h1 className="text-4xl font-bold mb-4 text-center">Sobre mí</h1>
          </header>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Perfil Profesional</h2>
            <p className="mb-4">
              Desarrollador web FrontEnd con experiencia en crear y optimizar
              interfaces interactivas. Con un enfoque en el aprendizaje continuo
              y la colaboración para el crecimiento profesional y la mejora de
              habilidades técnicas.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Experiencia Profesional
            </h2>
            {jobsArray.map((experience, index) => (
              <ExperienceItem key={index} {...experience} />
            ))}
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Educación y Habilidades
            </h2>
            <SkillsList skills={techSkills} />
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Habilidades Personales
            </h2>
            <SkillsList skills={personalSkills} />
          </section>
        </main>
      </div>
    </div>
  );
};
