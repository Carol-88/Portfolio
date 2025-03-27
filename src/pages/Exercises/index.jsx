import { useParams } from "react-router-dom";
import jsonData from "../../assets/exercises.json";

export const ExercisesPage = () => {
  const { id } = useParams();

  // Si hay un id, buscar el ejercicio específico
  if (id) {
    const exercise = jsonData.exercises.find((e) => e.id === Number(id));

    if (!exercise) {
      return (
        <div className="text-center text-red-600 text-xl mt-10">
          Ejercicio no encontrado
        </div>
      );
    }

    return (
      <section className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {exercise.title}
        </h1>
        <p className="text-gray-600">{exercise.description}</p>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Tecnologías utilizadas:
          </h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            {exercise.technologies.map((tech, index) => (
              <li
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 text-center">
          <a
            href={exercise.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            Ver código en GitHub
          </a>
        </div>
      </section>
    );
  }

  // Si NO hay un id, mostrar la lista de ejercicios
  return (
    <section className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Lista de Ejercicios
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jsonData.exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="border p-4 rounded-lg shadow-md bg-white"
          >
            <h2 className="text-2xl font-semibold text-gray-700">
              {exercise.title}
            </h2>
            <p className="text-gray-600 mt-2">{exercise.description}</p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Tecnologías utilizadas:
              </h3>
              <ul className="flex flex-wrap gap-2 mt-2">
                {exercise.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 text-center">
              <a
                href={`/exercises/${exercise.id}`}
                className="text-blue-600 font-semibold hover:underline"
              >
                Ver detalles
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
