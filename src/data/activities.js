// Datos completos de todas las actividades
// Para agregar o editar actividades, solo modifica este archivo

export const activities = [
  // ARTE Y CREATIVIDAD
  {
    id: 'pintacaritas',
    name: 'Pintacaritas',
    slug: 'pintacaritas',
    category: 'Arte y Creatividad',
    shortDescription: 'Transforma a los peques en sus personajes favoritos con diseños mágicos',
    longDescription: 'Nuestras artistas profesionales transforman a cada niño en su personaje o criatura favorita. Pinturas hipoalergénicas, seguras y certificadas para piel infantil.',
    hasPackages: true,
    gallery: [
      '/images/placeholder-pintacaritas-1.jpg',
      '/images/placeholder-pintacaritas-2.jpg',
      '/images/placeholder-pintacaritas-3.jpg',
    ],
    packages: [
      {
        name: 'Básico',
        icon: '🌟',
        kids: 'Hasta 15 niños',
        duration: '1 hora',
        includes: ['Pinturas hipoalergénicas certificadas', '1 artista profesional', 'Diseños básicos y clásicos'],
        price: 'Desde $XXX',
        popular: false,
      },
      {
        name: 'Plus',
        icon: '💛',
        kids: 'Hasta 25 niños',
        duration: '1.5 horas',
        includes: ['Pinturas hipoalergénicas certificadas', '2 artistas profesionales', 'Diseños avanzados y temáticos', 'Glitter y accesorios'],
        price: 'Desde $XXX',
        popular: true,
      },
      {
        name: 'Premium',
        icon: '👑',
        kids: 'Hasta 40+ niños',
        duration: '2 horas',
        includes: ['Pinturas hipoalergénicas certificadas', '3 artistas profesionales', 'Todo tipo de diseños', 'Glitter y accesorios premium', 'Estación decorada temática'],
        price: 'Desde $XXX',
        popular: false,
      }
    ],
    importantNotes: [
      'Las pinturas son 100% hipoalergénicas y aprobadas por FDA',
      'Se requiere una mesa y sillas en el lugar del evento',
      'Reserva con al menos 1 semana de anticipación',
      'Cancelación gratuita hasta 48 horas antes del evento'
    ]
  },
  {
    id: 'pintar-osos',
    name: 'Pintar Osos',
    slug: 'pintar-osos',
    category: 'Arte y Creatividad',
    shortDescription: 'Cada niño crea y decora su propio osito personalizado',
    longDescription: 'Actividad artística donde los niños pintan su propio oso de peluche con colores vibrantes y diseños únicos. Se lo llevan a casa como recuerdo.',
    hasPackages: true,
    gallery: [
      '/images/placeholder-osos-1.jpg',
      '/images/placeholder-osos-2.jpg',
    ],
    packages: [
      {
        name: 'Básico',
        icon: '🌟',
        kids: 'Hasta 15 niños',
        duration: '1 hora',
        includes: ['1 osito de peluche blanco por niño', 'Pinturas textiles', 'Delantales protectores', '1 instructor'],
        price: 'Desde $XXX',
        popular: false,
      },
      {
        name: 'Plus',
        icon: '💛',
        kids: 'Hasta 25 niños',
        duration: '1.5 horas',
        includes: ['1 osito de peluche blanco por niño', 'Pinturas textiles premium', 'Accesorios decorativos', 'Delantales protectores', '2 instructores'],
        price: 'Desde $XXX',
        popular: true,
      },
      {
        name: 'Premium',
        icon: '👑',
        kids: 'Hasta 40+ niños',
        duration: '2 horas',
        includes: ['1 osito de peluche blanco por niño', 'Pinturas textiles premium', 'Accesorios decorativos variados', 'Listones y moños', 'Delantales protectores', 'Estación decorada', '3 instructores'],
        price: 'Desde $XXX',
        popular: false,
      }
    ],
    importantNotes: [
      'Cada niño se lleva su osito personalizado',
      'Se requiere espacio amplio con mesas y sillas',
      'Las pinturas son lavables y no tóxicas',
      'Incluimos todo el material necesario'
    ]
  },
  {
    id: 'caballete',
    name: 'Caballete',
    slug: 'caballete',
    category: 'Arte y Creatividad',
    shortDescription: 'Pintura libre en caballete para que exploren su creatividad',
    longDescription: 'Cada niño tiene su propio caballete y lienzo para crear su obra de arte. Una experiencia artística completa con pinturas acrílicas.',
    hasPackages: true,
    gallery: [
      '/images/placeholder-caballete-1.jpg',
    ],
    packages: [
      {
        name: 'Básico',
        icon: '🌟',
        kids: 'Hasta 10 niños',
        duration: '1 hora',
        includes: ['Caballetes individuales', 'Lienzo por niño', 'Pinturas acrílicas', 'Pinceles', 'Delantales', '1 instructor'],
        price: 'Desde $XXX',
        popular: false,
      },
      {
        name: 'Plus',
        icon: '💛',
        kids: 'Hasta 15 niños',
        duration: '1.5 horas',
        includes: ['Caballetes individuales', 'Lienzo por niño', 'Pinturas acrílicas premium', 'Pinceles variados', 'Delantales', 'Guía temática', '2 instructores'],
        price: 'Desde $XXX',
        popular: true,
      },
      {
        name: 'Premium',
        icon: '👑',
        kids: 'Hasta 25 niños',
        duration: '2 horas',
        includes: ['Caballetes individuales', 'Lienzo por niño', 'Pinturas acrílicas premium', 'Pinceles profesionales', 'Delantales', 'Guía temática personalizada', 'Marco para cada cuadro', '3 instructores'],
        price: 'Desde $XXX',
        popular: false,
      }
    ],
    importantNotes: [
      'Cada niño se lleva su cuadro terminado',
      'Se requiere espacio amplio (interior o exterior cubierto)',
      'Pinturas no tóxicas y lavables',
      'Recomendado para niños de 4 años en adelante'
    ]
  },
  {
    id: 'manualidades',
    name: 'Manualidades',
    slug: 'manualidades',
    category: 'Arte y Creatividad',
    shortDescription: 'Proyectos creativos con diferentes materiales y técnicas',
    longDescription: 'Actividades manuales variadas adaptadas a la edad y temática del evento. Los niños crean sus propios proyectos para llevar a casa.',
    hasPackages: true,
    gallery: [
      '/images/placeholder-manualidades-1.jpg',
    ],
    packages: [
      {
        name: 'Básico',
        icon: '🌟',
        kids: 'Hasta 15 niños',
        duration: '1 hora',
        includes: ['1 proyecto de manualidad por niño', 'Materiales básicos', 'Instructivo', '1 monitor'],
        price: 'Desde $XXX',
        popular: false,
      },
      {
        name: 'Plus',
        icon: '💛',
        kids: 'Hasta 25 niños',
        duration: '1.5 horas',
        includes: ['2 proyectos de manualidad por niño', 'Materiales premium', 'Temática personalizada', '2 monitores'],
        price: 'Desde $XXX',
        popular: true,
      },
      {
        name: 'Premium',
        icon: '👑',
        kids: 'Hasta 40+ niños',
        duration: '2 horas',
        includes: ['3 proyectos de manualidad por niño', 'Materiales premium variados', 'Temática personalizada', 'Estación decorada', '3 monitores'],
        price: 'Desde $XXX',
        popular: false,
      }
    ],
    importantNotes: [
      'Las manualidades se adaptan a la edad de los niños',
      'Todo el material está incluido',
      'Se requiere mesas y sillas',
      'Podemos personalizar según la temática de tu evento'
    ]
  },
  {
    id: 'pulseras',
    name: 'Pulseras',
    slug: 'pulseras',
    category: 'Arte y Creatividad',
    shortDescription: 'Crea pulseras personalizadas con cuentas y diseños únicos',
    longDescription: 'Los niños diseñan sus propias pulseras eligiendo colores, cuentas y charms. Una actividad perfecta para llevar un recuerdo personalizado.',
    hasPackages: true,
    gallery: [
      '/images/placeholder-pulseras-1.jpg',
    ],
    packages: [
      {
        name: 'Básico',
        icon: '🌟',
        kids: 'Hasta 15 niños',
        duration: '1 hora',
        includes: ['Materiales para 1 pulsera por niño', 'Cuentas de colores', 'Hilos elásticos', '1 instructor'],
        price: 'Desde $XXX',
        popular: false,
      },
      {
        name: 'Plus',
        icon: '💛',
        kids: 'Hasta 25 niños',
        duration: '1.5 horas',
        includes: ['Materiales para 2 pulseras por niño', 'Cuentas variadas', 'Charms decorativos', 'Hilos de colores', '2 instructores'],
        price: 'Desde $XXX',
        popular: true,
      },
      {
        name: 'Premium',
        icon: '👑',
        kids: 'Hasta 40+ niños',
        duration: '2 horas',
        includes: ['Materiales para 3 pulseras por niño', 'Cuentas premium variadas', 'Charms especiales', 'Dijes personalizados', 'Empaques de regalo', '3 instructores'],
        price: 'Desde $XXX',
        popular: false,
      }
    ],
    importantNotes: [
      'Cada niño se lleva sus pulseras',
      'Actividad segura para todas las edades',
      'Se requiere mesas y sillas',
      'Podemos adaptar diseños a la temática del evento'
    ]
  },
  {
    id: 'glitter-bar',
    name: 'Glitter Bar',
    slug: 'glitter-bar',
    category: 'Arte y Creatividad',
    shortDescription: 'Brillo y glamour con aplicación de glitter en cara y cuerpo',
    longDescription: 'Un toque de brillo y magia con aplicación de glitter cosmético en rostro, cabello y cuerpo. Perfecto para eventos temáticos y fiesta.',
    hasPackages: true,
    gallery: [
      '/images/placeholder-glitter-1.jpg',
    ],
    packages: [
      {
        name: 'Básico',
        icon: '🌟',
        kids: 'Hasta 15 niños',
        duration: '1 hora',
        includes: ['Glitter cosmético seguro', 'Aplicación en rostro', 'Variedad de colores', '1 aplicador'],
        price: 'Desde $XXX',
        popular: false,
      },
      {
        name: 'Plus',
        icon: '💛',
        kids: 'Hasta 25 niños',
        duration: '1.5 horas',
        includes: ['Glitter cosmético premium', 'Aplicación en rostro y cabello', 'Gemas adhesivas', 'Variedad amplia de colores', '2 aplicadores'],
        price: 'Desde $XXX',
        popular: true,
      },
      {
        name: 'Premium',
        icon: '👑',
        kids: 'Hasta 40+ niños',
        duration: '2 horas',
        includes: ['Glitter cosmético premium', 'Aplicación completa (rostro, cabello, cuerpo)', 'Gemas y cristales adhesivos', 'Stickers temporales', 'Estación decorada', '3 aplicadores'],
        price: 'Desde $XXX',
        popular: false,
      }
    ],
    importantNotes: [
      'Todos los productos son cosméticos y seguros para piel',
      'El glitter se retira fácilmente con agua',
      'No contiene ingredientes tóxicos',
      'Ideal para complementar pintacaritas o como actividad independiente'
    ]
  },

  // ENTRETENIMIENTO
  {
    id: 'spa-infantil',
    name: 'Spa Infantil',
    slug: 'spa-infantil',
    category: 'Entretenimiento',
    shortDescription: 'Día de relajación con mascarillas, manicure y pedicure para peques',
    longDescription: 'Una experiencia de spa diseñada para niños con tratamientos faciales, manicure, pedicure y masajes relajantes. ¡Pura diversión y relax!',
    hasPackages: true,
    gallery: [
      '/images/placeholder-spa-1.jpg',
    ],
    packages: [
      {
        name: 'Básico',
        icon: '🌟',
        kids: 'Hasta 10 niños',
        duration: '1 hora',
        includes: ['Mascarilla facial', 'Pintado de uñas', 'Productos seguros para niños', '1 spa therapist'],
        price: 'Desde $XXX',
        popular: false,
      },
      {
        name: 'Plus',
        icon: '💛',
        kids: 'Hasta 15 niños',
        duration: '1.5 horas',
        includes: ['Mascarilla facial', 'Manicure completo', 'Pedicure', 'Masaje de manos', 'Productos premium', '2 spa therapists'],
        price: 'Desde $XXX',
        popular: true,
      },
      {
        name: 'Premium',
        icon: '👑',
        kids: 'Hasta 25 niños',
        duration: '2 horas',
        includes: ['Mascarilla facial premium', 'Manicure completo con decoración', 'Pedicure completo', 'Masaje relajante', 'Batas personalizadas', 'Estación decorada tipo spa', 'Música relajante', '3 spa therapists'],
        price: 'Desde $XXX',
        popular: false,
      }
    ],
    importantNotes: [
      'Todos los productos son hipoalergénicos y seguros',
      'Recomendado para niñas de 5 años en adelante',
      'Se requiere acceso a agua y área cómoda',
      'Ambiente relajante garantizado'
    ]
  },
  {
    id: 'mini-cocina',
    name: 'Mini Cocina Infantil',
    slug: 'mini-cocina',
    category: 'Entretenimiento',
    shortDescription: 'Los peques se convierten en chefs creando sus propias recetas',
    longDescription: 'Taller de cocina donde los niños preparan recetas sencillas y divertidas. Aprenden, se divierten y prueban sus creaciones.',
    hasPackages: true,
    gallery: [
      '/images/placeholder-cocina-1.jpg',
    ],
    packages: [
      {
        name: 'Básico',
        icon: '🌟',
        kids: 'Hasta 10 niños',
        duration: '1 hora',
        includes: ['1 receta sin cocción', 'Ingredientes frescos', 'Utensilios', 'Gorritos de chef', '1 chef instructor'],
        price: 'Desde $XXX',
        popular: false,
      },
      {
        name: 'Plus',
        icon: '💛',
        kids: 'Hasta 15 niños',
        duration: '1.5 horas',
        includes: ['2 recetas sin cocción', 'Ingredientes premium', 'Utensilios completos', 'Gorritos y delantales', 'Empaques para llevar', '2 chef instructores'],
        price: 'Desde $XXX',
        popular: true,
      },
      {
        name: 'Premium',
        icon: '👑',
        kids: 'Hasta 20 niños',
        duration: '2 horas',
        includes: ['3 recetas variadas', 'Ingredientes premium', 'Utensilios profesionales mini', 'Uniformes completos', 'Estación decorada', 'Cajas personalizadas para llevar', '3 chef instructores'],
        price: 'Desde $XXX',
        popular: false,
      }
    ],
    importantNotes: [
      'Todas las recetas son sin cocción por seguridad',
      'Consideramos alergias alimentarias (avisar con anticipación)',
      'Se requiere mesa amplia y acceso a agua',
      'Los niños prueban y se llevan sus creaciones'
    ]
  },
  {
    id: 'veterinario',
    name: 'Veterinario',
    slug: 'veterinario',
    category: 'Entretenimiento',
    shortDescription: 'Juego de roles como veterinarios cuidando animalitos de peluche',
    longDescription: 'Los niños se convierten en veterinarios cuidando y curando a sus pacientes peluditos. Incluye consultas, diagnósticos y mucho amor animal.',
    hasPackages: true,
    gallery: [
      '/images/placeholder-vet-1.jpg',
    ],
    packages: [
      {
        name: 'Básico',
        icon: '🌟',
        kids: 'Hasta 12 niños',
        duration: '1 hora',
        includes: ['Peluches de animales', 'Kit de doctor básico', 'Batas blancas', '1 monitor'],
        price: 'Desde $XXX',
        popular: false,
      },
      {
        name: 'Plus',
        icon: '💛',
        kids: 'Hasta 20 niños',
        duration: '1.5 horas',
        includes: ['Peluches variados', 'Kit de doctor completo', 'Batas y accesorios', 'Estación veterinaria', '2 monitores'],
        price: 'Desde $XXX',
        popular: true,
      },
      {
        name: 'Premium',
        icon: '👑',
        kids: 'Hasta 30 niños',
        duration: '2 horas',
        includes: ['Peluches premium variados', 'Kit profesional de veterinario', 'Uniformes completos', 'Clínica veterinaria decorada', 'Certificados de veterinario', '3 monitores'],
        price: 'Desde $XXX',
        popular: false,
      }
    ],
    importantNotes: [
      'Actividad educativa y divertida',
      'Fomenta el cuidado y empatía hacia los animales',
      'Se requiere espacio amplio',
      'Los niños pueden traer sus propios peluches'
    ]
  },
  {
    id: 'talleres',
    name: 'Talleres',
    slug: 'talleres',
    category: 'Entretenimiento',
    shortDescription: 'Talleres temáticos variados: slime, plastilina, origami y más',
    longDescription: 'Talleres especializados adaptados a los intereses del grupo. Desde ciencia divertida hasta arte experimental.',
    hasPackages: true,
    gallery: [
      '/images/placeholder-talleres-1.jpg',
    ],
    packages: [
      {
        name: 'Básico',
        icon: '🌟',
        kids: 'Hasta 15 niños',
        duration: '1 hora',
        includes: ['1 taller temático', 'Materiales incluidos', 'Instructivo', '1 tallerista'],
        price: 'Desde $XXX',
        popular: false,
      },
      {
        name: 'Plus',
        icon: '💛',
        kids: 'Hasta 25 niños',
        duration: '1.5 horas',
        includes: ['2 talleres temáticos', 'Materiales premium', 'Cada niño crea y se lleva', '2 talleristas'],
        price: 'Desde $XXX',
        popular: true,
      },
      {
        name: 'Premium',
        icon: '👑',
        kids: 'Hasta 40 niños',
        duration: '2 horas',
        includes: ['3 talleres temáticos', 'Materiales premium variados', 'Proyectos para llevar', 'Estación decorada', '3 talleristas'],
        price: 'Desde $XXX',
        popular: false,
      }
    ],
    importantNotes: [
      'Talleres populares: slime, plastilina casera, experimentos, origami',
      'Se adaptan a la edad del grupo',
      'Todo el material está incluido',
      'Podemos personalizar según intereses'
    ]
  },
  {
    id: 'animacion',
    name: 'Animación',
    slug: 'animacion',
    category: 'Entretenimiento',
    shortDescription: 'Animadores, juegos organizados y diversión sin parar',
    longDescription: 'Equipo de animadores profesionales que mantienen a los niños entretenidos con juegos, baile, concursos y mucha energía.',
    hasPackages: true,
    gallery: [
      '/images/placeholder-animacion-1.jpg',
    ],
    packages: [
      {
        name: 'Básico',
        icon: '🌟',
        kids: 'Hasta 20 niños',
        duration: '1 hora',
        includes: ['1 animador profesional', 'Juegos organizados', 'Música', 'Props básicos'],
        price: 'Desde $XXX',
        popular: false,
      },
      {
        name: 'Plus',
        icon: '💛',
        kids: 'Hasta 35 niños',
        duration: '1.5 horas',
        includes: ['2 animadores profesionales', 'Juegos temáticos', 'Música y coreografías', 'Props variados', 'Concursos con premios'],
        price: 'Desde $XXX',
        popular: true,
      },
      {
        name: 'Premium',
        icon: '👑',
        kids: 'Hasta 50+ niños',
        duration: '2 horas',
        includes: ['3 animadores profesionales', 'Show completo', 'Juegos temáticos personalizados', 'Música profesional', 'Concursos con premios', 'Props y disfraces', 'Burbujas y efectos especiales'],
        price: 'Desde $XXX',
        popular: false,
      }
    ],
    importantNotes: [
      'Los animadores son profesionales con experiencia en eventos infantiles',
      'Nos adaptamos a la temática de tu evento',
      'Se requiere espacio amplio para juegos',
      'Incluye música apropiada para niños'
    ]
  },
  {
    id: 'pool-party',
    name: 'Pool Party',
    slug: 'pool-party',
    category: 'Entretenimiento',
    shortDescription: 'Diversión acuática con juegos, música y animación en alberca',
    longDescription: 'Animación especializada para fiestas en alberca con juegos acuáticos, música y supervisión constante.',
    hasPackages: true,
    gallery: [
      '/images/placeholder-pool-1.jpg',
    ],
    packages: [
      {
        name: 'Básico',
        icon: '🌟',
        kids: 'Hasta 15 niños',
        duration: '1.5 horas',
        includes: ['1 animador acuático', 'Juegos de alberca', 'Música', 'Flotadores básicos'],
        price: 'Desde $XXX',
        popular: false,
      },
      {
        name: 'Plus',
        icon: '💛',
        kids: 'Hasta 25 niños',
        duration: '2 horas',
        includes: ['2 animadores acuáticos', 'Juegos temáticos', 'Música y coreografías', 'Flotadores variados', 'Juguetes acuáticos'],
        price: 'Desde $XXX',
        popular: true,
      },
      {
        name: 'Premium',
        icon: '👑',
        kids: 'Hasta 40 niños',
        duration: '2.5 horas',
        includes: ['3 animadores acuáticos certificados', 'Show acuático completo', 'Juegos temáticos', 'Música profesional', 'Flotadores premium', 'Slide inflable', 'Juguetes y accesorios variados'],
        price: 'Desde $XXX',
        popular: false,
      }
    ],
    importantNotes: [
      'El lugar debe contar con alberca (no la proveemos)',
      'Todos los animadores tienen certificación en primeros auxilios',
      'Se requiere supervisión de adultos en todo momento',
      'Los padres son responsables de la seguridad de sus hijos en el agua'
    ]
  },
  {
    id: 'eventos-temporada',
    name: 'Eventos de Temporada',
    slug: 'eventos-temporada',
    category: 'Entretenimiento',
    shortDescription: 'Celebraciones especiales: Halloween, Navidad, Día del Niño y más',
    longDescription: 'Eventos temáticos especiales adaptados a fechas festivas con decoración, actividades y entretenimiento acorde a la temporada.',
    hasPackages: true,
    gallery: [
      '/images/placeholder-temporada-1.jpg',
    ],
    packages: [
      {
        name: 'Básico',
        icon: '🌟',
        kids: 'Hasta 20 niños',
        duration: '1.5 horas',
        includes: ['Decoración temática básica', '2 actividades de temporada', '1 animador', 'Música ambiental'],
        price: 'Desde $XXX',
        popular: false,
      },
      {
        name: 'Plus',
        icon: '💛',
        kids: 'Hasta 30 niños',
        duration: '2 horas',
        includes: ['Decoración temática completa', '3 actividades especiales', 'Show temático', '2 animadores', 'Sorpresas de temporada'],
        price: 'Desde $XXX',
        popular: true,
      },
      {
        name: 'Premium',
        icon: '👑',
        kids: 'Hasta 50 niños',
        duration: '2.5 horas',
        includes: ['Decoración premium completa', '5 actividades especiales', 'Show profesional temático', 'Personajes de temporada', '3 animadores', 'Sorpresas y regalitos', 'Fotografía'],
        price: 'Desde $XXX',
        popular: false,
      }
    ],
    importantNotes: [
      'Eventos populares: Halloween, Navidad, Día de Reyes, Día del Niño, Pascua',
      'La temática se personaliza según la fecha',
      'Reserva con anticipación en fechas festivas',
      'Consulta disponibilidad para tu fecha especial'
    ]
  },

  // PERSONALIZADOS (SIN PAQUETES)
  {
    id: 'mesa-de-dulces',
    name: 'Mesa de Dulces',
    slug: 'mesa-de-dulces',
    category: 'Personalizados',
    shortDescription: 'Mesas de dulces personalizadas con la temática de tu evento',
    longDescription: 'Diseñamos y montamos mesas de dulces completamente personalizadas según la temática, colores y preferencias de tu evento. Cada detalle es único.',
    hasPackages: false,
    gallery: [
      '/images/placeholder-dulces-1.jpg',
      '/images/placeholder-dulces-2.jpg',
    ],
    customProcess: [
      {
        step: 1,
        icon: '📱',
        title: 'Cuéntanos tu idea',
        description: 'Comparte la temática, colores, fecha y número de invitados'
      },
      {
        step: 2,
        icon: '🎨',
        title: 'Propuesta personalizada',
        description: 'Te enviamos diseño visual y cotización detallada'
      },
      {
        step: 3,
        icon: '✅',
        title: 'Creamos tu mesa',
        description: 'Confirmamos y montamos tu mesa de dulces única'
      }
    ],
    importantNotes: [
      'Cada mesa es completamente personalizada',
      'Incluye dulces, decoración y montaje',
      'El precio varía según tamaño y complejidad',
      'Reserva con al menos 2 semanas de anticipación'
    ]
  },
  {
    id: 'pinatas',
    name: 'Piñatas',
    slug: 'pinatas',
    category: 'Personalizados',
    shortDescription: 'Piñatas artesanales hechas a mano con cualquier diseño',
    longDescription: 'Creamos piñatas personalizadas de cualquier personaje, forma o diseño que imagines. Trabajo artesanal 100% hecho a mano.',
    hasPackages: false,
    gallery: [
      '/images/placeholder-pinatas-1.jpg',
      '/images/placeholder-pinatas-2.jpg',
    ],
    customProcess: [
      {
        step: 1,
        icon: '📱',
        title: 'Describe tu piñata',
        description: 'Cuéntanos el personaje, tamaño y fecha del evento'
      },
      {
        step: 2,
        icon: '🎨',
        title: 'Cotización y diseño',
        description: 'Te enviamos boceto y precio según la complejidad'
      },
      {
        step: 3,
        icon: '✅',
        title: 'Creamos tu piñata',
        description: 'La elaboramos artesanalmente y entregamos a tiempo'
      }
    ],
    importantNotes: [
      'Piñatas 100% artesanales',
      'Cualquier personaje o diseño es posible',
      'El precio varía según tamaño y dificultad',
      'Reserva con al menos 3 semanas de anticipación para diseños complejos'
    ]
  }
];

// Función helper para obtener una actividad por su slug
export const getActivityBySlug = (slug) => {
  return activities.find(activity => activity.slug === slug);
};

// Función helper para obtener actividades por categoría
export const getActivitiesByCategory = (category) => {
  return activities.filter(activity => activity.category === category);
};

// Categorías disponibles
export const categories = [
  'Arte y Creatividad',
  'Entretenimiento',
  'Personalizados'
];
