import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import SocialLinks from '../components/SocialLinks';
import WhatsAppSelector from '../components/WhatsAppSelector';

const Nosotras = () => {
  const teamMembers = [
    {
      name: 'Gina',
      photo: '/images/gina.jpg', // placeholder
      bio: 'Artista apasionada con más de 5 años de experiencia en entretenimiento infantil. Me encanta ver las caritas de felicidad de los peques.',
      style: 'Especialista en pintacaritas y maquillaje artístico',
      instagram: 'https://instagram.com/gina_instagram',
      facebook: 'https://facebook.com/gina.facebook'
    },
    {
      name: 'Paola',
      photo: '/images/paola.jpg', // placeholder
      bio: 'Creativa y dinámica, disfruto creando experiencias únicas para cada evento. Cada detalle cuenta para hacer la magia realidad.',
      style: 'Experta en manualidades y decoración temática',
      instagram: 'https://instagram.com/paola_instagram',
      facebook: 'https://facebook.com/paola.facebook'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-lavender to-brand-purple py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
              Nosotras
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-white max-w-3xl mx-auto px-4">
              Somos un equipo de artistas apasionadas por crear momentos mágicos e inolvidables para los más pequeños
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mundo PequeArte */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-6 sm:mb-8 flex justify-center px-4">
              <img
                src="/logo-white-bg.png"
                alt="Mundo PequeArte"
                className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto rounded-2xl sm:rounded-3xl shadow-xl"
              />
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Nacimos de la pasión por el arte y el amor a los niños. En <strong>Mundo PequeArte</strong>,
                creemos que cada evento infantil merece ser especial y único. Por eso, llevamos creatividad,
                diversión y magia a cada celebración.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Nuestro compromiso es ofrecer entretenimiento de calidad con materiales 100% seguros,
                profesionales capacitados y un servicio puntual y confiable. Nos encargamos de todos los
                detalles para que tú solo te preocupes por disfrutar.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Servimos en <strong>CDMX y área metropolitana</strong>, llevando la magia del arte y la
                creatividad directamente a tu evento.
              </p>
            </div>

            <div className="mb-4 px-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                Síguenos en nuestras redes oficiales
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Mantente al día con nuestros últimos trabajos y promociones
              </p>
              <div className="bg-gradient-to-r from-brand-lavender to-brand-purple p-8 rounded-2xl shadow-2xl">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* El Equipo */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-brand-peach to-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">
              Conoce al Equipo
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Las artistas detrás de la magia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Foto */}
                <div className="h-64 sm:h-72 md:h-80 bg-gradient-to-br from-brand-lavender to-brand-teal flex items-center justify-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="text-6xl sm:text-7xl md:text-8xl text-white">👩‍🎨</div>';
                    }}
                  />
                </div>

                {/* Info */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">{member.name}</h3>
                  <p className="text-base sm:text-lg text-brand-coral font-semibold mb-3 sm:mb-4">{member.style}</p>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">{member.bio}</p>

                  {/* Redes sociales personales - Secundarias */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">Redes personales:</p>
                    <div className="flex gap-2">
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600 rounded-lg transition-colors duration-200 text-xs"
                        aria-label={`Instagram de ${member.name}`}
                      >
                        <FaInstagram className="text-sm" />
                        <span className="font-medium">Instagram</span>
                      </a>
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition-colors duration-200 text-xs"
                        aria-label={`Facebook de ${member.name}`}
                      >
                        <FaFacebookF className="text-sm" />
                        <span className="font-medium">Facebook</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-brand-lavender">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              ¿Quieres que llevemos la magia a tu evento?
            </h2>
            <WhatsAppSelector
              message="Hola!%20Me%20interesa%20cotizar%20un%20evento."
              buttonText="¡Cotiza tu evento ahora!"
              className="inline-block bg-brand-coral text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-yellow hover:text-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              inline={true}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Nosotras;
