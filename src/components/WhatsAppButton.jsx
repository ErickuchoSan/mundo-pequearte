import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = ({ message = 'Hola!%20Me%20interesa%20cotizar%20un%20evento.' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { name: 'Gina', number: '521XXXXXXXXXX' },
    { name: 'Paola', number: '521XXXXXXXXXX' }
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Menú de opciones */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl overflow-hidden mb-2 min-w-[200px]"
          >
            <div className="bg-green-500 text-white px-4 py-3 font-semibold text-center">
              ¿Con quién quieres hablar?
            </div>
            <div className="p-2">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={`https://wa.me/${contact.number}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 rounded-lg transition-colors duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="bg-green-100 p-2 rounded-full group-hover:bg-green-200 transition-colors">
                    <FaWhatsapp className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{contact.name}</p>
                    <p className="text-xs text-gray-500">Chatear ahora</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors duration-300 flex items-center justify-center relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        aria-label="Contactar por WhatsApp"
      >
        {isOpen ? (
          <FaTimes className="text-2xl sm:text-3xl md:text-4xl" />
        ) : (
          <>
            <FaWhatsapp className="text-2xl sm:text-3xl md:text-4xl" />
            {/* Pulse animation ring */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
