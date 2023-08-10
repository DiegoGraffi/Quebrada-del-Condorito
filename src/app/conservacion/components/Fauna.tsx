"use client";

import React from "react";
import Image from "next/image";
import photo1 from "@/Images/fauna/1fauna.jpg";
import photo2 from "@/Images/fauna/2fauna.jpg";
import photo3 from "@/Images/fauna/3fauna.jpg";
import photo4 from "@/Images/fauna/4fauna.jpg";
import photo5 from "@/Images/fauna/5fauna.jpg";
import photo6 from "@/Images/fauna/6fauna.jpg";
import photo7 from "@/Images/fauna/7fauna.jpg";
import photo8 from "@/Images/fauna/8fauna.jpg";

import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

const options = {
  bgOpacity: 0.9,
  padding: { top: 20, bottom: 20, left: 20, right: 20 },
};

const Fauna = () => {
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

      <Gallery withDownloadButton options={options}>
        <div className="grid grid-cols-3 grid-rows-2 gap-[12px] max-w-[1200px] mx-auto px-[25px]">
          <div className="relative w-full h-[150px] md:h-[300px]">
            <Item
              original={photo1.src}
              thumbnail={photo1.src}
              width="1408"
              height="1056"
            >
              {({ ref, open }) => (
                <Image
                  // @ts-ignore
                  ref={ref}
                  onClick={open}
                  src={photo1.src}
                  fill
                  className="object-cover"
                />
              )}
            </Item>
          </div>

          <div className="relative w-full h-[150px] md:h-[300px]">
            <Item
              original={photo2.src}
              thumbnail={photo2.src}
              width="1280"
              height="960"
            >
              {({ ref, open }) => (
                <Image
                  // @ts-ignore
                  ref={ref}
                  onClick={open}
                  src={photo2.src}
                  fill
                  className="object-cover"
                />
              )}
            </Item>
          </div>

          <div className="relative w-full h-[150px] md:h-[300px]">
            <Item
              original={photo3.src}
              thumbnail={photo3.src}
              width="1280"
              height="960"
            >
              {({ ref, open }) => (
                <Image
                  // @ts-ignore
                  ref={ref}
                  onClick={open}
                  src={photo3.src}
                  fill
                  className="object-cover"
                />
              )}
            </Item>
          </div>

          <div className="relative w-full h-[150px] md:h-[300px]">
            <Item
              original={photo4.src}
              thumbnail={photo4.src}
              width="5456"
              height="3064"
            >
              {({ ref, open }) => (
                <Image
                  // @ts-ignore
                  ref={ref}
                  onClick={open}
                  src={photo4.src}
                  fill
                  className="object-cover"
                />
              )}
            </Item>
          </div>

          <div className="relative w-full h-[150px] md:h-[300px]">
            <Item
              original={photo5.src}
              thumbnail={photo5.src}
              width="5456"
              height="3064"
            >
              {({ ref, open }) => (
                <Image
                  // @ts-ignore
                  ref={ref}
                  onClick={open}
                  src={photo5.src}
                  fill
                  className="object-cover"
                />
              )}
            </Item>
          </div>

          <div className="relative w-full h-[150px] md:h-[300px]">
            <Item
              original={photo6.src}
              thumbnail={photo6.src}
              width="5456"
              height="3064"
            >
              {({ ref, open }) => (
                <Image
                  // @ts-ignore
                  ref={ref}
                  onClick={open}
                  src={photo6.src}
                  fill
                  className="object-cover"
                />
              )}
            </Item>
          </div>

          <div className="relative w-full h-[150px] md:h-[300px]">
            <Item
              original={photo7.src}
              thumbnail={photo7.src}
              width="944"
              height="708"
            >
              {({ ref, open }) => (
                <Image
                  // @ts-ignore
                  ref={ref}
                  onClick={open}
                  src={photo7.src}
                  fill
                  className="object-cover"
                />
              )}
            </Item>
          </div>

          <div className="relative w-full h-[150px] md:h-[300px]">
            <Item
              original={photo8.src}
              thumbnail={photo8.src}
              width="894"
              height="894"
            >
              {({ ref, open }) => (
                <Image
                  // @ts-ignore
                  ref={ref}
                  onClick={open}
                  src={photo8.src}
                  fill
                  className="object-cover"
                />
              )}
            </Item>
          </div>
        </div>
      </Gallery>
    </section>
  );
};

export default Fauna;
