import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ContactPage } from "./pages/ContactPage";

const AboutMe = lazy(() =>
  import("./pages/Aboutme").then((module) => ({ default: module.AboutMe }))
);
const Experience = lazy(() =>
  import("./pages/Experience").then((module) => ({ default: module.Experience }))
);
const ProjectPage = lazy(() =>
  import("./pages/Project").then((module) => ({ default: module.ProjectPage }))
);

const PageLoader = () => (
  <div className="page-shell py-16 text-center text-primary-dark/60">Cargando...</div>
);

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/aboutme",
      element: (
        <Suspense fallback={<PageLoader />}>
          <AboutMe />
        </Suspense>
      ),
    },
    {
      path: "/experience",
      element: (
        <Suspense fallback={<PageLoader />}>
          <Experience />
        </Suspense>
      ),
    },
    {
      path: "/projects/:id",
      element: (
        <Suspense fallback={<PageLoader />}>
          <ProjectPage />
        </Suspense>
      ),
    },
    { path: "/contact", element: <ContactPage /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <Layout>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        limit={3}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
      {routes}
    </Layout>
  );
};

export default App;
