import { Contact } from "../../components/Contact/Contact";
import { PageShell } from "../../components/commons/PageShell";
import { SectionTitle } from "../../components/commons/SectionTitle";

export const ContactPage = () => {
  return (
    <PageShell>
      <section className="section-card">
        <SectionTitle
          title="Contacto"
          subtitle="Escríbeme si quieres hablar sobre oportunidades, colaboraciones o proyectos."
        />
        <Contact />
      </section>
    </PageShell>
  );
};
