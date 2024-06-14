import { useState } from "react";
import { Carousel } from "../../components/carousel/CarouselImage";

export const AboutMe = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <article aria-label="About Me Section">
      <div className="container max-w-4xl mx-auto px-6 py-4 mt-14 bg-red-50 shadow-xl rounded-lg overflow-hidden">
        <header className="text-center p-6">
          <img
            src="/img/portrait.webp"
            alt="Carolina, desarrolladora web"
            className="mx-auto w-48 h-48 rounded-full mb-4 "
          />
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Un poco más sobre mi
          </h1>
        </header>

        <section
          className="w-full p-8"
          role="main"
          aria-labelledby="about-me-title"
        >
          <p className="mb-4 text-lg">
            ¡Hola Soy Carolina, una apasionada del desarrollo web y una
            exploradora incansable de nuevas experiencias. Mi camino hacia el
            mundo IT ha sido tan variado y enriquecedor como mis intereses: he
            pasado de estudiar sanidad a adentrarme en el desarrollo web,
            siempre con la esperanza y el esfuerzo como mis fieles compañeras de
            viaje.
          </p>
          <p className="mb-4 text-lg">
            Me considero una persona sensible, calmada e introvertida, lo que me
            permite conectar profundamente con los proyectos en los que creo.
            Disfruto especialmente trabajando en iniciativas que buscan mejorar
            la vida de las personas, fomentar la creatividad y aportar un toque
            de diversión y originalidad.
          </p>
          <p className="mb-4 text-lg">
            No me verás feliz en un entorno de banca, pero sí en proyectos que
            transformen el ocio o la cultura. Soy una amante de la flexibilidad
            y del equilibrio. Valoro mi tiempo y necesito espacios donde pueda
            ser yo misma, desarrollar mis ideas sin miedo a equivocarme y
            mantener siempre viva la chispa creativa.
          </p>
          <p className="mb-4 text-lg">
            Para mí, es esencial tener momentos de desconexión que me permitan
            recargar energías y volver con más fuerza e inspiración. Fuera del
            trabajo, soy una entusiasta de la cultura asiática y de la
            naturaleza. Me encanta la música rock y punk, disfruto de las
            manualidades y soy una ávida lectora y cinéfila, aunque mis pasiones
            van cambiando con las estaciones.
          </p>
          <p className="mb-4 text-lg">
            Mis perros son una parte vital de mi vida, y el contacto con los
            animales y la naturaleza es lo que realmente me llena. Me gusta
            crear un ambiente de confianza y cercanía con quienes trabajo,
            mezclando profesionalismo con un toque de humor. Creo que trabajar
            de manera colaborativa y abierta nos hace más humanos y eficaces.
          </p>
          <p className="mb-4 text-lg">
            En cuanto a desafíos, siempre valoro si puedo afrontarlos y cómo me
            harán crecer. Estoy trabajando en mantener el foco en lo que puedo
            manejar y en aprender sin miedo. Mi fortaleza reside en la esperanza
            y el esfuerzo que pongo en todo lo que hago, a pesar de las
            adversidades.
          </p>
          <p className="mb-4 text-lg">
            Este soy yo, Carolina, una desarrolladora web en continuo
            aprendizaje, siempre lista para enfrentar nuevos retos y con la
            esperanza de que, con esfuerzo y pasión, siempre se puede encontrar
            una solución.
          </p>

          <div className="mt-8">
            <iframe
              title="Spotify Playlist"
              style={{ borderRadius: "12px", border: "none" }}
              src="https://open.spotify.com/embed/playlist/36nzg8RY57lFlPl36BquCM?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="encrypted-media"
              loading="lazy"
            ></iframe>
          </div>

          <div className="text-center mt-8">
            <span
              className={`text-xl font-bold cursor-pointer ${
                isHovered ? "animate-pulse text-red-800" : "text-gray-700"
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="/contact" aria-label="Contact me for collaboration">
                ¡Vamos a hacer cosas geniales juntos 🚀
              </a>
            </span>
          </div>

          <Carousel />
        </section>
      </div>
    </article>
  );
};
