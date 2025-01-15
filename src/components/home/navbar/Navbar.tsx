'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  // Función para hacer scroll suave con ajuste hacia arriba
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Ajusta el valor de 80 para moverlo más arriba
        behavior: 'smooth', // Desplazamiento suave
      });
    }
  };

  return (
    <motion.div
      className={`fixed w-full h-[10vh] z-[1000] transition-all duration-200 ${navBg ? 'bg-white shadow-md' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center h-full justify-between w-[95%] x1:w-[80%] mx-auto">
        {/* LOGO */}
        <motion.h1
          className="text-xl md:text-2xl font-bold"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-3xl md:text-4xl text-amber-800">F</span>erro
        </motion.h1>

        {/* Navlinks */}
        <motion.div
          className="hidden lg:flex items-center space-x-10"
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

        {/* Burger menu */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Nav;
