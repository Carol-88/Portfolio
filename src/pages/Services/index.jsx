export const Services = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">
        Transforma Tus Ideas en Experiencias Digitales
      </h1>
      <p className="text-xl mb-8">
        Convierte tus visiones en realidades digitales con una desarrolladora
        frontend apasionada y dedicada.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Mis Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 border border-gray-300 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Desarrollo Frontend</h3>
          <p>
            Crea interfaces de usuario intuitivas y responsivas con React,
            Next.js o Vue.js.
          </p>
        </div>
        <div className="p-6 border border-gray-300 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Diseño Responsivo</h3>
          <p>
            Asegura que tu sitio web se vea perfectamente en cualquier
            dispositivo.
          </p>
        </div>
        <div className="p-6 border border-gray-300 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Integración API</h3>
          <p>
            Conecta tu aplicación con APIs externas para funciones avanzadas y
            dinámicas.
          </p>
        </div>
        <div className="p-6 border border-gray-300 rounded-lg">
          <h3 className="text-lg font-medium mb-2">
            Optimización de Rendimiento
          </h3>
          <p>
            Mejora la velocidad y eficiencia de tu sitio web para una mejor
            experiencia de usuario.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Precios Transparentes</h2>
      <p className="mb-4">
        Ofrezco tarifas competitivas sin comprometer la calidad. Mi tarifa por
        hora es de 20€, pero estoy abierta a discutir paquetes de proyecto para
        adaptarme mejor a tus necesidades.
      </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded">
        Contacta Conmigo
      </button>
    </>
  );
};
