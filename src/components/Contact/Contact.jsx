import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendEmail } from "../../lib/func-contact";

export const Contact = () => {
  const hCAPTCHA = import.meta.env.VITE_ID_hCAPTCHA;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const [captchaResponse, setCaptchaResponse] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const renderCaptcha = useCallback(() => {
    if (window.hcaptcha) {
      window.hcaptcha.render("hcaptcha", {
        sitekey: hCAPTCHA,
        callback: (response) => setCaptchaResponse(response),
      });
    }
  }, [hCAPTCHA]);

  useEffect(() => {
    if (!window.hcaptcha) {
      window.onloadCallback = renderCaptcha;
      const script = document.createElement("script");
      script.src =
        "https://hcaptcha.com/1/api.js?onload=onloadCallback&render=explicit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        delete window.onloadCallback;
        document.body.removeChild(script);
      };
    } else {
      renderCaptcha();
    }
  }, [renderCaptcha]);

  const submitForm = async (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const lastSendTime = localStorage.getItem("lastSendTime");
    const timeDiff = lastSendTime
      ? (Date.now() - parseInt(lastSendTime, 10)) / 60000
      : Infinity;

    if (timeDiff < 2) {
      toast.info(
        "Por favor, espera al menos dos minutos antes de enviar otro email."
      );
      setIsSubmitting(false);
      return;
    }

    if (!captchaResponse) {
      toast.error("Por favor, completa el CAPTCHA.");
      setIsSubmitting(false);
      return;
    }

    try {
      await sendEmail(data);
      toast.success("¡Email enviado exitosamente!");
      reset();
      localStorage.setItem("lastSendTime", Date.now().toString());
    } catch (error) {
      toast.error("Error al enviar el email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="mt-4 bg-red-50 p-8 rounded-lg flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-[550px]">
        <form
          onSubmit={handleSubmit(submitForm)}
          aria-label="Contact Form"
          role="form"
        >
          <h2
            className="text-center text-2xl font-bold mb-8 text-red-800"
            tabIndex={0}
          >
            Contacto
          </h2>

          {/* Campo Nombre */}
          <div className="mb-5">
            <label htmlFor="from_name" className="sr-only">
              Nombre completo
            </label>
            <input
              {...register("from_name", { required: "Nombre requerido" })}
              type="text"
              id="from_name"
              placeholder="Nombre completo"
              className="w-full rounded-md border bg-white py-3 px-6 text-base text-[#6B7280] outline-none focus:shadow-md"
            />
            {errors.from_name && (
              <span className="text-red-500">{errors.from_name.message}</span>
            )}
          </div>

          {/* Campo Correo Electrónico */}
          <div className="mb-5">
            <label htmlFor="email" className="sr-only">
              Correo electrónico
            </label>
            <input
              {...register("email", {
                required: "Correo electrónico requerido",
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: "Correo electrónico inválido",
                },
              })}
              type="email"
              id="email"
              placeholder="tu-email@domain.com"
              className="w-full rounded-md border bg-white py-3 px-6 text-base text-[#6B7280] outline-none focus:shadow-md"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Campo Asunto */}
          <div className="mb-5">
            <label htmlFor="subject" className="sr-only">
              Asunto
            </label>
            <input
              {...register("subject", { required: "Asunto requerido" })}
              type="text"
              id="subject"
              placeholder="Asunto"
              className="w-full rounded-md border bg-white py-3 px-6 text-base text-[#6B7280] outline-none focus:shadow-md"
            />
            {errors.subject && (
              <span className="text-red-500">{errors.subject.message}</span>
            )}
          </div>

          {/* Campo Mensaje */}
          <div className="mb-5">
            <label htmlFor="message" className="sr-only">
              Mensaje
            </label>
            <textarea
              {...register("message", { required: "Mensaje requerido" })}
              rows="4"
              id="message"
              placeholder="Escribe tu mensaje"
              className="w-full resize-none rounded-md border bg-white py-3 px-6 text-base text-[#6B7280] outline-none focus:shadow-md"
            ></textarea>
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>

          {/* hCaptcha */}
          <div id="hcaptcha" className="mb-5 h-captcha"></div>

          {/* Botón de Envío */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex justify-end rounded-md py-3 px-8 text-base font-semibold outline-none transition-colors ${
              isSubmitting
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-red-400 hover:bg-red-800 text-red-800 hover:text-white"
            }`}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
};
