import emailjs from "emailjs-com";

export const Contact = () => {
 const sendEmail = (e) => {
 e.preventDefault();

 const userID = import.meta.env.VITE_ID_USER_EMAILJS;
 const templateID = import.meta.env.VITE_ID_TEMPLATE;
 const serviceID = import.meta.env.VITE_ID_SERVICE;

 emailjs.sendForm(serviceID, templateID, e.target, userID)
    .then((result) => {
      console.log(result.text);
      alert("Correo enviado exitosamente!");
    }, (error) => {
      console.log(error.text);
      alert("Hubo un error al enviar el correo.");
    });
};
  return (
    <div id='contact' className="flex items-center justify-center mt-14 ">
      
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={sendEmail} aria-label="Contact Form">
          <h2 className="text-center text-2xl font-bold mb-8 text-red-800">Contacto</h2>
          <div className="mb-5">

            <input
              type="text"
              name="from_name" // Ajustado para coincidir con la plantilla
              id="from_name"
              placeholder=" Nombre completo "
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              name="email" // Ajustado para coincidir con la plantilla
              id="email"
              placeholder="tu-email@domain.com"
              required
              autoComplete="off"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              name="subject" // Ajustado para coincidir con la plantilla
              id="subject"
              placeholder=" Asunto "
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <textarea
              rows="4"
              name="message" // Ajustado para coincidir con la plantilla
              id="message"
              placeholder=" Escribe tu mensaje "
              required
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-burguer hover:bg-red-800 hover:text-white py-3 px-8 text-base font-semibold text-black outline-none"
              aria-label="Submit Form"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
