import React from "react";
import Hero from "./components/Hero";
import Flora from "./components/Flora";
import Fauna from "./components/Fauna";
import Patrimonio from "./components/Patrimonio";

const page = () => {
  return (
    <div>
      <Hero />
      <Flora />
      <Fauna />
      <Patrimonio />
    </div>
  );
};

export default page;
