import { Layout } from "./layout/Layout";
import { AboutMe } from "./pages/Aboutme";
import { Blog } from "./pages/Blog";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { ProjectPage } from "./pages/Project";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/aboutme", element: <AboutMe /> },
    { path: "/blog", element: <Blog /> },
    { path: "/experience", element: <Experience /> },
    { path: "/services", element: <Services /> },
    { path: "/projects/:id", element: <ProjectPage /> },
  ]);

  return (
    <Layout>
      <ToastContainer />
      {routes}
    </Layout>
  );
};
export default App;
