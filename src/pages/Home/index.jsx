import { Hero } from "../../components/Hero/Hero";
import { ProjectGrid } from "../../components/Projects/ProjectGrid";
import { Techs } from "../../components/commons/Techs";
import { PageShell } from "../../components/commons/PageShell";
import { SectionTitle } from "../../components/commons/SectionTitle";
import { Button } from "../../components/commons/Button";

export const Home = () => {
  return (
    <PageShell>
      <Hero />
      <div className="mb-10">
        <ProjectGrid featuredOnly showTitle />
      </div>
      <div className="section-card mb-10">
        <ProjectGrid secondaryOnly />
      </div>
      <Techs />
      <section className="section-card mt-10 text-center">
        <SectionTitle
          title="¿Hablamos?"
          subtitle="Estoy abierta a oportunidades en frontend, soporte técnico y roles puente entre negocio y tecnología."
        />
        <Button href="/contact">Ir a contacto</Button>
      </section>
    </PageShell>
  );
};
