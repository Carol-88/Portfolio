export const Portrait = () => {
  return (
    <div className="hidden h-full sm:block md:block lg:block xl:block w-2/5 fixed z-10">
      <a href="/">
        <img
          src="/img/portrait.webp"
          className="object-cover h-screen w-full saturate-50"
          alt="Portrait"
        />
      </a>
    </div>
  );
};
