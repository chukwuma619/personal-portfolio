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
    company: "Freelancer",
    title: "Web Developer",
    start: "01-10-2023",
    end: {
      label: "Present",
      dateTime: new Date().getFullYear().toString(),
    },
  },
  {
    company: "JARS SOLUTIONS LIMITED",
    title: "Software Engineer I",
    start: "01-03-2024",
    end: "01-05-2024",
  },
  {
    company: "JARS SOLUTIONS LIMITED",
    title: "Intern Software Engineer",
    start: "01-10-2023",
    end: "01-03-2024",
  },
  
];
