import { Link } from "react-router-dom";
import { PageShell } from "../../components/commons/PageShell";
import { usePageSEO } from "../../hooks/usePageSEO";

export const NotFound = () => {
  usePageSEO({
    title: "Página no encontrada — Carolina Romero",
    description: "La página que buscas no existe en el portfolio de Carolina Romero.",
  });

  return (
    <PageShell>
      <section className="section-card text-center">
        <h1 className="text-3xl font-bold text-primary-dark">404</h1>
        <p className="mt-4 text-primary-dark/70">
          Esta página no existe o ha sido movida.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex">
          Volver al inicio
        </Link>
      </section>
    </PageShell>
  );
};
