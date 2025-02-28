import React from 'react';
import { BsInstagram, BsTwitter, BsEnvelope } from 'react-icons/bs';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact">
      <div className="bg-gray-100 pt-20 pb-20">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info + Form */}
          <div className="flex flex-col space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Contáctanos
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Estamos aquí para ayudarte. Si tienes alguna consulta, no dudes en
              comunicarte con nosotros a través de los siguientes medios.
            </p>

            {/* Formulario de Contacto */}
            <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md"
                  placeholder="Tu email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Mensaje
                </label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={4}
                  placeholder="Escribe tu mensaje"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-800 text-white py-2 rounded-md hover:bg-amber-700 transition"
              >
                Enviar Mensaje
              </button>
            </form>

            {/* Dirección de correo */}
            <p className="text-gray-700">
              O si prefieres, escribe a esta dirección:
            </p>
            <div className="flex items-center space-x-2 text-amber-800">
              <BsEnvelope className="text-xl" />
              <a
                href="mailto:contacto@tuempresa.com"
                className="hover:underline"
              >
                contacto@tuempresa.com
              </a>
            </div>
          </div>

          {/* Google Maps Embed con altura ajustada */}
          <div className="w-full h-auto lg:h-[550px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.4083464167015!2d-57.95462828039227!3d-34.92129448811833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62e3fc93575%3A0x6ffaec3bf616e000!2sPlaza%20Moreno!5e0!3m2!1ses-419!2sar!4v1736884242371!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
