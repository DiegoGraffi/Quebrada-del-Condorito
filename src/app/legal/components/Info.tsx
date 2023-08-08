import React from "react";
import { documentos } from "../../../constants/legal";

const Info = () => {
  return (
    <section>
      <div className=" max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-[25px] gap-[1rem] items-center my-[3rem]">
        {documentos.map((body, index) => (
          <LegalCard nombre={body.nombre} link={body.link} />
        ))}
      </div>
    </section>
  );
};

export default Info;

type legalCardProps = {
  nombre: string;
  link: string;
};

function LegalCard({ nombre, link }: legalCardProps) {
  return (
    <a href={link}>
      <div className="group w-full h-[200px] border-2 border-black flex flex-col justify-center items-center	hover:bg-black transition-all ease-in-out duration-300 overflow-hidden p-[1rem]">
        <p className="group-hover:text-white transition-all ease-in-out duration-300 text-center mt-[3rem]">
          {nombre}
        </p>
        <p className="hidden md:block mt-[1rem] translate-y-[300px] opacity-0 group-hover:text-white group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
          Click para ver
        </p>
        <p className="md:hidden mt-[1rem] translate-y-[300px] opacity-0 group-hover:text-white group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
          Click para descargar
        </p>
      </div>
    </a>
  );
}
