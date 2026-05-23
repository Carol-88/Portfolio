import { TechnologyLogo } from "./TechnologyLogo";
import { technologies } from "../../lib/techStack";
import { SectionTitle } from "./SectionTitle";

export const Techs = () => {
  return (
    <section id="techs" className="section-card">
      <SectionTitle
        title="Stack principal"
        subtitle="Tecnologías con las que trabajo en productos web, mobile y backend."
      />
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech) => (
          <TechnologyLogo key={tech.alt} {...tech} />
        ))}
      </div>
    </section>
  );
};
