import { IoLogoTwitter, IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      <div className="flex flex-col justify-center items-center md:items-start md:flex-row py-0 md:py-[5rem] max-w-[1200px] mx-auto px-[25px]">
        <div className="w-full md:w-[70%] border-b py-[2rem] my:py-0 md:border-r md:border-b-0 border-black text-center md:text-left md:pr-[25px]">
          <h3 className="font-bold uppercase text-[1rem] md:text-[1.5rem] mb-[1rem]">
            Contacto
          </h3>
          <p className="lg:w-[600px] mb-[1rem] w-full text-[.8rem] md:text-[1rem] md:pr-[25px]">
            <span className="font-[700]">
              Intendencia Parque Nacional Quebrada del Condorito:{" "}
            </span>
            Av. J.S. Bach 504 (esquina Drago) Barrio Costa Azul, (5152) Villa
            Carlos Paz, Córdoba.
          </p>
          <p className="w-full md:w-[600px] mb-[1rem] text-[.8rem] md:text-[1rem]">
            <span className="font-[700]">Teléfono: </span> +54 9 3541 532153
          </p>
          <p className="w-full md:w-[600px] mb-[1rem] text-[.8rem] md:text-[1rem]">
            <span className="font-[700]">Email: </span>{" "}
            quebradadelcondorito@apn.gob.ar
          </p>

          <p className="group w-full md:w-full text-[.8rem] md:text-[1rem] font-[300] bg-verde hover:bg-black transition-all ease-in-out duration-300 p-[1rem] text-white">
            <span className="font-[700]">Aviso importante: </span> Este sitio
            web es un proyecto personal de estudio y no representa el sitio web
            oficial de ninguna entidad. Su contenido es meramente educativo y no
            posee ningún carácter oficial ni representativo. Para acceder a la
            fuente oficial, por favor dirígete al sitio web correspondiente de
            la entidad en cuestión.{" "}
            <a
              href="http://www.quebradadelcondorito.ar/index.php"
              target="_blank"
              className="border-b border-white group-hover:bg-verde group-hover:p-[.2rem] group-hover:font-[400] group-hover:border-verde transition-all ease-in-out duration-150"
            >
              Ingresa aquí
            </a>
          </p>
        </div>

        <div className="w-full py-[2rem] md:pl-[25px] my:py-0 md:w-[30%] flex flex-col justify-center items-center md:items-end">
          <h3 className="font-bold uppercase text-[1rem] md:text-[1.5rem] mb-[1rem]">
            Seguinos
          </h3>
          <div className="flex gap-[2rem] w-[200px] justify-between">
            <a href="https://www.facebook.com/PNQuebradaDelCondorito">
              <IoLogoFacebook
                size={35}
                className="hover:text-[#3b5998] hover:scale-125 transition-all ease-in-out duration-200"
              />
            </a>

            <a href="https://twitter.com/turismocba">
              <IoLogoTwitter
                size={35}
                className="hover:text-[#00acee] hover:scale-125 transition-all ease-in-out duration-200"
              />
            </a>

            <a href="https://www.youtube.com/@parquesnacionalesarg">
              <IoLogoYoutube
                size={35}
                className="hover:text-[#ff0000] hover:scale-125 transition-all ease-in-out duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
