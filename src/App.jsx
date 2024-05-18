// import { ProjectDetails } from "./components/Project/ProjectDetails";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home/Home";
import { ProjectPage } from "./pages/Project/ProjectPage";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
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
