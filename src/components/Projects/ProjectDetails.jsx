import { useParams } from "react-router-dom";
import { useState } from "react";
import jsonData from "../../assets/projects.json";
import {
  filterImages,
  renderServices,
  createGridImages,
} from "../../lib/funcs-projectdetails";

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = jsonData.projects.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  const images = filterImages(project.contributions);
  const gridImages = createGridImages(images, 2);

  return (
    <section className="max-w-4xl mx-auto p-6 md:p-12">
      {/* Sección de detalles del proyecto */}
      <div className="flex flex-col items-center md:flex-row md:justify-start md:items-center p-4">
        <img
          src={project.logo}
          alt="Logo"
          className="w-16 h-16 rounded-full mb-4 md:mb-0 md:mr-4"
        />
        <a
          href={project.web}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center md:text-left"
        >
          <h1 className="text-3xl font-bold text-red-800 hover:text-cyan-700">
            {project.name}
          </h1>
        </a>
      </div>

      <h3 className="text-lg font-semibold text-gray-700 mt-4 md:mt-6">
        {project.subtitle}
      </h3>
      <em className="block text-sm font-semibold text-gray-500 mt-2">
        {project.role}
      </em>
      <h4 className="text-lg font-semibold text-gray-700 mt-6">
        {project.description.goal}
      </h4>

      {/* Sección de servicios */}
      {project.description.services && (
        <section>{renderServices(project.description.services)}</section>
      )}

      {/* Sección de plataforma */}
      <h3 className="mt-4">
        <strong>Plataforma:</strong>
      </h3>
      <p>{project.description.platform}</p>

      {/* Sección de video */}
      {project.video && (
        <div className="flex justify-center w-full mt-8">
          <iframe
            className="w-full max-w-2xl h-64 md:h-96 rounded-lg"
            src={project.video}
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Sección de imágenes */}
      {images.length > 0 && (
        <article id="contributions">
          <h3 className="text-lg font-semibold mt-4 md:mt-6">
            Contribuciones e imágenes del proyecto
          </h3>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mt-8 h-fit">
            {gridImages.map((colImages, colIndex) => (
              <div key={colIndex} className="grid gap-4 h-fit">
                {colImages.map((image, rowIndex) => (
                  <div
                    key={rowIndex}
                    onClick={() => setSelectedImage(image)}
                    className="h-fit"
                  >
                    <img
                      className="h-auto max-w-full rounded-lg cursor-pointer shadow-md"
                      src={image}
                      alt={`Contribution ${colIndex * 2 + rowIndex + 1}`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </article>
      )}

      {/* Modal de imagen seleccionada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-screen max-w-screen rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};
