import { ProjectDetails } from "../../components/Projects/ProjectDetails";
import { SlideCards } from "../../components/Projects/SlideCards";

export const ProjectPage = (id) => {
  return (
    <div className="container max-w-4xl mx-auto px-6 py-4 mt-4 bg-red-50 shadow-xl rounded-lg overflow-hidden text-pretty">
      <ProjectDetails id={id} />
      <SlideCards />
    </div>
  );
};
