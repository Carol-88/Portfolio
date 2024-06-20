import { rrss } from "../../lib/func-rrss";
export const RRSS = () => {
  return (
    <div className="flex justify-center gap-4 p-4">
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
            className="w-8 h-8 saturate-50 shadow-lg rounded-lg hover:shadow-red-900"
          />
        </a>
      ))}
    </div>
  );
};
