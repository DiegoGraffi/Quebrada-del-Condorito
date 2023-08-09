import Link from "next/link";

const Info = () => {
  return (
    <section
      id="info-ecosistema"
      className="max-w-[600px] mx-auto text-justify md:text-center mt-[3rem] md:mt-[5rem] px-[25px]"
    >
      <h3 className="uppercase text-[1rem] md:text-[1.5rem] mb-[3rem] md:mb-[5rem] font-bold">
        Ubicación
      </h3>
      <p className="text-[.8rem] md:text-[1rem] mb-[5rem]">
        El parque nacional Quebrada del Condorito (legalmente parque y reserva
        nacional Quebrada del Condorito) se encuentra en la provincia de
        Córdoba, Argentina, a 85 km al oeste de la ciudad homónima y en el
        centro de las sierras de Córdoba. Este parque nacional fue creado en
        1996.
        <br />
        <br />
        Es considerado la tercera maravilla natural de Córdoba. Posee una
        superficie de 37 344 ha, de las cuales 24 714 ha pertenecen al parque
        nacional propiamente dicho y 12 630 ha a la reserva nacional. Adyacentes
        a ambos se encuentran las 146 000 ha correspondientes a la reserva
        hídrica provincial Pampa de Achala.
        <br />
        <br />
        En el parque nacional propiamente dicho las tierras se encuentran
        sujetas al dominio público del Estado Nacional, mientras que en la
        reserva nacional se encuentran bajo dominio privado de particulares pero
        sujetas a jurisdicción nacional, comprendiendo 3 sectores: al norte la
        estancia Santo Tomás, al sur las estancias Atalaya y Viejo del Carmen y
        al este una parte del establecimiento Yata.
      </p>

      <h3 className="uppercase text-[1rem] md:text-[1.5rem] mb-[3rem] md:mb-[5rem] font-bold">
        Clima
      </h3>
      <p className="text-[.8rem] md:text-[1rem] mb-[5rem]">
        Templado frío de montaña, con gran amplitud térmica. Las temperaturas
        medias son de 14,5 ºC en verano y 5,5 °C en invierno (con mínimas
        absolutas de -10º C). Las precipitaciones llegan hasta 800 mm anuales,
        concentrados en la época veraniega. Nevadas probables en el seco
        invierno y elevado promedio anual de neblinas.
        <br />
        <br />
        Se recomienda su visita en primavera y otoño; el verano es lluvioso y se
        cierra el ingreso a sendas cuando hay mucha neblina.
      </p>

      <Link
        href="https://infoclima.com/pronosticos/argentina/cordoba/pampa-de-achala-_-el-condor/extendido/"
        target="_blank"
      >
        <button className="group text-[.8rem] p-[1rem] border-2 border-black w-full md:w-auto mt-[1rem] mb-[5rem] hover:bg-black transition-all duration-200 ease-in-out">
          <p className="uppercase font-[500] group-hover:text-white transition-all duration-200 ease-in-out">
            Consulte el clima
          </p>
        </button>
      </Link>
    </section>
  );
};

export default Info;
