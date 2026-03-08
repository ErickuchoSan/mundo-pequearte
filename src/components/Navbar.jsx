import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Nosotras', path: '/nosotras' },
    { name: 'Actividades', path: '/actividades' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-lavender shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src="/icon-only.png"
              alt="Mundo PequeArte"
              className="h-10 sm:h-12 w-auto"
            />
            <span className="text-lg sm:text-xl font-bold text-white hidden sm:block">
              Mundo <span className="text-brand-coral">PequeArte</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white hover:text-brand-yellow transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/521XXXXXXXXXX?text=Hola!%20Me%20interesa%20cotizar%20un%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-coral text-white px-6 py-2 rounded-full hover:bg-brand-yellow hover:text-gray-800 transition-all duration-300 font-semibold flex items-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              ¡Cotiza tu evento!
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-3xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-purple">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={toggleMenu}
                className="block px-4 py-3 text-white hover:bg-brand-lavender rounded-lg transition-colors duration-200 text-base font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/521XXXXXXXXXX?text=Hola!%20Me%20interesa%20cotizar%20un%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 mt-2 bg-brand-coral text-white rounded-lg hover:bg-brand-yellow hover:text-gray-800 transition-all duration-200 text-center font-semibold"
            >
              <FaWhatsapp className="inline mr-2 text-xl" />
              ¡Cotiza tu evento!
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
