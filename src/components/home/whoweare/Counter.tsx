'use client';
import React from 'react';
import CountUp from 'react-countup';
import { FaBriefcase, FaRegClock, FaUserCheck } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    number: 1600,
    icon: FaUserCheck,
    text: 'Clientes satisfechos',
  },
  {
    number: 30,
    icon: FaRegClock,
    text: 'Años en el rubro',
  },
  {
    number: 700,
    icon: MdShoppingCart,
    text: 'Productos a la venta',
  },
];

function Counter() {
  // Hook para manejar la visibilidad del elemento
  const { ref, inView } = useInView({
    triggerOnce: true, // Activa una sola vez
    threshold: 0.3, // Activa cuando el 30% del elemento es visible
  });

  return (
    <section className="mt-10">
      <div className="container mx-auto" ref={ref}>
        <div className="flex gap-36 items-center justify-center flex-wrap">
          {stats.map((item, index) => (
            <div
              className="flex flex-col justify-center items-center"
              key={index}
            >
              {/* Square outer */}
              <div className="border-2 border-amber-600 w-[180px] h-[140px] mx-auto rounded-lg flex items-center justify-center mb-6 shadow-lg">
                {/* Count number */}
                <div className="text-5xl text-amber-700 font-bold">
                  {inView && (
                    <>
                      <div className="flex items-center">
                        <span>+</span>
                        <CountUp start={0} end={item.number} duration={4} />
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* Text */}
              <div className="flex flex-col justify-center items-center text-center">
                <item.icon className="text-3xl text-amber-700 mb-2" />
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.text}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counter;
