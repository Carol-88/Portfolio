import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { sendEmail } from "../../lib/func-contact";
import { useEffect } from "react";
import { loadReCaptcha } from "react-recaptcha-v3"; // Asegúrate de instalar esta librería

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    // Verificar el token de reCAPTCHA
    const recaptchaToken = data.recaptchaValue;
    if (!recaptchaToken) {
      alert("Por favor, verifica que no eres un robot.");
      return;
    }

    // Aquí puedes enviar el correo
    await sendEmail(data);
  };

  useEffect(() => {
    const recaptcha = import.meta.env.VITE_ID_RECAPTCHA;
    loadReCaptcha(recaptcha); // Cargar reCAPTCHA
  }, []);

  return (
    <div
      id="contact"
      className="mt-4 bg-red-50 p-8 rounded-lg flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-[550px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          aria-label="Contact Form"
          role="form"
        >
          <h2
            className="text-center text-2xl font-bold mb-8 text-red-800"
            tabIndex={0}
          >
            Contacto
          </h2>
          <div className="mb-5">
            <label htmlFor="from_name" className="sr-only">
              Nombre completo
            </label>
            <input
              {...register("from_name", { required: true })}
              type="text"
              name="from_name"
              id="from_name"
              placeholder="Nombre completo"
              aria-required="true"
              aria-label="Nombre completo"
              defaultValue=""
              className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
            />
            {errors.from_name && (
              <span className="text-red-500" aria-live="polite">
                Nombre requerido
              </span>
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="sr-only">
              Correo electrónico
            </label>
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              type="email"
              name="email"
              id="email"
              placeholder="tu-email@domain.com"
              aria-required="true"
              aria-label="Correo electrónico"
              defaultValue=""
              className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
            />
            {errors.email && (
              <span className="text-red-500" aria-live="polite">
                Correo electrónico inválido
              </span>
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="subject" className="sr-only">
              Asunto
            </label>
            <input
              {...register("subject", { required: true })}
              type="text"
              name="subject"
              id="subject"
              placeholder="Asunto"
              aria-required="true"
              aria-label="Asunto"
              defaultValue=""
              className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
            />
            {errors.subject && (
              <span className="text-red-500" aria-live="polite">
                Asunto requerido
              </span>
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="sr-only">
              Mensaje
            </label>
            <textarea
              {...register("message", { required: true })}
              rows="4"
              name="message"
              id="message"
              placeholder="Escribe tu mensaje"
              aria-required="true"
              aria-label="Mensaje"
              defaultValue=""
              className="w-full resize-none rounded-md border bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
            ></textarea>
            {errors.message && (
              <span className="text-red-500" aria-live="polite">
                Mensaje requerido
              </span>
            )}
          </div>
          <input type="hidden" {...register("recaptchaValue")} />
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex justify-end hover:shadow-form rounded-md bg-red-400 hover:bg-red-800 text-black hover:text-white py-3 px-8 text-base font-semibold outline-none"
              aria-label="Enviar"
              tabIndex={0}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
