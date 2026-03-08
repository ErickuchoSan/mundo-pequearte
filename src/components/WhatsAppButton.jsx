import { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { DEFAULT_MESSAGE } from '../config/contacts';
import ContactDropdown from './ContactDropdown';

const WhatsAppButton = ({ message = DEFAULT_MESSAGE }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  // Cerrar con Escape
  useEffect(() => {
    if (isOpen) {
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          buttonRef.current?.focus();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

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
            <ContactDropdown
              message={message}
              onContactClick={() => setIsOpen(false)}
              variant="default"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <motion.button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors duration-300 flex items-center justify-center relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        aria-label={isOpen ? "Cerrar menú de WhatsApp" : "Abrir menú de WhatsApp"}
        aria-expanded={isOpen}
        aria-haspopup="menu"
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
