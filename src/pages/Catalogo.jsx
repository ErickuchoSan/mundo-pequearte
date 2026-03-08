import { motion } from 'framer-motion';
import ActivityCard from '../components/ActivityCard';
import { activities, getActivitiesByCategory, categories } from '../data/activities';

const Catalogo = () => {
  return (
    <div className="min-h-screen bg-brand-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-lavender to-brand-purple py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 px-4">
              Nuestras Actividades
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-white px-4">
              Elige la actividad perfecta para el evento de tu peque
            </p>
          </motion.div>
        </div>
      </section>

      {/* Catálogo por categorías */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => {
            const categoryActivities = getActivitiesByCategory(category);

            return (
              <div key={category} className="mb-16">
                {/* Título de categoría */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-2 sm:gap-3">
                    <span>{getCategoryEmoji(category)}</span>
                    {category}
                  </h2>
                  <div className="h-1 w-24 bg-brand-coral mt-2"></div>
                </motion.div>

                {/* Grid de actividades */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {categoryActivities.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <ActivityCard activity={activity} />
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-brand-coral to-brand-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              ¿No sabes cuál elegir? ¡Contáctanos!
            </h2>
            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 px-4">
              Te ayudamos a elegir la actividad perfecta para tu evento
            </p>
            <a
              href="https://wa.me/521XXXXXXXXXX?text=Hola!%20Necesito%20ayuda%20para%20elegir%20una%20actividad%20para%20mi%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-brand-coral px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-purple hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              ¡Chatea con nosotras!
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Helper para emojis de categorías
const getCategoryEmoji = (category) => {
  const emojiMap = {
    'Arte y Creatividad': '🎨',
    'Entretenimiento': '🎭',
    'Personalizados': '✨'
  };
  return emojiMap[category] || '🎉';
};

export default Catalogo;
