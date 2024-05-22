import { ProjectDetails } from "../../components/Project/ProjectDetails";

export const ProjectPage = (id) => {
  return (
    <div className="pt-12">
      <ProjectDetails id={id} />
    </div>
  );
};
