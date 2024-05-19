export const AboutMe = () => {
  return (
    <section id="aboutme" className="p-14 ">
      <h1 className="text-2xl md:text-5xl mb-8 text-red-800 font-bold hover:animate-bounce">
        Desarrolladora Web Frontend
      </h1>
      <article>
        <p className="text-start mb-4 ">
          <img
            src="/img/me.jpeg"
            alt="Mi retrato"
            className="hidden float-left w-32 rounded-3xl mx-4 grayscale hover:grayscale-0 md:block"
          />
          Me considero afortunada de dedicarme a lo que amo: crear aplicaciones
          web que resalten por su diseño, funcionalidad y accesibilidad. Aunque
          soy consciente de que tengo mucho margen para crecer y aprender, me
          enorgullece ofrecer soluciones digitales que marcan la diferencia.
        </p>
        <p className="text-start mb-4">
          Estoy abierta a colaborar en proyectos que me permitan aplicar mis
          habilidades y, al mismo tiempo, expandir mis horizontes. Mi objetivo
          es contribuir con mi granito de arena al éxito de cada proyecto,
          trabajando en equipo para desarrollar experiencias web que no solo
          sean visualmente atractivas sino también eficaces y significativas
          para los usuarios finales.
        </p>
      </article>
    </section>
  );
};
