

import { ProjectDetails } from '../../components/Project/ProjectDetails'; // Asegúrate de importar el componente correcto

export const ProjectPage = (id) => {
 return (
    <div className='pt-12'>
      <ProjectDetails id={id} />
    </div>
 );
};
