import Image from "next/image";
import Fondo from "../../../../public/images/actividades.jpg";
import { IoChevronDownSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center">
      <div className="absolute z-40 flex flex-col items-center px-[25px]">
        <h1 className="text-white text-center uppercase text-[2rem] lg:text-[5rem] max-w-[50rem] font-[700] pb-10 ">
          Actividades
        </h1>

        <div className="bg-white rounded-full p-2 hover:scale-110 hover:bg-verde hover:text-white transition ease-in-out duration-200 cursor-pointer translate-y-20">
          <IoChevronDownSharp size={30} />
        </div>
      </div>
      <div className="h-[100vh] ">
        <div className="bg-black w-[100%] h-full absolute z-20 opacity-40 left-0"></div>
        <Image
          src={Fondo}
          alt="fondo parque nacional"
          className="object-cover z-10 h-screen w-screen"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
