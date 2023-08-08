"use client";

import React from "react";
import Image from "next/image";
import Swiper from "react-id-swiper";
import "swiper/css";
import Image1 from "../../../../public/images/fauna/1.jpg";
import Image2 from "../../../../public/images/fauna/2.jpg";
import Image3 from "../../../../public/images/fauna/3.jpg";
import Image4 from "../../../../public/images/fauna/4.jpg";
import Image5 from "../../../../public/images/fauna/5.jpg";
import Image6 from "../../../../public/images/fauna/6.jpg";
import Image7 from "../../../../public/images/fauna/7.jpg";
import Image8 from "../../../../public/images/fauna/8.jpg";

const Fauna = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <section>
      <div className="max-w-[600px] mx-auto text-justify md:text-center mt-[3rem] md:mt-[5rem] px-[25px]">
        <h3 className="uppercase text-[1rem] md:text-[1.5rem] mb-[3rem] md:mb-[5rem] font-bold">
          Fauna
        </h3>
        <p className="text-[.8rem] md:text-[1rem] mb-[5rem]">
          Al igual que la flora, distintas corrientes de fauna se encuentran en
          lo más alto de las Sierras de Córdoba. En su mayoría son animales de
          origen andino-patagónico, con especies típicas de la llanura con la
          altitud como límite para su distribución. La gran variedad ambiental
          permite la coexistencia de especies, algunas con alta especificidad en
          su hábitat, lo que supone gran fragilidad por destrucción,
          modificación o desaparición del ambiente. Con 36 especies de
          mamíferos, como el zorro colorado de Achala -subespecie endémica-, el
          puma como predador tope y varias especies de felinos, murciélagos y
          roedores presentes en los amplios pastizales del parque, también se
          citan 21 especies de reptiles como el lagarto de Achala y 24 especies
          de anfibios, muchos de ellos endémicos.
          <br />
          <br />
          De las 176 especies de aves, entre las que se destacan la loica, el
          águila mora, el gauchito serrano y muchas más, sin dudas es el cóndor
          andino quien atrae la atención de los visitantes, sobre la quebrada
          que da nombre al parque nacional. Esta enorme ave instala su nido y
          aprovecha las corrientes térmicas de aire que se generan entre los
          paredones rocosos para remontar vuelo. Condición que también es
          aprovechada para enseñar a los juveniles los rudimentos del vuelo
          planeado.
          <br />
          <br />
          Desde 2007 se desarrolla en el área protegida el programa de
          reintroducción del guanaco y más recientemente de vizcacha con el fin
          de recuperar los herbívoros nativos modeladores del paisaje natural.
        </p>
      </div>

      <div className="px-[25px] overflow-hidden h-auto">
        <Swiper {...params}>
          <div>
            <Image
              className="aspect-square object-cover w-full h-full"
              src={Image1}
              alt="foto"
            />
          </div>
          <div>
            <Image
              className="aspect-square object-cover w-full h-full"
              src={Image2}
              alt="foto"
            />
          </div>
          <div>
            <Image
              className="aspect-square object-cover w-full h-full"
              src={Image3}
              alt="foto"
            />
          </div>
          <div>
            <Image
              className="aspect-square object-cover w-full h-full"
              src={Image4}
              alt="foto"
            />
          </div>
          <div>
            <Image
              className="aspect-square object-cover w-full h-full"
              src={Image5}
              alt="foto"
            />
          </div>
          <div>
            <Image
              className="aspect-square object-cover w-full h-full"
              src={Image6}
              alt="foto"
            />
          </div>
          <div>
            <Image
              className="aspect-square object-cover w-full h-full"
              src={Image7}
              alt="foto"
            />
          </div>
          <div>
            <Image
              className="aspect-square object-cover w-full h-full"
              src={Image8}
              alt="foto"
            />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Fauna;
