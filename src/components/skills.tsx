import Image from "next/image";
import { skills } from "@/data/skills";
import { Container } from "./container";

export default function Skills() {
  return (
    <div id="skills" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Skills
        </h2>
      </Container>
      <div className="border-zinc-100 pt-6 sm:pt-8 lg:mt-6 lg:border-t dark:border-zinc-100/10">
        <ul className="relative mx-auto flex flex-wrap gap-x-6 gap-y-4 px-4 text-sm text-zinc-600 sm:px-6 dark:text-zinc-400 md:max-w-2xl md:px-4 lg:px-0">
          {skills.map((skill) => (
            <li key={skill.name} className="flex items-center">
              {skill.icon ? (
                <Image
                  src={skill.icon}
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                  className={`h-5 w-5 flex-none object-contain ${
                    skill.invertOnDark ? "dark:invert" : ""
                  }`}
                />
              ) : (
                <span
                  className="flex h-5 w-5 flex-none items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                </span>
              )}
              <span className="ml-2">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
