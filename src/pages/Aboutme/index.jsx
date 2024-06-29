import { useState } from "react";

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
      <div className="container max-w-4xl mx-auto px-6 py-4 mt-4 bg-red-50 shadow-xl rounded-lg overflow-hidden text-pretty">
        <header className="text-center p-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Un poco más sobre mi
          </h1>
        </header>

        <section
          className="w-full p-8"
          role="main"
          aria-labelledby="about-me-title"
        >
          <img
            src="/img/me.png"
            alt="Carolina, desarrolladora web"
            className="mx-auto w-48 h-60 mb-4 float-left mr-4"
          />
          <p className="mb-4 text-lg">
            <strong>Hola a todos!</strong> Soy Carolina, una apasionada del
            desarrollo web que ha recorrido un camino tan variado y emocionante
            como mis propios intereses. Sí, has leído bien: ¡de Técnica Superior
            en Dietética a exploradora del mundo IT! ➡️
          </p>
          <p className="mb-4 text-lg">
            Soy una persona <strong>sensible </strong>,{" "}
            <strong> calmada</strong> e <strong> introvertida</strong>, lo que
            me permite profundizar en cada proyecto que me apasiona. Me encantan
            los retos que buscan
            <strong> mejorar la vida de las personas</strong>, fomentar la
            <strong> creatividad</strong> y aportar un toque de{" "}
            <strong>diversión</strong> y <strong>originalidad</strong>. ✨
          </p>
          <p className="mb-4 text-lg">
            Olvídate de trajes y corbatas, ¡mi hábitat natural son los proyectos
            que <strong>transforman el ocio y la cultura</strong>! Soy una
            amante de la <strong>flexibilidad</strong> y el{" "}
            <strong>equilibrio</strong>, valoro mi tiempo y necesito espacios
            donde pueda ser yo misma, desarrollar mis ideas sin miedo y mantener
            viva la chispa creativa.
          </p>
          <p className="mb-4 text-lg">
            Para recargar pilas y volver con las ideas frescas, disfruto de la
            cultura asiática, la naturaleza, la música rock y punk, las
            manualidades, la lectura y el cine. ¡Ah! Y mis perros son parte
            fundamental de mi vida.
          </p>
          <p className="mb-4 text-lg">
            En el trabajo, creo en un ambiente de <strong>confianza</strong> y
            <strong> cercanía</strong>, donde el{" "}
            <strong>profesionalismo</strong> se mezcla con un toque de humor.
            Para mí, la colaboración y la apertura son claves para{" "}
            <strong>un trabajo más humano y eficaz</strong>.
          </p>
          <p className="mb-4 text-lg">
            Soy una <strong>aprendiz constante</strong> que siempre busca nuevos
            desafíos que me hagan crecer. Mi <strong>mayor fortaleza</strong> es
            la esperanza y el
            <strong> esfuerzo</strong> que pongo en todo lo que hago, incluso
            ante las adversidades.
          </p>
          <p className="mb-4 text-lg">
            ¿Quieres conocer a una desarrolladora web entusiasta, creativa y
            llena de energía?{" "}
            <strong>¡Entonces no dudes en contactarme! </strong>P.D. ¿Te has
            fijado en mi capacidad de adaptación? ¡De la sanidad al desarrollo
            web... todo es posible!
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
                🚀 ¡Vamos a hacer cosas geniales juntos! 🚀
              </a>
            </span>
          </div>
        </section>
      </div>
    </article>
  );
};
