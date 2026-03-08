import { useRef, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_CONTACTS } from '../config/contacts';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useArrowNavigation } from '../hooks/useArrowNavigation';

const ContactDropdown = ({
  message,
  onContactClick,
  variant = 'default' // 'default' para botón flotante, 'brand' para inline
}) => {
  const containerRef = useRef(null);
  const firstLinkRef = useRef(null);

  const styles = {
    default: {
      header: 'bg-green-500 text-white',
      contactHover: 'hover:bg-green-50 focus:bg-green-50',
      iconBg: 'bg-green-100 group-hover:bg-green-200',
      iconColor: 'text-green-600',
      subtitle: 'text-gray-500'
    },
    brand: {
      header: 'bg-brand-coral text-white',
      contactHover: 'hover:bg-brand-peach focus:bg-brand-peach',
      iconBg: 'bg-brand-teal/20 group-hover:bg-brand-teal/30',
      iconColor: 'text-brand-teal',
      subtitle: 'text-brand-purple'
    }
  };

  const currentStyle = styles[variant];

  // Focus trap y navegación con flechas
  useFocusTrap(containerRef, true);
  useArrowNavigation(containerRef, true);

  // Auto-focus primer elemento al abrir
  useEffect(() => {
    if (firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, []);

  return (
    <div ref={containerRef} role="menu" aria-label="Seleccionar representante de WhatsApp">
      <div
        className={`${currentStyle.header} px-4 py-3 font-semibold text-center text-sm sm:text-base`}
        id="contact-dropdown-label"
      >
        ¿Con qué representante quieres hablar?
      </div>
      <div className="p-2" role="group" aria-labelledby="contact-dropdown-label">
        {WHATSAPP_CONTACTS.map((contact, index) => (
          <a
            key={index}
            ref={index === 0 ? firstLinkRef : null}
            href={`https://wa.me/${contact.number}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            aria-label={`Chatear con ${contact.name} por WhatsApp`}
            className={`flex items-center gap-3 px-4 py-3 min-h-[44px] ${currentStyle.contactHover} rounded-lg transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-coral`}
            onClick={onContactClick}
          >
            <div className={`${currentStyle.iconBg} p-2 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center`} aria-hidden="true">
              <FaWhatsapp className={`${currentStyle.iconColor} text-xl`} />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-sm">{contact.name}</p>
              <p className={`text-xs ${currentStyle.subtitle}`}>Chatear ahora</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactDropdown;
