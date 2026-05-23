import emailjs from "@emailjs/browser";

export const sendEmail = async (data) => {
  const publicKey = import.meta.env.VITE_ID_USER_EMAILJS;
  const templateID = import.meta.env.VITE_ID_TEMPLATE;
  const serviceID = import.meta.env.VITE_ID_SERVICE;

  await emailjs.send(serviceID, templateID, data, { publicKey });
};
