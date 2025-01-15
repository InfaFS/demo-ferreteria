'use client';
import Link from 'next/link';
import React from 'react';
import { navLinks } from '../../../../constant/constant';
import { CgClose } from 'react-icons/cg';

// Función para el desplazamiento suave
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Ajusta el valor para moverlo más arriba o abajo
      behavior: 'smooth', // Desplazamiento suave
    });
  }
};

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const Mobilenav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen`}
      />
      {/* nav links */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-amber-900 space-y-6 z-[10006]`}
      >
        {navLinks.map((link) => {
          return (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.url.slice(1)); // Elimina el '#' del URL y pasa el id de la sección
                closeNav(); // Cierra el menú al hacer clic
              }}
              className="nav__link text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]"
            >
              {link.label}
            </button>
          );
        })}
        {/* Close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default Mobilenav;
