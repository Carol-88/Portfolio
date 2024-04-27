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
    <div className="flex items-center justify-center ">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={sendEmail} aria-label="Contact Form">
          <div className="mb-5">
            <label
              htmlFor="from_name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="from_name" // Ajustado para coincidir con la plantilla
              id="from_name"
              placeholder="Full Name"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email" // Ajustado para coincidir con la plantilla
              id="email"
              placeholder="example@domain.com"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject" // Ajustado para coincidir con la plantilla
              id="subject"
              placeholder="Enter your subject"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message" // Ajustado para coincidir con la plantilla
              id="message"
              placeholder="Type your message"
              required
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              aria-label="Submit Form"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
