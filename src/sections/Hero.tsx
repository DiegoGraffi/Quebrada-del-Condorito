import Image from "next/image";
import Fondo from "../../public/images/parque.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center">
      <div className="absolute z-40 flex flex-col items-center px-[25px]">
        <h1 className="text-white text-center uppercase text-[2rem] lg:text-[3rem] max-w-[50rem] font-[700] pb-10 border-b border-white">
          Parque nacional Quebrada del Condorito
        </h1>
        <p className="text-white uppercase text-center text-[.8rem] lg:text-[1rem] font-[400] pt-10">
          Un encuentro con los condores
        </p>
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
