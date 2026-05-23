import { Contact } from "../../components/Contact/Contact";
import { PageShell } from "../../components/commons/PageShell";
import { SectionTitle } from "../../components/commons/SectionTitle";
import { usePageSEO } from "../../hooks/usePageSEO";

export const ContactPage = () => {
  usePageSEO({
    title: "Contacto — Carolina Romero",
    description:
      "Contacta con Carolina Romero para oportunidades en desarrollo frontend, soporte técnico o colaboraciones.",
  });

  return (
    <PageShell>
      <section className="section-card">
        <SectionTitle
          title="Contacto"
          subtitle="Escríbeme si quieres hablar sobre oportunidades, colaboraciones o proyectos."
          headingLevel="h1"
        />
        <Contact />
      </section>
    </PageShell>
  );
};
