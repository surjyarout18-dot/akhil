export interface ExperienceCategory {
  title: string;
  subtitle: string;
  tag: string;
  points: string[];
}

export interface SkillItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface CulinaryShowcaseItem {
  title: string;
  category: string;
  description: string;
  image: string;
  aspect: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  board: string;
  year: string;
  status: string;
  score: string;
  scoreType: string;
  location: string;
  description: string;
}

export interface LeadershipItem {
  role: string;
  activity: string;
  title: string;
  description: string;
  keyTakeaway: string;
  image: string;
}

export interface InterestItem {
  name: string;
  category: string;
  description: string;
  icon: string;
  image: string;
}

export interface LanguageItem {
  name: string;
  nativeScript?: string;
  description: string;
}

export const portfolioData = {
  personal: {
    name: "Akhil Baiju",
    title: "Sales & Marketing Professional",
    specialisation: "Hospitality & Culinary Arts",
    email: "akhilbaiju14@gmail.com",
    phone: "+91 94009 46850",
    location: "India",
    tagline: "Where Culinary Creativity Meets the Art of Hospitality.",
    heroDescription:
      "Passionate about creating exceptional guest experiences, building meaningful relationships and delivering service that leaves a lasting impression.",
    statement:
      "Creating meaningful experiences through hospitality, communication and the art of service.",
    philosophy:
      "Hospitality is more than service. It is the art of understanding people, anticipating expectations and creating memorable experiences.",
    aboutBio: [
      "I am Akhil Baiju, a hospitality professional with a background in culinary arts and practical exposure to luxury hotel operations.",
      "My experience at Grand Hyatt Bolgatty helped me understand the importance of guest relationships, personalized service, effective communication and operational excellence.",
      "I enjoy combining creativity with customer-focused thinking to create experiences that go beyond expectations.",
      "With a growing interest in Sales & Marketing, I aim to contribute to hospitality brands through relationship building, brand presentation and exceptional guest engagement.",
    ],
    personalPhilosophy:
      "Every interaction is an opportunity to create an experience worth remembering.",
    culinarySalesPhilosophy:
      "Understanding the product creates the confidence to communicate its value. Culinary knowledge helps me appreciate presentation, ingredients, quality and the guest experience — essential elements of effective hospitality sales.",
    verifiedStats: [
      {
        value: "1",
        label: "Luxury Hotel Internship",
        detail: "Grand Hyatt Bolgatty, Kochi",
      },
      {
        value: "4+",
        label: "Months of Internship Exposure",
        detail: "Cross-departmental Luxury Operations",
      },
      {
        value: "3",
        label: "Languages Spoken",
        detail: "English, Hindi & Malayalam",
      },
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/akhil-baiju",
      instagram: "https://www.instagram.com/akhilbaiju",
      contactMail: "mailto:akhilbaiju14@gmail.com",
      phoneCall: "tel:+919400946850",
    },
  },

  experience: {
    property: "Grand Hyatt Bolgatty",
    location: "Kochi, Kerala, India",
    role: "Intern | Sales, Guest Relations & Food and Beverage Service",
    period: "02 JUN 2025 — 18 OCT 2025",
    duration: "4+ Months Comprehensive Luxury Hotel Immersion",
    overview:
      "An intensive operational and guest-facing internship at one of South India's premier luxury waterfront convention resorts, bridging guest engagement, revenue-driving culinary recommendations, and high-standard hospitality operations.",
    categories: [
      {
        title: "Guest Relations & Sales",
        subtitle: "Personalized Guest Engagement & Value Communication",
        tag: "Relationship & Revenue",
        points: [
          "Engaged directly with international and domestic guests to understand individual preferences and expectations.",
          "Delivered personalized guest experiences tailored to business, leisure, and convention delegates.",
          "Built authentic guest rapport through articulate, empathetic, and professional communication.",
          "Recommended curated food and beverage offerings tailored to guest tastes and dietary needs.",
          "Practised consultative upselling through thorough product knowledge and pairing suggestions.",
        ],
      },
      {
        title: "Operations & Coordination",
        subtitle: "Front-of-House Systems & Departmental Synergy",
        tag: "Systems & Logistics",
        points: [
          "Observed and assisted in guest check-in and check-out procedures in high-volume luxury settings.",
          "Gained exposure to hotel Property Management Systems (PMS) and reservations management workflows.",
          "Coordinated seamlessly across kitchen, front office, concierge, and housekeeping teams.",
          "Proactively assisted with and resolved complex guest requests in real time.",
          "Developed an in-depth understanding of end-to-end guest journey management.",
        ],
      },
      {
        title: "Brand Presentation & Service Excellence",
        subtitle: "Hyatt Luxury Standards & High-Volume Operations",
        tag: "Standards & Execution",
        points: [
          "Maintained exacting five-star dining presentation and tablescape aesthetics.",
          "Assisted with restaurant, banquet, and private dining area preparation and ambiance control.",
          "Maintained meticulous kitchen mise en place adhering to international hygiene and culinary protocols.",
          "Delivered discreet, attentive service aligned with global luxury hospitality benchmarks.",
          "Maintained composure, professionalism, and rapid responsiveness during peak-volume banquet operations.",
        ],
      },
    ],
  },

  skills: [
    {
      id: "crm",
      title: "Customer Relationship Management",
      description:
        "Building authentic rapport, understanding patron psychology, anticipating guest requirements, and fostering long-term loyalty in luxury environments.",
      iconName: "HeartHandshake",
      tag: "Client Focus",
    },
    {
      id: "communication",
      title: "Persuasive Communication & Negotiation",
      description:
        "Articulating value propositions with clarity, active listening, consultative recommendation, and diplomatic resolution.",
      iconName: "MessageSquareQuote",
      tag: "Sales Mastery",
    },
    {
      id: "brand-storytelling",
      title: "Brand Presentation & Storytelling",
      description:
        "Translating hospitality heritage, culinary narratives, and artisanal craftsmanship into compelling client stories.",
      iconName: "Sparkles",
      tag: "Brand Strategy",
    },
    {
      id: "market-research",
      title: "Market Research & Trend Awareness",
      description:
        "Analyzing emerging luxury hospitality trends, dining preferences, wellness dining, and contemporary guest behavior.",
      iconName: "TrendingUp",
      tag: "Strategic Insight",
    },
    {
      id: "event-upselling",
      title: "Event Coordination & Upselling",
      description:
        "Consultative upselling of premium offerings, bespoke pairings, and coordinating multi-department banquet requirements.",
      iconName: "CalendarRange",
      tag: "Commercial Drive",
    },
    {
      id: "digital-awareness",
      title: "Social Media & Digital Awareness",
      description:
        "Recognizing how digital touchpoints, modern aesthetic branding, and online reputations influence guest acquisition.",
      iconName: "Share2",
      tag: "Digital Acumen",
    },
    {
      id: "team-collaboration",
      title: "Cross-functional Team Collaboration",
      description:
        "Aligning culinary, front-office, housekeeping, and sales departments to deliver a frictionless guest experience.",
      iconName: "Users2",
      tag: "Team Leadership",
    },
    {
      id: "guest-experience",
      title: "Guest Experience & Satisfaction",
      description:
        "Designing memorable moments, proactively anticipating unspoken desires, and ensuring guest satisfaction at every touchpoint.",
      iconName: "Award",
      tag: "Guest Journey",
    },
    {
      id: "problem-solving",
      title: "Problem-solving & Adaptability",
      description:
        "Maintaining calm composure under pressure, swift troubleshooting of guest concerns, and agile operational pivoting.",
      iconName: "ShieldAlert",
      tag: "Operational Agility",
    },
    {
      id: "quality-assurance",
      title: "Attention to Detail & Quality Assurance",
      description:
        "Upholding meticulous standards in plating aesthetics, service choreography, dining mise en place, and cleanliness.",
      iconName: "CheckCheck",
      tag: "Luxury Standard",
    },
  ],

  culinaryShowcase: [
    {
      title: "Artisanal Plating & Presentation",
      category: "Fine Dining Craftsmanship",
      description:
        "Visual harmony, balance of color, and negative space on the plate—communicating refinement before the first taste.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
      aspect: "col-span-1 md:col-span-2",
    },
    {
      title: "The Alchemy of Patisserie",
      category: "Precision & Technique",
      description:
        "Architectural desserts celebrating texture, temper, and delicate flavor profiles that conclude an unforgettable meal.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
      aspect: "col-span-1",
    },
    {
      title: "Atmospheric Dining Architecture",
      category: "Sensory Environment",
      description:
        "Curated lighting, tactile linens, and acoustical warmth that frame the dining narrative and heighten sensory indulgence.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=85",
      aspect: "col-span-1",
    },
    {
      title: "Precision in Mise En Place",
      category: "Culinary Discipline",
      description:
        "Flawless kitchen readiness, disciplined knife skills, and timing synchronization that empower world-class service execution.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85",
      aspect: "col-span-1 md:col-span-2",
    },
    {
      title: "The Art of Sommelier & Beverage Pairing",
      category: "Curated Recommendations",
      description:
        "Synthesizing taste profiles with storytelling to enhance cuisine and elevate the commercial value of each table.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=85",
      aspect: "col-span-1",
    },
    {
      title: "Tablescape Choreography",
      category: "Luxury Service Standards",
      description:
        "Geometric symmetry, crystal clarity, and polished silver—setting an immaculate stage for extraordinary dining memories.",
      image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=85",
      aspect: "col-span-1",
    },
  ],

  education: [
    {
      institution: "Institute of Hotel Management (IHM) Goa",
      degree: "B.Sc. Hospitality & Hotel Administration",
      board: "NCHMCT (National Council for Hotel Management and Catering Technology)",
      year: "2026",
      status: "Pursuing (Final Year)",
      score: "5.54",
      scoreType: "CGPA",
      location: "Alto Porvorim, Goa, India",
      description:
        "Comprehensive professional hospitality curriculum covering Food & Beverage Management, Front Office Operations, Accommodation Studies, Food Production & Patisserie, and Hospitality Sales & Financial Accounting.",
    },
    {
      institution: "CMS Higher Secondary School, Mallappally",
      degree: "Higher Secondary (12th Grade)",
      board: "Kerala State Board of Higher Secondary Examination (DHSE)",
      year: "2023",
      status: "Completed",
      score: "77%",
      scoreType: "Percentage",
      location: "Pathanamthitta, Kerala, India",
      description:
        "Graduated with a strong academic foundation, actively leading school sports teams and participating in regional cultural and speech competitions.",
    },
  ],

  leadership: [
    {
      role: "Captain",
      activity: "School Cricket Team",
      title: "Strategic Foresight & Team Stewardship",
      description:
        "Captained the school cricket squad through competitive inter-school tournaments, cultivating team cohesion, field placements, motivational pep talks, and resilient strategic thinking under high-stakes match conditions.",
      keyTakeaway: "Patience, team morale cultivation, and executing plans under pressure.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=85",
    },
    {
      role: "Captain & Goalkeeper",
      activity: "Football Team",
      title: "Vigilance, Composure & Tactical Command",
      description:
        "As goalkeeper and captain, anchored the defense line with split-second decision-making, vocal spatial coordination, and unwavering responsibility as the final line of defense.",
      keyTakeaway: "Unflappable composure, total ownership, and situational clarity.",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=85",
    },
    {
      role: "Performer & Speaker",
      activity: "Drama Competitions & Stage Plays",
      title: "Public Presence, Articulation & Storytelling",
      description:
        "Active participant and award winner in theatrical productions and competitive stage performances, mastering vocal projection, non-verbal expression, and emotional resonance with diverse audiences.",
      keyTakeaway: "Empathy, audience engagement, and confident public delivery.",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=85",
    },
    {
      role: "Creative Performer",
      activity: "School & College Dance Ensembles",
      title: "Rhythm, Expression & Collaborative Choreography",
      description:
        "Performed in synchronized cultural dance productions at school and collegiate festivals, developing physical discipline, stage synchronization, and creative expression.",
      keyTakeaway: "Choreographed precision, collaborative synergy, and creative flair.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=85",
    },
  ],

  languages: [
    {
      name: "English",
      nativeScript: "Global Lingua Franca",
      description: "Fluent professional working proficiency for international luxury guest relations, corporate communications, and high-value client negotiation.",
    },
    {
      name: "Hindi",
      nativeScript: "हिन्दी",
      description: "National language fluency enabling seamless guest connection with domestic travelers and multi-regional hospitality teams across India.",
    },
    {
      name: "Malayalam",
      nativeScript: "മലയാളം",
      description: "Native mother tongue providing profound regional warmth, cultural insight, and deep hospitality rapport across Kerala and South India.",
    },
  ],

  interests: [
    {
      name: "Cricket",
      category: "Competitive Sports",
      description: "Appreciating tactical nuances, mental fortitude, and team dynamics.",
      icon: "Trophy",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Football",
      category: "Team Athletics",
      description: "Passion for high-tempo tactical positioning and goalkeeping precision.",
      icon: "Shield",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Kabaddi",
      category: "Traditional Athletics",
      description: "Speed, explosive agility, situational alertness, and collective trust.",
      icon: "Flame",
      image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Sketching",
      category: "Fine Arts",
      description: "Observing proportions, light and shadow, and architectural elegance.",
      icon: "PenTool",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Drama",
      category: "Performing Arts",
      description: "Immersive storytelling, character psychology, and emotive presentation.",
      icon: "Theater",
      image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Travelling",
      category: "Exploration",
      description: "Discovering regional culinary traditions, heritage resorts, and varied cultures.",
      icon: "Compass",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Music",
      category: "Acoustic Arts",
      description: "Exploring acoustic melodies, ambient lounge sounds, and cultural rhythm.",
      icon: "Music",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    },
  ],
};

