import { RRSS } from "../commons/RRSS";
import { site } from "../../config/site";

export const Footer = () => {
  return (
    <footer className="border-t border-accent-soft/20 bg-surface-card">
      <div className="page-shell flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-sm text-primary-dark/70">
          © {new Date().getFullYear()} {site.name}
        </p>
        <RRSS />
      </div>
    </footer>
  );
};
