import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};

    // Verificación de nombre
    if (!document.getElementById("from_name").value) {
      tempErrors.from_name = "Nombre requerido";
    }

    // Verificación de correo electrónico
    if (
      !document.getElementById("email").value ||
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
        document.getElementById("email").value
      )
    ) {
      tempErrors.email = "Correo electrónico inválido";
    }

    // Verificación de asunto
    if (!document.getElementById("subject").value) {
      tempErrors.subject = "Asunto requerido";
    }

    // Verificación de mensaje
    if (!document.getElementById("message").value) {
      tempErrors.message = "Mensaje requerido";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // No proceder si hay errores de validación
    }

    const userID = import.meta.env.VITE_ID_USER_EMAILJS;
    const templateID = import.meta.env.VITE_ID_TEMPLATE;
    const serviceID = import.meta.env.VITE_ID_SERVICE;

    try {
      await emailjs.sendForm(serviceID, templateID, e.target, userID);
      toast.success("Correo enviado exitosamente!");
    } catch (error) {
      console.log(error.text);
      toast.error("Hubo un error al enviar el correo.");
    }
  };

  return (
    <div id="contact" className="flex items-center justify-center mt-14 ">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={sendEmail} aria-label="Contact Form">
          <h2 className="text-center text-2xl font-bold mb-8 text-red-800">
            Contacto
          </h2>
          <div className="mb-5">
            <input
              type="text"
              name="from_name"
              id="from_name"
              placeholder="Nombre completo"
              required
              aria-required="true"
              aria-label="Nombre completo"
              className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
            />
            {errors.from_name && (
              <span className="text-red-500">{errors.from_name}</span>
            )}
          </div>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="tu-email@domain.com"
              required
              aria-required="true"
              aria-label="Correo electrónico"
              className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
          <div className="mb-5">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Asunto"
              required
              aria-required="true"
              aria-label="Asunto"
              className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
            />
            {errors.subject && (
              <span className="text-red-500">{errors.subject}</span>
            )}
          </div>
          <div className="mb-5">
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Escribe tu mensaje"
              required
              aria-required="true"
              aria-label="Mensaje"
              className="w-full resize-none rounded-md border bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
            ></textarea>
            {errors.message && (
              <span className="text-red-500">{errors.message}</span>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex justify-end hover:shadow-form rounded-md bg-rose-400 hover:bg-red-800 text-white py-3 px-8 text-base font-semibold outline-none"
              aria-label="Enviar"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
