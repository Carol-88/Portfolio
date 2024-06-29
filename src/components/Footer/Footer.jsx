import { RRSS } from "../commons/RRSS";
export const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row sm:justify-end fixed w-full bottom-0 bg-gradient-to-r from-rose-200 via-rose-200 to-orange-200 z-1 shadow-lg">
      <p className="flex justify-center items-center p-1">
        Created with love by Carolina Romero Cotan
      </p>
      <p className="flex flex-wrap justify-center items-center p-1">
        <RRSS />
      </p>
    </footer>
  );
};
