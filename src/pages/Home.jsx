import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPalette, FaShieldAlt, FaClock, FaTruck } from 'react-icons/fa';
import ActivityCard from '../components/ActivityCard';
import TestimonialCard from '../components/TestimonialCard';
import SocialLinks from '../components/SocialLinks';
import WhatsAppSelector from '../components/WhatsAppSelector';
import { activities } from '../data/activities';

const Home = () => {
  // Actividades destacadas (primeras 6)
  const featuredActivities = activities.slice(0, 6);

  // Características
  const features = [
    {
      icon: FaShieldAlt,
      title: 'Materiales seguros',
      description: '100% certificados para niños'
    },
    {
      icon: FaPalette,
      title: 'Artistas con experiencia',
      description: 'Profesionales capacitados'
    },
    {
      icon: FaClock,
      title: 'Puntualidad garantizada',
      description: 'Llegamos siempre a tiempo'
    },
    {
      icon: FaTruck,
      title: 'Todo incluido',
      description: 'Llevamos todo al lugar'
    }
  ];

  // Testimonios (placeholder)
  const testimonials = [
    {
      name: 'María González',
      review: 'Increíble servicio! Las niñas quedaron fascinadas con el pintacaritas. Súper profesionales y puntuales.',
      rating: 5
    },
    {
      name: 'Laura Pérez',
      review: 'Contraté el spa infantil para el cumple de mi hija y fue todo un éxito. Las mamás me preguntaron el contacto!',
      rating: 5
    },
    {
      name: 'Ana Rodríguez',
      review: 'El servicio de piñata personalizada superó mis expectativas. Trabajo artesanal de muy alta calidad.',
      rating: 5
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-brand-lavender via-brand-purple to-brand-teal py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="flex justify-center mb-6 sm:mb-8 px-4">
              <img
                src="/logo-white-bg.png"
                alt="Mundo PequeArte - Llevamos creatividad y magia a tu evento"
                className="w-full max-w-md sm:max-w-xl md:max-w-2xl h-auto rounded-2xl sm:rounded-3xl shadow-2xl"
              />
            </div>

            {/* Subtexto */}
            <p className="text-base sm:text-lg md:text-xl text-brand-peach mb-6 sm:mb-8 px-4">
              Servimos CDMX y área metropolitana
            </p>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <WhatsAppSelector
                message="Hola!%20Me%20interesa%20cotizar%20un%20evento."
                buttonText="¡Cotiza tu evento por WhatsApp!"
                className="bg-brand-coral text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-brand-yellow hover:text-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                inline={true}
              />
              <Link
                to="/actividades"
                className="bg-white text-brand-purple px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-brand-yellow transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver actividades
              </Link>
            </div>
          </motion.div>

          {/* Decoraciones animadas - ocultas en móviles pequeños */}
          <div className="hidden sm:block absolute top-10 left-4 md:left-10 text-4xl md:text-6xl animate-bounce">✨</div>
          <div className="hidden sm:block absolute bottom-10 right-4 md:right-10 text-4xl md:text-6xl animate-bounce" style={{ animationDelay: '0.5s' }}>🎨</div>
        </div>
      </section>

      {/* ACTIVIDADES DESTACADAS */}
      <section className="py-12 sm:py-16 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              Nuestras Actividades
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Elige la actividad perfecta para el evento de tu peque
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {featuredActivities.map((activity, index) => (
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

          <div className="text-center px-4">
            <Link
              to="/actividades"
              className="inline-block bg-brand-lavender text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-brand-coral transition-colors duration-300"
            >
              Ver todas las actividades
            </Link>
          </div>
        </div>
      </section>

      {/* ¿POR QUÉ ELEGIRNOS? */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-brand-peach to-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 px-4">
              ¿Por qué elegirnos?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-brand-lavender text-white rounded-full mb-3 sm:mb-4">
                  <feature.icon className="text-2xl sm:text-3xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-12 sm:py-16 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 px-4">
              Lo que dicen nuestros clientes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REDES SOCIALES */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-brand-lavender to-brand-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
              Síguenos en redes
            </h2>
            <p className="text-lg sm:text-xl text-brand-white mb-6 sm:mb-8 px-4">
              Ve nuestros trabajos más recientes
            </p>
            <SocialLinks />
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-brand-coral to-brand-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 px-4">
              ¿Lista para hacer mágico el evento de tu peque?
            </h2>
            <WhatsAppSelector
              message="Hola!%20Me%20interesa%20cotizar%20un%20evento."
              buttonText="¡Cotiza ahora por WhatsApp!"
              className="inline-block bg-white text-brand-coral px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-bold hover:bg-brand-purple hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
              inline={true}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
