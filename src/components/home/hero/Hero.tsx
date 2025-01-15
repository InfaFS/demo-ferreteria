import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="w-full h-screen flex items-center bg-[#f7f6fb]">
        <div className="flex flex-col w-[90%] sm:w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Text context */}
            <div>
              {/* Heading */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl mb-2 font-bold md:leading-[3rem] lg:leading-[3.5rem]">
                El "cosito" que va en el "coso"
              </h1>
              <h1 className="text-amber-800 text-2xl sm:text-4xl md:text-5xl mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem] underline">
                Sabemos lo que buscás.
              </h1>
              {/* Description */}
              <p className="text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
                minima repellendus eveniet incidunt sapiente, reiciendis soluta
                cupiditate nobis eaque molestiae dolorum velit alias, ipsum id
                vitae amet suscipit atque. Eum!
              </p>
            </div>
            {/* Image content */}
            <div className="hidden lg:block">
              <Image
                src="/images/tornillo_1.png"
                alt="hero"
                width={300}
                height={300}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
