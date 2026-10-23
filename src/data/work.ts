export type RoleType = {
  company: string;
  title: string;
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
  highlights: string[];
};

export const resume: Array<RoleType> = [
  {
    company: "CKB Community Fund DAO",
    title: "Senior Software Engineer — Lead Developer",
    start: "01-05-2026",
    end: { label: "Present", dateTime: "2026-10" },
    highlights: [
      "Shipped Fiber Studio, an open-source desktop app that replaces the Fiber CLI for non-technical node operators.",
      "Added native OS keychain storage, automated node orchestration, and a local RPC proxy so users never touch the command line.",
      "Implemented Layer-2 payment channels for peer relay discovery, off-chain liquidity, and instant settlement on Nervos CKB.",
    ],
  },
  {
    company: "Independent Software Engineering & Technical Consulting",
    title: "Senior Full-Stack Consultant",
    start: "01-04-2024",
    end: { label: "Present", dateTime: "2026-10" },
    highlights: [
      "Shipped five production products for startups — student housing, school operations, investor matching, AI publishing, and social automation.",
      "Owned scoping, architecture, and production delivery across Next.js, NestJS, Expo, and Django stacks.",
    ],
  },
  {
    company: "Saylo",
    title: "Senior Software Engineer",
    start: "01-01-2024",
    end: "01-08-2025",
    highlights: [
      "Built a multi-tenant analytics and feedback dashboard in Next.js and Supabase for enterprise clients.",
      "Shipped an embeddable React widget with Shadow DOM encapsulation so host-page styles cannot leak in.",
      "Added a GitHub App and HMAC-verified webhooks that generate changelogs from repository events.",
    ],
  },
  {
    company: "Jars Global",
    title: "Lead Software Engineer",
    start: "01-10-2023",
    end: "01-05-2024",
    highlights: [
      "Led delivery of four client web and mobile apps across SaaS, dating, and e-commerce.",
      "Set accessibility, integration-testing, and API-latency standards across the engineering team.",
    ],
  },
  {
    company: "Freelance Software Engineering",
    title: "Full-Stack Web Developer",
    start: "01-02-2021",
    end: "01-10-2023",
    highlights: [
      "Delivered 15 production web apps for startups and SMBs, from scoping through cloud launch.",
      "Owned client communication, architecture, and production releases end to end.",
    ],
  },
];
