export const RRSS = () => {
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
            className="w-12 h-12 saturate-50 shadow-lg rounded-lg hover:shadow-red-900"
          />
        </a>
      ))}
    </div>
  );
};
