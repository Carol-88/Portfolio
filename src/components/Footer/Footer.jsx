import { RRSS } from "../commons/RRSS";

export const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-wrap w-full sm:w-2/3 sm:flex-row justify-end items-center fixed sm:right-0 bottom-0 bg-gradient-to-r from-rose-200 via-rose-200 to-orange-200 z-1 shadow-lg sm:p-4">
      <p className="text-center sm:text-left p-1 sm:flex-1 lg:text-end">
        Created with love by Carolina Romero Cotan
      </p>
      <section className="flex justify-end items-center p-1 sm:flex-1">
        <RRSS />
      </section>
    </footer>
  );
};
