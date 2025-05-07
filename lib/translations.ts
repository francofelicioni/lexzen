import exp from "constants"

export type Language = "en" | "es"

export const translations = {
  en: {
    // General
    general: {
      month: "month",
      min2Hours: "minimum 2 hours",
      from: "from",
      whatsapp: "+34 614 481 326",
    },
    // Navigation
    nav: {
      services: "Services",
      about: "About Us",
      bookCall: "Book Free Consultation",
      contact: "Contact",
      sendWhatsapp: "Send us a Whatsapp Message",
    },
    // Hero Section
    hero: {
      title: "Practical Legal Solutions for Startups and New Residents in Europe",
      subtitle:
        "Accessible and clear legal advice for those starting businesses, relocating, or facing early legal challenges while building their projects. From contracts to residency paperwork, with a strategic approach and international expertise.",
      scheduleFree: "Schedule Free Legal Consultation",
      viewServices: "View Legal Services",
    },
    // Services Section
    services: {
      title: "Specialized Online Legal Solutions",
      subtitle: "Expert legal advice tailored to the specific needs of your digital business",
      tabStartups: "For Digital Businesses and Startups",
      tabResidency: "For EU Citizenship Residency (Spain)",
      legalServices: "Online Legal Services for Digital Businesses",
      legalServicesDesc1: "We advise those launching, growing, or developing their digital projects.",
      legalServicesDesc2: "Each step in building a business — from validating an idea to launching a website or signing the first contract — involves important legal decisions.",
      legalServicesDesc3: "We offer clear, approachable, 100% online advice designed to help you build solid foundations, protect your project, and make informed decisions from day one.",
      legalServicesDesc4: "We focus on early-stage startups and digital businesses that need practical and accessible legal guidance, without complications.",
      howWeHelpTitle: "How Can We Help You?",
      howWeHelpP1: "Personalized legal support for digital projects.",
      howWeHelpP1Desc: "We provide ongoing legal advice tailored to the specific needs of your digital project, from the initial idea to its implementation.",
      howWeHelpP2: "Review and preparation of key documentation for your business.",
      howWeHelpP2Desc: "We review and draft essential legal documents that guarantee the proper functioning and protection of your company.",
      howWeHelpP3: "Clear and tailored contracts for collaborators, suppliers, or services.",
      howWeHelpP3Desc: "We draft customized contracts that clearly establish obligations and rights, minimizing risks in your business relationships.",
      howWeHelpP4: "Legal texts for your website (Privacy Policy, Cookies, Legal).",
      howWeHelpP4Desc: "We draft comprehensive, up-to-date legal texts tailored to your type of business to ensure the Regulatory compliance on your website.",
      howWeHelpP5: "Basic recommendations for legal compliance in e-commerce and data protection.",
      howWeHelpP5Desc: "We offer you a practical guide with essential measures to ensure your online store complies with e-commerce and data protection regulations.",

      pricingPackages: "Legal Advisory Packages",
      discounts:
        "Discounts available for long-term legal advisory contracts (5%-15%). Contact us for more details.",
      // Service items
      personalizedLegal: "Personalized Online Legal Assistance",
      personalizedLegalDesc:
        "Online legal support tailored to the specific needs and challenges of your digital business.",
      documentPrep: "Legal Document Preparation and Review",
      documentPrepDesc:
        "Professional preparation and review of all your business documentation with expertise in legal digitalization.",
      contractDrafting: "Drafting of Digital Contracts",
      contractDraftingDesc:
        "Employment, provider, service, and general contracts adapted to your digital business needs.",
      websitePolicies: "Privacy and Data Protection Policies",
      websitePoliciesDesc:
        "Privacy Policy, Cookies Policy, Terms and Conditions, Legal Notice — GDPR-compliant for your digital presence.",
      ecommerceCompliance: "E-commerce Legal Compliance",
      ecommerceComplianceDesc:
        "Data protection and privacy, sales conditions, payment methods, returns, and more for your online store.",
      ndaAgreements: "NDAs and Digital Collaboration Agreements",
      ndaAgreementsDesc:
        "Protect your digital business interests with professionally drafted agreements and expertise in legal digitalization.",
      // Initial Consultation
      initial: "Initial Advisory",
      initialDesc: "Essential legal support for early-stage digital entrepreneurs",
      initialItem1: "Up to 5 hours of legal advice each month",
      initialItem2: "Review of key documents and advice on interpretation",
      initialItem3: "One-off legal consultations via email",
      initialItem4: "Drafting and/or review of contracts",
      initialItem5: "Advice on business legal structure and formalization",
      chooseInitial: "Choose Initial Advisory",
      // Advanced Advisory
      advanced: "Advanced Advisory",
      advancedDesc:
        "Ideal for growing digital businesses with more complex legal needs",
      advancedItem1: "Up to 10 hours of legal advice each month",
      advancedItem2: "Priority document and contract review",
      advancedItem3: "Extended consultations via email and phone",
      advancedItem4: "Drafting and/or review of contracts",
      advancedItem5: "Review of website legal policies aligned with applicable regulations",
      chooseAdvanced: "Choose Advanced Advisory",
      // Premium Advisory
      premium: "Premium Advisory",
      premiumDesc: "Comprehensive coverage in legal digitalization and regulatory compliance for established businesses",
      premiumItem1: "Up to 20 hours of legal advice each month",
      premiumItem2: "Priority management of all legal business matters",
      premiumItem3: "Unlimited consultations via email and phone",
      premiumItem4: "Drafting and/or review of contracts and key documents",
      premiumItem5: "Full review of website legal compliance, including data protection and privacy policies",
      choosePremium: "Choose Premium Advisory",

      // Residency
      residencyTitle: "Practical and Personalized Legal Assistance for Residency Processes in Spain.",
      residencyDesc1: "Relocating to a new country requires handling complex paperwork. Our service is designed to provide clear, accessible support throughout each step of the residency process, tailored to individual needs.",
      residencyDesc2: "Flexible packages are available for residency applications, family reunification, and specific legal consultations, all online and with professional support.",

      residencySubTitle: 'EU Residency Registration Services ("Green NIE")',
      residencySubTitleDesc: 'Three levels of support to match your needs:',

      // Silver
      silver: "Silver",
      silverDesc: "Basic legal support for self-sufficient EU applicants",
      silverItem1: "Document review",
      silverItem2: "Personalized legal advice",
      silverItem3: "Checklist and document verification",
      silverItem4: "Email support",

      // Gold
      gold: "Gold",
      goldDesc: "Comprehensive legal support for EU residency applications",
      goldItem1: "Document preparation and review",
      goldItem2: "Appointment management",
      goldItem3: "Application management and follow-up",
      goldItem4: "Email and phone support",
      goldItem5: "Post-submission tracking",

      // Platinum
      platinum: "Platinum",
      platinumDesc: "Full support for EU residency registration management",
      platinumItem1: "Complete document preparation",
      platinumItem2: "Assistance in obtaining health insurance",
      platinumItem3: "Full appointment coordination",
      platinumItem4: "Priority management of procedures",

      // CTA buttons
      chooseSilver: "Choose Silver",
      chooseGold: "Choose Gold",
      choosePlatinum: "Choose Platinum",

      // Family Reunification
      familyTitle: "Family Reunification Legal Assistance",
      familySubTitle: "Support for family reunification processes, tailored to the type of residency:",
      forResidents: "For EU Residents",
      forResidentsDesc: "Legal support for EU residents bringing family members",
      forResidentsItem1: "Comprehensive assistance in document preparation",
      forResidentsItem2: "Support in obtaining digital certificates",
      forResidentsItem3: "Appointment management for NIE",
      forResidentsItem4: "Application process follow-up",

      forNonResidents: "For Non-Residents",
      forNonResidentsDesc: "Complete legal package for family reunification",
      forNonResidentsItem1: "Document preparation and review",
      forNonResidentsItem2: "Appointment management for NIE",
      forNonResidentsItem3: "Application process follow-up",
      forNonResidentsItem4: "Comprehensive legal advice",

      selectPackage: "Select Package",
      // Specialized Advice
      specializedTitle: "Specialized Legal Advisory for EU Residency",
      consultationTitle: "Specific legal guidance for residency paperwork",
      consultationDesc: "Personalized Residency Legal Consultation",
      bookConsultation: "(+ €50 per additional person)",
      consultationItem1: "Detailed analysis of individual situation",
      consultationItem2: "Recommendation of suitable residency permits",
      consultationItem3: "Checklist of required documents",
      consultationItem4: "Additional hours available at €30/hour",
    },
    // About Section
    about: {
      title: "Get to Know Us",
      subtitle: "A team of experienced legal professionals combining expertise with digital innovation",
      ourStory: "Our Story",
      storyContent1:
        "Lexzen was born from direct experience: navigating the personal and professional challenges of settling in a new country, from complex residency paperwork to legal hurdles faced when starting or running a digital business abroad.",
      storyContent2:
        "The project started with a clear conviction: many people don't need heavy legal jargon — they need clear, accessible support aligned with their reality. Those starting a new chapter in Europe or building a digital business often face critical legal decisions they're unprepared for. That's where Lexzen adds value.",
      storyContent3:
        "With solid legal training and practical experience in migration processes, contract advisory, and legal structuring for emerging projects, we offer a service focused on strategic guidance without unnecessary complexity. Our approach combines technical expertise with lived experience, providing real, understandable, and applicable solutions.",
      storyContent4:
        "We believe in legal advice that not only solves but also supports. Having walked this path ourselves, we are uniquely positioned to guide others on theirs.",
      ourFounders: "Our Legal Experts",
      founder1Name: "Elena Martínez",
      founder1Title: "Managing Partner and Legal Director",
      founder1Bio:
        "With over 15 years of experience in corporate and digital law, Elena leads our online legal advisory strategy and oversees all client engagements. She has advised major tech companies and startups across Europe, specializing in privacy and data protection.",
      founder1Education: "J.D., Complutense University",
      founder2Name: "Carlos Rodríguez",
      founder2Title: "Technology and Compliance Director",
      founder2Bio:
        "Carlos brings a unique combination of legal and technical expertise, specializing in privacy, GDPR compliance, and legal digitalization. His dual background in law and IT bridges the gap between legal requirements and technical implementation.",
      founder2Education: "LL.M., IE Law School",
      founder3Name: "Sofia Navarro",
      founder3Title: "Immigration and Residency Specialist",
      founder3Bio:
        "Sofia specializes in immigration law and residency requirements, particularly for EU citizens and family reunifications. Her compassionate approach and attention to detail have helped hundreds of clients successfully navigate complex residency processes.",
      founder3Education: "J.D., University of Barcelona",
      ourValues: "Core Values",
      integrity: "Legal Clarity",
      integrityDesc:
        "We prioritize conceptual precision and accessible communication. Our mission is to interpret and explain legal content clearly without losing rigor.",
      clientCentered: "Individualized Advisory",
      clientCenteredDesc:
        "Every situation deserves specific analysis. We provide professional support tailored to each case's particular needs, with strategic focus and personalized attention.",
      excellence: "Technical Excellence with Operational Vision",
      excellenceDesc:
        "We maintain high standards of legal quality, combining strong regulatory grounding with viable, decision-oriented solutions.",
      innovation: "Applied Professional Experience",
      innovationDesc:
        "With firsthand experience in international mobility and digital business legal structuring, we anticipate scenarios and offer practical, up-to-date responses.",
      readyToWork: "Ready to Get Started?",
    },
    // Booking Calendar
    booking: {
      title: "Schedule Your Free 15-Minute Legal Consultation",
      subtitle:
        "Book a free consultation with our legal experts and receive guidance to protect and grow your digital business.",
      howItWorks: "How Our Free Consultation Works",
      howItWorksDesc: "Simple steps to schedule your free online legal consultation",
      step1: "Select a Date and Time",
      step1Desc: "Choose from available slots Monday to Friday, Spanish time zone (CET/CEST)",
      step2: "Provide Your Information",
      step2Desc: "Fill out your contact details and consultation topic",
      step3: "Receive Confirmation",
      step3Desc: "Get a confirmation email with call details and calendar invite",
      consultationIncludes: "Your free consultation includes:",
      consultationItem1: "15-minute video or phone call with a legal expert",
      consultationItem2: "Initial assessment of your legal needs",
      consultationItem3: "Recommendations for next legal steps",
      consultationItem4: "No obligation to hire legal services",
      bookYourConsultation: "Book Your Consultation",
      selectDate: "Select a date for your consultation",
      chooseTime: "Choose an available time slot",
      completeDetails: "Complete your booking details",
      timeZoneNote: "All times are in Spanish time zone (CET/CEST)",
      noSlots: "No available slots for this date.",
      loadingSlots: "Loading available slots...",
      chooseAnother: "Choose Another Date",
      fullName: "Full Name *",
      fullNamePlaceholder: "Enter your full name",
      email: "Email Address *",
      emailPlaceholder: "your.email@example.com",
      phone: "Phone Number *",
      phonePlaceholder: "+34 XXX XXX XXX",
      topic: "Consultation Topic",
      topicPlaceholder: "Briefly describe the legal matters you want to discuss",
      back: "Back",
      continue: "Continue",
      bookConsultation: "Book Free Consultation",
      slotTaken: "This time slot is already taken. Please choose another.",
      // Confirmation
      consultationBooked: "Legal Consultation Booked!",
      consultationScheduled: "Your free 15-minute legal consultation has been scheduled.",
      confirmationSent: "A confirmation email has been sent to",
      teamContact:
        "Our legal team will contact you shortly before your scheduled time with the call link or phone number.",
      done: "Done",
    },
    // Testimonials
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Hear from people we've helped with our online legal advisory services.",
      testimonial1: '"Thanks to the detailed advice and preparation of my application folder, the process of obtaining my EU registration certificate was much smoother than I expected. The guidance was clear at every step, and the documents were perfectly organized, which was positively recognized by the immigration office. I felt supported and well-informed throughout the process."',
      client1Name: "Laura M.",
      client1Title: "Italian citizen residing in Madrid",
      testimonial2: '"When I launched my online mentoring site, everything was going well until legal doubts arose while preparing my first client contracts. I didn’t know how to protect myself or how to clearly define the terms. The advice was key to taking that step with confidence: we reviewed clauses, adjusted the language, and everything was clear and professional. Now I work with more peace of mind and confidence."',
      client2Name: "Santiago P",
      client2Title: "Digital entrepreneur",
      testimonial3: '"I wasn’t sure what type of residence permit I was eligible for or where to start. They helped me understand which option was best for my situation and guided me through the entire process. We gathered the necessary documents step by step and submitted the application with confidence."',
      client3Name: "Carlos G.",
      client3Title: "Resident in the Balearic Islands",
    },
    // CTA Section
    cta: {
      title: "Ready to Boost Your Business?",
      subtitle: "",
      scheduleConsultation: "Schedule Free Legal Consultation",
      contactUs: "Contact Our Legal Team",
    },
    // Footer
    footer: {
      footerDesc: "Legal advisory tailored to your needs, specializing in digital businesses and EU residency.",
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
      contactHeading: "Contact with us quickly",
      // Social
      socialHeading: "Follow Us",
      // Newsletter
      newsletterHeading: "Subscribe to Our Newsletter",
      newsletterSubheading:
        "Subscribe to our newsletter for legal tips and updates on privacy and data protection",
      emailPlaceholder: "Your email address",
      subscribe: "Subscribe",
      privacyConsent:"By subscribing, you agree to our Privacy Policy and receive updates from us.",
      subscribeSuccess: "Thank you for subscribing to our newsletter!",
      subscribeError: "There was an error. Please try again.",
      alreadySubscribed: "This email address is already subscribed to our newsletter.",
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
      subjectPlaceholder: "What's your message about?",
      message: "Message",
      messagePlaceholder: "Please provide details about your inquiry...",
      subscribe: "I would like to receive updates from Lexzen",
      submit: "Send Message",
      sending: "Sending...",
      required: "This field is required",
      invalidEmail: "Please enter a valid email address",
      success: "Thank you for your message!",
      successDetails: "We have received your inquiry and will respond shortly.",
      error: "There was an error submitting your message",
      errorDetails: "Please try again or contact us directly by email.",
      close: "Close",
    },
    confirmationEmail: {
      subject: "Appointment Confirmation",
      greeting: (name: string) => `Dear ${name},`,
      confirmation: (date: string, time: string) =>
        `Your appointment has been scheduled for <strong>${date}</strong> at <strong>${time}</strong>.`,
      topic: (topic: string) => `<strong>Consultation Topic:</strong> ${topic}`,
      closing: "Thank you for choosing Lexzen. We're here if you need anything else.",
      farewell: "Sincerely,<br />The Lexzen Team",
    },
    // WhatsApp Message
    whatsappMessage: {
      greeting: "Hello, I'm interested in the service",
      moreInfo: "Can you send me more information? Thanks",
      hello: "Hello, I'm interested in your legal services. Can you send me more information? Thanks",
    },
  },
  es: {
    // General
    general: {
      month: "mes",
      min2Hours: "mínimo 2 horas",
      from: "desde",
    },
    // Navigation
    nav: {
      services: "Servicios",
      about: "Nosotros",
      bookCall: "Reservar Consulta Gratuita",
      contact: "Contacto",
      getStarted: "Comenzar",
      sendWhatsapp: "Enviar mensaje por Whatsapp",
    },
    // Hero Section
    hero: {
      title: "Soluciones legales prácticas para startups y nuevos residentes en Europa",
      subtitle:
        "Asesoramiento accesible y claro para quienes emprenden, se relocalizan o enfrentan los primeros desafíos legales a la hora de desarrollar su negocio. Desde contratos hasta trámites de residencia, con mirada estratégica y experiencia internacional.",
      scheduleFree: "Programar Consulta Gratuita",
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
      howWeHelpTitle: " ¿En qué podemos ayudarte?",
      howWeHelpP1: "Acompañamiento legal personalizado para proyectos digitales.",
      howWeHelpP1Desc: "Brindamos asesoría legal continua y adaptada a las necesidades específicas de tu proyecto digital, desde la idea hasta su implementación.",
      howWeHelpP2: "Revisión y elaboración de documentación clave para tu negocio.",
      howWeHelpP2Desc: "Revisamos y redactamos los documentos legales fundamentales que garantizan el correcto funcionamiento y protección de tu empresa.",
      howWeHelpP3: "Contratos claros y adaptados para colaboradores, proveedores o servicios.",
      howWeHelpP3Desc: "Elaboramos contratos personalizados que establecen obligaciones y derechos de forma clara, minimizando riesgos en tus relaciones comerciales..",
      howWeHelpP4: "Textos legales para tu web (Política de Privacidad, Cookies, Legales).",
      howWeHelpP4Desc: "Redactamos textos legales completos, actualizados y adaptados a tu tipo de negocio para asegurar el cumplimiento normativo en tu sitio web.",
      howWeHelpP5: "Recomendaciones básicas para cumplimiento legal en e-commerce y protección de datos.",
      howWeHelpP5Desc: "Te ofrecemos una guía práctica con medidas esenciales para que tu tienda online cumpla con la normativa de comercio electrónico y protección de datos.",
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
      initialDesc: "Soporte esencial para emprendedores digitales en fase inicial:",
      initialItem1: "Hasta 5 horas de asesoría legal cada mes",
      initialItem2: "Revisión de documentos clave y asesoramiento en su interpretación",
      initialItem3: "Consultas legales puntuales por correo electrónico",
      initialItem4: "Redacción y/o revisión de contratos",
      initialItem5: "Asesoramiento sobre la estructura legal del negocio y su formalización",
      chooseInitial: "Elegir Asesoría Inicial",
      // Advanced Advisory
      advanced: "Asesoría Avanzada",
      advancedDesc:
        "Ideal para empresas digitales en expansión con necesidades más complejas:",
      advancedItem1: "Hasta 10 horas de asesoría legal cada mes",
      advancedItem2: "Revisión prioritaria de documentos y contratos",
      advancedItem3: "Consultas ampliadas por correo electrónico y teléfono",
      advancedItem4: "Redacción y/o revisión de contratos",
      advancedItem5: "Revisión de políticas legales del sitio web, adaptadas a la normativa aplicable",
      chooseAdvanced: "Elegir Asesoría Avanzada",
      // Premium Advisory
      premium: "Asesoría Premium",
      premiumDesc: "Cobertura total en digitalización legal y cumplimiento normativo para empresas consolidadas:",
      premiumItem1: "Hasta 20 horas de asesoría legal cada mes",
      premiumItem2: "Gestión prioritaria de los aspectos legales del negocio",
      premiumItem3: "Consultas ilimitadas por correo electrónico y teléfono",
      premiumItem4: "Redacción y/o revisión de contratos y documentos clave",
      premiumItem5: "Revisión integral del cumplimiento legal del sitio web, incluyendo protección de datos y políticas de privacidad",
      choosePremium: "Elegir Asesoría Premium",

      // Residency
      residencyTitle: "Asistencia legal práctica y personalizada para procesos de residencia en España.",
      residencyDesc1: "Instalarse en un nuevo país implica gestionar trámites que pueden ser complejos. Nuestro servicio está orientado a brindar apoyo en cada etapa del proceso de residencia, de manera clara, accesible y adaptada a las necesidades de cada caso.",
      residencyDesc2: "Se ofrecen paquetes flexibles para solicitudes de residencia, reunificación familiar y consultas legales específicas, siempre de forma online y con acompañamiento profesional.",

      residencySubTitle: 'Servicios de Registro de Residencia UE ("NIE Verde")',
      residencySubTitleDesc: 'Tres niveles de asistencia para adaptar el servicio a cada necesidad:',

      // Silver
      silver: "Plata",
      silverDesc: "Asistencia legal básica para solicitantes autosuficientes de la UE",
      silverItem1: "Revisión de documentación",
      silverItem2: "Asesoramiento personalizado",
      silverItem3: "Checklist de documentación necesaria y verificación",
      silverItem4: "Soporte por correo electrónico",


      // Gold
      gold: "Oro",
      goldDesc: "Asistencia legal integral para solicitudes de residencia UE",
      goldItem1: "Preparación y revisión de documentos",
      goldItem2: "Gestión de citas",
      goldItem3: "Revisión, gestión y seguimiento de solicitud",
      goldItem4: "Soporte por correo electrónico y telefónico",
      goldItem5: "Seguimiento posterior a la presentación",


      // Platinum
      platinum: "Platino",
      platinumDesc: "Soporte completo para la gestión del registro de residencia UE",
      platinumItem1: "Preparación total de documentación",
      platinumItem2: "Asistencia y gestionamiento en obtención de seguro médico",
      platinumItem3: "Coordinación total de citas",
      platinumItem4: "Gestión prioritaria de trámites",

      // CTA buttons
      chooseSilver: "Elegir Plata",
      chooseGold: "Elegir Oro",
      choosePlatinum: "Elegir Platino",

      // Family Reunification
      familyTitle: "Asistencia Legal para Reunificación Familiar",
      familySubTitle: "Apoyo en el proceso de reunificación familiar, adaptado según el tipo de residencia:",
      forResidents: "Para Residentes UE",
      forResidentsDesc: "Apoyo legal para residentes de la UE que traen a miembros de su familia",
      forResidentsItem1: "Asistencia integral en preparación de documentación",
      forResidentsItem2: "Soporte en la obtención de certificados digitales",
      forResidentsItem3: "Gestión de citas para NIE",
      forResidentsItem4: "Seguimiento del proceso de solicitud",

      forNonResidents: "Para No Residentes",
      forNonResidentsDesc: "Paquete legal completo para reunificación familiar",
      forNonResidentsItem1: "Preparación y revisión de documentación",
      forNonResidentsItem2: "Gestión de citas para NIE",
      forNonResidentsItem3: "Seguimiento del proceso de solicitud",
      forNonResidentsItem4: "Asesoramiento legal integral",

      selectPackage: "Seleccionar Paquete",
      // Specialized Advice
      specializedTitle: "Asesoría Legal Especializada en Residencia UE",
      consultationTitle: "Orientación legal específica para trámites de residencia",
      consultationDesc: "Consulta Legal Personalizada de Residencia",
      bookConsultation: "(+ €50 por cada persona adicional)",
      consultationItem1: "Análisis detallado de la situación individual",
      consultationItem2: "Recomendación de los permisos de residencia adecuados",
      consultationItem3: "Lista de verificación de documentación requerida",
      consultationItem4: "Horas adicionales disponibles a €30/hora",
    },
    // About Section
    about: {
      title: "Conozca quiénes somos",
      subtitle: "Un equipo de profesionales legales experimentados que combinan experiencia con innovación digital",
      ourStory: "Nuestra Historia",
      storyContent1:
        "Lexzen surge a partir de una experiencia directa: atravesar, paso a paso, los desafíos personales y profesionales que implica establecerse en un nuevo país. Desde la complejidad de los trámites de residencia hasta los obstáculos legales que enfrentan quienes emprenden o desarrollan un negocio digital desde el extranjero.",
      storyContent2:
        "El proyecto nació con una convicción clara: muchas personas no necesitan grandes discursos jurídicos, sino acompañamiento claro, accesible y alineado con las particularidades de su realidad. Quienes están iniciando una nueva etapa en Europa, o construyendo una empresa en el entorno digital, suelen enfrentarse a decisiones legales clave para las cuales no siempre están preparados. Ahí es donde Lexzen aporta valor.",
      storyContent3:
        "Con una sólida formación jurídica y experiencia práctica en procesos de migración, asesoría contractual y estructura legal para proyectos emergentes, ofrecemos un servicio centrado en la orientación estratégica, sin complejidad innecesaria. Nuestro enfoque combina el conocimiento técnico con la experiencia vivida, para brindar soluciones reales, comprensibles y aplicables.",
      storyContent4:
        "Creemos en una asesoría legal que no solo resuelve, sino que también acompaña. Porque haber transitado este camino nos permite comprenderlo, y poner ese conocimiento al servicio de quienes lo inician hoy.",

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
      ourValues: "Valores Fundamentales",

      integrity: "Claridad jurídica",
      integrityDesc:
        "Priorizamos la precisión conceptual y la comunicación accesible. Nuestra labor consiste en interpretar y transmitir el contenido legal de forma comprensible, sin perder rigor ni profundidad.",

      clientCentered: "Asesoramiento individualizado",
      clientCenteredDesc: "Cada situación requiere un análisis específico. Ofrecemos un acompañamiento profesional adaptado a las particularidades de cada caso, con enfoque estratégico y atención personalizada.",

      excellence: "Rigor técnico con visión operativa",
      excellenceDesc:
        "Sostenemos altos estándares de calidad jurídica, articulando solidez normativa con soluciones viables y orientadas a la toma de decisiones concretas.",

      innovation: "Experiencia profesional aplicada",
      innovationDesc:
        "Contamos con experiencia directa en procesos de movilidad internacional y estructuración legal de negocios digitales, lo que nos permite anticipar escenarios y ofrecer respuestas prácticas alineadas con el entorno actual.",

      readyToWork: "¡Comienza ahora mismo!",
    },
    // Booking Calendar
    booking: {
      title: "Programe Su Consulta Legal Gratuita de 15 Minutos",
      subtitle:
        "Agende una consulta gratuita con nuestros expertos y obtenga la orientación legal necesaria para proteger y expandir su empresa de manera sólida en el mundo digital.",
      howItWorks: "Cómo Funciona Nuestra Consulta Gratuita",
      howItWorksDesc: "Pasos simples para programar su consulta legal online gratuita",
      step1: "Seleccione una Fecha y Hora",
      step1Desc: "Elija entre los horarios disponibles de lunes a viernes en zona horaria española (CET/CEST)",
      step2: "Proporcione Sus Datos",
      step2Desc: "Complete su información de contacto y tema de consulta legal",
      step3: "Reciba Confirmación",
      step3Desc: "Obtenga un correo electrónico con los detalles de la llamada e invitación al calendario",
      consultationIncludes: "Su consulta legal gratuita incluye:",
      consultationItem1: "Videollamada o llamada telefónica de 15 minutos con un experto legal",
      consultationItem2: "Evaluación inicial de sus necesidades legales",
      consultationItem3: "Recomendaciones para los siguientes pasos legales",
      consultationItem4: "Sin obligación de contratar servicios legales",
      bookYourConsultation: "Reserve su Consulta Gratuita",
      selectDate: "Seleccione una fecha para su consulta legal gratuita",
      chooseTime: "Elija un horario disponible",
      completeDetails: "Complete sus datos de reserva",
      timeZoneNote: "Todos los horarios están en zona horaria española (CET/CEST)",
      noSlots: "No hay horarios disponibles para esta fecha.",
      loadingSlots: "Cargando horarios disponibles...",
      chooseAnother: "Elegir Otra Fecha",
      fullName: "Nombre Completo *",
      fullNamePlaceholder: "Introduce tu nombre completo",
      email: "Correo Electrónico *",
      emailPlaceholder: "su.correo@ejemplo.com",
      phone: "Número de Teléfono *",
      phonePlaceholder: "+34 XXX XXX XXX",
      topic: "Tema de Consulta Legal",
      topicPlaceholder: "Describa brevemente qué asuntos legales le gustaría discutir",
      back: "Atrás",
      continue: "Continuar",
      bookConsultation: "Reservar Consulta Gratuita",
      slotTaken: "Este horario ya está reservado. Por favor, elija otro.",
      // Confirmation
      consultationBooked: "¡Consulta Legal Reservada!",
      consultationScheduled: "Su consulta legal gratuita de 15 minutos ha sido programada.",
      confirmationSent: "Hemos enviado un correo electrónico de confirmación a",
      teamContact:
        "Nuestro equipo legal se pondrá en contacto con usted poco antes de la hora programada con el enlace de llamada o número de teléfono.",
      done: "Listo",
    },
    // Testimonials
    testimonials: {
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "Escuche de personas a las que hemos ayudado con nuestros servicios de asesoría legal online.",
      testimonial1: '"Gracias al asesoramiento y preparación detallada de mi carpeta de solicitud, el proceso para obtener mi certificado de registro como ciudadana de la UE fue mucho más fluido de lo que esperaba. La asesoría fue clara en cada paso y los documentos estaban perfectamente organizados, lo que fue reconocido positivamente por la oficina de extranjería. Me sentí acompañada y bien informada en todo momento."',
      client1Name: "Laura M.",
      client1Title: "Ciudadana italiana residiendo en Madrid",
      testimonial2: '"Cuando lancé mi sitio de mentorías online, todo iba bien hasta que surgieron dudas legales al preparar mis primeros contratos con clientes. No sabía cómo protegerme ni cómo dejar claras las condiciones. La asesoría fue clave para dar ese paso con seguridad: revisamos cláusulas, ajustamos el lenguaje y todo quedó claro y profesional. Ahora trabajo con más tranquilidad y confianza."',
      client2Name: "Santiago P.",
      client2Title: "Emprendedor digital",
      testimonial3: '"No tenía claro qué tipo de permiso de residencia me correspondía ni por dónde empezar. Me ayudaron a entender cuál era la opción más adecuada para mi situación y me guiaron en todo el proceso. Reunimos los documentos necesarios paso a paso y presentamos la solicitud con confianza."',
      client3Name: "Carlos G.",
      client3Title: "Residente en las Islas Baleares",
    },
    // CTA Section
    cta: {
      title: "¿Te gustaría impulsar tu negocio?",
      subtitle:
        "",
      scheduleConsultation: "Programar consulta gratuita",
      contactUs: "Contactar a Nuestro Equipo",
    },
    // Footer
    footer: {
      footerDesc: "Asesoría legal adaptado a sus necesidades, especializada para empresas digitales y residencia en la UE.",
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
      contactHeading: "Contacta con nosotros rápidamente",
      // Social
      socialHeading: "Síguenos",
      // Newsletter
      newsletterHeading: "Suscríbete a Nuestro Newsletter",
      newsletterSubheading:
        "Suscríbete a nuestro boletín para consejos legales y actualizaciones sobre privacidad y protección de datos",
      emailPlaceholder: "Tu correo electrónico",
      subscribe: "Suscribirse",
      privacyConsent:"Al suscribirte, aceptas nuestra Política de Privacidad y recibir actualizaciones de nosotros.",
      subscribeSuccess: "¡Gracias por suscribirte a nuestro newsletter!",
      subscribeError: "Hubo un error. Por favor, inténtalo de nuevo.",
      alreadySubscribed: "Este correo ya está suscrito a nuestro newsletter.",
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
    confirmationEmail: {
      subject: "Confirmación de Cita",
      greeting: (name: string) => `Estimado/a ${name},`,
      confirmation: (date: string, time: string) =>
        `Le confirmamos que su cita ha sido programada para el día <strong>${date}</strong> a las <strong>${time}</strong>.`,
      topic: (topic: string) => `<strong>Tema de la consulta:</strong> ${topic}`,
      closing: "Agradecemos su confianza en Lexzen. Estamos a su disposición para cualquier consulta adicional.",
      farewell: "Atentamente,<br />El equipo de Lexzen",
    },
    // WhatsApp Message
    whatsappMessage: {
      greeting: "Hola, estoy interesado/a en el servicio",
      moreInfo: "¿Podrían enviarme más información? Gracias",
      hello: "Hola, estoy interesado/a en sus serviios de asesoría legal. ¿Podrían enviarme más información? Gracias",
    },
  },
}
