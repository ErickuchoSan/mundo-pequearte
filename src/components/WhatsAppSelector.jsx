import { useState, useRef, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { DEFAULT_MESSAGE } from '../config/contacts';
import ContactDropdown from './ContactDropdown';

const WhatsAppSelector = ({
  message = DEFAULT_MESSAGE,
  buttonText = '¡Cotiza tu evento!',
  className = '',
  inline = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        left: rect.left
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const handleScroll = () => {
        setIsOpen(false);
      };

      window.addEventListener('scroll', handleScroll, true);
      return () => {
        window.removeEventListener('scroll', handleScroll, true);
      };
    }
  }, [isOpen]);

  if (inline) {
    // Versión inline para botones normales (no flotante)
    return (
      <>
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className={className}
        >
          <FaWhatsapp className="inline mr-2 text-xl" />
          {buttonText}
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay para cerrar al hacer clic fuera */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: 'fixed',
                  top: `${position.top}px`,
                  left: `${position.left}px`
                }}
                className="bg-white rounded-2xl shadow-2xl z-50 min-w-[240px]"
              >
                <ContactDropdown
                  message={message}
                  onContactClick={() => setIsOpen(false)}
                  variant="brand"
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Versión original (botón flotante) - por compatibilidad
  return null;
};

export default WhatsAppSelector;
