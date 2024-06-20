export const handleLinkClick = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export const menuItems = [
  { path: "/", label: "Home" },
  { path: "/aboutme", label: "Sobre mí" },
  { path: "/experience", label: "Experiencia" },
  {
    path: "https://www.linkedin.com/newsletters/7059940563789189120/",
    label: "Newsletter",
    external: true,
  },
  { path: "/services", label: "Servicios" },
  { path: "/contact", label: "Contacto" },
];
