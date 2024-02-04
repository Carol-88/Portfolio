import { Link } from "react-router-dom";


export const Card = () => {
   return (
    <div className=" flex justify-center pt-5 sm:hidden md:hidden lg:hidden xl:hidden">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
          <img src="\src\assets\img\portrait.webp" alt="profile-picture" />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Carolina Romero
          </h4>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
            Diseño y desarrollo Web
          </p>
        </div>
        <div className="flex justify-center p-6 pt-2 gap-7">
          <Link href="#linkedin" className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
            <img src="src\assets\img\linkedin.png" className="w-12" aria-hidden="true"></img>
          </Link>
          <Link href="#github" className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
            <img src="src\assets\img\github.png" className=" w-12" aria-hidden="true"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
