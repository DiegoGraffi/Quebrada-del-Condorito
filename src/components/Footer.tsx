import { IoLogoTwitter, IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      <div className="flex flex-col justify-center items-center md:items-start md:flex-row py-0 md:py-[5rem] max-w-[1200px] mx-auto px-[25px]">
        <div className="w-full md:w-[65%] border-b py-[2rem] my:py-0 md:border-r md:border-b-0 border-black text-center md:text-left">
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
          <p className="w-full md:w-[600px] text-[.8rem] md:text-[1rem]">
            <span className="font-[700]">Email: </span>{" "}
            quebradadelcondorito@apn.gob.ar
          </p>
        </div>

        <div className="w-full py-[2rem] my:py-0 md:w-[35%] flex flex-col justify-center items-center md:items-end">
          <h3 className="font-bold uppercase text-[1rem] md:text-[1.5rem] mb-[1rem]">
            Seguinos
          </h3>
          <div className="flex gap-[2rem]">
            <a href="https://www.facebook.com/PNQuebradaDelCondorito">
              <IoLogoFacebook size={30} />
            </a>

            <a href="https://twitter.com/turismocba">
              <IoLogoTwitter size={30} />
            </a>

            <a href="https://www.youtube.com/@parquesnacionalesarg">
              <IoLogoYoutube size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
