import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppButton = ({ message = 'Hola!%20Me%20interesa%20cotizar%20un%20evento.' }) => {
  const whatsappUrl = `https://wa.me/521XXXXXXXXXX?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors duration-300 z-50 flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-2xl sm:text-3xl md:text-4xl" />

      {/* Pulse animation ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
    </motion.a>
  );
};

export default WhatsAppButton;
