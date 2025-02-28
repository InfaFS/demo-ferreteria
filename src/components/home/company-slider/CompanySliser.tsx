'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const companyImages = [
  '/images/bahco.png',
  '/images/crossmasterlogo.png',
  '/images/cuidex.svg',
  '/images/dupont-logo.png',
  '/images/esab-logo.png',
  '/images/hamilton.png',
];

const settings = {
  dots: false,
  arrows: false, // Desactiva los botones Previous y Next
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const CompanySlider = () => {
  return (
    <section className="py-12 bg-[#ff8020]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Respaldados por marcas como:
        </h2>
        <Slider {...settings} className="mx-auto w-full">
          {companyImages.map((src, index) => (
            <div key={index} className="px-2">
              <div className="bg-white p-4 shadow-md rounded-lg flex justify-center">
                <div className="relative w-32 h-24">
                  {' '}
                  {/* Se ajusta el tamaño de las imágenes */}
                  <Image
                    src={src}
                    alt={`Empresa ${index + 1}`}
                    layout="fill" // Asegura que la imagen ocupe todo el contenedor
                    objectFit="contain" // Mantiene las proporciones sin distorsionar
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompanySlider;
