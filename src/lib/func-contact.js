import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export const sendEmail = async (data) => {
  const userID = import.meta.env.VITE_ID_USER_EMAILJS;
  const templateID = import.meta.env.VITE_ID_TEMPLATE;
  const serviceID = import.meta.env.VITE_ID_SERVICE;
  const recaptcha = import.meta.env.VITE_ID_RECAPTCHA;

  try {
    await emailjs.send(serviceID, templateID, data, userID, recaptcha);
    toast.success("Correo enviado exitosamente!");
  } catch (error) {
    console.log(error.text);
    toast.error("Hubo un error al enviar el correo.");
  }
};
