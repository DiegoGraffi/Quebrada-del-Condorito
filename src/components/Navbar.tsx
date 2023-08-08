"use client";
import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  function toggleMenu() {
    setMenuAbierto(!menuAbierto);
  }

  return (
    <nav className=" fixed z-50 bg-white w-full lg:h-[80px] ">
      <div className="flex justify-between px-[20px] mx-auto py-[10px] max-w-[1536px]">
        <a href="/">
          <Image
            src={logo}
            alt="logo navBar"
            className="w-[80px] lg:scale-[2] lg:origin-center lg:translate-y-[50%] lg:translate-x-[50%]"
          />
        </a>

        <IoMenuOutline
          size={20}
          className="text-black flex self-center lg:hidden"
          onClick={toggleMenu}
        />

        <div className="hidden lg:flex lg:justify-between lg:items-center">
          <ul className="flex gap-[60px]">
            <Link href="/">
              <li className="text-[14px] hover:text-verde border-b border-b-transparent hover:border-b-verde transition-all duration-300 ease-in-out">
                Inicio
              </li>
            </Link>
            <Link href="/conservacion">
              <li className="text-[14px] hover:text-verde border-b border-b-transparent hover:border-b-verde transition-all duration-300 ease-in-out">
                Conservación
              </li>
            </Link>
            <Link href="/actividades">
              <li className="text-[14px] hover:text-verde border-b border-b-transparent hover:border-b-verde transition-all duration-300 ease-in-out">
                Actividades
              </li>
            </Link>
            <Link href="/ecosistema">
              <li className="text-[14px] hover:text-verde border-b border-b-transparent hover:border-b-verde transition-all duration-300 ease-in-out">
                Ecosistema
              </li>
            </Link>
            <Link href="/legal">
              <li className="text-[14px] hover:text-verde border-b border-b-transparent hover:border-b-verde transition-all duration-300 ease-in-out">
                Legal
              </li>
            </Link>
            <Link href="/informacion">
              <li className="text-[14px] hover:text-verde border-b border-b-transparent hover:border-b-verde transition-all duration-300 ease-in-out">
                Información
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {menuAbierto ? (
          <motion.nav
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            exit={{ x: 500 }}
            className="fixed z-50 flex w-[100%] h-[100vh] flex-col bg-white lg:hidden top-0 border-b-[1px] border-black border-opacity-10"
            onClick={() => setMenuAbierto(false)}
          >
            <div className="flex justify-between items-center w-full px-[20px] lg:px-[100px] mx-auto py-[10px] bg-white">
              <Image src={logo} alt="logo navBar" className="w-[80px]" />
              <IoCloseOutline
                className="right-0 z-50 text-black lg:hidden"
                size={20}
                onClick={toggleMenu}
              />
            </div>
            <ul className="flex flex-col gap-[15px] px-[25px] bg-white">
              <Link
                href="/"
                className="flex justify-center border-b-[1px] border-black pb-3 border-opacity-50"
              >
                <li className="font-raleway font-[400] text-grisAzul">
                  Inicio
                </li>
              </Link>
              <Link
                href="/conservacion"
                className="flex justify-center border-b-[1px] border-black pb-3 border-opacity-50"
              >
                <li className="font-raleway font-[400] text-grisAzul">
                  Conservación
                </li>
              </Link>
              <Link
                href="/actividades"
                className="flex justify-center border-b-[1px] border-black pb-3 border-opacity-50"
              >
                <li className="font-raleway font-[400] text-grisAzul">
                  Actividades
                </li>
              </Link>
              <Link
                href="/ecosistema"
                className="flex justify-center border-b-[1px] border-black pb-3 border-opacity-50"
              >
                <li className="font-raleway font-[400] text-grisAzul">
                  Ecosistema
                </li>
              </Link>

              <Link
                href="/legal"
                className="flex justify-center border-b-[1px] border-black pb-3 border-opacity-50"
              >
                <li className="font-raleway font-[400] text-grisAzul">Legal</li>
              </Link>

              <Link
                href="/informacion"
                className="flex justify-center mb-[15px]"
              >
                <li className="font-raleway font-[400] text-grisAzul">
                  Información
                </li>
              </Link>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
