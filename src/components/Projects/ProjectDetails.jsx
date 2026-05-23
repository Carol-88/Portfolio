import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import jsonData from "../../assets/projects.json";
import {
  filterImages,
  renderServices,
} from "../../lib/funcs-projectdetails";
import { PageShell } from "../commons/PageShell";
import { Tag } from "../commons/Tag";

const isVideoFile = (src) => /\.(mp4|webm|ogg)$/i.test(src);

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = jsonData.projects.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <PageShell>
        <div className="section-card text-center">
          <p>Proyecto no encontrado.</p>
          <Link to="/" className="btn-primary mt-4 inline-flex">
            Volver al inicio
          </Link>
        </div>
      </PageShell>
    );
  }

  const images = filterImages(project.contributions);

  return (
    <PageShell>
      <section className="section-card">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
          <img
            src={project.logo}
            alt={`Logo de ${project.name}`}
            className="h-16 w-16 shrink-0 rounded-xl border border-accent-soft/20 bg-surface-muted object-contain p-1"
          />
          <div>
            <div className="mb-2 flex flex-wrap gap-2">
              {project.badge && (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {project.badge}
                </span>
              )}
              {project.status && (
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-primary-dark">
                  {project.status}
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-primary-dark">{project.name}</h1>
            <p className="mt-2 text-lg text-primary-dark/70">{project.subtitle}</p>
            <p className="mt-1 text-sm italic text-primary-dark/60">{project.role}</p>
          </div>
        </div>

        {project.tech?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <Tag key={item} label={item} />
            ))}
          </div>
        )}

        <p className="mt-6 text-base leading-relaxed text-primary-dark/85">
          {project.description.goal}
        </p>

        {project.description.services && (
          <section className="mt-6 space-y-4">
            {renderServices(project.description.services)}
          </section>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.web}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver demo o repositorio
          </a>
          {project.github && project.github !== project.web && (
            <a
              href={project.github}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Código en GitHub
            </a>
          )}
        </div>

        {project.video && (
          <div className="mt-8 flex justify-center">
            {isVideoFile(project.video) ? (
              <video
                className="mx-auto max-h-[45vh] w-auto max-w-[min(100%,280px)] rounded-xl shadow-card object-contain sm:max-h-[50vh] sm:max-w-xs"
                controls
                playsInline
                src={project.video}
              >
                Tu navegador no soporta la reproducción de video.
              </video>
            ) : (
              <iframe
                className="h-48 w-full max-w-xl rounded-xl sm:h-56 md:h-64"
                src={project.video}
                title={`Video de ${project.name}`}
                allowFullScreen
              />
            )}
          </div>
        )}

        {images.length > 0 && (
          <article id="contributions" className="mt-10">
            <h3 className="text-lg font-semibold text-primary-dark">
              Capturas del proyecto
            </h3>
            <div className="mt-6 flex flex-col items-center gap-6">
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="w-full max-w-3xl overflow-hidden rounded-xl border border-accent-soft/30 bg-white p-4 shadow-card transition hover:shadow-card-hover"
                >
                  <img
                    className="mx-auto max-h-80 w-full cursor-pointer object-contain sm:max-h-96"
                    src={image}
                    alt={`Captura ${index + 1} de ${project.name}`}
                  />
                </button>
              ))}
            </div>
          </article>
        )}

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
            onClick={() => setSelectedImage(null)}
            role="presentation"
          >
            <div className="relative max-h-full max-w-full">
              <button
                type="button"
                className="absolute right-2 top-2 rounded-full bg-black/50 px-3 py-1 text-white"
                onClick={() => setSelectedImage(null)}
              >
                Cerrar
              </button>
              <img
                src={selectedImage}
                alt="Captura ampliada"
                className="max-h-[90vh] max-w-full rounded-lg"
              />
            </div>
          </div>
        )}
      </section>
    </PageShell>
  );
};
