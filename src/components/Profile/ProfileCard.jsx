import { RRSS } from "../commons/RRSS";

export const ProfileCard = () => {
  return (
    <div className=" flex justify-center p-5 sm:hidden md:hidden lg:hidden xl:hidden bg-gradient-to-r from-orange-200 via-rose-200 to-orange-200">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 ">
        <div className="relative pt-4 mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl saturate-50 hover:saturate-100">
          <a href="/">
            <img
              src="/img/portrait.webp"
              alt="profile-picture"
              className="rounded-lg"
            />
          </a>
        </div>
        <div className="mt-4 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Carolina Romero
          </h4>
          <p>Diseño y desarrollo Web</p>
        </div>
        <div className="p-4">
          <RRSS />
        </div>
      </div>
    </div>
  );
};
