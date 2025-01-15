import React from 'react';
import WhyChooseCard from './WhyChooseCard';

function WhyChoose() {
  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl font-bold text-center">
        ¿Por qué elegirnos?
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {[
          {
            image: '/images/shipping.png',
            title: 'Entregas rápidas',
            linkText: 'Política de envíos',
          },
          {
            image: '/images/quality.png',
            title: 'Calidad asegurada',
            linkText: 'Conocé más',
          },
          {
            image: '/images/phone.png',
            title: 'Atención personalizada',
            linkText: 'Llamanos',
          },
          {
            image: '/images/price.png',
            title: 'Los mejores precios',
            linkText: 'Mirá el catálogo',
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`relative ${
              index % 4 !== 3 ? 'border-r border-gray-300' : ''
            }`}
          >
            <WhyChooseCard
              image={card.image}
              title={card.title}
              linkText={card.linkText}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChoose;
