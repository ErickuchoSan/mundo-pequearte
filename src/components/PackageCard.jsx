import { FaWhatsapp, FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PackageCard = ({ package: pkg, activityName, isPopular }) => {
  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa el paquete ${pkg.name} de ${activityName} para mi evento.`
  );
  const whatsappUrl = `https://wa.me/521XXXXXXXXXX?text=${whatsappMessage}`;

  return (
    <motion.div
      className={`relative bg-white rounded-2xl shadow-lg p-8 ${
        isPopular ? 'ring-4 ring-brand-yellow scale-105' : ''
      } hover:shadow-2xl transition-all duration-300`}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: isPopular ? 1.05 : 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Badge "Más popular" */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-yellow text-gray-800 px-4 py-1 rounded-full text-sm font-bold shadow-md">
          ⭐ Más popular
        </div>
      )}

      {/* Icono y Nombre */}
      <div className="text-center mb-6">
        <div className="text-5xl mb-3">{pkg.icon}</div>
        <h3 className="text-2xl font-bold text-gray-800">{pkg.name}</h3>
      </div>

      {/* Detalles */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between py-2 border-b border-gray-200">
          <span className="text-gray-600">👥 Niños:</span>
          <span className="font-semibold text-gray-800">{pkg.kids}</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-gray-200">
          <span className="text-gray-600">⏱️ Duración:</span>
          <span className="font-semibold text-gray-800">{pkg.duration}</span>
        </div>
      </div>

      {/* Incluye */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Incluye:</h4>
        <ul className="space-y-2">
          {pkg.includes.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
              <FaCheck className="text-brand-teal mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Precio */}
      <div className="text-center mb-6">
        <p className="text-3xl font-bold text-brand-coral">{pkg.price}</p>
      </div>

      {/* Botón de Cotizar */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
          isPopular
            ? 'bg-brand-yellow text-gray-800 hover:bg-brand-coral hover:text-white'
            : 'bg-brand-lavender text-white hover:bg-brand-coral'
        }`}
      >
        <FaWhatsapp className="text-xl" />
        Cotizar
      </a>
    </motion.div>
  );
};

export default PackageCard;
