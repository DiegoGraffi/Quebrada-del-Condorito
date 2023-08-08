"use client";

import React from "react";
import Image from "next/image";
import Foto from "../../../../public/images/actividades_foto.png";
import acampe from "../../../../public/images/Acampar.jpeg";
import pesca from "../../../../public/images/pesca.jpg";
import visitas from "../../../../public/images/noche.jpg";
import bicicletas from "../../../../public/images/bicicleta.jpg";
import banner from "../../../../public/images/banner.jpg";
import Link from "next/link";

const Info = () => {
  return (
    <section className="overflow-hidden">
      <div className=" mt-[3rem] md:mt-[5rem] px-[25px]">
        <div className="max-w-[900px] mx-auto">
          <h3 className="uppercase text-[1.5rem] md:text-[2rem] mb-[2rem] md:mb-[3rem] font-bold">
            Horarios de ingreso
          </h3>
          <p className="font-bold text-[.8rem] md:text-[1rem]">
            Apertura y cierre de la tranquera sobre Ruta Provincial Nº 34 (km
            59,5):
          </p>
          <ul className="list-disc list-inside mt-[1rem] text-[.8rem] md:text-[1rem] flex flex-col gap-4">
            <li>Todos los días (incluyendo feriados nacionales).</li>
            <li>Ingreso: de 8 a 15 horas.</li>
            <li>Cierre: 20 horas.</li>
            <li>Se puede ingresar todos los días de semana con guía.</li>
          </ul>

          <p className="font-bold mt-[2rem] text-[.8rem] md:text-[1rem]">
            Horario de atención del Centro de Visitantes Achala (y permanencia
            en estacionamiento N°1):
          </p>
          <ul className="list-disc list-inside mt-[1rem] text-[.8rem] md:text-[1rem]">
            <li>De 8 a 20 horas.</li>
          </ul>

          <Link href="../../mapa">
            <button className="group p-[1.5rem] border-2 border-black w-full mt-[2rem] hover:bg-black transition-all duration-200 ease-in-out">
              <p className="uppercase font-bold group-hover:text-white transition-all duration-200 ease-in-out">
                Mapa del área protegida
              </p>
            </button>
          </Link>

          <h3 className="uppercase text-[1.5rem] md:text-[2rem] mb-[2rem] md:mb-[3rem] font-bold mt-[2rem] md:mt-[3rem]">
            Sitios para visitar y actividades
          </h3>

          <ul className="list-disc list-inside mt-[1rem] text-[.8rem] md:text-[1rem] flex flex-col gap-4">
            <li>
              <span className="font-bold">Balcón Norte</span> (con senderos
              interpretativos), bajada al{" "}
              <span className="font-bold">
                Río de los Condoritos y Balcón Sur
              </span>{" "}
              (únicamente con guías de trekking habilitados), los dos puntos de
              observación de cóndores sobre la Quebrada del Condorito. Están
              vinculados por una pasarela que cruza el río Condorito.
            </li>
            <li>
              Acampar únicamente en{" "}
              <span className="font-bold">La Cañada y Pampa Pajosa</span>,
              tramitando los registros de ingreso y de acampe correspondientes.
              Para acampar es obligatorio llevar calentador homologado.
            </li>
            <li>
              La <span className="font-bold">pesca recreativa</span> se
              encuentra habilitada desde el 30 octubre hasta fines de mayo. El
              permiso es obligatorio y se puede solicitar gratuitamente en
              quebradadelcondorito@apn.gob.ar y/o a través de un formulario
              virtual.
            </li>
          </ul>
        </div>

        <div className="h-[200px] md:h-[400px] lg:h-[600px] my-[2rem] md:my-[3rem] relative max-w-[1536px] mx-auto">
          <Image
            src={Foto}
            fill
            alt="actividades"
            className="object-cover rounded-lg"
          />
        </div>

        <div className="max-w-[900px] mx-auto">
          <h3 className="uppercase text-[1.5rem] md:text-[2rem] mb-[2rem] md:mb-[3rem] font-bold">
            Registro obligatorio
          </h3>

          <p className="text-[.8rem] md:text-[1rem]">
            Para acceder sin guía al Balcón Norte y/o el Río de los Condoritos
            es necesario completar un registro obligatorio.
            <br />
            <br />
            Lo completa un sólo responsable por grupo, realizando un registro
            por vehículo según la capacidad del mismo (entre 5 y 6 personas por
            auto) e incluyendo los datos de todos los acompañantes. El registro
            se realiza de manera virtual, a través de un formulario web.
            <br />
            <br />
            En caso de acceder en ómnibus u otro medio, se completa el registro
            hasta 6 personas por responsable (no repetir el nombre del
            responsable en más de un registro).
            <br />
            <br />
            Acompañantes: recordá presionar "confirmar acompañante" luego de
            cargar a cada uno, incluso el último; de lo contrario el sistema no
            lo guardará. Por último, presioná guardar y confirmar.
          </p>

          <h3 className="uppercase text-[1.5rem] md:text-[2rem] mb-[2rem] md:mb-[3rem] mt-[2rem] md:mt-[3rem] font-bold">
            Guías
          </h3>

          <p className="text-[.8rem] md:text-[1rem]">
            Para acceder al Balcón Sur o hacer trekking a campo traviesa tenés
            que contratar previo a la visita una excursión con guía habilitado.
            <br />
            <br />
            Los/as guías cuentan con cupos aparte, por lo que si contratás este
            servicio no es necesario llenar el registro online, ya que lo hacen
            ellos. Consultá el costo/valor de cada excursión con los/as guías y
            prestadores habilitados (ver archivo en Descargas, al final de esta
            página).
          </p>
        </div>

        <div className="max-w-[900px] mx-auto flex flex-col gap-[3rem] md:gap-[5rem] my-[2rem] md:my-[3rem]">
          <div className="flex flex-col md:flex-row items-center gap-[1rem] bg-[#f7f7f7ff] md:bg-transparent p-[1rem] rounded-lg">
            <div className="md:flex-1 text-center md:text-left flex flex-col gap-[1rem] md:p-[1rem]">
              <h4 className="uppercase font-bold text-[1.5rem] md:text-[2rem]">
                Acampe
              </h4>
              <p className="text-[.8rem] md:text-[1rem]">
                El Parque ofrece acampe libre, gratuito y agreste en las áreas
                La Cañada y Pampa Pajosa.
                <br />
                <br />
                Tramitá tu permiso de acampe una vez que tengas confirmado el
                registro de ingreso (indicado más arriba) y con unos días de
                anticipación a la visita al Parque.
                <br />
                <br />
                El acampe en otras áreas está permitido únicamente con
                guías/prestadores habilitados.
              </p>
            </div>
            <div className="md:flex-1 h-[300px] w-full md:h-[350px] relative">
              <Image
                src={acampe}
                alt="acampar foto"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-[1rem] bg-[#f7f7f7ff] md:bg-transparent p-[1rem] rounded-lg">
            <div className="md:flex-1 text-center md:text-left flex flex-col gap-[1rem] md:p-[1rem] order-1 md:order-2">
              <h4 className="uppercase font-bold text-[1.5rem] md:text-[2rem]">
                Pesca
              </h4>
              <p className="text-[.8rem] md:text-[1rem]">
                La temporada de pesca se extiende desde el 28 de octubre de 2022
                hasta el 28 de mayo de 2023. Sólo se puede pescar en temporada
                con <span className="font-bold">permiso</span>, gestionado por
                vía virtual.
              </p>
            </div>
            <div className="md:flex-1 h-[300px] w-full md:h-[350px] relative order-2 md:order-1">
              <Image
                src={pesca}
                alt="acampar foto"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-[1rem] bg-[#f7f7f7ff] md:bg-transparent p-[1rem] rounded-lg">
            <div className="md:flex-1 text-center md:text-left flex flex-col gap-[1rem] md:p-[1rem]">
              <h4 className="uppercase font-bold text-[1.5rem] md:text-[2rem]">
                Visitas Nocturnas
              </h4>
              <p className="text-[.8rem] md:text-[1rem]">
                Se realizan de lunes a domingos, únicamente mediante la
                contratación de{" "}
                <span className="font-bold">guías habilitados</span> (incluye
                Luna Llena).
              </p>
            </div>
            <div className="md:flex-1 h-[300px] w-full md:h-[350px] relative">
              <Image
                src={visitas}
                alt="acampar foto"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-[1rem] bg-[#f7f7f7ff] md:bg-transparent p-[1rem] rounded-lg">
            <div className="md:flex-1 text-center md:text-left flex flex-col gap-[1rem] md:p-[1rem] order-1 md:order-2">
              <h4 className="uppercase font-bold text-[1.5rem] md:text-[2rem]">
                Bicicletas
              </h4>
              <p className="text-[.8rem] md:text-[1rem]">
                Sólo está habilitado en{" "}
                <span className="font-bold">caminos vehiculares 2 y 7.</span> No
                se permite el ingreso con bicicletas en el sendero que va a la
                Quebrada.
              </p>
            </div>
            <div className="md:flex-1 h-[300px] w-full md:h-[350px] relative order-2 md:order-1">
              <Image
                src={bicicletas}
                alt="acampar foto"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto pb-[2rem] md:pb-[3rem]">
          <h3 className="uppercase text-[1.5rem] md:text-[2rem] mb-[2rem] md:mb-[3rem] mt-[2rem] md:mt-[3rem] font-bold">
            Residuos
          </h3>

          <p className="text-[.8rem] md:text-[1rem]">
            Llevá siempre una bolsa (en lo posible color oscuro, no
            transparente) para ir dejando allí los residuos generados durante tu
            visita, incluyendo papel higiénico, pañales o apósitos femeninos,
            para ser retirados fuera del Parque y dispuestos en el sitio
            correspondiente.{" "}
            <span className="font-bold">
              No dejes residuos en el Parque Nacional; llevalos con vos.
            </span>
          </p>

          <h3 className="uppercase text-[1.5rem] md:text-[2rem] mt-[2rem] md:mt-[3rem] mb-[2rem] md:mb-[3rem] font-bold">
            Más información de interés
          </h3>

          <ul className="list-disc list-inside mt-[1rem] text-[.8rem] md:text-[1rem] flex flex-col gap-4 text-justify">
            <li>
              El Parque no cuenta con servicios de{" "}
              <span className="font-bold">gastronomía pernocte</span> ni{" "}
              <span className="font-bold">agua potable</span>.
            </li>
            <li>
              Se recomienda{" "}
              <span className="font-bold">cargar combustible</span> en Córdoba,
              Villa Carlos Paz o Mina Clavero, según el punto de acceso al
              Camino de las Altas Cumbres.
            </li>
            <li>
              Las únicas empresas de{" "}
              <span className="font-bold">transporte público</span> con parada
              en el Paraje La Pampilla (ingreso al área Noreste del Parque, por
              donde se llega caminando a la Quebrada del Condorito) son{" "}
              <span className="font-bold">COATA</span> y{" "}
              <span className="font-bold">ERSA</span>. Las demás cobran pasaje
              hasta Mina Clavero y no es seguro que se detengan en el mencionado
              paraje.
            </li>
            <li>
              Es necesario contar con calzado adecuado para la caminata (con
              cordón que sujete el pie), llevar agua, protector solar, gorro,
              abrigo y comida para la todo el día.
            </li>
            <li>
              Para realizar las caminatas se recomienda{" "}
              <span className="font-bold">ingresar temprano</span> y solicitar
              previamente toda la{" "}
              <span className="font-bold">información necesaria</span>.
            </li>
            <li>
              Villa Carlos Paz y Mina Clavero ofrecen un equipamiento receptivo
              completo.
            </li>
            <li>
              Las respuestas a <span className="font-bold">consultas</span>{" "}
              sobre registros (incluyendo modificaciones de datos) tienen lugar
              únicamente de <span className="font-bold">lunes a viernes</span>{" "}
              de 8 a 16 horas.
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[100vw] h-[300px] md:h-[550px] relative">
        <div className="absolute w-full h-full bg-black opacity-20"></div>
        <Image
          src={banner}
          alt="foto parque"
          className="object-cover h-full w-full"
        />
      </div>
    </section>
  );
};

export default Info;
