import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppSelector = ({
  message = 'Hola!%20Me%20interesa%20cotizar%20un%20evento.',
  buttonText = '¡Cotiza tu evento!',
  className = '',
  inline = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { name: 'Gina', number: '5215539887030' },
    { name: 'Paola', number: '5215539887030' }
  ];

  if (inline) {
    // Versión inline para botones normales (no flotante)
    return (
      <div className="relative inline-block">
        <button
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
                className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 min-w-[220px]"
              >
                <div className="bg-green-500 text-white px-4 py-3 font-semibold text-center text-sm">
                  ¿Con qué representante quieres hablar?
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
                        <FaWhatsapp className="text-green-600 text-lg" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{contact.name}</p>
                        <p className="text-xs text-gray-500">Chatear ahora</p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Versión original (botón flotante) - por compatibilidad
  return null;
};

export default WhatsAppSelector;
