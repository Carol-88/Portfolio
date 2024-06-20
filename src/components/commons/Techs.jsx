import { technologies, TechnologyLogo } from "../../lib/func-techs";

export const Techs = () => {
  return (
    <div id="techs" className=" bg-red-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-8 text-center text-red-800">
        Tecnologías
      </h2>
      <div id="logos" className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, index) => (
          <TechnologyLogo key={index} {...tech} />
        ))}
      </div>
    </div>
  );
};
