import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, review, rating = 5 }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Estrellas */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`text-xl ${
              index < rating ? 'text-brand-yellow' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Reseña */}
      <p className="text-gray-700 mb-4 italic">"{review}"</p>

      {/* Nombre */}
      <p className="font-semibold text-gray-800">— {name}</p>
    </motion.div>
  );
};

export default TestimonialCard;
