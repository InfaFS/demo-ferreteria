import React from 'react';
import Counter from './Counter';

function WhoWeAre() {
  return (
    <section id="about">
      <div className="bg-amber-50 pt-20 pb-20">
        <div className="w-[90%] mx-auto text-center">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Sobre Nosotros
          </h1>
          {/* Paragraph */}
          <p className="text-gray-700 text-lg leading-relaxed">
            Es un placer para nosotros presentarle a Ferretería Industrial
            Montenegro, una empresa dedicada a la comercialización de productos
            de ferretería industrial en Tucumán y provincias limítrofes.
          </p>
          <Counter />
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
