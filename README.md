# 🎨 Mundo PequeArte

> Sitio web de entretenimiento infantil — Llevamos creatividad y magia a tu evento

## 📋 Descripción

Sitio web vitrina para **Mundo PequeArte**, un negocio de entretenimiento infantil que ofrece pintacaritas, actividades artísticas y recreativas en CDMX y área metropolitana.

## 🛠️ Stack Tecnológico

- **Framework:** React 18 + Vite
- **Routing:** React Router DOM v6
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Íconos:** React Icons
- **Deploy:** Netlify o Vercel (recomendado)

## 🚀 Instalación y Uso

### Requisitos previos
- Node.js 18+
- npm o yarn

### Instalación

\`\`\`bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa del build
npm run preview
\`\`\`

El sitio estará disponible en \`http://localhost:5173/\`

## 📁 Estructura del Proyecto

\`\`\`
mundo-pequearte/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── ActivityCard.jsx
│   │   ├── PackageCard.jsx
│   │   ├── GalleryGrid.jsx
│   │   ├── TestimonialCard.jsx
│   │   └── SocialLinks.jsx
│   ├── pages/              # Páginas principales
│   │   ├── Home.jsx
│   │   ├── Nosotras.jsx
│   │   ├── Catalogo.jsx
│   │   ├── Contacto.jsx
│   │   └── ActivityPage.jsx
│   ├── data/               # Datos del sitio
│   │   └── activities.js   # Array de actividades y paquetes
│   ├── assets/             # Recursos estáticos
│   │   └── images/
│   ├── App.jsx             # Configuración de rutas
│   ├── main.jsx            # Entry point
│   └── index.css           # Estilos globales + Tailwind
├── public/                 # Archivos públicos
├── tailwind.config.js      # Configuración de Tailwind
├── postcss.config.js
├── vite.config.js
└── package.json
\`\`\`

## 🎨 Paleta de Colores

Los colores de marca están configurados en \`tailwind.config.js\`:

| Color | Hex | Uso |
|-------|-----|-----|
| Lavender | \`#B08EC2\` | Color primario, navbar, fondos |
| Coral | \`#E8896A\` | Botones CTA, acentos |
| Teal | \`#7ECEC4\` | Íconos, detalles |
| Purple | \`#9B7BB8\` | Variante oscura |
| Yellow | \`#F5C842\` | Badges "Más popular", destellos |
| Peach | \`#F2C4A8\` | Fondos suaves |
| White | \`#F7F4FF\` | Fondo principal |
| Dark | \`#7B5EA7\` | Footer, contraste |

**Uso en código:**
\`\`\`jsx
className="bg-brand-lavender text-brand-coral"
\`\`\`

## 📝 Agregar o Editar Contenido

### Agregar una nueva actividad

Edita \`src/data/activities.js\` y agrega un nuevo objeto al array.

### Actualizar números de WhatsApp

Busca y reemplaza todos los \`521XXXXXXXXXX\` por los números reales.

### Actualizar redes sociales

Busca y reemplaza los links placeholder en los componentes.

### Agregar imágenes reales

1. Coloca las imágenes en \`public/images/\`
2. Actualiza las rutas en \`src/data/activities.js\`

## 🌐 Rutas del Sitio

\`\`\`
/                            → Home
/nosotras                    → Quiénes somos
/actividades                 → Catálogo de actividades
/actividades/:slug           → Página individual de actividad
/contacto                    → Contacto y redes
\`\`\`

## 📦 Deploy

### Netlify (recomendado)

1. Conecta tu repositorio de GitHub
2. Configuración de build:
   - **Build command:** \`npm run build\`
   - **Publish directory:** \`dist\`
3. Deploy automático en cada push

## ⚠️ Pendientes antes de producción

- [ ] Actualizar todos los números de WhatsApp
- [ ] Actualizar todos los links de redes sociales
- [ ] Reemplazar imágenes placeholder con fotos reales
- [ ] Definir precios reales de paquetes
- [ ] Agregar logo real en el navbar
- [ ] Actualizar correo electrónico si es diferente

---

**Desarrollado con ❤️ para Mundo PequeArte**
