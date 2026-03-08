import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, url: 'https://instagram.com/mundopequearte', label: 'Instagram' },
    { icon: FaFacebookF, url: 'https://facebook.com/mundopequearte', label: 'Facebook' },
    { icon: FaTiktok, url: 'https://tiktok.com/@mundopequearte', label: 'TikTok' },
  ];

  const whatsappNumbers = [
    { name: 'Gina', number: '521XXXXXXXXXX' },
    { name: 'Paola', number: '521XXXXXXXXXX' },
  ];

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotras', path: '/nosotras' },
    { name: 'Actividades', path: '/actividades' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y Descripción */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/icon-only.png"
                alt="Mundo PequeArte"
                className="h-16 w-auto"
              />
              <h3 className="text-xl font-bold">
                Mundo <span className="text-brand-coral">PequeArte</span>
              </h3>
            </div>
            <p className="text-brand-white mb-4">
              Llevamos creatividad y magia a tu evento
            </p>
            <p className="text-sm text-brand-peach">
              CDMX y área metropolitana
            </p>
          </div>

          {/* Links de Navegación */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-brand-white hover:text-brand-yellow transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>

            {/* Redes Sociales */}
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-lavender p-3 rounded-full hover:bg-brand-coral transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>

            {/* WhatsApp */}
            <div className="space-y-2 mb-4">
              {whatsappNumbers.map((contact) => (
                <a
                  key={contact.name}
                  href={`https://wa.me/${contact.number}?text=Hola!%20Me%20interesa%20cotizar%20un%20evento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-white hover:text-brand-teal transition-colors duration-200"
                >
                  <FaWhatsapp className="text-xl text-brand-teal" />
                  WhatsApp {contact.name}
                </a>
              ))}
            </div>

            {/* Email */}
            <a
              href="mailto:mundopequearte@gmail.com"
              className="flex items-center gap-2 text-brand-white hover:text-brand-teal transition-colors duration-200"
            >
              <FaEnvelope className="text-xl text-brand-teal" />
              mundopequearte@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-purple mt-8 pt-8 text-center text-sm text-brand-peach">
          <p>&copy; 2025 Mundo PequeArte. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
