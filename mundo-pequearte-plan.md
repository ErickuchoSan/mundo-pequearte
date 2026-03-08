# 🎨 Mundo PequeArte — Plan Completo de Desarrollo Frontend

## Información General del Negocio

- **Nombre del negocio:** Mundo PequeArte
- **Tagline:** "Llevamos creatividad y magia a tu evento"
- **Giro:** Entretenimiento infantil — pintacaritas, actividades artísticas y recreativas
- **Zona de operación:** Ciudad de México y área metropolitana
- **Etapa actual:** Sitio vitrina + captación de clientes (sin backend, sin base de datos, sin login)
- **Evolución futura:** El negocio crecerá hacia maquillaje profesional, XV años y otros eventos — el diseño debe escalar fácilmente

---

## Stack Tecnológico

| Capa | Tecnología | Razón |
|---|---|---|
| Framework | **React + Vite** | Componentes reutilizables, build estático, rápido |
| Routing | **React Router DOM** | Navegación multi-página sin recarga (`/actividades/pintacaritas`) |
| Estilos | **Tailwind CSS** | Control total de paleta personalizada, responsividad flexible |
| Animaciones | **Framer Motion** | Entradas, hover en tarjetas, transiciones entre páginas |
| Íconos | **React Icons** | Instagram, Facebook, TikTok, WhatsApp en un solo paquete |
| Deploy | **Netlify o Vercel** | Gratis para sitios estáticos |

> ⚠️ **Sin backend. Sin base de datos. Sin autenticación.** Todo el contenido es estático o hardcodeado en el código. El único "dinámico" es el link de WhatsApp con mensaje predefinido.

---

## Paleta de Colores Oficial

Extraída directamente del logo final. Estos son los colores que deben configurarse en `tailwind.config.js` como colores personalizados de la marca.

| Nombre | Hex | Uso principal |
|---|---|---|
| **Lavender** | `#B08EC2` | Color primario — fondo secciones, navbar, "Mundo" en tipografía |
| **Coral** | `#E8896A` | Color secundario — botones CTA, "PequeArte" en tipografía, acentos |
| **Teal / Mint** | `#7ECEC4` | Color terciario — íconos, decorativos, hover states, detalles |
| **Soft Purple** | `#9B7BB8` | Variante oscura del lavender — textos sobre fondo claro, sombras |
| **Golden Yellow** | `#F5C842` | Acentos — estrellas, destellos, badges "Más popular" |
| **Peach / Skin** | `#F2C4A8` | Fondos suaves, tarjetas alternativas |
| **Cloud White** | `#F7F4FF` | Fondo principal de la página (blanco con tinte lavender muy sutil) |
| **Deep Lavender** | `#7B5EA7` | Footer, hero alternativo, fondos de contraste oscuro |

### Configuración sugerida en `tailwind.config.js`

```js
colors: {
  brand: {
    lavender:     '#B08EC2',
    coral:        '#E8896A',
    teal:         '#7ECEC4',
    purple:       '#9B7BB8',
    yellow:       '#F5C842',
    peach:        '#F2C4A8',
    white:        '#F7F4FF',
    dark:         '#7B5EA7',
  }
}
```

### Tipografía sugerida
- **Títulos / Logo text:** [Baloo 2](https://fonts.google.com/specimen/Baloo+2) o [Nunito](https://fonts.google.com/specimen/Nunito) — redondeada y bubbly, similar al logo
- **Cuerpo / Tagline:** [Poppins](https://fonts.google.com/specimen/Poppins) — limpia y moderna
- Ambas disponibles gratis en Google Fonts

---

## Arquitectura de Rutas

```
/                            → Inicio (Home)
/nosotras                    → Quiénes somos
/actividades                 → Catálogo completo de actividades
/actividades/pintacaritas    → Página individual
/actividades/pintar-osos
/actividades/caballete
/actividades/manualidades
/actividades/pulseras
/actividades/glitter-bar
/actividades/spa-infantil
/actividades/mini-cocina
/actividades/veterinario
/actividades/talleres
/actividades/animacion
/actividades/pool-party
/actividades/eventos-temporada
/actividades/mesa-de-dulces  → Sin paquetes fijos — solo cotización personalizada
/actividades/pinatas         → Sin paquetes fijos — solo cotización personalizada
/contacto                    → Contacto y redes sociales
```

---

## Redes Sociales y Datos de Contacto

### Mundo PequeArte — Cuenta Conjunta (LA PRINCIPAL)
| Red | Link |
|---|---|
| Instagram | `@mundopequearte` *(placeholder — actualizar con link real)* |
| Facebook | `Mundo PequeArte` *(placeholder — actualizar con link real)* |
| TikTok | `@mundopequearte` *(placeholder — actualizar con link real)* |

**WhatsApp 1:** `+52 55 XXXX XXXX` *(Gina)*
**WhatsApp 2:** `+52 55 XXXX XXXX` *(Paola)*
**Correo:** `mundopequearte@gmail.com` *(placeholder — actualizar)*

### Gina — Personal
| Red | Link |
|---|---|
| Instagram | `@gina_instagram` *(placeholder — actualizar con link real)* |

### Paola — Personal
| Red | Link |
|---|---|
| Instagram | `@paola_instagram` *(placeholder — actualizar con link real)* |

---

## Estructura de Cada Página

---

### `/` — HOME

#### Sección 1: NAVBAR (fija, sticky)
- Logo Mundo PequeArte a la izquierda
- Links: `Nosotras` · `Actividades` · `Contacto`
- Botón CTA: `¡Cotiza tu evento!` → abre WhatsApp
- En móvil: hamburger menu

#### Sección 2: HERO
- Fondo con ilustraciones infantiles animadas (estrellas, pinceladas, caritas)
- Logo grande al centro
- Tagline: *"Llevamos creatividad y magia a tu evento"*
- Subtexto: *"Servimos CDMX y área metropolitana"*
- Botón primario grande: `¡Cotiza tu evento por WhatsApp!`
- Botón secundario: `Ver actividades`

#### Sección 3: ACTIVIDADES DESTACADAS
- Grid de tarjetas (3 columnas desktop / 2 tablet / 1 móvil)
- Cada tarjeta: imagen de la actividad + nombre + descripción corta + botón `Ver más`
- Botón lleva a `/actividades/[nombre-actividad]`

#### Sección 4: ¿POR QUÉ ELEGIRNOS?
- 4 puntos con íconos:
  - Materiales 100% seguros para niños
  - Artistas con experiencia
  - Puntualidad garantizada
  - Llevamos todo al lugar de tu evento

#### Sección 5: RESEÑAS / TESTIMONIOS
- Cards con nombre del cliente, reseña y estrellas
- Inicialmente hardcodeadas (agregar clientes reales cuando existan)

#### Sección 6: REDES SOCIALES
- Feed visual de Instagram (puede ser imagen estática por ahora)
- Íconos de las 5 redes con sus links

#### Sección 7: CTA FINAL
- Banner colorido con botón grande de WhatsApp
- Texto: *"¿Lista para hacer mágico el evento de tu peque?"*

#### Sección 8: FOOTER
- Logo blanco / versión alternativa
- Links de navegación
- Las 5 redes sociales
- 2 WhatsApp + correo
- *"CDMX y área metropolitana"*
- Copyright: `© 2025 Mundo PequeArte`

---

### `/nosotras` — QUIÉNES SOMOS

#### Bloque 1: Mundo PequeArte (protagonista)
- Logo grande
- Descripción de la marca: quiénes son, misión, qué las hace especiales
- Redes conjuntas visibles: Instagram · Facebook · TikTok

#### Bloque 2: El Equipo
Dos cards lado a lado (apiladas en móvil):

**Card Gina:**
- Foto de Gina
- Nombre completo
- Mini bio / descripción personal
- Estilo artístico
- Instagram personal

**Card Paola:**
- Foto de Paola
- Nombre completo
- Mini bio / descripción personal
- Estilo artístico
- Instagram personal

---

### `/actividades` — CATÁLOGO

- Título: *"Nuestras Actividades"*
- Subtítulo: *"Elige la actividad perfecta para el evento de tu peque"*
- Grid de todas las actividades en tarjetas grandes

**Agrupación visual:**

**🎨 Arte y Creatividad**
`Pintacaritas` · `Pintar Osos` · `Caballete` · `Manualidades` · `Pulseras` · `Glitter Bar`

**🎭 Entretenimiento**
`Animación` · `Veterinario` · `Mini Cocina` · `Spa Infantil` · `Pool Party` · `Talleres` · `Eventos de Temporada`

**✨ Personalizados**
`Mesa de Dulces` · `Piñatas`

Cada tarjeta tiene:
- Imagen representativa (placeholder hasta tener fotos reales)
- Nombre de la actividad
- Descripción de 1 línea
- Botón: `Ver galería y paquetes`

---

### `/actividades/[actividad]` — PÁGINA INDIVIDUAL

> Esta estructura aplica para las **13 actividades con paquetes.** Es un componente reutilizable — solo cambia el contenido.

#### Sección 1: HERO DE LA ACTIVIDAD
- Imagen o ilustración grande de fondo
- Nombre de la actividad en grande
- Descripción corta y llamativa
- Botón de WhatsApp con mensaje predefinido:
  ```
  https://wa.me/521XXXXXXXXXX?text=Hola!%20Me%20interesa%20cotizar%20[ACTIVIDAD]%20para%20mi%20evento.
  ```

#### Sección 2: GALERÍA
- Grid de fotos (3 columnas desktop / 2 móvil)
- Lightbox al hacer click para ver imagen grande
- Inicialmente con placeholders / imágenes de referencia
- Diseñado para agregar fotos reales sin cambiar código

#### Sección 3: PAQUETES
Tres tarjetas lado a lado con efecto hover. La del medio (Plus) puede tener badge `"Más popular"`.

| | 🌟 Básico | 💛 Plus | 👑 Premium |
|---|---|---|---|
| Niños | Hasta 15 | Hasta 25 | Hasta 40+ |
| Duración | 1 hora | 1.5 horas | 2 horas |
| Incluye | Lo esencial | Lo esencial + extras | Todo incluido |
| Precio | Desde $XXX | Desde $XXX | Desde $XXX |
| CTA | Cotizar | Cotizar | Cotizar |

Cada botón `Cotizar` abre WhatsApp con mensaje predefinido que incluye nombre del paquete y actividad:
```
Hola! Me interesa el paquete [BÁSICO/PLUS/PREMIUM] de [ACTIVIDAD] para mi evento.
```

#### Sección 4: NOTAS IMPORTANTES
- Qué incluye el servicio (materiales, artista, equipo)
- Qué necesita el lugar (espacio mínimo, toma de corriente, etc.)
- Tiempo de anticipación para reservar
- Políticas de cancelación

#### Sección 5: CTA FINAL
- Banner con botón grande de WhatsApp

---

### `/actividades/mesa-de-dulces` y `/actividades/pinatas` — PÁGINAS ESPECIALES

> Estas NO tienen paquetes fijos — son completamente personalizadas.

#### Sección 1: HERO (igual que las demás)

#### Sección 2: GALERÍA de trabajos anteriores para inspirar

#### Sección 3: ¿CÓMO FUNCIONA?
Proceso en 3 pasos visuales:
1. 📱 Cuéntanos tu temática y fecha
2. 🎨 Te enviamos propuesta y cotización
3. ✅ Confirmamos y creamos tu diseño único

#### Sección 4: COTIZACIÓN PERSONALIZADA
- Texto invitando a escribir por WhatsApp
- Indicaciones de qué información compartir: temática, fecha, número de invitados, presupuesto aproximado
- Botón grande de WhatsApp con mensaje predefinido acorde

---

### `/contacto` — CONTACTO

#### Mundo PequeArte
- 3 íconos grandes: Instagram · Facebook · TikTok con links
- 2 botones de WhatsApp (uno por cada número)
- Correo electrónico

#### El Equipo
Dos mini-cards:

**Gina**
- Instagram personal

**Paola**
- Instagram personal

#### Zona de cobertura
- Texto: *"Servimos CDMX y área metropolitana"*
- Mapa estático opcional (imagen, sin API de Google Maps)

#### Horario de atención sugerido
- Lunes a Viernes: 9am – 7pm
- Sábados: 9am – 3pm

---

## Componentes Reutilizables Sugeridos

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── WhatsAppButton.jsx        → Botón flotante siempre visible
│   ├── ActivityCard.jsx          → Tarjeta del catálogo
│   ├── PackageCard.jsx           → Tarjeta de paquete (Básico/Plus/Premium)
│   ├── GalleryGrid.jsx           → Grid de fotos con lightbox
│   ├── TestimonialCard.jsx
│   └── SocialLinks.jsx
├── pages/
│   ├── Home.jsx
│   ├── Nosotras.jsx
│   ├── Catalogo.jsx
│   ├── Contacto.jsx
│   └── ActivityPage.jsx          → Página dinámica reutilizable
├── data/
│   └── activities.js             → Array con todos los datos de actividades, paquetes y precios
└── assets/
    └── images/
```

> 💡 **Clave:** Toda la información de actividades (nombre, descripción, galería, paquetes, precios, número de WhatsApp por actividad) vive en `data/activities.js`. Para agregar o editar una actividad, solo se toca ese archivo — no el código de los componentes.

---

## Lista Completa de Actividades

| Actividad | Ruta | Tiene Paquetes |
|---|---|---|
| Pintacaritas | `/actividades/pintacaritas` | ✅ Sí (3 paquetes) |
| Pintar Osos | `/actividades/pintar-osos` | ✅ Sí (3 paquetes) |
| Caballete | `/actividades/caballete` | ✅ Sí (3 paquetes) |
| Manualidades | `/actividades/manualidades` | ✅ Sí (3 paquetes) |
| Pulseras | `/actividades/pulseras` | ✅ Sí (3 paquetes) |
| Glitter Bar | `/actividades/glitter-bar` | ✅ Sí (3 paquetes) |
| Animación | `/actividades/animacion` | ✅ Sí (3 paquetes) |
| Veterinario | `/actividades/veterinario` | ✅ Sí (3 paquetes) |
| Mini Cocina Infantil | `/actividades/mini-cocina` | ✅ Sí (3 paquetes) |
| Spa Infantil | `/actividades/spa-infantil` | ✅ Sí (3 paquetes) |
| Pool Party | `/actividades/pool-party` | ✅ Sí (3 paquetes) |
| Talleres | `/actividades/talleres` | ✅ Sí (3 paquetes) |
| Eventos de Temporada | `/actividades/eventos-temporada` | ✅ Sí (3 paquetes) |
| Mesa de Dulces | `/actividades/mesa-de-dulces` | ❌ Solo cotización personalizada |
| Piñatas | `/actividades/pinatas` | ❌ Solo cotización personalizada |

---

## Notas Finales para el Desarrollador

- El botón de WhatsApp flotante debe estar visible en **todas las páginas** en la esquina inferior derecha
- En móvil la experiencia es igual de importante que en desktop — la mayoría de mamás buscan desde el celular
- Los precios en los paquetes son **placeholders** — Gina y Paola los definirán después
- Las imágenes de galería son **placeholders** — se reemplazarán con fotos reales de sus trabajos
- El diseño visual (colores, tipografía exacta, logo) se definirá una vez que tengan el logo generado
- Todos los links de redes sociales son **placeholders** marcados con `*(placeholder)*` — reemplazar antes de publicar
- El sitio es **100% estático** — no hay formularios que envíen datos a ningún servidor, todo va a WhatsApp
