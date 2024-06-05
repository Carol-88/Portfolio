export const Hero = () => {
  return (
    <section id="hero" className="mt-14 bg-slate-100 p-8 rounded-lg">
      <h1 className="text-2xl md:text-5xl mb-8 text-red-800 font-bold hover:animate-bounce">
        Desarrolladora Web Frontend
      </h1>
      <article>
        <p className="text-start mb-4 ">
          <img
            src="/img/me.png"
            alt="Mi retrato"
            className="hidden float-left w-48 rounded-3xl mx-4 grayscale hover:grayscale-0 md:block"
          />
          Me considero afortunada de dedicarme a lo que amo:
          <h3 className="font-bold">
            crear aplicaciones web que resalten por su diseño, funcionalidad y
            accesibilidad.
          </h3>
          Aunque soy consciente de que tengo mucho margen para crecer y
          aprender, me enorgullece ofrecer soluciones digitales que marcan la
          diferencia.
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
