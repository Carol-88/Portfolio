// import { ProjectDetails } from "./components/Project/ProjectDetails";
import { Layout } from "./layout/Layout"
import { Home } from "./pages/Home/Home"
import { ProjectPage } from './pages/Project/ProjectPage';
import { useRoutes } from 'react-router-dom';

const App = () => {
 const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/projects/:id', element: <ProjectPage /> },
 ]);

 return (
    <Layout>
      {routes}
    </Layout>
 );
};
export default App;