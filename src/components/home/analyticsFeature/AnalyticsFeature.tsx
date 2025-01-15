import Image from 'next/image';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function AnalyticsFeature() {
  return (
    <div className="pt-24 pb-16">
      <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-6">
        {' '}
        {/* Reducción de gap */}
        {/* image content */}
        <div className="relative mb-6">
          {' '}
          {/* Reduce el margen inferior */}
          <Image
            src="/images/worker_3.png"
            alt="image"
            width={500}
            height={500}
            className="object-contain transform scale-x-[-1] "
          />
        </div>
        {/* text content */}
        <div className="p-6">
          <h1 className="text-base font-semibold text-orange-500">
            Cientos nos eligen
          </h1>
          <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Minoristas y mayoristas confían en nosotros
          </h1>
          <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem]">
            Ofrecemos una amplia gama de productos de alta calidad para
            satisfacer las necesidades de nuestros clientes. Nuestro compromiso
            con la excelencia y la satisfacción del cliente nos ha permitido
            ganar la confianza de minoristas y mayoristas en todo el país.
          </p>
          <ul className="mt-7 space-y-2 text-gray-800">
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Contamos con un equipo de expertos en la industria
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Los productos son de alta calidad y duraderos
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Lideramos las ventas en la ciudad de La Plata hace más de 10 años
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Algo
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsFeature;
