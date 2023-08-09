import Image from "next/image";
import Fondo from "../../public/images/parque.jpg";
import { IoChevronDownSharp } from "react-icons/io5";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center">
      <div className="absolute z-40 flex flex-col items-center px-[25px]">
        <h1 className="text-white text-center uppercase text-[2rem] lg:text-[3rem] max-w-[50rem] font-[700] pb-10 border-b border-white">
          Parque nacional Quebrada del Condorito <br />
        </h1>
        <p className="text-white uppercase text-center text-[.8rem] lg:text-[1rem] font-[400] pt-10">
          Un encuentro con los condores
        </p>
        <p className="group text-white uppercase text-center text-[.8rem] lg:text-[1rem] font-[400] p-3 bg-verde mt-2 hover:bg-black transition-all duration-200 ease-in-out">
          Sitio web{" "}
          <span className="group-hover:font-bold transition-all duration-200 ease-in-out">
            no oficial
          </span>
        </p>
        <Link href="/#info">
          <div className="bg-white rounded-full p-2 hover:scale-110 hover:bg-verde hover:text-white transition ease-in-out duration-200 cursor-pointer translate-y-20">
            <IoChevronDownSharp size={30} />
          </div>
        </Link>
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
