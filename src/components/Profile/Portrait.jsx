export const Portrait = () => {
  return (
    <div className="hidden h-full sm:block md:block lg:block xl:block w-2/5 fixed">
      <img
        src="/img/portrait.webp"
        className="object-cover h-screen w-full"
        alt="Portrait"
      />
    </div>
  );
};