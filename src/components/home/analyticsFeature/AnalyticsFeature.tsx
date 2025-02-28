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
            En Ferreteria Industrial Montenegro, nos enorgullecemos de nuestra
            filosofia empresarial, sustentada en valores que nos guian en cada
            una de nuestras operaciones y nos permiten construir relaciones
            solidas y duraderas con nuestros clientesl.
          </p>
          <ul className="mt-7 space-y-2 text-gray-800">
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Seriedad
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Responsabilidad
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Compromiso
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Honestidad
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsFeature;
