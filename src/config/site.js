/**
 * ARCHIVO DE CONFIGURACION CENTRAL
 * =================================
 * Este es el archivo que debes editar para personalizar tu landing page.
 * Cambia los textos, colores y datos de contacto aqui.
 * Los cambios se aplicaran automaticamente en toda la pagina.
 */

export const siteConfig = {
  // ─────────────────────────────────────────────
  // INFORMACION DEL NEGOCIO
  // ─────────────────────────────────────────────
  name: "Madeja Dulce",
  tagline: "Pequeños amigos tejidos con el corazón.",
  description:
    "En Madeja Dulce nacen amigurumis únicos: animalitos, personajes o compañeros de lana que abrazan fuerte y se quedan para siempre.",

  // ─────────────────────────────────────────────
  // SECCION HERO
  // ─────────────────────────────────────────────
  hero: {
    badge: "♥ TEJIDO A MANO · HECHO CON AMOR",
    title: "Pequeños amigos ",
    titleHighlight: "tejidos con el corazón.",
    subtitle:
      "En Madeja Dulce nacen amigurumis únicos: animalitos, personajes o compañeros de lana que abrazan fuerte y se quedan para siempre.",
    ctaPrimary: "Ver la galería",
    ctaSecondary: "Hacer un encargo",
    ctaPrimaryUrl: "#features",
    ctaSecondaryUrl: "#contact",
  },

  // ─────────────────────────────────────────────
  // BENEFICIOS / FEATURES
  // ─────────────────────────────────────────────
  features: {
    heading: "Hilo, paciencia y cariño.",
    subheading: "Lo que hace especial a cada amigurumi de Madeja Dulce.",
    items: [
      {
        icon: "lightning",
        title: "Hechos a mano",
        description:
          "Cada puntada nace entre mis manos. Sin moldes industriales, sin prisa.",
      },
      {
        icon: "mobile",
        title: "Lana suave y segura",
        description:
          "Uso hilos hipoalergénicos y rellenos abrazables aptos para niños.",
      },
      {
        icon: "settings",
        title: "Diseños personalizados",
        description:
          "¿Una mascota, tu personaje favorito, un regalo único? Lo tejemos juntos.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PRECIOS
  // ─────────────────────────────────────────────
  pricing: {
    heading: "Tamaños y precios",
    subheading:
      "Referencia inicial. El precio final depende del diseño, tamaño y materiales.",
    plans: [
      {
        name: "Mini",
        price: "$8",
        period: "",
        description: "Llavero",
        features: [
          "Hasta 10 cm",
          "1 color base + detalles",
          "Listo en 3 días",
          "Ideal para regalo",
        ],
        cta: "Encargar mini",
        highlighted: false,
      },
      {
        name: "Cuddle",
        price: "$25",
        period: "",
        description: "Peluche mediano",
        features: [
          "15-22 cm de altura",
          "Lana chenille suave",
          "Detalles bordados a mano",
          "Abrazo asegurado",
        ],
        cta: "Quiero uno",
        highlighted: true,
      },
      {
        name: "Custom",
        price: "Desde $40",
        period: "",
        description: "Diseño único",
        features: [
          "A medida según tu idea",
          "Boceto previo a aprobar",
          "Materiales premium",
          "Pieza de colección",
        ],
        cta: "Hablemos",
        highlighted: false,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PREGUNTAS FRECUENTES (FAQ)
  // ─────────────────────────────────────────────
  faq: {
    heading: "Tejo lo que me hace feliz.",
    subheading: "Hola, soy la persona detrás de Madeja Dulce. Empecé tejiendo regalos para mi familia y terminé perdiéndome (felizmente) entre ovillos de colores.\n\nHoy convierto lana en abrazos: animalitos, personajes o diseños hechos a tu medida. Si tienes una idea en mente, cuéntame... Lo tejemos juntos.",
    items: [
      {
        question: "¿Cuánto tiempo tardas en tejer un amigurumi?",
        answer:
          "Depende del tamaño y los detalles, pero por lo general entre 3 y 7 días.",
      },
      {
        question: "¿Haces envíos?",
        answer:
          "Sí, realizamos envíos a todo el país.",
      },
      {
        question: "¿Puedo lavar mi amigurumi?",
        answer:
          "Sí, a mano con agua fría y jabón suave. Secar al aire, sin retorcer.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SECCION DE CONTACTO
  // ─────────────────────────────────────────────
  contact: {
    heading: "¿Tienes una idea? Tejámosla.",
    subheading:
      "Cuéntame qué imaginas: un personaje, una mascota, un regalo especial... Te respondo con un boceto y presupuesto.",
    schedulingUrl: "",
    schedulingCta: "",
    form: {
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      phonePlaceholder: "Tu número de teléfono (opcional)",
      phoneRequired: false,
      messagePlaceholder: "Escribe tu idea aquí...",
      submitButton: "Enviar mensaje",
      sendingButton: "Enviando...",
      successMessage:
        "Mensaje enviado correctamente. ¡Pronto te responderé!",
      errorMessage:
        "Hubo un error al enviar. Inténtalo de nuevo.",
    },
    email: "hola@madejadulce.com",
    phone: "",
    address: "",
  },

  // ─────────────────────────────────────────────
  // NAVEGACION
  // ─────────────────────────────────────────────
  nav: {
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Detalles", href: "#features" },
      { label: "Precios", href: "#pricing" },
      { label: "Sobre mí", href: "#faq" },
      { label: "Contacto", href: "#contact" },
    ],
  },

  // ─────────────────────────────────────────────
  // FOOTER
  // ─────────────────────────────────────────────
  footer: {
    tagline: "Pequeños amigos, grandes abrazos.",
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Detalles", href: "#features" },
      { label: "Precios", href: "#pricing" },
      { label: "Contacto", href: "#contact" },
    ],
    copyright: "Todos los derechos reservados. Madeja Dulce.",
  },

  // ─────────────────────────────────────────────
  // EMAIL
  // ─────────────────────────────────────────────
  email: {
    subject: "Nuevo encargo Madeja Dulce",
    teamSignature: "Madeja Dulce",
    from: "onboarding@resend.dev",
  },

  // ─────────────────────────────────────────────
  // COLORES PRINCIPALES
  // ─────────────────────────────────────────────
  colors: {
    primary: "indigo-600",
    secondary: "gray-900",
    accent: "indigo-50",
    background: "white",
  },

  // ─────────────────────────────────────────────
  // BOTON DE PAGO (PayPal)
  // ─────────────────────────────────────────────
  payment: {
    enabled: true,
    paypalMeUsername: "sophieHolmoc",
    defaultAmount: 0,
    currency: "USD",
    buttonText: "Pagar con PayPal",
  },

  // ─────────────────────────────────────────────
  // METADATOS SEO
  // ─────────────────────────────────────────────
  metadata: {
    title: "Madeja Dulce - Amigurumis tejidos a mano",
    description:
      "Pequeños amigos tejidos con el corazón. En Madeja Dulce nacen amigurumis únicos que abrazan fuerte y se quedan para siempre.",
  },
};
