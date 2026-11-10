// Alle content van de website (bron: sombrillagroup.com). Pas hier aan.
export const site = {
  name: "Sombrilla Group of Companies",
  email: "info@sombrillagroup.com",
  phone: "+297-5611206",
  phoneHref: "tel:+2975611206",
  whatsapp: "https://wa.me/2975611206",
  hours: "Mon-Fri 8am-5pm",
  address: "Savaneta 175E, Aruba",
  year: new Date().getFullYear(),
  facebook: "https://www.facebook.com/sombrillabusinessdevelopment",
  linkedin: "https://www.linkedin.com/company/sombrilla-group-of-companies/",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", menu: "services" },
  { label: "Plans", href: "/plans" },
  { label: "SKAI", href: "/skai" },
  {
    label: "CEIS 2025",
    href: "/ceis-2025",
    menu: "ceis",
  },
  { label: "Contact", href: "/contact" },
] as const;

export const ceisMenu = [
  { label: "CEIS 2025", href: "/ceis-2025" },
  { label: "Speakers", href: "/ceis-2025/speakers" },
  { label: "Venue", href: "/ceis-2025/venue" },
  { label: "Program", href: "/ceis-2025/program" },
  { label: "Sponsorship", href: "/ceis-2025/sponsorship" },
  { label: "Event Details", href: "/event-details" },
  { label: "Event Registration", href: "/event-registration" },
];

export type Service = {
  slug: string;
  title: string;
  icon: "consulting" | "business" | "technology" | "events" | "misc";
  image: string;
  intro: string[];
  listTitle?: string;
  list?: string[];
};

export const services: Service[] = [
  {
    slug: "consulting",
    title: "Consulting",
    icon: "consulting",
    image: "/images/service-consulting.jpg",
    intro: [
      "We help our clients all the way by providing consulting services by various certified specialists in different fields of operation.",
      "In a continued-evolving business landscape where challenges and opportunities intersect, the guidance of seasoned experts becomes an invaluable asset. In our world of consulting services, knowledge, experience, and innovation converge to drive growth, efficiency, and excellence.",
    ],
    listTitle: "Some of the areas we consult on are",
    list: ["Market Entry Expansion", "Sales Optimization", "Marketing & Branding", "Business Continuity"],
  },
  {
    slug: "business",
    title: "Business",
    icon: "business",
    image: "/images/service-business.jpg",
    intro: [
      "This is our special service branch to enable entrepreneurs to achieve their dreams and encourage them to participate in grant funding programs to start their businesses. Funding via grants, loans or otherwise can help give entrepreneurs the necessary boost to become an active participant in growing economies.",
    ],
    listTitle: "We contribute to the following",
    list: ["Business planning and strategy", "Business networking", "Sales & Marketing Development", "Training"],
  },
  {
    slug: "technology",
    title: "Technology",
    icon: "technology",
    image: "/images/service-technology.jpg",
    intro: [
      "In today’s hyperconnected digital landscape, the backbone of every successful enterprise is a robust and agile Information Technology (IT) infrastructure. Welcome to the realm of IT services, where innovation meets reliability, and technology becomes a strategic asset.",
      "At Sombrilla Group of Companies we understand that technology is not just a tool; it’s the driving force that propels businesses forward. With a commitment to excellence and a passion for innovation, we offer a comprehensive suite of IT services tailored to meet the unique needs of your organization.",
    ],
  },
  {
    slug: "entertainment-event-management",
    title: "Entertainment & Event Management",
    icon: "events",
    image: "/images/service-events.jpg",
    intro: [
      "Our commitment to crafting exceptional experiences and managing every detail with meticulous precision defines who we are. Whether you’re planning a grand gala, a corporate conference, a dazzling concert, or any event that requires that “wow” factor, we are your trusted partner in turning imagination into vibrant, immersive realities.",
    ],
    listTitle: "Our projects are in",
    list: ["Conferences", "Art & Culture", "Sport events", "Music event"],
  },
  {
    slug: "miscellaneous",
    title: "Miscellaneous",
    icon: "misc",
    image: "/images/service-misc.jpg",
    intro: [
      "At Sombrilla Group of Companies we pride ourselves on being the Swiss Army knife of service providers, ready to tackle an array of challenges and cater to a wide range of requirements. Our commitment to excellence and adaptability sets us apart, making us the go-to choice for those seeking bespoke solutions that transcend conventional boundaries.",
      "From concierge services that simplify your daily life to niche offerings that cater to your most specialized needs, we are your trusted partner in navigating the multifaceted landscape of modern services. Our dedicated team of experts brings expertise and innovation to every project, ensuring that no task is too small, no request too obscure.",
    ],
  },
];

export const qualities = [
  { title: "Excellence", text: "Our commitment to excellence and the provision of high-quality service." },
  { title: "Integrity & professionalism", text: "Our commitment to integrity and professionalism." },
  { title: "Effective strategies", text: "Our ability to design effective strategies to meet your organization's needs." },
];

export const businessServices = [
  "Market Research & Analysis",
  "Business Networking & Partnership Development",
  "Sales & Marketing support",
  "Export & International Expansion Services (outsourcing)",
  "Business planning & Strategy",
  "Training & Capacity Building",
  "Entertainment & events management",
];

export const values = [
  { title: "Diversity", text: "We are one in diversity. We believe that the best teams are built when we can see the value each person brings. We stimulate independence in combination with self-discipline and trust.", icon: "users" },
  { title: "Gratification", text: "Positivity is the main component of success. We enjoy every workday and know how to celebrate our successes. The most successful transformations are the ones filled with pleasurable new discoveries.", icon: "badge" },
  { title: "Develop", text: "To grow as an organization, we must first grow individuals. We stimulate and support everyone in developing their business skills and personal capabilities. Professionalism to us is harnessing all our potential to be the best we can be.", icon: "trending" },
  { title: "Heart", text: "We care for the welfare of everyone we work with, our people, our clients and our partners. We believe in flexibility in work and creating a stress-free work environment. The strength of our organization depends on the success of our people.", icon: "heart" },
] as const;

export const plans = {
  business: {
    title: "Business Plan Pricing Models",
    items: [
      {
        name: "Basic Business Plan",
        tag: "Startup/Freelancer Level",
        price: "$500 – $1,500",
        features: [
          "10-15 pages",
          "Suitable for small businesses, freelancers, or internal use",
          "Executive Summary",
          "Business Model Overview",
          "Industry Overview",
          "Basic Financials (Revenue & Expense Projections)",
          "No market research or in-depth financial modeling",
        ],
      },
      {
        name: "Standard Business Plan",
        tag: "Investor-Ready",
        price: "$500 – $1,500",
        featured: true,
        features: [
          "20-30 pages",
          "Includes in-depth market research, financial projections, and strategy development",
          "Ideal for funding applications and serious business development",
          "Executive Summary",
          "Detailed Business Model",
          "Market & Industry Research",
          "SWOT Analysis",
          "Competitive Analysis",
          "3-Year Financial Projections (Revenue, Expenses, Break-even Analysis)",
        ],
      },
      {
        name: "Comprehensive Business Plan",
        tag: "Corporate/High-Level",
        price: "$5,000 – $15,000+",
        features: [
          "30+ pages",
          "Includes complex financial models, investor pitch decks, and deep market analysis",
          "Suitable for large-scale funding, venture capital, or business expansion",
          "All elements in Standard Plan",
          "Detailed Financial Modeling (Cash Flow, Balance Sheet, Profit & Loss)",
          "Marketing & Sales Strategy",
          "Funding & Investment Strategy",
          "Industry Trends & Risks Analysis",
          "PowerPoint Pitch Deck (Optional)",
        ],
      },
    ],
  },
  proposals: {
    title: "Project Proposals Pricing Models",
    items: [
      {
        name: "Simple Project Proposal",
        price: "$500 – $1,500",
        features: ["5-10 pages", "Executive Summary", "Basic Project Objectives", "Key Deliverables", "Budget Overview", "Timeline"],
      },
      {
        name: "Standard Project Proposal",
        price: "$1,500 – $3,000",
        featured: true,
        features: ["All elements in Simple Proposal", "Market & Competitor Analysis", "Funding & Resource Requirements", "Risk Management Plan", "Implementation Timeline & Milestones"],
      },
      {
        name: "Complex Project Proposal",
        price: "$3,000 – $6,500",
        features: ["All elements in Standard Proposal", "In-depth Financial Analysis", "Stakeholder Engagement Strategy", "Compliance & Regulatory Considerations", "Strategic Impact Assessment", "Full Budget Breakdown & ROI Analysis"],
      },
    ],
  },
  extras: [
    "Rush Delivery (5-7 days): Additional 20-40% surcharge",
    "Investor Pitch Deck (10-15 slides): $500 – $1,500",
    "Market Research & Feasibility Study: $1,000 – $3,500 (depending on industry depth)",
    "Ongoing Consulting (monthly support for implementation): $500 – $2,500/month",
  ],
};

export const skaiObjectives = [
  { title: "Strengthening Regional Collaboration", text: "SKAI aims to build and foster strategic alliances between key stakeholders in the Caribbean and Latin American regions, with a focus on strengthening economic, financial, and cultural ties." },
  { title: "Promoting Sustainable Economic Growth", text: "We are committed to driving sustainable economic development by creating platforms for dialogue, innovation, and collaboration among government leaders, entrepreneurs, and financial institutions." },
  { title: "Empowering Women in Business", text: "SKAI is dedicated to celebrating and promoting women leaders in business by providing opportunities for empowerment, mentorship, and knowledge sharing through events like the Women in Business Brunch." },
  { title: "Enhancing Investment Opportunities", text: "Our objective is to create an environment where investors, entrepreneurs, and policy makers can explore and engage in new business opportunities, particularly in the areas of tourism, finance, trade, oil, and business support services." },
  { title: "Facilitating Knowledge Exchange", text: "SKAI seeks to facilitate the exchange of knowledge and best practices in key sectors, ensuring that participants gain valuable insights into the latest trends, challenges, and innovations in their industries." },
  { title: "Fostering Bilateral Cooperation", text: "One of SKAI’s primary goals is to serve as a bridge for enhancing bilateral cooperation between countries like Aruba and Suriname, encouraging partnerships that lead to mutual growth and development." },
  { title: "Strengthening Financial Institutions", text: "We aim to contribute to the resilience and compliance of financial institutions in the region by providing expertise, resources, and networking opportunities that support their development and adaptation to global standards." },
  { title: "Driving Regional Innovation", text: "Through our conferences and initiatives, SKAI focuses on promoting innovation in finance, trade, and sustainable practices, helping businesses and institutions navigate the future economic landscape." },
];

export { speakers } from "./ceis";

export const attendees = [
  ["Financial Institutions & Regulators", "Central banks, commercial banks, insurance companies, and compliance professionals."],
  ["Government & Policy Leaders", "Officials shaping economic and financial policies."],
  ["Audit & Compliance Experts", "Supreme audit institutions, financial intelligence units, and risk management professionals."],
  ["Business Leaders & Investors", "Entrepreneurs, corporate executives, and investment firms looking to explore new opportunities."],
  ["Technology & Innovation Specialists", "Fintech companies and professionals driving digital transformation in finance."],
];

export const expectations = [
  ["Keynote Speeches & Panel Discussions", "Insights from high-profile speakers, including top industry leaders, regulators, and thought leaders."],
  ["Workshops & Breakout Sessions", "Hands-on learning experiences addressing compliance, risk management, and financial innovation."],
  ["Networking & Partnership Opportunities", "Connect with decision-makers, financial professionals, and business leaders to explore strategic alliances."],
  ["Women in Business Brunch (Aruba Edition)", "A special event titled “Brilliance at The Table: Celebrating Women Shaping the Future of Business”, where industry-leading women will discuss the challenges and strategies for navigating high-level financial spaces."],
];

export const fees = {
  columns: ["Category", "Women in Business Aruba Edition", "Aruba Edition June 4-5, 2026", "Executive Exchange (Male only event – Suriname)"],
  rows: [
    ["Early Bird", "$100", "$400 (April 15)", "$150"],
    ["Standard Registration", "$150", "$475", "$200"],
    ["Group Rate (5+ attendees from the same organization)", "$125", "$425 per person", "$175 per person"],
    ["VIP Experience (Includes priority seating, exclusive networking session, and VIP dinner)", "$200", "$550", "$275"],
    ["One-Day Pass", "N/A", "$250", "N/A"],
    ["Full-time Students (Limited Seats available)", "$40", "$125", "$75"],
  ],
  includes: [
    "Access to all keynote speeches, panel discussions, and breakout sessions",
    "Networking opportunities with industry leaders and experts",
    "Conference materials and exclusive industry insights",
    "Daily lunch and refreshments during the event",
    "Invitation to special workshops and sessions",
  ],
  discounts: [
    ["Early Bird Discounts", "Register before due dates, to take advantage of special pricing."],
    ["Group Discounts", "Organizations registering 5 or more participants receive a discounted rate."],
    ["Combo Package", "Attend both conferences and save on registration fees."],
    ["Student & Academic Discounts", "Limited seats available at discounted rates for students and academic professionals (inquire for eligibility)."],
    ["Sponsors & Partners", "Custom packages available—contact us for details."],
  ],
};
