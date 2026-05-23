export const renderServices = (services) =>
  services
    ? Object.entries(services).map(([key, service]) => (
        <div key={key} className="rounded-xl bg-surface-muted p-4">
          {service.title && (
            <strong className="text-primary-dark">{service.title} </strong>
          )}
          <span className="text-primary-dark/80">{service.description}</span>
        </div>
      ))
    : null;

export const filterImages = (contributions) =>
  Object.values(contributions).filter(Boolean);
