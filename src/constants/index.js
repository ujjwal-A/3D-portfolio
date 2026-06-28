import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  python,
  spring,
  sql,
  myfitness_gym,
  chat_web_app,
  electron,
  firebase,
  materialUi,

  bizacuity,
  vyapar,
  taxone
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "stats",
    title: "Impact",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Engineer (React + TS)",
    icon: mobile,
  },
  {
    title: "Frontend Architecture",
    icon: web,
  },
  {
    title: "Systems & Performance",
    icon: backend,
  },
  {
    title: "Electron / Desktop Apps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Electron",
    icon: electron,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Material UI",
    icon: materialUi,
  },
];

const experiences = [
  {
    title: "Software Engineer 2",
    company_name: "Vyapar TaxOne (Formerly Suvit)",
    icon: taxone,
    iconBg: "#ffffff",
    date: "April 2026 - Present",
    points: [
      "Built a Tally connection framework that auto-detects free ports and rebinds per-user Tally instances, fixing a contention bug where only the first Tally instance bound and listened while every other instance's ODBC connection silently failed — unblocking concurrent multi-user access.",
      "Led the migration of the primary data store from MongoDB to a sharded PostgreSQL + Citus architecture designed for horizontal scale, with shard-key strategy, distribution tuning, indexing, and failover.",
    ],
  },
  {
    title: "Software Engineer 2",
    company_name: "Simply Vyapar Apps",
    icon: vyapar,
    iconBg: "#ffffff",
    date: "July 2024 - Present",
    points: [
      "Reduced database queries by 70% and improved page load by 3x (2.1s → 0.7s) by architecting a sync-aware hybrid cache invalidation system with selective refresh logic.",
      "Eliminated 100% of partial commits and reduced transaction-related defects by 85% by designing a distributed transaction framework enforcing atomic commits between local and server databases.",
      "Reduced PDF-related support tickets by 75% and eliminated non-recoverable production failures by building a resilient PDF generation pipeline with multi-engine fallback.",
      "Reduced invoice HTML payload size by 66% and improved preview stability by 50% by redesigning the Electron invoice/PDF generation framework, replacing DOM-bound rendering with IPC-based file-backed previews.",
      "Eliminated full table scans on large datasets by building a two-phase Master Search — an FTS3 index resolves matches across 9+ fields in O(log n) time, passed to a targeted paginated query with date, type, and role filters.",
      "Prevented UI crashes on large datasets by engineering a bidirectional infinite scroll model keeping only 70 rows in memory at any time, with reactive datasource resets ensuring data stays fresh on every filter, sort, or search change.",
      "Standardized UI architecture across 10+ business modules by architecting a reusable composite page-layout framework (React + TypeScript), cutting per-page development effort by 25%.",
      "Improved dashboard responsiveness by 40% and reduced unnecessary re-renders by 30% by architecting a real-time dashboard framework with centralized state management, enabling dynamic widget selection and multi-range sales analytics.",
      "Improved user activation by 30% and reduced onboarding drop-off by 15% by building a Firebase Remote Config-driven A/B experimentation system splitting first-time users between demo scheduling and a guided first-sale walkthrough (OTP auth + skippable gate).",
      "Built role-based item visibility controls for salesman management — admins can restrict salesmen to specific item categories, with smart defaulting logic ensuring newly added categories automatically inherit correct access without manual reassignment, backed by DB schema changes and a redesigned admin UI.",
    ],
  },
  {
    title: "Software Engineer 1",
    company_name: "BizAcuity Solutions",
    icon: bizacuity,
    iconBg: "#ffffff",
    date: "July 2022 - July 2024",
    points: [
      "Led frontend team in successfully migrating codebase to React and TypeScript, yielding a 20% increase in development efficiency.",
      "Used React to create a Bulk User creation feature from CSV files, resulting in a 10% business growth.",
      "Increased user conversion by 30% by redesigning signup and login flows with friction-reducing UX improvements, optimized validation, and secure authentication patterns.",
      "Reduced incident response time by 30% by building an event-driven alerting system with automated email notifications and centralized alert tracking.",
      "Reduced page load time by 30% by translating UI/UX designs into optimized frontend implementations and applying performance optimization strategies.",
      "Streamlined client onboarding by designing database schemas, building a Python-based Kafka consumer to process event streams, and integrating client data using optimized SQL workflows.",
    ],
  },
  // Note: Keeping experience aligned with the latest resume content.

  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];


const projects = [
  {
    name: "Chat Web App",
    description:
      "Real-time chat app with a clean UI, responsive layouts, and production-style state management. Focused on reliability, UX polish, and predictable client-side data flow.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "ui",
        color: "pink-text-gradient",
      },
    ],
    image: chat_web_app,
    source_code_link: "",
    live_link: "",
  },
  {
    name: "MyFitness Gym",
    description:
      "Developed a dynamic gym website using React, MUI, advanced React hooks, and RapidAPI integration to offer users personalized workout recommendations based on selected muscle groups.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
    ],
    image: myfitness_gym,
    source_code_link: "",
    live_link: "",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "",
    live_link: "",
  },
];

export { services, technologies, experiences, projects };
