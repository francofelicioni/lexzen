import exp from "constants"

export type Language = "en" | "es"

export const translations = {
  en: {
    // Navigation
    nav: {
      services: "Services",
      about: "About",
      bookCall: "Book a Free Consultation",
      contact: "Contact",
      getStarted: "Get Started",
    },
    // Hero Section
    hero: {
      title: "Specialized Online Legal Advisory for the Digital Age",
      subtitle:
        "Expert online legal advisory services tailored for businesses navigating privacy and data protection, legal digitalization, and EU compliance challenges.",
      scheduleFree: "Schedule a Free Legal Consultation",
      viewServices: "View Legal Services",
    },
    // Services Section
    services: {
      title: "Specialized Online Legal Solutions",
      subtitle: "Expert legal guidance tailored to your specific digital business needs",
      tabStartups: "For Digital Businesses & Startups",
      tabResidency: "For EU Citizens Residency (Spain)",
      legalServices: "Online Legal Services for Digital Businesses",
      pricingPackages: "Legal Advisory Packages",
      discounts: "Discounts for long-term legal advisory contracts available (5%-15%). Contact us for details.",
      // Service items
      personalizedLegal: "Personalized Online Legal Assistance",
      personalizedLegalDesc:
        "Tailored online legal advisory support for your specific digital business needs and challenges.",
      documentPrep: "Legal Document Preparation & Analysis",
      documentPrepDesc:
        "Professional preparation and review of all your digital business documentation with legal digitalization expertise.",
      contractDrafting: "Digital Contract Drafting",
      contractDraftingDesc:
        "Employment, Supplier, Service agreements, and General contracts tailored to your digital business needs.",
      websitePolicies: "Privacy and Data Protection Policies",
      websitePoliciesDesc:
        "Privacy Policy, Cookies, Terms & Conditions, Legal Notice – GDPR compliant for your digital presence.",
      ecommerceCompliance: "E-commerce Legal Compliance",
      ecommerceComplianceDesc:
        "Privacy and data protection, sales conditions, payment methods, refunds, and more for your online store.",
      ndaAgreements: "NDAs and Digital Collaboration Agreements",
      ndaAgreementsDesc:
        "Protect your digital business interests with professionally drafted agreements and legal digitalization expertise.",
      // Pricing
      express: "Express Legal Advisory",
      expressDesc: "Basic online legal support for small digital businesses",
      medium: "Comprehensive Legal Advisory",
      mediumDesc: "Complete legal support for growing digital businesses with privacy and data protection focus",
      full: "Premium Legal Advisory",
      fullDesc: "Complete legal digitalization and compliance coverage for established digital businesses",
      // Residency
      residencyTitle: 'EU Residency Registration Services ("NIE Verde")',
      silver: "Silver",
      silverDesc: "Basic legal assistance for self-sufficient EU applicants",
      gold: "Gold",
      goldDesc: "Comprehensive legal support for your EU residency application",
      platinum: "Platinum",
      platinumDesc: "Complete end-to-end EU residency legal advisory support",
      chooseSilver: "Choose Silver",
      chooseGold: "Choose Gold",
      choosePlatinum: "Choose Platinum",
      // Family Reunification
      familyTitle: "Family Reunification Legal Assistance",
      forResidents: "For EU Residents",
      forResidentsDesc: "Legal support for EU residents bringing family members",
      forNonResidents: "For Non-Residents",
      forNonResidentsDesc: "Complete legal package for family reunification",
      selectPackage: "Select Package",
      // Specialized Advice
      specializedTitle: "Specialized EU Residency Legal Advisory",
      consultationTitle: "Personalized Residency Legal Consultation",
      consultationDesc: "Expert legal guidance for your specific situation",
      bookConsultation: "Book Free Consultation",
    },
    // About Section
    about: {
      title: "Meet the Legal Experts Behind Lexzen's Online Legal Advisory",
      subtitle: "A team of experienced legal professionals combining expertise with digital innovation",
      ourStory: "Our Story",
      storyContent1:
        "Lexzen was founded in 2022 by a team of forward-thinking legal professionals who recognized a gap in the market: accessible, specialized online legal advisory services for digital businesses and individuals navigating residency requirements.",
      storyContent2:
        "With decades of combined experience in both traditional law and legal digitalization, our founders set out to create an online legal advisory firm that breaks down complex legal concepts into actionable guidance, delivered through modern, client-friendly channels.",
      storyContent3:
        "Today, we're proud to serve clients across Spain and throughout Europe, providing the legal clarity and support they need to thrive in an increasingly digital world, with particular expertise in privacy and data protection.",
      officeLocation: "Our offices in Madrid, Spain - Center for Online Legal Advisory",
      ourFounders: "Our Legal Experts",
      // Founders
      founder1Name: "Elena Martínez",
      founder1Title: "Managing Partner & Legal Director",
      founder1Bio:
        "With over 15 years of experience in corporate and digital law, Elena leads our online legal advisory strategy and oversees all client engagements. Her background includes serving as legal counsel for several major tech companies and startups across Europe, with expertise in privacy and data protection.",
      founder1Education: "J.D., Universidad Complutense",
      founder2Name: "Carlos Rodríguez",
      founder2Title: "Technology & Compliance Director",
      founder2Bio:
        "Carlos brings a unique blend of legal and technical expertise, with a focus on privacy and data protection, GDPR compliance, and legal digitalization. His dual background in law and computer science allows him to bridge the gap between legal requirements and technical implementation.",
      founder2Education: "LL.M., IE Law School",
      founder3Name: "Sofia Navarro",
      founder3Title: "Immigration & Residency Specialist",
      founder3Bio:
        "Sofia specializes in immigration law and residency requirements, with particular expertise in EU citizen rights and family reunification. Her compassionate approach and attention to detail have helped hundreds of clients successfully navigate complex residency processes through our online legal advisory services.",
      founder3Education: "J.D., Universidad de Barcelona",
      // Values
      ourValues: "Our Core Values",
      integrity: "Integrity",
      integrityDesc: "We uphold the highest ethical standards in all our online legal advisory services and guidance.",
      clientCentered: "Client-Centered",
      clientCenteredDesc: "Your needs and goals are at the center of our online legal advisory approach.",
      excellence: "Excellence",
      excellenceDesc: "We strive for excellence in our legal expertise and online legal advisory service.",
      innovation: "Legal Digitalization",
      innovationDesc: "We embrace legal digitalization to deliver online legal advisory services more effectively.",
      readyToWork: "Ready to work with our legal experts?",
    },
    // Booking Calendar
    booking: {
      title: "Schedule Your Free 20-Minute Legal Consultation",
      subtitle:
        "Book a complimentary online legal consultation with our experts to discuss your digital business needs",
      howItWorks: "How Our Free Legal Consultation Works",
      howItWorksDesc: "Simple steps to schedule your free online legal consultation",
      step1: "Select a Date & Time",
      step1Desc: "Choose from available weekday slots in Spanish time zone (CET/CEST)",
      step2: "Provide Your Details",
      step2Desc: "Fill in your contact information and legal consultation topic",
      step3: "Receive Confirmation",
      step3Desc: "Get an email with call details and calendar invitation",
      consultationIncludes: "Your free legal consultation includes:",
      consultationItem1: "20-minute video or phone call with a legal expert",
      consultationItem2: "Initial assessment of your legal needs",
      consultationItem3: "Recommendations for next legal steps",
      consultationItem4: "No obligation to purchase legal services",
      bookYourConsultation: "Book Your Free Legal Consultation",
      selectDate: "Select a date for your free legal consultation",
      chooseTime: "Choose an available time slot",
      completeDetails: "Complete your booking details",
      timeZoneNote: "All times are in Spanish time zone (CET/CEST)",
      noSlots: "No available time slots for this date.",
      chooseAnother: "Choose Another Date",
      fullName: "Full Name *",
      fullNamePlaceholder: "Your full name",
      email: "Email Address *",
      emailPlaceholder: "your.email@example.com",
      phone: "Phone Number *",
      phonePlaceholder: "+34 XXX XXX XXX",
      topic: "Legal Consultation Topic (Optional)",
      topicPlaceholder: "Briefly describe what legal matters you'd like to discuss",
      back: "Back",
      continue: "Continue",
      bookConsultation: "Book Free Consultation",
      // Confirmation
      consultationBooked: "Legal Consultation Booked!",
      consultationScheduled: "Your free 20-minute legal consultation has been scheduled.",
      confirmationSent: "We've sent a confirmation email to",
      teamContact:
        "Our legal team will contact you shortly before the scheduled time with the call link or phone number.",
      done: "Done",
    },
    // Testimonials
    testimonials: {
      title: "What Our Legal Advisory Clients Say",
      subtitle:
        "Hear from businesses we've helped navigate legal challenges in the digital space with our online legal advisory services.",
      testimonial1:
        "Lexzen provided invaluable online legal advisory for our e-commerce business. Their expertise in privacy and data protection helped us avoid potential compliance issues while growing our online presence.",
      client1Name: "Sarah Johnson",
      client1Title: "CEO, StyleHub",
      testimonial2:
        "Working with Lexzen transformed how we approach legal digitalization for our web development projects. Their team made complex legal requirements accessible and actionable through their online legal advisory services.",
      client2Name: "Michael Chen",
      client2Title: "Founder, TechSolutions",
    },
    // CTA Section
    cta: {
      title: "Ready to Get Started with Professional Online Legal Advisory?",
      subtitle:
        "Schedule a free legal consultation with our experts and take the first step toward legal clarity for your digital business.",
      scheduleConsultation: "Schedule a Free Legal Consultation",
      contactUs: "Contact Our Legal Team",
    },
    // Footer
    footer: {
      rights: "© 2025 Lexzen Online Legal Advisory. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      legalNotice: "Legal Notice",
      contact: "Contact",
      // Company
      companyHeading: "Company",
      aboutUs: "About Our Legal Team",
      services: "Legal Services",
      careers: "Legal Careers",
      blog: "Legal Blog",
      // Legal
      legalHeading: "Legal",
      // Contact
      contactHeading: "Contact",
      address: "Calle Gran Vía 28, Madrid, Spain",
      phone: "+34 912 456 789",
      email: "info@lexzen.com",
      // Social
      socialHeading: "Follow Us",
      // Newsletter
      newsletterHeading: "Stay Updated",
      newsletterSubheading: "Subscribe to our newsletter for legal tips and updates on privacy and data protection",
      emailPlaceholder: "Your email address",
      subscribe: "Subscribe",
      privacyConsent:
        "By subscribing, you agree to our Privacy Policy and consent to receive legal updates from Lexzen.",
      subscribeSuccess: "Thank you for subscribing to our legal updates!",
      subscribeError: "There was an error. Please try again.",
    },
    // Language
    language: {
      en: "English",
      es: "Spanish",
    },
    // Contact Form
    contactForm: {
      title: "Get in Touch",
      subtitle: "Send us a message and we'll get back to you as soon as possible",
      fullName: "Full Name",
      fullNamePlaceholder: "Enter your full name",
      email: "Email Address",
      emailPlaceholder: "your.email@example.com",
      subject: "Subject / Topic",
      subjectPlaceholder: "What is your message about?",
      message: "Message",
      messagePlaceholder: "Please provide details about your inquiry...",
      subscribe: "I would like to receive updates from Lexzen",
      submit: "Send Message",
      sending: "Sending...",
      required: "This field is required",
      invalidEmail: "Please enter a valid email address",
      success: "Thank you for your message!",
      successDetails: "We've received your inquiry and will get back to you shortly.",
      error: "There was an error sending your message",
      errorDetails: "Please try again or contact us directly via email.",
      close: "Close",
    },
  },
  es: {
    general: {
      month: "mes",
    },

    // Navigation
    nav: {
      services: "Servicios",
      about: "Nosotros",
      bookCall: "Reservar Consulta Gratuita",
      contact: "Contacto",
      getStarted: "Comenzar",
    },
    // Hero Section
    hero: {
      title: "Soluciones legales prácticas para startups y nuevos residentes en Europa",
      subtitle:
        "Asesoramiento accesible y claro para quienes emprenden, se relocalizan o enfrentan los primeros desafíos legales a la hora de desarrollar su negocio. Desde contratos hasta trámites de residencia, con mirada estratégica y experiencia internacional.",
      scheduleFree: "Programar Consulta Legal Gratuita",
      viewServices: "Ver Servicios Legales",
    },
    // Services Section
    services: {
      title: "Soluciones Legales Online Especializadas",
      subtitle: "Asesoramiento legal experto adaptado a las necesidades específicas de su negocio digital",
      tabStartups: "Para Negocios Digitales y Startups",
      tabResidency: "Para Residencia de Ciudadanos UE (España)",
      legalServices: "Servicios Legales Online para Negocios Digitales",
      legalServicesDesc1: "Asesoramos a quienes emprenden, lanzan o hacen crecer su proyecto en el mundo digital.",
      legalServicesDesc2: "Cada paso en el desarrollo de un negocio —desde validar una idea hasta lanzar una web o firmar el primer contrato— implica decisiones legales importantes.",
      legalServicesDesc3: "Ofrecemos una asesoría clara, cercana y 100% online, pensada para ayudar a construir con solidez, proteger el emprendimiento y tomar decisiones informadas desde el inicio.",
      legalServicesDesc4: "Nos enfocamos en startups y negocios digitales en etapas tempranas que necesitan orientación legal práctica y accesible, sin complicaciones.",
      howWeHelpTitle:" ¿En qué podemos ayudarte?",
      howWeHelpP1:"Acompañamiento legal personalizado para proyectos digitales.",
      howWeHelpP2:"Revisión y elaboración de documentación clave para tu negocio.",
      howWeHelpP3:"Contratos claros y adaptados para colaboradores, proveedores o servicios.",
      howWeHelpP4:"Textos legales para tu web (Política de Privacidad, Cookies, Términos y Condiciones).",
      howWeHelpP5:"Recomendaciones básicas para cumplimiento legal en e-commerce y protección de datos.",
    
      pricingPackages: "Paquetes de Asesoría Legal",
      discounts:
        "Descuentos disponibles para contratos de asesoría legal a largo plazo (5%-15%). Contáctenos para más detalles.",
      // Service items
      personalizedLegal: "Asistencia Legal Online Personalizada",
      personalizedLegalDesc:
        "Apoyo de asesoría legal online adaptado a las necesidades y desafíos específicos de su negocio digital.",
      documentPrep: "Preparación y Análisis de Documentos Legales",
      documentPrepDesc:
        "Preparación y revisión profesional de toda la documentación de su empresa con experiencia en digitalización legal.",
      contractDrafting: "Redacción de Contratos Digitales",
      contractDraftingDesc:
        "Contratos de empleo, proveedores, servicios y contratos generales adaptados a las necesidades de su negocio digital.",
      websitePolicies: "Políticas de Privacidad y Protección de Datos",
      websitePoliciesDesc:
        "Política de Privacidad, Cookies, Términos y Condiciones, Aviso Legal – conforme al RGPD para su presencia digital.",
      ecommerceCompliance: "Cumplimiento Legal para E-commerce",
      ecommerceComplianceDesc:
        "Protección de datos y privacidad, condiciones de venta, métodos de pago, devoluciones y más para su tienda online.",
      ndaAgreements: "NDAs y Acuerdos de Colaboración Digital",
      ndaAgreementsDesc:
        "Proteja los intereses de su empresa digital con acuerdos redactados profesionalmente y experiencia en digitalización legal.",
      // Initial Consultation
      initial: "Asesoría Inicial",
      initialDesc: "Soporte esencial para emprendedores digitales en fase inicial, desde:",
      initialItem1: "Hasta 5 horas de asesoría legal cada mes",
      initialItem2: "Revisión de documentos clave y asesoramiento en su interpretación",
      initialItem3: "Consultas legales puntuales por correo electrónico",
      initialItem4: "Redacción y/o revisión de contratos",
      initialItem5: "Asesoramiento sobre la estructura legal del negocio y su formalización",
      chooseInitial: "Elegir Asesoría Inicial",
      // Advanced Advisory
      advanced: "Asesoría Avanzada",
      advancedDesc:
        "Ideal para empresas digitales en expansión con necesidades más complejas, desde:",
      advancedItem1: "Hasta 10 horas de asesoría legal cada mes",
      advancedItem2: "Revisión prioritaria de documentos y contratos",
      advancedItem3: "Consultas ampliadas por correo electrónico y teléfono",
      advancedItem4: "Redacción y/o revisión de contratos",
      advancedItem5: "Revisión de políticas legales del sitio web, adaptadas a la normativa aplicable",
      chooseAdvanced: "Elegir Asesoría Avanzada",
      // Premium Advisory
      premium: "Asesoría Premium",
      premiumDesc: "Cobertura total en digitalización legal y cumplimiento normativo para empresas consolidadas, desde:",
      premiumItem1: "Hasta 20 horas de asesoría legal cada mes",
      premiumItem2: "Gestión prioritaria de los aspectos legales del negocio",
      premiumItem3: "Consultas ilimitadas por correo electrónico y teléfono",
      premiumItem4: "Redacción y/o revisión de contratos y documentos clave",
      premiumItem5: "Revisión integral del cumplimiento legal del sitio web, incluyendo protección de datos y políticas de privacidad",
      choosePremium: "Elegir Asesoría Premium",
      
      // Residency
      residencyTitle: 'Servicios de Registro de Residencia UE ("NIE Verde")',
      silver: "Plata",
      silverDesc: "Asistencia legal básica para solicitantes autosuficientes de la UE",
      gold: "Oro",
      goldDesc: "Soporte legal integral para su solicitud de residencia UE",
      platinum: "Platino",
      platinumDesc: "Soporte completo de asesoría legal para el registro de residencia UE",
      chooseSilver: "Elegir Plata",
      chooseGold: "Elegir Oro",
      choosePlatinum: "Elegir Platino",
      // Family Reunification
      familyTitle: "Asistencia Legal para Reunificación Familiar",
      forResidents: "Para Residentes UE",
      forResidentsDesc: "Apoyo legal para residentes de la UE que traen a miembros de su familia",
      forNonResidents: "Para No Residentes",
      forNonResidentsDesc: "Paquete legal completo para reunificación familiar",
      selectPackage: "Seleccionar Paquete",
      // Specialized Advice
      specializedTitle: "Asesoría Legal Especializada en Residencia UE",
      consultationTitle: "Consulta Legal Personalizada de Residencia",
      consultationDesc: "Orientación legal experta para su situación específica",
      bookConsultation: "Reservar Consulta Gratuita",
    },
    // About Section
    about: {
      title: "Conozca a los Expertos Legales Detrás de la Asesoría Legal Online de Lexzen",
      subtitle: "Un equipo de profesionales legales experimentados que combinan experiencia con innovación digital",
      ourStory: "Nuestra Historia",
      storyContent1:
        "Lexzen fue fundada en 2022 por un equipo de profesionales legales visionarios que identificaron una brecha en el mercado: servicios de asesoría legal online accesibles y especializados para empresas digitales y personas que navegan por los requisitos de residencia.",
      storyContent2:
        "Con décadas de experiencia combinada tanto en derecho tradicional como en digitalización legal, nuestros fundadores se propusieron crear una firma de asesoría legal online que simplifica conceptos legales complejos en orientación práctica, entregada a través de canales modernos y amigables para el cliente.",
      storyContent3:
        "Hoy, nos enorgullece servir a clientes en toda España y Europa, proporcionando la claridad legal y el apoyo que necesitan para prosperar en un mundo cada vez más digital, con experiencia particular en privacidad y protección de datos.",
      officeLocation: "Nuestras oficinas en Madrid, España - Centro de Asesoría Legal Online",
      ourFounders: "Nuestros Expertos Legales",
      // Founders
      founder1Name: "Elena Martínez",
      founder1Title: "Socia Directora y Directora Legal",
      founder1Bio:
        "Con más de 15 años de experiencia en derecho corporativo y digital, Elena lidera nuestra estrategia de asesoría legal online y supervisa todos los compromisos con clientes. Su experiencia incluye haber sido asesora legal para varias importantes empresas tecnológicas y startups en toda Europa, con especialización en privacidad y protección de datos.",
      founder1Education: "J.D., Universidad Complutense",
      founder2Name: "Carlos Rodríguez",
      founder2Title: "Director de Tecnología y Cumplimiento",
      founder2Bio:
        "Carlos aporta una combinación única de experiencia legal y técnica, con un enfoque en privacidad y protección de datos, cumplimiento del RGPD y digitalización legal. Su formación dual en derecho e informática le permite cerrar la brecha entre los requisitos legales y la implementación técnica.",
      founder2Education: "LL.M., IE Law School",
      founder3Name: "Sofia Navarro",
      founder3Title: "Especialista en Inmigración y Residencia",
      founder3Bio:
        "Sofia se especializa en derecho de inmigración y requisitos de residencia, con particular experiencia en derechos de ciudadanos de la UE y reunificación familiar. Su enfoque compasivo y atención al detalle han ayudado a cientos de clientes a navegar con éxito por complejos procesos de residencia a través de nuestros servicios de asesoría legal online.",
      founder3Education: "J.D., Universidad de Barcelona",
      // Values
      ourValues: "Nuestros Valores Fundamentales",
      integrity: "Integridad",
      integrityDesc:
        "Mantenemos los más altos estándares éticos en todos nuestros servicios de asesoría legal online y consejos.",
      clientCentered: "Centrado en el Cliente",
      clientCenteredDesc: "Sus necesidades y objetivos están en el centro de nuestro enfoque de asesoría legal online.",
      excellence: "Excelencia",
      excellenceDesc:
        "Nos esforzamos por la excelencia en nuestra experiencia legal y servicio de asesoría legal online.",
      innovation: "Digitalización Legal",
      innovationDesc:
        "Adoptamos la digitalización legal para prestar servicios de asesoría legal online de manera más efectiva.",
      readyToWork: "¿Listo para trabajar con nuestros expertos legales?",
    },
    // Booking Calendar
    booking: {
      title: "Programe Su Consulta Legal Gratuita de 20 Minutos",
      subtitle:
        "Reserve una consulta legal online gratuita con nuestros expertos para discutir las necesidades de su negocio digital",
      howItWorks: "Cómo Funciona Nuestra Consulta Legal Gratuita",
      howItWorksDesc: "Pasos simples para programar su consulta legal online gratuita",
      step1: "Seleccione una Fecha y Hora",
      step1Desc: "Elija entre los horarios disponibles de lunes a viernes en zona horaria española (CET/CEST)",
      step2: "Proporcione Sus Datos",
      step2Desc: "Complete su información de contacto y tema de consulta legal",
      step3: "Reciba Confirmación",
      step3Desc: "Obtenga un correo electrónico con los detalles de la llamada e invitación al calendario",
      consultationIncludes: "Su consulta legal gratuita incluye:",
      consultationItem1: "Videollamada o llamada telefónica de 20 minutos con un experto legal",
      consultationItem2: "Evaluación inicial de sus necesidades legales",
      consultationItem3: "Recomendaciones para los siguientes pasos legales",
      consultationItem4: "Sin obligación de contratar servicios legales",
      bookYourConsultation: "Reserve Su Consulta Legal Gratuita",
      selectDate: "Seleccione una fecha para su consulta legal gratuita",
      chooseTime: "Elija un horario disponible",
      completeDetails: "Complete sus datos de reserva",
      timeZoneNote: "Todos los horarios están en zona horaria española (CET/CEST)",
      noSlots: "No hay horarios disponibles para esta fecha.",
      chooseAnother: "Elegir Otra Fecha",
      fullName: "Nombre Completo *",
      fullNamePlaceholder: "Introduce tu nombre completo",
      email: "Correo Electrónico *",
      emailPlaceholder: "su.correo@ejemplo.com",
      phone: "Número de Teléfono *",
      phonePlaceholder: "+34 XXX XXX XXX",
      topic: "Tema de Consulta Legal (Opcional)",
      topicPlaceholder: "Describa brevemente qué asuntos legales le gustaría discutir",
      back: "Atrás",
      continue: "Continuar",
      bookConsultation: "Reservar Consulta Gratuita",
      // Confirmation
      consultationBooked: "¡Consulta Legal Reservada!",
      consultationScheduled: "Su consulta legal gratuita de 20 minutos ha sido programada.",
      confirmationSent: "Hemos enviado un correo electrónico de confirmación a",
      teamContact:
        "Nuestro equipo legal se pondrá en contacto con usted poco antes de la hora programada con el enlace de llamada o número de teléfono.",
      done: "Listo",
    },
    // Testimonials
    testimonials: {
      title: "Lo Que Dicen Nuestros Clientes de Asesoría Legal",
      subtitle:
        "Escuche de empresas a las que hemos ayudado a navegar por desafíos legales en el espacio digital con nuestros servicios de asesoría legal online.",
      testimonial1:
        "Lexzen nos proporcionó una asesoría legal online invaluable para nuestro negocio de comercio electrónico. Su experiencia en privacidad y protección de datos nos ayudó a evitar posibles problemas de cumplimiento mientras crecíamos nuestra presencia en línea.",
      client1Name: "Sarah Johnson",
      client1Title: "CEO, StyleHub",
      testimonial2:
        "Trabajar con Lexzen transformó nuestra forma de abordar la digitalización legal para nuestros proyectos de desarrollo web. Su equipo hizo que los requisitos legales complejos fueran accesibles y prácticos a través de sus servicios de asesoría legal online.",
      client2Name: "Michael Chen",
      client2Title: "Fundador, TechSolutions",
    },
    // CTA Section
    cta: {
      title: "¿Listo para Comenzar con Asesoría Legal Online Profesional?",
      subtitle:
        "Programe una consulta legal gratuita con nuestros expertos y dé el primer paso hacia la claridad legal para su negocio digital.",
      scheduleConsultation: "Programar Consulta Legal Gratuita",
      contactUs: "Contactar a Nuestro Equipo Legal",
    },
    // Footer
    footer: {
      rights: "© 2025 Lexzen Asesoría Legal Online. Todos los derechos reservados.",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      legalNotice: "Aviso Legal",
      contact: "Contacto",
      // Company
      companyHeading: "Empresa",
      aboutUs: "Sobre Nuestro Equipo Legal",
      services: "Servicios Legales",
      careers: "Carreras Legales",
      blog: "Blog Legal",
      // Legal
      legalHeading: "Legal",
      // Contact
      contactHeading: "Contacto",
      address: "Calle Gran Vía 28, Madrid, España",
      phone: "+34 912 456 789",
      email: "info@lexzen.com",
      // Social
      socialHeading: "Síguenos",
      // Newsletter
      newsletterHeading: "Mantente Actualizado",
      newsletterSubheading:
        "Suscríbete a nuestro boletín para consejos legales y actualizaciones sobre privacidad y protección de datos",
      emailPlaceholder: "Tu dirección de correo electrónico",
      subscribe: "Suscribirse",
      privacyConsent:
        "Al suscribirte, aceptas nuestra Política de Privacidad y consientes recibir actualizaciones legales de Lexzen.",
      subscribeSuccess: "¡Gracias por suscribirte a nuestras actualizaciones legales!",
      subscribeError: "Hubo un error. Por favor, inténtalo de nuevo.",
    },
    // Language
    language: {
      en: "Inglés",
      es: "Español",
    },
    // Contact Form
    contactForm: {
      title: "Ponte en Contacto",
      subtitle: "Envíanos un mensaje y te responderemos lo antes posible",
      fullName: "Nombre Completo",
      fullNamePlaceholder: "Introduce tu nombre completo",
      email: "Correo Electrónico",
      emailPlaceholder: "tu.correo@ejemplo.com",
      subject: "Asunto / Tema",
      subjectPlaceholder: "¿De qué trata tu mensaje?",
      message: "Mensaje",
      messagePlaceholder: "Por favor, proporciona detalles sobre tu consulta...",
      subscribe: "Me gustaría recibir actualizaciones de Lexzen",
      submit: "Enviar Mensaje",
      sending: "Enviando...",
      required: "Este campo es obligatorio",
      invalidEmail: "Por favor, introduce una dirección de correo válida",
      success: "¡Gracias por tu mensaje!",
      successDetails: "Hemos recibido tu consulta y te responderemos en breve.",
      error: "Hubo un error al enviar tu mensaje",
      errorDetails: "Por favor, inténtalo de nuevo o contáctanos directamente por correo electrónico.",
      close: "Cerrar",
    },
  },
}
