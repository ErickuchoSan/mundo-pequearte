import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_CONTACTS } from '../config/contacts';

const ContactDropdown = ({
  message,
  onContactClick,
  variant = 'default' // 'default' para botón flotante, 'brand' para inline
}) => {
  const styles = {
    default: {
      header: 'bg-green-500 text-white',
      contactHover: 'hover:bg-green-50',
      iconBg: 'bg-green-100 group-hover:bg-green-200',
      iconColor: 'text-green-600',
      subtitle: 'text-gray-500'
    },
    brand: {
      header: 'bg-brand-coral text-white',
      contactHover: 'hover:bg-brand-peach',
      iconBg: 'bg-brand-teal/20 group-hover:bg-brand-teal/30',
      iconColor: 'text-brand-teal',
      subtitle: 'text-brand-purple'
    }
  };

  const currentStyle = styles[variant];

  return (
    <>
      <div className={`${currentStyle.header} px-4 py-3 font-semibold text-center text-sm sm:text-base`}>
        ¿Con qué representante quieres hablar?
      </div>
      <div className="p-2">
        {WHATSAPP_CONTACTS.map((contact, index) => (
          <a
            key={index}
            href={`https://wa.me/${contact.number}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-4 py-3 ${currentStyle.contactHover} rounded-lg transition-colors duration-200 group`}
            onClick={onContactClick}
          >
            <div className={`${currentStyle.iconBg} p-2 rounded-full transition-colors`}>
              <FaWhatsapp className={`${currentStyle.iconColor} text-xl`} />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-sm">{contact.name}</p>
              <p className={`text-xs ${currentStyle.subtitle}`}>Chatear ahora</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default ContactDropdown;
