export const Services = () => {
  return (
    <section className="container max-w-4xl mx-auto px-6 py-4 mt-4 bg-red-50 shadow-xl rounded-lg overflow-hidden text-pretty">
      <h1 className="text-4xl font-bold mb-4">
        Transforma Tus Ideas en Experiencias Digitales
      </h1>
      <p className="text-xl mb-8">
        Convierte tus visiones en realidades digitales con una desarrolladora
        frontend apasionada y dedicada.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Mis Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 border border-gray-300 rounded-lg bg-white">
          <h3 className="text-lg font-medium mb-2">Desarrollo Frontend</h3>
          <p>
            Crea interfaces de usuario intuitivas y responsivas con React,
            Next.js o Vue.js.
          </p>
        </div>
        <div className="p-6 border border-gray-300 rounded-lg bg-white">
          <h3 className="text-lg font-medium mb-2">Diseño Responsivo</h3>
          <p>
            Asegura que tu sitio web se vea perfectamente en cualquier
            dispositivo.
          </p>
        </div>
        <div className="p-6 border border-gray-300 rounded-lg bg-white">
          <h3 className="text-lg font-medium mb-2">Integración API</h3>
          <p>
            Conecta tu aplicación con APIs externas para funciones avanzadas y
            dinámicas.
          </p>
        </div>
      </div>
      <div className="text-center mt-8 mb-8 ">
        <span
          className={`text-xl font-bold cursor-pointer p-4 bg-rose-400  hover:animate-pulse rounded-lg text-white : "text-gray-700"
          }`}
        >
          <a href="/contact" aria-label="Contact me for collaboration">
            ¡ Contacta conmigo ! 🚀
          </a>
        </span>
      </div>
    </section>
  );
};
