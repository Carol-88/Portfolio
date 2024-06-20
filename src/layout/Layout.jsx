import PropTypes from "prop-types";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { Portrait } from "../components/Profile/Portrait";
import { ProfileCard } from "../components/Profile/ProfileCard";

export const Layout = ({ children }) => {
  return (
    <>
      <nav aria-label="Navegación Principal">
        <Navbar />
      </nav>
      <div className="sm:grid sm:grid-cols-[40%_1fr_1fr] m-auto min-h-screen">
        <aside className="object-contain sm:h-screen col-start-1 col-end-1">
          <section aria-label="Perfil del Usuario">
            <Portrait />
            <ProfileCard />
          </section>
        </aside>
        <div className="col-start-2 col-end-4">
          <main className="text-lg px-4 pb-20 h-full bg-gradient-to-r from-orange-200 via-rose-200 to-orange-200 p-10">
            {children}
          </main>
        </div>
      </div>
      <footer aria-label="Pie de Página">
        <Footer />
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
