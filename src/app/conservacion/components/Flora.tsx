"use client";

import React from "react";
import Image from "next/image";
import Swiper from "react-id-swiper";
import "swiper/css";
import Image1 from "../../../../public/images/flora/1.jpg";
import Image2 from "../../../../public/images/flora/2.jpg";
import Image3 from "../../../../public/images/flora/3.jpg";
import Image4 from "../../../../public/images/flora/4.jpg";
import Image5 from "../../../../public/images/flora/5.jpg";
import Image6 from "../../../../public/images/flora/6.jpg";

const Flora = () => {
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
          Flora
        </h3>
        <p className="text-[.8rem] md:text-[1rem] mb-[5rem]">
          La vegetación dominante es el pastizal de altura con bosquecillos de
          altura. Este tipo de bosques en asociación es único en el mundo,
          conviviendo en un mismo territorio dos especies vegetales de orígenes
          diferentes, el tabaquillo que se distribuye a lo largo de los Andes
          desde Venezuela hasta Argentina, en tanto que, el maitén proviene de
          los bosques del suroeste de Argentina. Esto define a Achala como una
          isla andino-patagónica en el centro de Argentina.
          <br />
          <br />
          Por su cualidad de isla biogeográfica, uno de los rasgos más
          destacados del área es la presencia de varias especies únicas
          (endémicas) de las altas cumbres de estas serranías adaptadas al clima
          y altura, como la orquídea Aa achalensis o la paja brava. En altitudes
          un poco más bajas, el pastizal da paso a matorrales de romerillo y en
          las laderas más bajas serranas crecen árboles como el molle y el coco.
          <br />
          <br />
          Se destacan también, musgos, hepáticas, hongos y líquenes que tiene un
          rol ecológico clave en el ecosistema conformando un valor especial de
          conservación y siendo buenos indicadores de calidad ambiental.
        </p>
      </div>

      <div className="px-[25px] overflow-hidden ">
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
        </Swiper>
      </div>
    </section>
  );
};

export default Flora;
