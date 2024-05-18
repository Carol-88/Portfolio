export const Portrait = () => {
  return (
    <div className="hidden h-full sm:block md:block lg:block xl:block w-2/5 fixed z-10">
      <img
        src="/img/portrait.webp"
        className="object-cover h-screen w-full saturate-50 hover:saturate-100"
        alt="Portrait"
      />
    </div>
  );
};