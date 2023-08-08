import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center px-[25px]">
        <h3 className="uppercase text-[1rem] md:text-[1.5rem]  font-bold pt-[6rem] md:pt-[10rem]">
          Mapa del área protegida
        </h3>
        <div className="max-w-[600px] mx-auto flex flex-col items-center">
          <p className="text-[.8rem] md:text-[1rem] text-center mt-[3rem]">
            En el siguiente mapa interactivo usted encontrará todos los senderos
            y sitios de interés del parque.
            <br />
            <br />
            Puede descargar a su celular el archivo KML para ejecutarlo sin
            conexión y navegar en el terreno con completa información del
            parque.
            <br />
            <br />
            Para ello deberá contar en su teléfono celular con una aplicación de
            navegación por GPS. Por ejemplo, puede descargar la APP Google
            Earth.
          </p>

          <a
            href="../../../public/Parque+Nacional+Quebrada+del+Condorito.kml"
            download="Parque Nacional Quebrada del Condorito"
            className="w-[100%] md:w-[50%]"
          >
            <button className="group w-full border-2 border-black p-[1rem] my-[3rem] hover:bg-black transition-all duration-200 ease-in-out">
              <p className="uppercase font-bold group-hover:text-white transition-all duration-200 ease-in-out">
                Descargar archivo KML
              </p>
            </button>
          </a>
        </div>

        <div className="border-2 border-black w-full">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1FX1jmSalj2oF2leRIpYnSSZBxN1yRBDS"
            className="w-full aspect-square"
          ></iframe>
        </div>

        <div className="max-w-[600px] mx-auto flex flex-col items-center">
          <p className="text-[.8rem] md:text-[1rem] text-center mt-[3rem]">
            Conocé los límites, infraestructura, caminos, excursiones y senderos
            habilitados para uso público en este mapa interactivo.
            <br />
            <br />
            Para navegar el mapa, visualizar la información y descargar las
            capas del archivo, accedé al instructivo.
          </p>

          <Link
            className="w-[50%]"
            href="https://sib.gob.ar/archivos/Mapas_Google_de_APN.pdf"
            target="_blank"
          >
            <button className="group w-full border-2 border-black p-[1rem] my-[3rem] hover:bg-black transition-all duration-200 ease-in-out">
              <p className="uppercase font-bold group-hover:text-white transition-all duration-200 ease-in-out">
                Instructivo
              </p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
