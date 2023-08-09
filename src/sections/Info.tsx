import Image from "next/image";
import indexImage from "../../public/images/inicio.jpg";

const Info = () => {
  return (
    <section
      id="info"
      className="max-w-[600px] mx-auto text-justify md:text-center mt-[3rem] md:mt-[5rem] px-[25px]"
    >
      <h3 className="uppercase text-[1rem] md:text-[1.5rem] mb-[3rem] md:mb-[5rem] font-bold">
        Un tesoro en plena pampa de achala
      </h3>
      <p className="text-[.8rem] md:text-[1rem] mb-[5rem]">
        Es el primer Parque Nacional en la provincia de Córdoba, creado en 1996
        con el objetivo de proteger la naciente de las cuencas hídricas, de
        vital importancia en el territorio, y para la conservación del hábitat
        de reproducción del cóndor andino.
        <br />
        <br />
        La existencia de este Parque Nacional se debió a la propuesta de
        naturalistas, ONGs y de profesionales de las Ciencias Naturales,
        particularmente de la Universidad Nacional de Córdoba. Todos coincidían
        en la importancia de asegurar el mantenimiento de ambientes muy
        particulares del oeste de la ecorregión Chaco Seco, en la Provincia de
        Córdoba.
      </p>

      <div>
        <Image
          src={indexImage}
          alt="foto quebrada del condorito"
          className="rounded-lg mb-[3rem] md:mb-[5rem]"
        />
      </div>

      <p className="text-[.8rem] md:text-[1rem] mb-[5rem]">
        Dos componentes identificaban el proyecto. Por un lado, asegurar la
        supervivencia de la población de cóndores cuyas nidadas y apostaderos
        colonizaron desde siempre los niveles más altos del cañadón de roca
        desnuda, conocido como Quebrada del Condorito.
        <br />
        <br />
        Por otro lado, por encima de los 2000 m, la planicie de altura que es La
        Pampa de Achala obra como cabeza de cuenca que capta las precipitaciones
        que se escurren formando las nacientes de importantes ríos de Córdoba.
        Todo ello fue el fundamento para que finalmente, en el marco del
        Proyecto de Conservación de la Biodiversidad (Global Environment
        Facility = GEF) se creara el Parque Nacional El Condorito.
        <br />
        <br />
        Desde 2007 se desarrollan en el área protegida acciones en el marco del
        programa de reintroducción de uno de los antiguos habitantes de Achala:
        el guanaco.
      </p>
    </section>
  );
};

export default Info;
