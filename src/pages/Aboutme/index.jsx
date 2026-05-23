import { PageShell } from "../../components/commons/PageShell";
import { SectionTitle } from "../../components/commons/SectionTitle";
import { site } from "../../config/site";

export const AboutMe = () => {
  return (
    <PageShell>
      <article aria-label="Sobre mí" className="section-card">
        <SectionTitle title="Sobre mí" />

        <div className="space-y-5 text-base leading-relaxed text-primary-dark/85">
          <p>
            Soy desarrolladora frontend con base full stack. Mi trayectoria combina
            atención al cliente, formación en psicología y una reconversión hacia
            el desarrollo software a través de bootcamps (Hack a Boss, IronHack) y
            formación SEPE en 2025. He trabajado como frontend en CloudSolute y
            AdoptaUnJunior, y actualmente me centro en productos propios como{" "}
            <strong>BioEvolva (MenuPlanner)</strong> y <strong>PetCareManager</strong>.
          </p>

          <p>
            Trabajo con metodologías ágiles (Scrum, Kanban), diseño en Figma,
            accesibilidad web y documentación técnica. Mi experiencia previa en
            Securitas Direct me aporta capacidad de resolución bajo presión,
            comunicación clara y empatía con el usuario.
          </p>

          <p>
            Tengo formación en <strong>Dietética y Nutrición</strong>, lo que me
            permite aportar visión de dominio real en proyectos como MenuPlanner.
            Busco roles donde pueda unir análisis, UX y colaboración entre
            negocio y tecnología: frontend junior, QA manual, soporte técnico o
            customer support técnico.
          </p>
        </div>

        <div className="mt-8">
          <iframe
            title="Spotify Playlist"
            style={{ borderRadius: "12px", border: "none" }}
            src="https://open.spotify.com/embed/playlist/36nzg8RY57lFlPl36BquCM?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="encrypted-media"
            loading="lazy"
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.cvPath}
            download
            className="btn-secondary"
          >
            Descargar CV
          </a>
          <a
            href="https://www.linkedin.com/in/carolina-romero-c/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            LinkedIn
          </a>
        </div>
      </article>
    </PageShell>
  );
};
