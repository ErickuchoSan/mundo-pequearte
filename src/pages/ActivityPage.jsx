import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import GalleryGrid from '../components/GalleryGrid';
import PackageCard from '../components/PackageCard';
import WhatsAppSelector from '../components/WhatsAppSelector';
import { getActivityBySlug } from '../data/activities';

const ActivityPage = () => {
  const { slug } = useParams();
  const activity = getActivityBySlug(slug);

  // Si no existe la actividad, redirigir al catálogo
  if (!activity) {
    return <Navigate to="/actividades" replace />;
  }

  const whatsappMessage = `Hola!%20Me%20interesa%20cotizar%20${encodeURIComponent(activity.name)}%20para%20mi%20evento.`;

  return (
    <div className="min-h-screen bg-brand-white">
      {/* Hero de la actividad */}
      <section className="relative bg-gradient-to-br from-brand-lavender via-brand-purple to-brand-teal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            {/* Categoría */}
            <span className="inline-block px-4 py-2 bg-brand-yellow text-gray-800 text-sm font-bold rounded-full mb-4">
              {activity.category}
            </span>

            {/* Nombre */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{activity.name}</h1>

            {/* Descripción larga */}
            <p className="text-xl md:text-2xl text-brand-white mb-8 max-w-3xl mx-auto">
              {activity.longDescription}
            </p>

            {/* Botón WhatsApp principal */}
            <WhatsAppSelector
              message={whatsappMessage}
              buttonText="¡Cotiza esta actividad ahora!"
              className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              inline={true}
            />
          </motion.div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
              Galería
            </h2>
            <GalleryGrid images={activity.gallery} />
          </motion.div>
        </div>
      </section>

      {/* Paquetes o Proceso Personalizado */}
      {activity.hasPackages ? (
        <section className="py-16 bg-gradient-to-br from-brand-peach to-brand-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Paquetes
              </h2>
              <p className="text-xl text-gray-600">
                Elige el paquete que mejor se adapte a tu evento
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activity.packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <PackageCard
                    package={pkg}
                    activityName={activity.name}
                    isPopular={pkg.popular}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16 bg-gradient-to-br from-brand-peach to-brand-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                ¿Cómo funciona?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {activity.customProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center"
                >
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {step.step}. {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Cotización Personalizada
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Cada {activity.name.toLowerCase()} es único. Comparte tu idea y te enviamos una propuesta a tu medida.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Información útil para tu cotización:</strong><br />
                Temática del evento · Fecha · Número de invitados · Presupuesto aproximado
              </p>
              <WhatsAppSelector
                message={whatsappMessage}
                buttonText="Solicitar cotización por WhatsApp"
                className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                inline={true}
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Notas importantes */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
              Notas Importantes
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <ul className="space-y-4">
                {activity.importantNotes.map((note, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="text-brand-teal text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{note}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-brand-coral to-brand-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Lista para reservar {activity.name}?
            </h2>
            <WhatsAppSelector
              message={whatsappMessage}
              buttonText="¡Cotiza ahora!"
              className="inline-flex items-center gap-3 bg-white text-brand-coral px-10 py-5 rounded-full text-xl font-bold hover:bg-brand-purple hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
              inline={true}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ActivityPage;
