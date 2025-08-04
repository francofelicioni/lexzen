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
    // Language
    language: {
      en: "English",
      es: "Spanish",
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
        "Accessible and clear legal advice for those starting businesses, relocating, or facing early legal challenges while building their projects.",
      subtitle2:"From contracts to residency paperwork, with a strategic approach and international expertise.",
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
      residencyDesc1: "Relocating to a new country requires handling complex paperwork",
      residencyDesc2: "Our service is designed to provide clear, accessible support throughout each step of the residency process, tailored to individual needs.",
      residencyDesc3: "Flexible packages are available for residency applications, family reunification, and specific legal consultations, all online and with professional support.",

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
      forNonResidentsItem4: "Specialized immigration management",

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
      "Lexzen was born from firsthand experience: navigating, step by step, the personal and professional challenges of settling in a new country.",
      storyContent2: "From the complexity of residency paperwork to the legal obstacles faced by those starting or developing a digital business from abroad.",
      storyContent3:
      "The project was founded with a clear conviction: many people don't need lengthy legal speeches but rather clear, accessible guidance aligned with the specifics of their reality.",
      storyContent4: "Those starting a new chapter in Europe or building a business in the digital environment often face key legal decisions for which they are not always prepared. This is where Lexzen adds value.",
      storyContent5:
      "With solid legal training and practical experience in migration processes, contract advisory, and legal structuring for emerging projects, we offer a service focused on strategic guidance without unnecessary complexity.",
      storyContent6: "Our approach combines technical knowledge with lived experience to provide real, understandable, and applicable solutions.",
      storyContent7:
      "We believe in legal advisory that not only solves problems but also supports clients. Having walked this path ourselves, we understand it and put that knowledge at the service of those starting their journey today.",
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
      title: "Schedule Your Free 15-Minute Consultation",
      subtitle:
        "Schedule your free consultation with us! We want to understand your situation and provide you with the best possible solution.",
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
      submitting: "Submitting...",
      // Confirmation
      consultationBooked: "Consultation Booked!",
      consultationScheduled: "Your free 15-minute consultation has been scheduled.",
      confirmationSent: "A confirmation email has been sent to",
      teamContact:
        "Our team will contact you shortly before your scheduled time with the call link.",
      done: "Done",
    },
    // Landing Page
    landing: {
      consultationAvailable: "Free Consultation Available",
      heroTitle: "Get Residency by Arraigo - New Immigration Regulations",
      heroSubtitle: "Management services for residency by arraign under the new immigration regulations. Book your free consultation to understand your options.",
      bookNow: "Book Now",
      learnMore: "Learn More",
      whyChooseUs: "Why Choose Our Immigration Legal Services?",
      whyChooseUsDesc: "We specialize in residency by arraigo cases under the new immigration regulations, providing expert guidance throughout the process.",
      benefit1Title: "15-Minute Free Consultation",
      benefit1Desc: "Get immediate guidance on your residency by arraigo case. Our experts will assess your situation and explain the new regulations.",
      benefit2Title: "Specialized in immigration processes",
      benefit2Desc: "We have extensive experience with the new immigration regulations and residency by arraigo procedures.",
      benefit3Title: "100% Online Service",
      benefit3Desc: "Complete your consultation from anywhere. No travel required - just a phone or video call to discuss your case.",
      readyToStart: "Ready to Start Your Residency Process?",
      readyToStartDesc: "Don't wait to understand your options for residency by arraigo. Book your free consultation today and take the first step towards legal residency.",
      bookFreeConsultation: "Book Free Consultation",
      guarantee1: "No obligation to hire",
      guarantee2: "15-minute free consultation",
      guarantee3: "Expert immigration advice",
      bookYourSession: "Book Your Immigration Consultation",
      bookYourSessionDesc: "Select your preferred date and time for your free 15-minute consultation about residency by arraigo.",
      finalCTA: "Don't Wait - Start Your Residency Process Today",
      finalCTADesc: "Your residency matters deserve immediate attention. Book your free consultation now and get expert guidance on the new immigration regulations.",
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
      title: "Would you like to boost your business?",
      title2: "How to Book an Appointment",
      scheduleConsultation1: "Choose your preferred date and time - Select the day and hour that best suits your schedule.",
      scheduleConsultation2: "No payment required upfront - This is a free, no-obligation appointment.",
      scheduleConsultation3: "Receive your confirmation - You’ll get a confirmation email with the meeting link.",
      bookNow: "Book now",
      scheduleConsultation: "Schedule a Free Consultation",
      contactUs: "Contact us"
      
    },
    // Footer
    footer: {
      footerDesc: "Legal advisory tailored to your needs, specializing in digital businesses and EU residency.",
      rights: "© 2025 Lexzen. All rights reserved.",
      buildBy: "Developed by <a href='https://www.360-webs.com' target='_blank'>360 Webs</a>",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      legalNotice: "Legal Notice",
      cookiePolicy: "Cookie Policy",
      contact: "Contact",
      // Company
      companyHeading: "Company",
      aboutUs: "About Our Team",
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
      privacyConsent: "By subscribing, you agree to our Privacy Policy and receive updates from us.",
      subscribeSuccess: "Thank you for subscribing to our newsletter!",
      subscribeError: "There was an error. Please try again.",
      alreadySubscribed: "This email address is already subscribed to our newsletter.",
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
    //Legals
    legals: {
      termsOfService: {
        title: "Lexzen Terms of Service",
        lastUpdated: "Last updated: {date}",

        intro: {
          description:
            "These Terms of Service govern access to, browsing and use of the Lexzen website, as well as the general conditions that apply to the relationship between users and the company regarding the legal services informatively offered through the site.",
        },

        sections: {
          provider: {
            title: "1. Service Provider Identification",
            name: "Trade name: Lexzen",
            legalStatus: "Legal form: Company in the process of incorporation",
            email: "Contact email: privacy@lexzen.com",
            purpose:
              "Website purpose: Legal advisory services for startups and legal residency processes in Spain.",
          },

          acceptance: {
            title: "2. Acceptance of the Terms",
            content:
              "Accessing and using the website implies full and unconditional acceptance of these terms. If the user disagrees, they must refrain from using the site.",
            modifications:
              "Lexzen reserves the right to modify these terms at any time. Continued use after publication implies tacit acceptance of the changes.",
          },

          access: {
            title: "3. Website Access",
            content:
              "Access is free, except for internet connection costs. Some services may require forms or personal data, subject to the Privacy Policy and applicable laws.",
          },

          services: {
            title: "4. Scope and Purpose of Services",
            content:
              "The website provides information about legal services in startup law, immigration, and legal consulting for the innovation ecosystem.",
            disclaimer:
              "Important: Content is for informational purposes only. It does not establish a professional or attorney-client relationship without express agreement by both parties.",
          },

          userObligations: {
            title: "5. User Obligations",
            items: {
              use: "Use the website and content lawfully and respectfully.",
              noFraud: "Do not engage in illegal, fraudulent, or bad faith activities.",
              noInterference: "Do not interfere with or disrupt the technical operation of the site.",
              truthfulInfo: "Provide truthful information in contact or service forms.",
              lexzenRights:
                "Lexzen reserves the right to deny access to users who violate these conditions.",
            },
          },

          intellectualProperty: {
            title: "6. Intellectual and Industrial Property",
            content:
              "All website elements are owned by Lexzen or properly licensed, and protected under Spanish and EU laws.",
            restriction:
              "Reproduction, distribution, or modification is prohibited without prior written authorization.",
          },

          limitation: {
            title: "7. Limitation of Liability",
            content:
              "Lexzen does not guarantee uninterrupted availability or error-free content but will take reasonable measures to address issues.",
            notResponsibleFor: {
              damages: "Damages arising from use of the site or its contents.",
              thirdPartyContent: "Accuracy or legality of third-party content.",
              viruses: "Viruses or elements that may harm the user's system.",
            },
          },

          externalLinks: {
            title: "8. External Links",
            content:
              "This website may include links to third-party websites. Lexzen is not responsible for the content, availability, or policies of those sites.",
          },

          jurisdiction: {
            title: "9. Governing Law and Jurisdiction",
            content:
              "These terms are governed by Spanish law. Any dispute shall be submitted to the courts of the site owner's residence or the user's residence if acting as a consumer.",
          },

          contact: {
            title: "10. Contact",
            content: "For any questions regarding these Terms of Service, you can write to us at:",
            email: "📧 privacy@lexzen.com",
          },
        },
      },
      privacyPolicy: {
        title: "Lexzen Privacy Policy",
        lastUpdated: "Last updated: {date}",

        intro: {
          description:
            "At Lexzen, a firm specialized in legal advice for startups and legal residency processes in Spain, we take our commitment to protecting the personal data of our users, clients, and visitors very seriously.",
          compliance:
            "This Privacy Policy has been prepared in accordance with Regulation (EU) 2016/679 (GDPR) and Organic Law 3/2018 (LOPDGDD), ensuring the effective exercise of the rights and freedoms of the data subjects.",
        },

        sections: {
          identity: {
            title: "1. Identity of the Data Controller",
            controller: "Data controller: Lexzen",
            legalStatus: "Legal status: Company in the process of incorporation",
            email: "Contact email: privacy@lexzen.com",
            phone: "Contact phone: {phone}",
            note:
              "Lexzen acts as the data controller for the personal data collected through this website. Once the legal incorporation of the company is completed, this document will be updated with the corresponding identification details.",
          },

          dataCategories: {
            title: "2. Categories of Data Processed",
            description: "We process the following categories of personal data:",
            items: {
              identity: "Identification data: name, surname, email address, and phone number.",
              professional:
                "Professional and business information: company name, tax ID (if applicable), business sector.",
              financial: "Tax and financial data (when applicable).",
              navigation: "Browsing data (cookies and similar technologies).",
            },
          },

          purposes: {
            title: "3. Purposes of the Data Processing",
            items: {
              inquiries: "To respond to legal inquiries or information requests.",
              services: "To provide and manage contracted professional services.",
              contracts: "To manage pre-contractual or contractual relationships.",
              legal: "To comply with legal or regulatory obligations.",
              communications:
                "To send informative communications, legal newsletters, or relevant content, only with prior consent.",
              cookies:
                "To enhance user experience and optimize website functionality using cookies.",
            },
          },

          legalBasis: {
            title: "4. Legal Basis for Data Processing",
            items: {
              consent: "The explicit consent of the data subject.",
              contract: "The execution of a contract or pre-contractual measures requested by the data subject.",
              legalObligation: "Compliance with legal obligations applicable to Lexzen.",
              legitimateInterest:
                "Lexzen’s legitimate interest in improving service quality and website security, without affecting data subject rights.",
            },
          },

          recipients: {
            title: "5. Data Recipients and Disclosures",
            description:
              "Lexzen will not disclose personal data to third parties, except in the following cases:",
            items: {
              processors:
                "When necessary for service provision, to data processors bound by contracts and GDPR safeguards (Art. 28).",
              legal:
                "To comply with legal obligations before competent authorities, public bodies, or courts.",
              noCommercial:
                "Data will never be disclosed for commercial purposes without the informed and explicit consent of the data subject.",
            },
          },

          internationalTransfers: {
            title: "6. International Data Transfers",
            content:
              "Currently, no international data transfers outside the European Economic Area (EEA) are foreseen. If required, Lexzen will ensure that adequate safeguards are implemented, such as EU-approved Standard Contractual Clauses.",
          },

          retention: {
            title: "7. Data Retention Period",
            content:
              "Personal data will be retained only as long as necessary to fulfill the purposes for which it was collected, as well as any applicable legal retention periods. For marketing communications, data will be kept until the data subject withdraws consent.",
          },

          rights: {
            title: "8. Rights of the Data Subject",
            description:
              "As the data subject, you may exercise your rights under applicable legislation at any time:",
            list: {
              access: "Right of access",
              rectification: "Right to rectification",
              erasure: "Right to erasure",
              objection: "Right to object",
              restriction: "Right to restriction of processing",
              portability: "Right to data portability",
              withdraw: "Right to withdraw consent without affecting prior processing legitimacy",
            },
            instruction:
              "To exercise these rights, please send a request to privacy@lexzen.com, attaching a copy of a valid identification document.",
            complaint:
              "If you believe your rights have not been properly respected, you may file a complaint with the Spanish Data Protection Agency (AEPD) at www.aepd.es.",
          },

          security: {
            title: "9. Security and Confidentiality",
            content:
              "Lexzen implements technical and organizational security measures to ensure the integrity, availability, and confidentiality of personal data. All processes are aligned with the GDPR principles of privacy by design and by default.",
          },

          cookies: {
            title: "10. Cookie Policy",
            content:
              "This website uses first- and third-party cookies to ensure functionality, improve user experience, and perform statistical analysis. For more information on cookie usage and management, please see our ",
          },
        },
      },
      legalNotice: {
        title: "Legal Notice",
        lastUpdated: "Last updated: {date}",

        intro: {
          legalBasis:
            "In compliance with Article 10 of Law 34/2002 (LSSI-CE), users accessing this website are informed of the following identification details:",
        },

        sections: {
          owner: {
            title: "1. Website Owner",
            commercialName: "Trade name: Lexzen",
            legalStatus: "Legal form: Company in the process of incorporation",
            email: "Contact email: privacy@lexzen.com",
            purpose:
              "Purpose of the website: Information about legal advisory services for startups and legal residency processes in Spain.",
            note:
              "Once Lexzen is formally incorporated as a legal entity, the corresponding tax and registry details will be added.",
          },

          terms: {
            title: "2. Terms of Use",
            description:
              "Accessing and using this website implies the user status and full acceptance of this Legal Notice and related policies.",
            commitment:
              "Users agree to use the site lawfully, in good faith and in accordance with public order, avoiding any actions that may harm Lexzen or third parties.",
          },

          intellectualProperty: {
            title: "3. Intellectual and Industrial Property",
            description:
              "All content on this website is protected by intellectual or industrial property rights and is either owned by Lexzen or licensed for its use.",
            restriction:
              "Reproduction, distribution, public communication, or modification of content is prohibited without Lexzen’s prior written authorization.",
          },

          liability: {
            title: "4. Disclaimer of Liability",
            content:
              "Lexzen is not liable for damages resulting from website use, nor does it guarantee the absence of harmful elements such as viruses. It is also not responsible for the legality or accuracy of content linked by third parties.",
          },

          externalLinks: {
            title: "5. External Links",
            content:
              "This website may include links to third-party pages. Lexzen has no control over such sites and assumes no responsibility for their content or availability.",
          },

          modifications: {
            title: "6. Modifications",
            content:
              "Lexzen reserves the right to modify this Legal Notice, terms of use, and other legal texts at any time without prior notice.",
          },

          jurisdiction: {
            title: "7. Governing Law and Jurisdiction",
            content:
              "This Legal Notice is governed by Spanish law. Any dispute arising from access to the website will be submitted to the courts of the website owner's residence (or the user's, if a consumer, per Article 29 LSSI-CE).",
          },

          aiImages: {
            title: "8. AI-Generated Images",
            content:
              "Some images of people on this site have been generated using artificial intelligence to protect user privacy and enhance design. They are illustrative only and do not depict real individuals or anyone affiliated with Lexzen.",
          },
        },

        footer: {
          aiDisclaimer:
            "Images of people shown on this website were generated using artificial intelligence and do not represent real individuals.",
        },
      },
      cookiePolicy: {
        title: "Lexzen Cookie Policy",
        lastUpdated: "Last updated: {date}",

        intro: {
          description:
            "This website, owned by Lexzen, uses cookies and similar technologies to enhance user browsing experience, analyze usage, and deliver personalized content.",
          legal:
            "This policy explains what cookies are, the types we use, and how users can manage them in accordance with the GDPR, LOPDGDD, and LSSI-CE.",
        },

        sections: {
          whatAreCookies: {
            title: "1. What Are Cookies?",
            content:
              "Cookies are small data files downloaded to the user’s device when accessing certain web pages. They store and retrieve browsing information, such as site preferences or usage patterns.",
          },

          typesOfCookies: {
            title: "2. Types of Cookies Used",
            management: {
              own: "First-party cookies: managed directly by Lexzen.",
              thirdParty:
                "Third-party cookies: managed by external entities (e.g., Google Analytics).",
            },
            purpose: {
              technical:
                "Technical cookies: essential for website operation. Do not require consent.",
              personalization:
                "Personalization cookies: allow users to customize site preferences (language, region, etc.).",
              analytics:
                "Analytics cookies: collect statistical data to improve content and user experience.",
              advertising:
                "Advertising cookies: manage the frequency and content of ads.",
            },
            duration: {
              session: "Session cookies: deleted when the browser is closed.",
              persistent: "Persistent cookies: remain stored for a set period.",
            },
          },

          usedCookies: {
            title: "3. Cookies Used on This Site",
            note: "This table is for reference only. Actual cookies may vary depending on tools enabled.",
          },

          management: {
            title: "4. Cookie Management and Settings",
            content:
              "Users can configure their cookie preferences via the initial banner or browser settings. Cookies already stored can also be blocked or deleted.",
            browserLinks: {
              chrome: "Google Chrome: https://support.google.com/chrome/answer/95647",
              firefox: "Mozilla Firefox: https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences",
              safari: "Safari: https://support.apple.com/en-us/guide/safari/sfri11471/mac",
              edge: "Edge: https://support.microsoft.com/en-us/help/4027947/microsoft-edge-delete-cookies",
            },
            warning: "Disabling cookies may affect the functionality of the website.",
          },

          consent: {
            title: "5. Consent",
            content:
              "When first accessing Lexzen’s website, a banner informs you about cookies. You may accept, reject, or configure them. Consent can be modified at any time.",
          },

          modifications: {
            title: "6. Modifications to the Cookie Policy",
            content:
              "Lexzen reserves the right to modify this policy due to legal changes or website updates. We recommend reviewing it periodically.",
          },

          contact: {
            title: "7. Contact",
            content: "For any questions related to the use of cookies, you can contact us at:",
            email: "📧 privacy@lexzen.com",
          },
        },
      }
    },
    // WhatsApp Message
    whatsappMessage: {
      greeting: "Hello, I'm interested in the service",
      moreInfo: "Can you send me more information? Thanks",
      hello: "Hello, I'm interested in your legal consultancy services. Can you send me more information? Thanks",
    },
  },
  es: {
    // General
    general: {
      month: "mes",
      min2Hours: "mínimo 2 horas",
      from: "desde",
    },
    // Language
    language: {
      en: "Inglés",
      es: "Español",
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
        "Asesoramiento accesible y claro para quienes emprenden, se relocalizan o enfrentan los primeros desafíos legales a la hora de desarrollar su negocio.",
      subtitle2: "Desde contratos hasta trámites de residencia, con mirada estratégica y experiencia internacional.",
      scheduleFree: "Programar Consulta Gratuita",
      viewServices: "Ver Servicios Legales",
    },
    // Services Section
    services: {
      title: "Soluciones Legales Online Especializadas",
      subtitle: "Gestión especializada adaptada a las necesidades específicas de su negocio digital",
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
      residencyDesc1: "Instalarse en un nuevo país implica gestionar trámites que pueden ser complejos.",
      residencyDesc2: "Nuestro servicio está orientado a brindar apoyo en cada etapa del proceso de residencia, de manera clara, accesible y adaptada a las necesidades de cada caso.",
      residencyDesc3: "Se ofrecen paquetes flexibles para solicitudes de residencia, reunificación familiar y consultas legales específicas, siempre de forma online y con acompañamiento profesional.",

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
      forNonResidentsItem4: "Gestión especializada en inmigración",

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

      //Review of key documents
      otherTitle: "Otros ",
      reviewTitle: "Orientación legal específica para trámites de residencia",
      reviewDesc: "Consulta Legal Personalizada de Residencia",
      bookReview: "(+ €50 por cada persona adicional)",
      reviewItem1: "Análisis detallado de la situación individual",
      reviewItem2: "Recomendación de los permisos de residencia adecuados",
      reviewItem3: "Lista de verificación de documentación requerida",
      reviewItem4: "Horas adicionales disponibles a €30/hora",
    },
    // About Section
    about: {
      title: "Conozca quiénes somos",
      subtitle: "Un equipo de profesionales legales experimentados que combinan experiencia con innovación digital",
      ourStory: "Nuestra Historia",
      storyContent1:
        "Lexzen surge a partir de una experiencia directa: atravesar, paso a paso, los desafíos personales y profesionales que implica establecerse en un nuevo país.",
      storyContent2: "Desde la complejidad de los trámites de residencia hasta los obstáculos legales que enfrentan quienes emprenden o desarrollan un negocio digital desde el extranjero.",
      storyContent3:
        "El proyecto nació con una convicción clara: muchas personas no necesitan grandes discursos jurídicos, sino acompañamiento claro, accesible y alineado con las particularidades de su realidad.",
      storyContent4: "Quienes están iniciando una nueva etapa en Europa, o construyendo una empresa en el entorno digital, suelen enfrentarse a decisiones legales clave para las cuales no siempre están preparados. Ahí es donde Lexzen aporta valor.",
      storyContent5:
        "Con una sólida formación jurídica y experiencia práctica en procesos de migración, asesoría contractual y estructura legal para proyectos emergentes, ofrecemos un servicio centrado en la orientación estratégica, sin complejidad innecesaria.",
      storyContent6: " Nuestro enfoque combina el conocimiento técnico con la experiencia vivida, para brindar soluciones reales, comprensibles y aplicables.",
      storyContent7:
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

      readyToWork: "Estamos listos para ayudarte",
    },
    // Booking Calendar
    booking: {
      title: "Programe Su Consulta Gratuita de 15 Minutos",
      subtitle:
        "¡Agenda tu consulta gratuita con nosotros! Queremos conocer tu situación y ofrecerte la mejor solución posible.",
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
      submitting: "Enviando...",
      // Confirmation
      consultationBooked: "¡Consulta reservada!",
      consultationScheduled: "Su consult gratuita de 15 minutos ha sido programada.",
      confirmationSent: "Hemos enviado un correo electrónico de confirmación a",
      teamContact:
        "Nos pondremos en contacto poco antes de la hora programada con el enlace de la llamada.",
      done: "Listo",
    },
    // Landing Page
    landing: {
      consultationAvailable: "Consulta Gratuita Disponible",
      heroTitle: "Obtén Residencia por Arraigo - Nuevo Reglamento de Extranjería",
      heroSubtitle: "Servicios de gestión para residencia por arraigo según el nuevo reglamento de extranjería. Reserva tu consulta gratuita para entender tus opciones.",
      bookNow: "Reservar Ahora",
      learnMore: "Saber Más",
      whyChooseUs: "¿Por Qué Elegir Nuestros Servicios de Inmigración?",
      whyChooseUsDesc: "Nos especializamos en casos de residencia por arraigo según el nuevo reglamento de extranjería, proporcionando asesoramiento experto durante todo el proceso.",
      benefit1Title: "Consulta Gratuita de 15 Minutos",
      benefit1Desc: "Obtén orientación inmediata sobre tu caso de residencia por arraigo. Nuestros expertos evaluarán tu situación y explicarán el nuevo reglamento.",
      benefit2Title: "Gestión especializada en inmigración",
      benefit2Desc: "Tenemos amplia experiencia con el nuevo reglamento de extranjería y procedimientos de residencia por arraigo.",
      benefit3Title: "Servicio 100% Online",
      benefit3Desc: "Completa tu consulta desde cualquier lugar. No se requiere viaje - solo una llamada telefónica o videollamada para discutir tu caso.",
      readyToStart: "¿Listo para Iniciar tu Proceso de Residencia?",
      readyToStartDesc: "No esperes para entender tus opciones de residencia por arraigo. Reserva tu consulta gratuita hoy y da el primer paso hacia la residencia legal.",
      bookFreeConsultation: "Reservar Consulta Gratuita",
      guarantee1: "Sin obligación de contratar",
      guarantee2: "Consulta gratuita de 15 minutos",
      guarantee3: "Asesoramiento experto en inmigración",
      bookYourSession: "Reserva Tu Consulta de Inmigración",
      bookYourSessionDesc: "Selecciona tu fecha y hora preferida para tu consulta gratuita de 15 minutos sobre residencia por arraigo.",
      finalCTA: "No Esperes - Inicia tu Proceso de Residencia Hoy",
      finalCTADesc: "Tu proceso de residencia merece atención inmediata. Reserva tu consulta gratuita ahora y obtén asesoramiento experto sobre el nuevo reglamento de extranjería.",
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
      title2: "Cómo Reservar la consulta Gratuita",
      scheduleConsultation1: 'Elija su fecha y hora preferida - Seleccione el día y la hora que mejor se adapten a su horario.',
      scheduleConsultation2: 'No se requiere pago por adelantado - Esta es una cita gratuita y sin compromiso.',
      scheduleConsultation3: 'Reciba su confirmación - Recibirá un correo electrónico con el enlace de la reunión.',
      contactUs: "Contáctanos",
      scheduleConsultation: "Programar consulta gratuita",
      bookNow: "Reservar",
    },
    // Footer
    footer: {
      footerDesc: "Asesoría legal adaptado a sus necesidades, especializada para empresas digitales y residencia en la UE.",
      rights: "© 2025 Lexzen. Todos los derechos reservados.",
      buildBy: "Desarrollado por <a href='https://www.360-webs.com' target='_blank'>360 Webs</a>",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      legalNotice: "Aviso Legal",
      cookiePolicy: "Política de Cookies",
      contact: "Contacto",
      // Company
      companyHeading: "Empresa",
      aboutUs: "Sobre Nuestro Equipo",
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
      privacyConsent: "Al suscribirte, aceptas nuestra Política de Privacidad y recibir actualizaciones de nosotros.",
      subscribeSuccess: "¡Gracias por suscribirte a nuestro newsletter!",
      subscribeError: "Hubo un error. Por favor, inténtalo de nuevo.",
      alreadySubscribed: "Este correo ya está suscrito a nuestro newsletter.",
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
    //Legals
    legals: {
      termsOfService: {
        title: "Términos de Servicio de Lexzen",
        lastUpdated: "Última actualización: {date}",

        intro: {
          description:
            "Los presentes Términos de Servicio regulan el acceso, navegación y uso del sitio web de Lexzen, así como las condiciones generales que rigen la relación entre los usuarios y la empresa en relación con los servicios jurídicos informativos ofrecidos a través del sitio.",
        },

        sections: {
          provider: {
            title: "1. Identificación del prestador de servicios",
            name: "Nombre comercial: Lexzen",
            legalStatus: "Forma jurídica: Empresa en fase de constitución",
            email: "Correo electrónico de contacto: privacy@lexzen.com",
            purpose:
              "Finalidad del sitio web: Asesoramiento legal a startups y gestión jurídica de procesos de residencia en España.",
          },

          acceptance: {
            title: "2. Aceptación de los términos",
            content:
              "El acceso y uso del sitio web implica la aceptación plena y sin reservas de estos términos. Si el usuario no está de acuerdo, deberá abstenerse de usar el sitio.",
            modifications:
              "Lexzen se reserva el derecho a modificar estos términos en cualquier momento. El uso continuado del sitio tras los cambios constituirá aceptación tácita de los mismos.",
          },

          access: {
            title: "3. Acceso al sitio web",
            content:
              "El acceso al sitio es gratuito, salvo los costes de conexión a internet. Algunos servicios pueden requerir formularios o datos personales, aplicándose la Política de Privacidad y la normativa vigente.",
          },

          services: {
            title: "4. Objeto y alcance de los servicios",
            content:
              "A través del sitio, Lexzen ofrece información sobre servicios jurídicos en derecho de startups, extranjería y consultoría legal para el ecosistema innovador.",
            disclaimer:
              "Importante: El contenido es informativo. No implica contratación ni relación abogado-cliente salvo aceptación expresa por ambas partes.",
          },

          userObligations: {
            title: "5. Obligaciones del usuario",
            items: {
              use: "Utilizar el sitio y sus contenidos de forma lícita y respetuosa.",
              noFraud: "No realizar actividades ilícitas, fraudulentas ni contrarias a la buena fe.",
              noInterference: "No interferir ni alterar el funcionamiento técnico del sitio.",
              truthfulInfo: "Aportar información veraz en formularios.",
              lexzenRights:
                "Lexzen puede denegar el acceso a usuarios que incumplan estas condiciones.",
            },
          },

          intellectualProperty: {
            title: "6. Propiedad intelectual e industrial",
            content:
              "Todos los elementos del sitio son propiedad de Lexzen o cuentan con licencias legítimas. Su uso está protegido por leyes españolas y europeas.",
            restriction:
              "Queda prohibida su reproducción, distribución o transformación sin autorización previa y por escrito.",
          },

          limitation: {
            title: "7. Limitación de responsabilidad",
            content:
              "Lexzen no garantiza disponibilidad continua ni ausencia de errores, aunque tomará medidas razonables para evitarlos.",
            notResponsibleFor: {
              damages: "Daños derivados del uso del sitio o sus contenidos.",
              thirdPartyContent: "Veracidad o legalidad de contenidos de terceros.",
              viruses: "Virus u otros elementos que puedan dañar el sistema del usuario.",
            },
          },

          externalLinks: {
            title: "8. Enlaces externos",
            content:
              "Este sitio puede contener enlaces a páginas de terceros. Lexzen no se responsabiliza del contenido, disponibilidad ni políticas de dichos sitios.",
          },

          jurisdiction: {
            title: "9. Legislación aplicable y jurisdicción",
            content:
              "Los términos se rigen por la legislación española. Para controversias, se aplicarán los juzgados del titular del sitio o del usuario si actúa como consumidor.",
          },

          contact: {
            title: "10. Contacto",
            content: "Para consultas sobre estos Términos de Servicio, puedes escribirnos a:",
            email: "📧 privacy@lexzen.com",
          },
        },
      },
      privacyPolicy: {
        title: "Política de Privacidad de Lexzen",
        lastUpdated: "Última actualización: {date}",

        intro: {
          description:
            "En Lexzen, firma especializada en asesoramiento legal a startups y en procesos de residencia legal en España, asumimos con la máxima seriedad nuestro compromiso con la protección de los datos personales de nuestros usuarios, clientes y visitantes.",
          compliance:
            "Esta Política de Privacidad ha sido elaborada en cumplimiento del Reglamento (UE) 2016/679 (RGPD), y de la Ley Orgánica 3/2018 (LOPDGDD), garantizando el ejercicio efectivo de los derechos y libertades fundamentales de los interesados.",
        },

        sections: {
          identity: {
            title: "1. Identidad del Responsable del Tratamiento",
            controller: "Responsable del tratamiento: Lexzen",
            legalStatus: "Forma jurídica: Empresa en fase de constitución",
            email: "Correo electrónico de contacto: privacy@lexzen.com",
            phone: "Teléfono de contacto: {phone}",
            note:
              "Lexzen actúa como responsable del tratamiento de los datos personales recabados a través de este sitio web. Una vez formalizada la constitución legal de la empresa, se actualizarán en este documento los datos identificativos correspondientes.",
          },

          dataCategories: {
            title: "2. Categorías de Datos Tratados",
            description: "Tratamos las siguientes categorías de datos personales:",
            items: {
              identity: "Datos identificativos: nombre, apellidos, email, teléfono.",
              professional: "Información profesional y de empresa: razón social, NIF/CIF, sector.",
              financial: "Datos fiscales y financieros (si procede).",
              navigation: "Información de navegación (cookies y tecnologías similares).",
            },
          },

          purposes: {
            title: "3. Finalidades del Tratamiento",
            items: {
              inquiries: "Atender consultas jurídicas o solicitudes de información.",
              services: "Prestar y gestionar servicios contratados.",
              contracts: "Gestionar relaciones precontractuales o contractuales.",
              legal: "Cumplir con obligaciones legales aplicables.",
              communications:
                "Enviar comunicaciones legales o informativas, solo con consentimiento previo.",
              cookies: "Mejorar la experiencia de navegación mediante cookies.",
            },
          },

          legalBasis: {
            title: "4. Legitimación del Tratamiento",
            items: {
              consent: "Consentimiento expreso del interesado.",
              contract: "Ejecución de un contrato o medidas precontractuales.",
              legalObligation: "Cumplimiento de obligaciones legales.",
              legitimateInterest:
                "Interés legítimo de Lexzen en la mejora del servicio y seguridad del sitio web.",
            },
          },

          recipients: {
            title: "5. Destinatarios y Cesiones de Datos",
            description:
              "Lexzen no comunicará datos personales a terceros, salvo en los siguientes supuestos:",
            items: {
              processors:
                "Prestación de servicios por encargados del tratamiento contratados conforme al artículo 28 del RGPD.",
              legal:
                "Cumplimiento de obligaciones legales ante autoridades, organismos públicos o tribunales.",
              noCommercial:
                "En ningún caso se cederán datos con fines comerciales sin consentimiento expreso.",
            },
          },

          internationalTransfers: {
            title: "6. Transferencias Internacionales",
            content:
              "Actualmente no se prevé la transferencia internacional de datos fuera del EEE. De ser necesario, se garantizarán las salvaguardas legales como las cláusulas tipo de la UE.",
          },

          retention: {
            title: "7. Plazo de Conservación",
            content:
              "Los datos se conservarán mientras sean necesarios para los fines recogidos y conforme a los plazos legales. Para comunicaciones comerciales, hasta la revocación del consentimiento.",
          },

          rights: {
            title: "8. Ejercicio de Derechos",
            description:
              "Puedes ejercer en cualquier momento tus derechos reconocidos por la ley:",
            list: {
              access: "Derecho de acceso",
              rectification: "Derecho de rectificación",
              erasure: "Derecho de supresión",
              objection: "Derecho de oposición",
              restriction: "Derecho a la limitación del tratamiento",
              portability: "Derecho a la portabilidad de los datos",
              withdraw: "Derecho a retirar el consentimiento",
            },
            instruction:
              "Para ejercerlos, escribe a privacy@lexzen.com adjuntando documento de identidad.",
            complaint:
              "Si consideras que no se han atendido tus derechos, puedes reclamar ante la AEPD: www.aepd.es",
          },

          security: {
            title: "9. Seguridad y Confidencialidad",
            content:
              "Lexzen aplica medidas técnicas y organizativas para garantizar la integridad, disponibilidad y confidencialidad de los datos personales, conforme a los principios del RGPD.",
          },

          cookies: {
            title: "10. Política de Cookies",
            content:
              "Este sitio usa cookies propias y de terceros para funcionalidad, experiencia y análisis. Para más información, consulta nuestra ",
          },
        },
      },
      legalNotice: {
        title: "Aviso Legal",
        lastUpdated: "Última actualización: {date}",

        intro: {
          legalBasis:
            "En cumplimiento de lo dispuesto en el artículo 10 de la Ley 34/2002 (LSSI-CE), se informa a los usuarios que accedan al presente sitio web de los siguientes datos identificativos:",
        },

        sections: {
          owner: {
            title: "1. Titular del Sitio Web",
            commercialName: "Denominación comercial: Lexzen",
            legalStatus: "Forma jurídica: Empresa en fase de constitución",
            email: "Correo electrónico de contacto: privacy@lexzen.com",
            purpose:
              "Finalidad del sitio web: Información sobre servicios de asesoría jurídica para startups y procesos de residencia legal en España.",
            note:
              "Una vez formalizada la constitución de Lexzen como persona jurídica, se incorporarán los datos fiscales y de registro mercantil pertinentes.",
          },

          terms: {
            title: "2. Condiciones de Uso",
            description:
              "El acceso y utilización del sitio web atribuye la condición de usuario, e implica la aceptación plena y sin reservas del presente Aviso Legal y demás políticas.",
            commitment:
              "El usuario se compromete a utilizar el sitio conforme a la ley, la buena fe y el orden público, absteniéndose de perjudicar a Lexzen o a terceros.",
          },

          intellectualProperty: {
            title: "3. Propiedad Intelectual e Industrial",
            description:
              "Todos los contenidos del sitio están protegidos por derechos de propiedad intelectual o industrial y son propiedad exclusiva de Lexzen o están autorizados para su uso.",
            restriction:
              "Está prohibida la reproducción, distribución o transformación sin autorización expresa y por escrito de Lexzen.",
          },

          liability: {
            title: "4. Exclusión de Responsabilidad",
            content:
              "Lexzen no se responsabiliza de daños derivados del uso del sitio, ni garantiza la ausencia de virus u otros elementos que puedan afectar el sistema del usuario. Tampoco se hace responsable del contenido enlazado por terceros.",
          },

          externalLinks: {
            title: "5. Enlaces Externos",
            content:
              "Este sitio puede contener enlaces a páginas de terceros. Lexzen no ejerce control sobre ellas y no se responsabiliza de su contenido o funcionamiento.",
          },

          modifications: {
            title: "6. Modificaciones",
            content:
              "Lexzen se reserva el derecho de modificar este Aviso Legal, las condiciones de uso y demás textos legales sin previo aviso.",
          },

          jurisdiction: {
            title: "7. Legislación Aplicable y Jurisdicción",
            content:
              "Este Aviso Legal se rige por la legislación española. Para resolver conflictos, el usuario y Lexzen se someten a los tribunales del lugar de residencia del titular del sitio o del usuario (si es consumidor).",
          },

          aiImages: {
            title: "8. Imágenes Generadas por Inteligencia Artificial",
            content:
              "Algunas imágenes de personas en este sitio han sido generadas mediante inteligencia artificial para proteger la privacidad y mejorar la estética. No representan individuos reales ni deben interpretarse como personas vinculadas a Lexzen.",
          },
        },

        footer: {
          aiDisclaimer:
            "Las imágenes de personas mostradas en este sitio web han sido generadas mediante inteligencia artificial y no representan individuos reales.",
        },
      },
      cookiePolicy: {
        title: "Política de Cookies de Lexzen",
        lastUpdated: "Última actualización: {date}",

        intro: {
          description:
            "El presente sitio web, titularidad de Lexzen, utiliza cookies y tecnologías similares para mejorar la experiencia de navegación del usuario, analizar el uso del sitio y ofrecer contenidos adaptados a sus intereses.",
          legal:
            "Esta política explica qué son las cookies, qué tipos utilizamos y cómo pueden ser gestionadas por el usuario conforme al RGPD, la LOPDGDD y la LSSI-CE.",
        },

        sections: {
          whatAreCookies: {
            title: "1. ¿Qué son las Cookies?",
            content:
              "Las cookies son pequeños archivos de datos que se descargan en el dispositivo del usuario al acceder a determinadas páginas web. Estas permiten almacenar y recuperar información sobre la navegación, como preferencias del sitio o patrones de comportamiento.",
          },

          typesOfCookies: {
            title: "2. Tipos de Cookies Utilizadas",
            management: {
              own: "Cookies propias: gestionadas directamente por Lexzen.",
              thirdParty:
                "Cookies de terceros: gestionadas por entidades externas (por ejemplo, Google Analytics).",
            },
            purpose: {
              technical: "Cookies técnicas: necesarias para el funcionamiento del sitio. No requieren consentimiento.",
              personalization:
                "Cookies de personalización: permiten al usuario configurar el sitio según sus preferencias (idioma, región, etc.).",
              analytics:
                "Cookies de análisis: recopilan datos estadísticos para mejorar el contenido y la experiencia.",
              advertising:
                "Cookies publicitarias: permiten gestionar la frecuencia y el contenido de los anuncios.",
            },
            duration: {
              session: "Cookies de sesión: se eliminan al cerrar el navegador.",
              persistent:
                "Cookies persistentes: permanecen almacenadas durante un tiempo determinado.",
            },
          },

          usedCookies: {
            title: "3. Cookies Utilizadas en Este Sitio",
            note: "Esta tabla es orientativa. Las cookies pueden variar según las herramientas activadas en el sitio.",
          },

          management: {
            title: "4. Gestión y Configuración de Cookies",
            content:
              "El usuario puede configurar sus preferencias mediante el banner inicial o en la configuración del navegador. También puede bloquear o eliminar cookies ya instaladas.",
            browserLinks: {
              chrome: "Google Chrome: https://support.google.com/chrome/answer/95647",
              firefox: "Mozilla Firefox: https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web",
              safari: "Safari: https://support.apple.com/es-es/guide/safari/sfri11471/mac",
              edge: "Edge: https://support.microsoft.com/es-es/help/4027947/microsoft-edge-delete-cookies",
            },
            warning: "La desactivación de cookies puede afectar a la funcionalidad del sitio web.",
          },

          consent: {
            title: "5. Consentimiento",
            content:
              "Cuando accedes por primera vez al sitio web de Lexzen, se te informa mediante un banner. Puedes aceptar, rechazar o configurar el uso de cookies. El consentimiento puede modificarse en cualquier momento.",
          },

          modifications: {
            title: "6. Modificaciones de la Política de Cookies",
            content:
              "Lexzen se reserva el derecho de modificar esta política conforme a cambios legislativos o actualizaciones del sitio. Se recomienda revisarla periódicamente.",
          },

          contact: {
            title: "7. Contacto",
            content: "Para cualquier duda relacionada con el uso de cookies, puedes escribirnos a:",
            email: "📧 privacy@lexzen.com",
          },
        },
      },
    },
    // WhatsApp Message
    whatsappMessage: {
      greeting: "Hola, estoy interesado/a en el servicio",
      moreInfo: "¿Podrían enviarme más información? Gracias",
      hello: "Hola, estoy interesado/a en sus servicios de asesoría legal. ¿Podrían enviarme más información? Gracias",
    },
  },
}
