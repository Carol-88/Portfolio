import { Hero } from "../../components/Hero/Hero";
import { ProjectGrid } from "../../components/Projects/ProjectGrid";
import { Techs } from "../../components/commons/Techs";
import { PageShell } from "../../components/commons/PageShell";
import { SectionTitle } from "../../components/commons/SectionTitle";
import { Button } from "../../components/commons/Button";
import { usePageSEO } from "../../hooks/usePageSEO";
import { site } from "../../config/site";

export const Home = () => {
  usePageSEO({
    title: site.seo.title,
    description: site.seo.description,
  });

  return (
    <PageShell>
      <Hero />
      <div id="projects" className="mb-10 scroll-mt-24">
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
        <Button to="/contact">Ir a contacto</Button>
      </section>
    </PageShell>
  );
};
