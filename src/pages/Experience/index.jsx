/* eslint-disable react/prop-types */

import jobsData from "../../assets/experiences.json";
import { PageShell } from "../../components/commons/PageShell";
import { SectionTitle } from "../../components/commons/SectionTitle";
import { Tag } from "../../components/commons/Tag";
import {
  site,
  techSkills,
  methodologySkills,
  personalSkills,
  languages,
} from "../../config/site";
import { usePageSEO } from "../../hooks/usePageSEO";

const SkillsList = ({ skills }) => (
  <ul className="flex flex-wrap gap-2 mb-8">
    {skills.map((skill) => (
      <li key={skill}>
        <Tag label={skill} />
      </li>
    ))}
  </ul>
);

const ExperienceItem = ({ jobTitle, period, tasks }) => (
  <article className="rounded-xl border border-accent-soft/20 bg-white p-5 shadow-card">
    <h3 className="text-lg font-semibold text-primary-dark">{jobTitle}</h3>
    <p className="mt-1 text-sm text-primary-dark/60">{period}</p>
    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-primary-dark/80">
      {tasks.map((task) => (
        <li key={task}>{task}</li>
      ))}
    </ul>
  </article>
);

export const Experience = () => {
  usePageSEO({
    title: "Experiencia — Carolina Romero",
    description:
      "Experiencia profesional, habilidades técnicas y formación de Carolina Romero, desarrolladora frontend con base full stack.",
  });

  return (
    <PageShell>
      <section className="section-card mb-8" aria-labelledby="experience-section">
        <SectionTitle
          id="experience-section"
          title="Experiencia profesional"
          subtitle="Trayectoria alineada con mi CV 2026, desde productos propios hasta roles frontend en empresas."
          headingLevel="h1"
        />
        <div className="space-y-4">
          {jobsData.jobs.map((experience) => (
            <ExperienceItem key={experience.id} {...experience} />
          ))}
        </div>
      </section>

      <div className="mb-8 text-center">
        <a href={site.cvPath} download className="btn-primary">
          Descargar currículum completo
        </a>
      </div>

      <section className="section-card mb-8" aria-labelledby="tech-skills-section">
        <SectionTitle id="tech-skills-section" title="Habilidades técnicas" />
        <SkillsList skills={techSkills} />
      </section>

      <section className="section-card mb-8" aria-labelledby="methodology-skills-section">
        <SectionTitle id="methodology-skills-section" title="Metodologías y prácticas" />
        <SkillsList skills={methodologySkills} />
      </section>

      <section className="section-card mb-8" aria-labelledby="personal-skills-section">
        <SectionTitle id="personal-skills-section" title="Habilidades personales" />
        <SkillsList skills={personalSkills} />
      </section>

      <section className="section-card" aria-labelledby="languages-section">
        <SectionTitle id="languages-section" title="Idiomas" />
        <SkillsList skills={languages} />
      </section>
    </PageShell>
  );
};
