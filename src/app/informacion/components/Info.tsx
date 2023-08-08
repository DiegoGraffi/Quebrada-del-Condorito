import Image from "next/image";
import banner from "../../../../public/images/banner_inf.jpg";
import Link from "next/link";

const Info = () => {
  return (
    <section>
      <div className="max-w-[600px] mx-auto text-justify md:text-center mt-[3rem] md:mt-[5rem] px-[25px]">
        <h3 className="uppercase text-[1rem] md:text-[1.5rem] mb-[3rem] font-bold">
          Registros
        </h3>
        <div className="flex flex-col md:flex-row gap-[2rem] mb-[3rem]">
          <Link
            href="http://www.quebradadelcondorito.ar/pre_reg_trekking.php"
            className="w-full"
          >
            <button className="group text-[.8rem] p-[1rem] w-full border-2 border-black hover:bg-black transition-all duration-200 ease-in-out">
              <p className="uppercase font-[500] group-hover:text-white transition-all duration-200 ease-in-out">
                Registro de visitantes
              </p>
            </button>
          </Link>
          <Link
            href="http://www.quebradadelcondorito.ar/pesca/"
            className="w-full"
          >
            <button className="group text-[.8rem] p-[1rem] w-full border-2 border-black hover:bg-black transition-all duration-200 ease-in-out">
              <p className="uppercase font-[500] group-hover:text-white transition-all duration-200 ease-in-out">
                Permiso de Pesca
              </p>
            </button>
          </Link>
        </div>

        <div>
          <Image
            src={banner}
            alt="foto quebrada del condorito"
            className="rounded-lg mb-[3rem] md:mb-[5rem]"
          />
        </div>

        <h3 className="uppercase text-[1rem] md:text-[1.5rem] mb-[3rem] font-bold">
          Información de temporada
        </h3>

        <h4 className="uppercase text-[.8rem] md:text-[1rem] mb-[1rem] font-bold">
          Acceso a la quebrada (Áreas protegidas)
        </h4>
        <p className="text-[.8rem] md:text-[1rem] mb-[5rem]">
          El acceso principal se ubica en el paraje La Pampilla, sobre el KM 59
          y 1/2 de la RP 34 o Ruta de las Altas Cumbres, a 60 km de Villa Carlos
          Paz y de Mina Clavero. Tras dos kilómetros de ripio, este camino
          vehicular llega al estacionamiento habilitado. A partir de allí, se
          continúa por un sendero exclusivamente peatonal hasta el Balcón Norte
          de la quebrada (5 km aprox. ida).
          <br />
          <br />
          En La Pampilla paran ómnibus de las empresas COATA y ERSA. Éstas
          cubren el trayecto entre Córdoba -a donde llegan vuelos y ómnibus de
          todo el país- y las localidades de Mina Clavero y Villa Dolores.
          Consulte vía internet o en las terminales, los horarios y frecuencias
          de estos medios de transporte.
          <br />
          <br />
          <span className="font-bold">
            No se permite el ingreso con mascotas
          </span>
          . ¿Por qué no podés ingresar con tu mascota a un Parque Nacional?
          Muchas personas recorren el país junto a sus mascotas, pero al visitar
          un área protegida nacional deben tener en cuenta que su ingreso está
          prohibido. El objetivo de los Parques Nacionales es la conservación
          del patrimonio natural y cultural de los argentinos. Las áreas
          protegidas nacionales son sitios donde encontramos la naturaleza casi
          sin modificaciones, y una de las principales causas de pérdida de
          biodiversidad en estos espacios se debe a la presencia de especies
          exóticas que son originarias de Asia o Europa. La presencia de estas
          mascotas es ajena a los ambientes naturales. Su instinto y
          comportamiento impactan de modo directo e indirecto en la fauna y
          flora local.
        </p>
      </div>

      <div className=" max-w-[1000px] mx-auto px-[25px] flex flex-col justify-center items-center">
        <h4 className="uppercase text-[.8rem] md:text-[1rem] mb-[1rem] font-bold">
          Circuitos y paseos
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] text-center items-stretch mt-[2rem]">
          <p className="text-[.8rem] md:text-[1rem] p-[1.3rem] bg-gray-50 rounded-lg">
            <span className="font-bold">Paseo diurno</span> <br />
            <br />
            Los visitantes pueden acceder al circuito principal del parque
            (hasta el Balcón Norte y bajar al río de los condoritos) y a
            senderos interpretativos que se desprenden de éste.
          </p>
          <p className="text-[.8rem] md:text-[1rem] p-[1.3rem] bg-gray-50 rounded-lg">
            {" "}
            <span className="font-bold">Acampe</span> <br />
            <br /> Libre, gratuito y agreste en áreas La Cañada y pampa Pajosa.
            Tramite su permiso de acampe cuando tenga confirmado el registro de
            ingreso y unos días antes de ir al parque. Acampe en otras áreas:
            Únicamente con guías/prestadores habilitados.
          </p>
          <p className="text-[.8rem] md:text-[1rem] p-[1.3rem] bg-gray-50 rounded-lg">
            <span className="font-bold">Paseos nocturnos</span> <br /> <br /> Se
            puede visitar el parque de noche y disfrutar de la luna llena o de
            las excursiones astronómicas. Consulte con los guías habilitados
            para conocer las propuestas y costos.
          </p>
          <p className="text-[.8rem] md:text-[1rem] p-[1.3rem] bg-gray-50 rounded-lg">
            {" "}
            <span className="font-bold">Pesca</span> <br /> <br />
            Estamos en temporada de veda, desde este 29 de mayo.
          </p>
        </div>
      </div>

      <div className="max-w-[600px] mx-auto text-justify md:text-center mt-[3rem] md:mt-[5rem] px-[25px]">
        <h3 className="uppercase text-[1rem] md:text-[1.5rem] mb-[3rem] font-bold">
          Registro de visitantes
        </h3>

        <p className="text-[.8rem] md:text-[1rem] mb-[5rem]">
          Los visitantes deben registrarse a través del link{" "}
          <span className="font-bold">Registro de visitantes</span>, en la parte
          superior de esta página.
          <br />
          <br />
          Si Ud. desea realizar trekking al Balcón Sur, debe contratar un guía
          habilitado. No debe registrarse previamente, de eso se encargan los
          guías habilitados que lo acompañarán.
        </p>

        <Link href="/recomendaciones" className="w-full">
          <button className="group text-[.8rem] p-[1rem] w-full md:w-auto border-2 border-black hover:bg-black transition-all duration-200 ease-in-out">
            <p className="uppercase font-[500] group-hover:text-white transition-all duration-200 ease-in-out">
              Recomendaciones
            </p>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Info;
