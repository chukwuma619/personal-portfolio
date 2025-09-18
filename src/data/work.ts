import { type ImageProps } from "next/image";

export type RoleType = {
  company: string;
  title: string;
  // logo: ImageProps['src']
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
};

export let resume: Array<RoleType> = [
  {
    company: "Outbrand",
    title: "Senior Software Engineer",
    start: "01-04-2025",
    end: "01-08-2025",
  },
  {
    company: "Saylo",
    title: "Senior Software Engineer",
    start: "01-01-2024",
    end: "01-08-2025",
  },
  {
    company: "Qura AI",
    title: "Senior Software Engineer",
    start: "01-04-2024",
    end: "01-03-2025",
  },
  {
    company: "Jars Global",
    title: "Software Engineer II",
    start: "01-10-2023",
    end: "01-05-2024",
  },
  {
    company: "Freelance",
    title: "Software Engineer",
    start: "01-02-2021",
    end: "01-10-2023",
  },
];
