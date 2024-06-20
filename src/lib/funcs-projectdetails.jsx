export const filterImages = (contributions) =>
  Object.values(contributions).filter(Boolean);

export const renderServices = (services) =>
  services
    ? Object.entries(services).map(([key, service]) => (
        <div key={key} className="leading-8 mt-4">
          <strong>{service.title}</strong> {service.description}
        </div>
      ))
    : null;

export const createGridImages = (images, columns) => {
  const rows = Math.ceil(images.length / columns);
  return Array.from({ length: columns }, (_, colIndex) =>
    images.slice(colIndex * rows, colIndex * rows + rows)
  );
};
