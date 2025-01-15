import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact">
      <div className="bg-gray-100 pt-20 pb-20">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Contáctanos
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Estamos aquí para ayudarte. Si tienes alguna consulta, no dudes en
              comunicarte con nosotros a través de los siguientes medios.
            </p>
            <div className="space-y-4">
              <div>
                <h2 className="font-semibold text-lg text-gray-800">
                  Teléfonos
                </h2>
                <p className="text-gray-600">+54 11 1234 5678</p>
                <p className="text-gray-600">+54 11 8765 4321</p>
              </div>
              <div>
                <h2 className="font-semibold text-lg text-gray-800">
                  Redes Sociales
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <FaFacebook className="text-amber-800 text-xl" />
                    <a
                      href="https://www.facebook.com/tuempresa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-800 hover:underline"
                    >
                      Facebook
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <BsInstagram className="text-amber-800 text-xl" />
                    <a
                      href="https://www.instagram.com/tuempresa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-800 hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <BsTwitter className="text-amber-800 text-xl" />
                    <a
                      href="https://twitter.com/tuempresa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-800 hover:underline"
                    >
                      Twitter
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaWhatsapp className="text-amber-800 text-xl" />
                    <a
                      href="https://wa.me/541112345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-800 hover:underline"
                    >
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-lg text-gray-800">
                  Horario de Atención
                </h2>
                <p className="text-gray-600">
                  Lunes a Viernes: 8:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600">Sábados: 9:00 AM - 1:00 PM</p>
                <p className="text-gray-600">Domingos y feriados: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.4083464167015!2d-57.95462828039227!3d-34.92129448811833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62e3fc93575%3A0x6ffaec3bf616e000!2sPlaza%20Moreno!5e0!3m2!1ses-419!2sar!4v1736884242371!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
