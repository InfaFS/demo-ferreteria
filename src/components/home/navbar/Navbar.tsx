'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiBars3BottomRight } from 'react-icons/hi2';
import Image from 'next/image';

type Props = {
  openNav: () => void;
  isNavOpen: boolean; // Nuevo prop para saber si el menú mobile está abierto
};

const Nav = ({ openNav, isNavOpen }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.div
      className={`fixed w-full h-[10vh] z-[1000] flex items-center transition-all duration-200 ${
        navBg ? 'bg-white shadow-md' : ''
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-[95%] xl:w-[80%] mx-auto flex items-center justify-between h-full">
        {/* Logo alineado a la izquierda */}
        <div className="mr-auto">
          <Image
            src="/images/MMI.png"
            alt="Logo de la empresa"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Navbar centrado (se oculta en mobile cuando el menú está abierto) */}
        <motion.div
          className={`absolute left-1/2 transform -translate-x-1/2 space-x-10 ${
            isNavOpen ? 'hidden' : 'hidden lg:flex'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <button onClick={() => scrollToSection('hero')} className="nav__link">
            Inicio
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="nav__link"
          >
            Sobre Nosotros
          </button>
          <button
            onClick={() => scrollToSection('products')}
            className="nav__link"
          >
            Productos
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="nav__link"
          >
            Contacto
          </button>
        </motion.div>

        {/* Menú hamburguesa alineado a la derecha */}
        <motion.div
          className="ml-auto flex items-center space-x-4 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Nav;
