import { Link } from "react-router-dom";

export const ProfileCard = () => {
  const rrss = [
    {
      src: "/icons/github.png",
      alt: "GitHub",
      url: "https://github.com/Carol-88",
    },
    {
      src: "/icons/linkedin.png",
      alt: "LinkedIn",
      url: "https://www.linkedin.com/in/carolina-romero-c/",
    },
    {
      src: "/icons/twitter.png",
      alt: "Twitter",
      url: "https://x.com/caroldev_",
    },
  ];

  return (
    <div className=" flex justify-center p-5 sm:hidden md:hidden lg:hidden xl:hidden">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="relative pt-4 mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl saturate-50 hover:saturate-100">
          <img src="/img/portrait.webp" alt="profile-picture" />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Carolina Romero
          </h4>
          <p className=" font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
            Diseño y desarrollo Web
          </p>
        </div>
        <div className="flex justify-center gap-4 p-8">
          {rrss.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={social.src}
                alt={social.alt}
                className="w-12 h-12 saturate-50 shadow-lg hover:shadow-red-900"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
