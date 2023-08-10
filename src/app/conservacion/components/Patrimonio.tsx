"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import photo1 from "@/Images/patrimonio/1.jpg";
import photo2 from "@/Images/patrimonio/2.jpg";
import photo3 from "@/Images/patrimonio/3.jpg";

import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

const options = {
  bgOpacity: 0.9,
  padding: { top: 20, bottom: 20, left: 20, right: 20 },
};

const Patrimonio = () => {
  return (
    <section>
      <div className="max-w-[600px] mx-auto text-justify md:text-center mt-[3rem] md:mt-[5rem] px-[25px]">
        <h3 className="uppercase text-[1rem] md:text-[1.5rem] mb-[3rem] md:mb-[5rem] font-bold">
          Patrimonio Cultural
        </h3>
        <p className="text-[.8rem] md:text-[1rem] mb-[5rem]">
          En el parque nacional, no solo los recursos naturales poseen un gran
          valor de conservación, la presencia del hombre en estas tierras está
          ligada a los primeros habitantes de américa, y todo el proceso de
          población, ha dejado huellas en la Pampa de Achala, por ello, el
          patrimonio cultural en el PNQC, nos regala un relato de la historia de
          todos los cordobeses.
          <br />
          <br />
          El <span className="font-bold">
            Patrimonio material prehipánico
          </span>{" "}
          lo constituyen en su mayoría, los abrigos rocosos (cuevas y aleros)
          donde se identificaron morteros en superficie, materiales líticos y
          fragmentos cerámicos. Durante el período agroalfarero, las áreas
          fueron utilizadas como zonas de caza.
          <br />
          <br />
          En cuanto al{" "}
          <span className="font-bold">Patrimonio material histórico</span>, se
          encuentran vestigios del uso de Achala como zona de pastura para el
          ganado que poseían las estancias Jesuíticas de Alta Gracia y la
          Candelaria para sostener las actividades educativas y misioneras de la
          orden. En los siglos XIX y XX las estancias locales se convierten en
          grandes figuras de la economía de la zona, con la explotación ganadera
          intensiva (ovina, bovina, caprina y equina). De este uso quedan los
          cascos de estancias, puestos, pircas, corrales, trampas de zorro y
          baños de ovejas.
          <br />
          <br />
          El{" "}
          <span className="font-bold">
            Patrimonio cultural inmaterial serrano
          </span>{" "}
          (conocimientos y prácticas culturales tradicionales) En las zonas
          vecinas al PNQC, se valoran expresiones propias de los pobladores de
          Achala, que se reconocen como cultura o tradición serrana. Este tipo
          de patrimonio cultural se manifiesta a través de la toponimia, los
          fortines gauchos, las procesiones religiosas, las cabalgatas
          brocherianas, la elaboración de artesanías y técnicas constructivas
          propias de la región.
        </p>
      </div>

      <Gallery withDownloadButton options={options}>
        <div className="grid grid-cols-3 grid-rows-[]auto gap-[12px] max-w-[1200px] mx-auto px-[25px]">
          <div className="relative w-full h-[150px] md:h-[300px]">
            <Item
              original={photo1.src}
              thumbnail={photo1.src}
              width="2070"
              height="1320"
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
              width="707"
              height="467"
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
              width="591"
              height="443"
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
        </div>
      </Gallery>

      <div className="max-w-[500px] mx-auto mt-[2rem] px-[25px]">
        <Link
          href="http://www.quebradadelcondorito.ar/pesca/"
          className="w-full"
        >
          <button className="group p-[1rem] w-full border-2 border-black hover:bg-black transition-all duration-200 ease-in-out">
            <p className="uppercase font-[500] text-[.8rem] group-hover:text-white transition-all duration-200 ease-in-out">
              Conocé mas información técnica en el sistema de información de
              biodiversidad
            </p>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Patrimonio;
