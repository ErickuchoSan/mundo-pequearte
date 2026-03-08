import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ActivityCard = ({ activity }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Imagen */}
      <div className="h-48 bg-gradient-to-br from-brand-lavender to-brand-teal flex items-center justify-center overflow-hidden">
        <img
          src={activity.gallery[0]}
          alt={activity.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `<div class="text-6xl">${getActivityEmoji(activity.category)}</div>`;
          }}
        />
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Categoría */}
        <span className="inline-block px-3 py-1 bg-brand-yellow text-gray-800 text-xs font-semibold rounded-full mb-3">
          {activity.category}
        </span>

        {/* Nombre */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{activity.name}</h3>

        {/* Descripción corta */}
        <p className="text-gray-600 mb-4 line-clamp-2">{activity.shortDescription}</p>

        {/* Botón */}
        <Link
          to={`/actividades/${activity.slug}`}
          className="inline-block w-full text-center bg-brand-coral text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-lavender transition-colors duration-300"
        >
          {activity.hasPackages ? 'Ver galería y paquetes' : 'Ver detalles'}
        </Link>
      </div>
    </motion.div>
  );
};

// Helper function para emojis por categoría
const getActivityEmoji = (category) => {
  const emojiMap = {
    'Arte y Creatividad': '🎨',
    'Entretenimiento': '🎭',
    'Personalizados': '✨'
  };
  return emojiMap[category] || '🎉';
};

export default ActivityCard;
