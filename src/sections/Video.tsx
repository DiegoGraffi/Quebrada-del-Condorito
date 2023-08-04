import React from "react";

const Video = () => {
  return (
    <section className="bg-black py-[5rem] mt-[5rem] flex flex-col items-center">
      <h3 className="uppercase text-[1.5rem] mb-[2rem] font-bold text-white text-center px-[25px]">
        Biodiversidad única en el país
      </h3>

      <div className="px-[25px] w-full flex justify-center">
        <iframe
          className="aspect-video w-full lg:w-[900px] rounded-lg"
          src="https://www.youtube.com/embed/ys-fCgVihW0?controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Video;
