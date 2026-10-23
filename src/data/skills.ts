export type Skill = {
  name: string;
  icon?: string;
  invertOnDark?: boolean;
};

export const skills: Skill[] = [
  { name: "TypeScript", icon: "/skills/typescript-icon.svg" },
  { name: "Rust", icon: "/skills/rust.svg", invertOnDark: true },
  { name: "Python", icon: "/skills/python.svg" },
  { name: "React", icon: "/skills/react.svg" },
  { name: "Next.js", icon: "/skills/nextjs-icon.svg", invertOnDark: true },
  { name: "Tauri", icon: "/skills/tauri.svg" },
  { name: "Expo", icon: "/skills/expo-icon.svg", invertOnDark: true },
  { name: "NestJS", icon: "/skills/nestjs.svg" },
  { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
  { name: "Redis", icon: "/skills/redis.svg" },
  { name: "Docker", icon: "/skills/docker-icon.svg" },
  {
    name: "Generative AI",
    icon: "/skills/openai-icon.svg",
    invertOnDark: true,
  },
];
