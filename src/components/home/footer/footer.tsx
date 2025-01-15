'use client';
import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

// Función para el desplazamiento suave
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Ajusta el valor para moverlo más arriba o abajo
      behavior: 'smooth', // Desplazamiento suave
    });
  }
};

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold text-gray-100 mb-4">
            Sobre Nosotros
          </h3>
          <p className="text-sm leading-relaxed">
            Somos una empresa comprometida con ofrecer los mejores productos y
            servicios. Nuestra misión es brindar calidad y confianza a todos
            nuestros clientes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-gray-100 mb-4">
            Enlaces Rápidos
          </h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => scrollToSection('hero')}
                className="hover:underline hover:text-amber-500 transition duration-300"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:underline hover:text-amber-500 transition duration-300"
              >
                Sobre Nosotros
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('products')}
                className="hover:underline hover:text-amber-500 transition duration-300"
              >
                Productos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:underline hover:text-amber-500 transition duration-300"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info & Social Links */}
        <div>
          <h3 className="text-lg font-bold text-gray-100 mb-4">Contáctanos</h3>
          <ul className="text-sm space-y-2">
            <li>Teléfono: +54 11 1234 5678</li>
            <li>Email: contacto@tuempresa.com</li>
            <li>Dirección: Calle Falsa 123, Ciudad</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-300 hover:text-amber-500 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-amber-500 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-amber-500 transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-amber-500 transition duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
