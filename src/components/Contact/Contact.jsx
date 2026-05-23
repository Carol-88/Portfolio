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
    } catch {
      toast.error("Error al enviar el email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName =
    "w-full rounded-xl border border-accent-soft/30 bg-white py-3 px-4 text-base text-primary-dark outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <div id="contact" className="mx-auto w-full max-w-xl">
      <form onSubmit={handleSubmit(submitForm)} aria-label="Formulario de contacto">
        <div className="mb-5">
          <label htmlFor="from_name" className="mb-2 block text-sm font-medium text-primary-dark">
            Nombre completo
          </label>
          <input
            {...register("from_name", { required: "Nombre requerido" })}
            type="text"
            id="from_name"
            placeholder="Tu nombre"
            className={inputClassName}
          />
          {errors.from_name && (
            <span className="mt-1 block text-sm text-red-600">{errors.from_name.message}</span>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-primary-dark">
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
            className={inputClassName}
          />
          {errors.email && (
            <span className="mt-1 block text-sm text-red-600">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-primary-dark">
            Asunto
          </label>
          <input
            {...register("subject", { required: "Asunto requerido" })}
            type="text"
            id="subject"
            placeholder="Asunto del mensaje"
            className={inputClassName}
          />
          {errors.subject && (
            <span className="mt-1 block text-sm text-red-600">{errors.subject.message}</span>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-primary-dark">
            Mensaje
          </label>
          <textarea
            {...register("message", { required: "Mensaje requerido" })}
            rows="4"
            id="message"
            placeholder="Escribe tu mensaje"
            className={`${inputClassName} resize-none`}
          />
          {errors.message && (
            <span className="mt-1 block text-sm text-red-600">{errors.message.message}</span>
          )}
        </div>

        <div id="hcaptcha" className="mb-5 h-captcha" />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn-primary w-full sm:w-auto ${
            isSubmitting ? "cursor-not-allowed opacity-60" : ""
          }`}
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>
    </div>
  );
};
