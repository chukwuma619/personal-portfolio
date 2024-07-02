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
export default function Header() {
  return (
    <header className="lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
      <div className="hidden lg:sticky gap-6 lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>

        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          &copy; {new Date().getFullYear()} Chukwuma Ebube. All rights reserved.
        </p>
      </div>
      <div className="pointer-events-auto z-50 fixed top-4 left-2 md:hidden ">
        <ThemeToggle />
      </div>
      <MobileNavigation className="pointer-events-auto z-50 top-4 right-2 fixed md:hidden" />

      <div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-zinc-200 lg:dark:border-zinc-500 lg:px-8 lg:py-12 xl:px-12">
        <Link
          href="/"
          className="relative mx-auto block w-48 overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-500 shadow-xl shadow-zinc-100 dark:shadow-zinc-100/10 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
          aria-label="Homepage"
        >
          <Image
            className="w-full"
            src={"/profile-image.JPG"}
            alt=""
            width={250}
            height={250}
            sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
            priority
          />
          <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
        </Link>
        <div className="mt-10 text-center lg:mt-12 lg:text-left">
          <h1 className="text-3xl text-center font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Chukwuma Ebube
          </h1>
          <p className="mt-6 text-base text-center text-zinc-600 dark:text-zinc-400">
            I&apos;m a Software Engineer based in Nigeria. I specialize in
            building exceptional websites and applications, focusing on making
            the web accessible to everyone.
          </p>
        </div>

        <Button href="#" variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
        <div className="mt-6 flex items-center justify-center gap-6">
          <SocialLink href="https://twitter.com/ebubedev" aria-label="Follow on X" icon={XIcon} />
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
    </header>
  );
}
