import Image from "next/image";
import Link from "next/link";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  SocialLink,
  XIcon,
} from "@/components/social-icons";
import { Button } from "@/components/buttons";
import { MobileNavigation } from "@/components/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { education } from "@/data/education";
import { skills } from "@/data/skills";

const focusSkills = skills.slice(0, 12);
const school = education[0];

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-stretch lg:overflow-y-auto xl:w-120">
      <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:gap-6 lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>

        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          &copy; {new Date().getFullYear()} Ebube Chukwuma. All rights reserved.
        </p>
      </div>
      <div className="pointer-events-auto z-50 fixed top-4 left-2 md:hidden">
        <ThemeToggle />
      </div>
      <MobileNavigation className="pointer-events-auto z-50 top-4 right-2 fixed md:hidden" />

      <div className="relative z-10 mx-auto flex w-full flex-col px-4 pb-6 pt-20 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-zinc-200 lg:px-8 lg:py-8 lg:dark:border-zinc-500 xl:px-12">
        <Link
          href="/"
          className="relative mx-auto block aspect-square w-36 shrink-0 overflow-hidden rounded-lg bg-stone-100 ring-1 ring-zinc-900/5 sm:w-40 sm:rounded-xl lg:mx-0 lg:w-40 lg:rounded-2xl dark:bg-stone-200 dark:ring-white/10"
          aria-label="Homepage"
        >
          <Image
            className="h-full w-full object-cover"
            src="/mascot.jpg"
            alt="Red panda mascot for Ebube Chukwuma"
            width={192}
            height={192}
            sizes="(min-width: 1024px) 10rem, 10rem"
            priority
          />
        </Link>
        <div className="mt-6 shrink-0 text-center lg:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Ebube Chukwuma
          </h1>
          <p className="mt-2 text-sm font-medium text-teal-500">
            Senior Software Engineer
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            I design and ship new products — SaaS, desktop, and AI from
            architecture to production. Currently building{" "}
            <a
              href="https://www.ailurn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-2 hover:text-teal-500 hover:decoration-teal-500 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:text-teal-400 dark:hover:decoration-teal-400"
            >
              Ailurn
            </a>
            .
          </p>
        </div>

        <Button
          href="https://docs.google.com/document/d/1uOxdLpFzQREQ1POE0QycPUiHkYcuVO0hNBblFEHZqUU/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="group mt-6 w-full shrink-0"
        >
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>

        <dl className="mt-8 hidden shrink-0 space-y-6 border-t border-zinc-100 pt-8 text-sm lg:block dark:border-zinc-100/10">

          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
              Focus
            </dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {focusSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full bg-zinc-50 px-2.5 py-1 text-xs text-zinc-600 ring-1 ring-zinc-900/5 dark:bg-zinc-800/60 dark:text-zinc-400 dark:ring-white/10"
                >
                  {skill.name}
                </span>
              ))}
            </dd>
          </div>
          {school ? (
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                Education
              </dt>
              <dd className="mt-1 text-zinc-600 dark:text-zinc-400">
                B.Sc. Computer Science
                <span className="block text-xs text-zinc-400 dark:text-zinc-500">
                  AE-FUNAI · 2021–2025
                </span>
              </dd>
            </div>
          ) : null}
        </dl>

        <div className="mt-8 flex shrink-0 flex-col gap-5 lg:mt-auto lg:pt-10">
          <a
            href="mailto:chukwuma619@gmail.com"
            className="hidden items-center gap-3 text-sm font-medium text-zinc-700 transition hover:text-teal-500 lg:flex dark:text-zinc-300 dark:hover:text-teal-400"
          >
            <MailIcon className="h-5 w-5" />
            chukwuma619@gmail.com
          </a>
          <div className="flex items-center justify-center gap-6 lg:justify-start">
            <SocialLink
              href="https://x.com/ebubedev"
              aria-label="Follow on X"
              icon={XIcon}
            />
            <SocialLink
              href="https://www.instagram.com/ebubedev/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/chukwuma619"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/ebubedev/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
