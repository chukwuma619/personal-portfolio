export type Project = {
  name: string;
  description: string;
  logo: string;
  image?: string;
  link: { href: string; label: string };
};

export const projects: Project[] = [
  {
    name: "Ailurn",
    logo: "/projects/ailurn.svg",
    image: "/projects/ailurn-shot.png",
    description:
      "AI course builder I am bootstrapping. A topic, GitHub repo, or URL becomes modules and lessons you study in the same workspace.",
    link: {
      href: "https://www.ailurn.com/",
      label: "ailurn.com",
    },
  },
  {
    name: "Fiber Studio",
    logo: "/projects/fiber-studio.png",
    image: "/projects/fiber-studio-shot.png",
    description:
      "Desktop app that replaces the Fiber Network CLI — native keychain storage, automated node orchestration, and Layer-2 payments on Nervos CKB.",
    link: {
      href: "https://www.getfiberstudio.com/",
      label: "getfiberstudio.com",
    },
  },
  {
    name: "MyOffCampus",
    logo: "/projects/myoffcampus.svg",
    image: "/projects/myoffcampus-shot.png",
    description:
      "Housing marketplace for Nigerian university students, with listing verification, reservation holds, and proof-of-payment escrow.",
    link: {
      href: "https://www.myoffcampusng.com/",
      label: "myoffcampusng.com",
    },
  },
  {
    name: "Altair",
    logo: "/projects/altair.svg",
    image: "/projects/altair-shot.jpg",
    description:
      "SIS/LMS for West African schools — attendance, timetables, parent apps, and AI study support.",
    link: {
      href: "https://www.altair.ng/",
      label: "altair.ng",
    },
  },
  {
    name: "FoundaBridge",
    logo: "/projects/foundabridge.png",
    description:
      "Real-time investor matching network with WebSockets, Redis, and automated KYC document checks.",
    link: {
      href: "https://www.foundabridge.com/",
      label: "foundabridge.com",
    },
  },
  {
    name: "Outbrand",
    logo: "/projects/outbrand.png",
    description:
      "AI publishing engine that creates and distributes content across 10+ connected channels.",
    link: {
      href: "https://www.outbrand.design/",
      label: "outbrand.design",
    },
  },
  {
    name: "Qura AI",
    logo: "/projects/qura.png",
    description:
      "Browser extension and live dashboard for context-aware social replies, with usage-metered billing.",
    link: {
      href: "https://www.qura.ai/",
      label: "qura.ai",
    },
  },
];
