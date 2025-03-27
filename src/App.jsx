import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout } from "./layout/Layout";
import { AboutMe } from "./pages/Aboutme";
import { ContactPage } from "./pages/ContactPage";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/Home";
import { ProjectPage } from "./pages/Project";
const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/aboutme", element: <AboutMe /> },
    { path: "/experience", element: <Experience /> },
    { path: "/projects/:id", element: <ProjectPage /> },
    { path: "/contact", element: <ContactPage /> },
  ]);

  return (
    <Layout>
      <ToastContainer />
      {routes}
    </Layout>
  );
};
export default App;
