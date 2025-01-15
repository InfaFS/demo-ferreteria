import React from 'react';
import { FaHammer } from 'react-icons/fa';
import { FaHelmetSafety } from 'react-icons/fa6';
import { GrCatalog } from 'react-icons/gr';
import { HiMiniWrenchScrewdriver } from 'react-icons/hi2';
import { MdPlumbing } from 'react-icons/md';
import { PiScrewdriver } from 'react-icons/pi';

function Products() {
  const features = [
    {
      icon: <FaHammer className="text-amber-900" />,
      text: 'Artículos de construcción',
      description: 'Todo lo necesario para tus proyectos',
    },
    {
      icon: <PiScrewdriver className="text-amber-900" />,
      text: 'Artículos de reparación',
      description: 'Herramientas confiables y duraderas',
    },
    {
      icon: <FaHelmetSafety className="text-amber-900" />,
      text: 'Artículos de seguridad',
      description: 'Protección garantizada',
    },
    {
      icon: <HiMiniWrenchScrewdriver className="text-amber-900" />,
      text: 'Artículos de mantenimiento',
      description: 'Productos esenciales para el cuidado',
    },
    {
      icon: <MdPlumbing className="text-amber-900" />,
      text: 'Artículos de plomería',
      description: 'Calidad para instalaciones hidráulicas',
    },
    {
      icon: <GrCatalog className="text-amber-900" />,
      text: 'Artículos varios',
      description: 'Encuentra lo que necesitas',
    },
  ];

  return (
    <section id="products">
      <div className="bg-amber-900 pt-20 pb-20">
        <div className="w-[90%] mx-auto text-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold underline text-white mb-4">
            Lo que ofrecemos
          </h1>
          {/* Intro Text */}
          <p className="text-white text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            En <span className="font-semibold">Ferro</span>, ofrecemos una
            amplia gama de productos diseñados para satisfacer las necesidades
            de nuestros clientes. Ya sea que estés emprendiendo un proyecto de
            construcción, necesites herramientas para reparaciones o busques
            productos de mantenimiento y seguridad, aquí encontrarás todo lo que
            necesitas para tu hogar o negocio, con la calidad y confiabilidad
            que mereces.
          </p>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md space-y-3"
              >
                {/* Icon */}
                <div className="text-3xl w-14 h-14 bg-gray-800 bg-opacity-10 flex items-center justify-center rounded-full">
                  <span>{feature.icon}</span>
                </div>
                {/* Title */}
                <span className="font-semibold text-center">
                  {feature.text}
                </span>
                {/* Description */}
                <span className="text-gray-600 text-sm text-center">
                  {feature.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
