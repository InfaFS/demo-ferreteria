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
            En <span className="font-semibold">Ferro</span>, nos dedicamos a
            ofrecer los mejores productos para la construcción, mantenimiento y
            seguridad. Con años de experiencia en el sector, nos comprometemos a
            brindar la más alta calidad en todos nuestros artículos, asegurando
            que cada cliente encuentre lo que necesita con la mejor atención y
            servicio.
          </p>
          <Counter />
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
