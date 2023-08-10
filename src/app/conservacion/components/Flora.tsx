"use client";

import React from "react";
import Image from "next/image";
import photo1 from "@/Images/flora/1.jpg";
import photo2 from "@/Images/flora/2.jpg";
import photo3 from "@/Images/flora/3.jpg";
import photo4 from "@/Images/flora/4.jpg";
import photo5 from "@/Images/flora/5.jpg";
import photo6 from "@/Images/flora/6.jpg";

import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

const options = {
  bgOpacity: 0.9,
  padding: { top: 20, bottom: 20, left: 20, right: 20 },
};

const Flora = () => {
  return (
    <section id="info-conservacion">
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

      <Gallery withDownloadButton options={options}>
        <div className="grid grid-cols-3 grid-rows-2 gap-[12px] max-w-[1200px] mx-auto px-[25px]">
          <div className="relative w-full h-[150px] md:h-[300px]">
            <Item
              original={photo1.src}
              thumbnail={photo1.src}
              width="1240"
              height="1332"
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
              width="1544"
              height="790"
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
              width="1632"
              height="1000"
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
              width="2000"
              height="1336"
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
              width="934"
              height="934"
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
              width="1618"
              height="1080"
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
        </div>
      </Gallery>
    </section>
  );
};

export default Flora;
