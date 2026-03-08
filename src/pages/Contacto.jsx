import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebookF } from 'react-icons/fa';
import SocialLinks from '../components/SocialLinks';
import WhatsAppSelector from '../components/WhatsAppSelector';

const Contacto = () => {
  const whatsappContacts = [
    { name: 'Gina', number: '521XXXXXXXXXX' },
    { name: 'Paola', number: '521XXXXXXXXXX' },
  ];

  const teamSocials = [
    {
      name: 'Gina',
      instagram: 'https://instagram.com/gina_instagram',
      facebook: 'https://facebook.com/gina.facebook'
    },
    {
      name: 'Paola',
      instagram: 'https://instagram.com/paola_instagram',
      facebook: 'https://facebook.com/paola.facebook'
    },
  ];

  return (
    <div className="min-h-screen bg-brand-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-lavender to-brand-purple py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Contacto
            </h1>
            <p className="text-xl text-brand-white">
              Estamos aquí para hacer realidad el evento de tus sueños
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección principal */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mundo PequeArte */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Mundo <span className="text-brand-coral">PequeArte</span>
                </h2>

                {/* Redes sociales principales */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Nuestras Redes Oficiales
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Síguenos para ver nuestros últimos trabajos
                  </p>
                  <div className="bg-gradient-to-r from-brand-lavender to-brand-purple p-6 rounded-xl">
                    <SocialLinks />
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    <FaWhatsapp className="text-green-500" />
                    WhatsApp
                  </h3>
                  <div className="space-y-3">
                    {whatsappContacts.map((contact, index) => (
                      <a
                        key={index}
                        href={`https://wa.me/${contact.number}?text=Hola!%20Me%20interesa%20cotizar%20un%20evento.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300 text-center font-semibold"
                      >
                        Chatear con {contact.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    <FaEnvelope className="text-brand-coral" />
                    Correo Electrónico
                  </h3>
                  <a
                    href="mailto:mundopequearte@gmail.com"
                    className="text-brand-purple hover:text-brand-coral transition-colors duration-200 text-lg"
                  >
                    mundopequearte@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* El Equipo + Info adicional */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Conócenos */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Conócenos
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Síguenos en nuestras redes personales
                </p>
                <div className="space-y-4">
                  {teamSocials.map((member, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4">
                      <p className="font-bold text-gray-800 mb-3">{member.name}</p>
                      <div className="flex gap-3">
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex-1 justify-center"
                        >
                          <FaInstagram className="text-lg" />
                          <span className="text-sm font-semibold">Instagram</span>
                        </a>
                        <a
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex-1 justify-center"
                        >
                          <FaFacebookF className="text-lg" />
                          <span className="text-sm font-semibold">Facebook</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Zona de cobertura */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-brand-coral" />
                  Zona de Cobertura
                </h3>
                <p className="text-gray-700 text-lg">
                  Servimos en <strong>CDMX y área metropolitana</strong>
                </p>
              </div>

              {/* Horario de atención */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FaClock className="text-brand-teal" />
                  Horario de Atención
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Lunes a Viernes:</strong> 9:00 AM – 7:00 PM</p>
                  <p><strong>Sábados:</strong> 9:00 AM – 3:00 PM</p>
                  <p className="text-sm text-gray-500 mt-4">
                    * Los eventos se realizan cualquier día de la semana según disponibilidad
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-coral to-brand-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Lista para comenzar a planear?
            </h2>
            <p className="text-lg text-white mb-8">
              Contáctanos por WhatsApp y platícanos tu idea
            </p>
            <WhatsAppSelector
              message="Hola!%20Me%20interesa%20cotizar%20un%20evento."
              buttonText="¡Escríbenos ahora!"
              className="inline-block bg-white text-brand-coral px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-purple hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
              inline={true}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
