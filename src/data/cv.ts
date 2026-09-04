export const profile = {
  name: "Denys Pobochnyi",
  title: "Senior Automation QA Engineer",
  location: "Wrocław, Poland",
  linkedin: "https://www.linkedin.com/in/denys-pobochnyi",
  github: "https://github.com/denis180889",
  summary:
    "Senior Automation QA Engineer with over a decade of expertise in test automation, CI/CD, and performance testing. Strong background in Playwright, Selenium, and API testing. Skilled in leading QA teams, mentoring, and building automation frameworks from scratch.",
};

export const highlights = {
  stats: [
    { value: "15+", label: "Years Automating" },
    { value: "20+", label: "Projects Automated" },
    { value: "9", label: "Companies" },
    { value: "3", label: "Languages Spoken (Human)" },
  ],
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Test Automation",
    items: ["Playwright", "Puppeteer", "Protractor", "Selenium WebDriver", "Serenity", "Rest Assured"],
  },
  {
    category: "Programming Languages",
    items: ["JavaScript/TypeScript", "Java"],
  },
  {
    category: "Performance Testing",
    items: ["k6"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "CI/CD",
    items: ["GitHub Actions", "Azure Pipelines", "Jenkins"],
  },
  {
    category: "Containerization",
    items: ["Docker"],
  },
  {
    category: "AI Tools",
    items: ["Cursor", "Claude", "GitHub Copilot"],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Deepdesk",
    role: "Senior Automation QA Engineer",
    dates: "April 2025 – August 2026",
    bullets: [
      "Built a Playwright automation framework from scratch with 500+ E2E UI tests.",
      "Integrated Twilio to automate real phone-call scenarios.",
      "Implemented k6 + Grafana performance testing and monitoring.",
      "Developed AI agents, skills, and prompts for automated test generation and bug-report creation from failed tests.",
      "Maintained automated testing and CI pipelines in Google Cloud.",
    ],
  },
  {
    company: "Utilus",
    role: "Senior Automation QA Engineer",
    dates: "June 2023 – April 2025",
    bullets: [
      "Migrated legacy Jest + Webdriver.io tests to a modern Playwright + TypeScript framework.",
      "Built and maintained E2E UI/API automation with Playwright.",
      "Configured and supported Azure DevOps CI/CD pipelines.",
      "Developed k6 performance tests and Twilio call automation.",
      "Mentored team members and promoted automation best practices.",
    ],
  },
  {
    company: "Vowel",
    role: "Senior Automation QA Engineer",
    dates: "July 2022 – June 2023",
    bullets: [
      "Built a Playwright + TypeScript E2E UI automation framework from scratch.",
      "Developed and maintained ~300 automated tests with camera and microphone mocking for reliable WebRTC testing.",
      "Configured and maintained GitHub Actions CI/CD pipelines for automated test execution.",
      "Mentored team members and conducted technical interviews.",
    ],
  },
  {
    company: "Resident Home",
    role: "Senior Automation QA Engineer",
    dates: "November 2021 – June 2022",
    bullets: [
      "Established UI and API test automation processes with Playwright and TypeScript.",
      "Developed automation framework from scratch.",
      "Provided mentoring and guidance to team members.",
    ],
  },
  {
    company: "GlobalLogic",
    role: "QA Automation Lead",
    dates: "May 2019 – November 2021",
    bullets: [
      "Led QA team for NextGen Broadcasting project.",
      "Designed test strategy for REST APIs and UI testing.",
      "Built and maintained automation frameworks (TypeScript, Jest, Puppeteer).",
      "Developed backend automation tests for REST services, Kafka, Redis.",
    ],
  },
  {
    company: "Grid Dynamics",
    role: "Senior Automation QA Engineer",
    dates: "October 2016 – March 2019",
    bullets: [
      "Automated UI and backend testing for multiple projects.",
      "Created test frameworks with Java, Protractor, Jasmine, and Rest Assured.",
      "Developed automated testing solutions for Google Assistant and Amazon Alexa voice bots.",
    ],
  },
  {
    company: "SoftServe",
    role: "Senior Automation QA Engineer",
    dates: "January 2014 – August 2016",
    bullets: [
      "Maintained Selenium-based automation framework.",
      "Conducted automation testing for web applications.",
      "Implemented CI/CD improvements and optimized test execution.",
    ],
  },
  {
    company: "EPAM Systems",
    role: "Automation QA Engineer",
    dates: "April 2013 – January 2014",
    bullets: [
      "Developed and maintained automated tests with Java, JUnit, and Selenium WebDriver.",
      "Defined test coverage and improved software quality through code reviews.",
    ],
  },
  {
    company: "Inbitex & Webprorab",
    role: "QA Engineer",
    dates: "2011 – 2013",
    bullets: ["Gained experience in functional testing, automation, and test documentation."],
  },
];

export const education = {
  degree: {
    school: "Kharkiv National University of Radioelectronics",
    program: "B.Sc. in Applied Mathematics and Management",
    dates: "2006 – 2011",
  },
  certifications: [
    "Brainbench Java 2 Fundamentals Certification (Transcript ID: 11537319)",
    "Oracle Certified Associate (OCA) Java SE 7 Programmer I",
  ],
  languages: [
    { language: "English", level: "Advanced" },
    { language: "Ukrainian", level: "Native" },
    { language: "Polish", level: "Intermediate" },
  ],
};
