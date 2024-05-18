export const Portrait = () => {
  return (
    <div className="hidden h-full sm:block md:block lg:block xl:block w-2/5 fixed z-10">
      <img
        src="/img/portrait.webp"
        className="object-cover h-screen w-full grayscale hover:grayscale-0"
        alt="Portrait"
      />
    </div>
  );
};