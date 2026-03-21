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
  threejs,
  python,
  spring,
  sql,
  myfitness_gym,
  chat_web_app,

  bizacuity,
  vyapar
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Warehousing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "SQL",
    icon: sql,
  }
];

const experiences = [
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
      "Eliminated full table scans on large datasets by building a two-phase Master Search — an FTS3 index resolves matches across 9+ fields in O(log n) time, passed to a targeted paginated query with date, type, and role filters.",
      "Prevented UI crashes on large datasets by engineering a bidirectional infinite scroll model keeping only 70 rows in memory at any time, with reactive datasource resets ensuring data stays fresh on every filter, sort, or search change.",
      "Standardized UI architecture across 10+ business modules by architecting a reusable composite page-layout framework (React + TypeScript), cutting per-page development effort by 25%.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "BizAcuity Solutions",
    icon: bizacuity,
    iconBg: "#ffffff",
    date: "July 2022 - Present",
    points: [
      "Led frontend team in successfully migrating codebase to React and TypeScript, yielding a 20% increase in development efficiency.",
      "Used React to create a Bulk User creation feature from CSV files, resulting in a 10% business growth.",
      "Built a comprehensive alert management system that sends email notifications when alerts are triggered.",
      "Engineered a real-time prediction system with SDK and API support to calculate churn, LTV, detect bonus abusers, and provide game recommendations based on user activity.",
      "Built the UI of an AI model to identify money laundering in a casino, enhancing gaming analytics security.",
      "Crafted a gaming data analysis UI to visualize essential KPI trends and deliver valuable insights."
    ],
  },
  {
    title: "Software Developer Trainee",
    company_name: "BizAcuity Solutions",
    icon: bizacuity,
    iconBg: "#ffffff",
    date: "May 2022 - July 2022",
    points: [
      "Facilitated client onboarding by creating schemas, developing a Python program to read Kafka feeds, and integrating client data into our platform using SQL queries.",
      "Developed user-friendly dashboards for measuring 'Drift Analysis trends between predictions and actual results,enhancing predictive accuracy by 15%.",
      "Conducted thorough code reviews and debugging to ensure high-quality software deliverables, reducing application errors by 7% and enhancing user experience."
    ],
  },

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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chat Web App",
    description:"Developed a dynamic 3D portfolio website using React and React3 for 3D rendering, and leveraged Framer Motion for captivating animations, showcasing a creative and interactive approach to web design.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chat_web_app,
    source_code_link: "https://github.com/",
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
    image:   myfitness_gym,
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
