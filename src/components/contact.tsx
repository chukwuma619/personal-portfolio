import { Container } from "./container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  SocialLinkWithLabel,
  SocialLink,
  XIcon,
} from "@/components/social-icons";

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}
export default function Contact() {
  return (
    <div id="contact" className="py-24 sm:py-32">
      <Container>
        <h2 className="flex text-center text-2xl font-semibold items-center text-zinc-900 dark:text-zinc-100">
          Want us to work together ?
        </h2>

        <ul className="mt-6">
          <SocialLinkWithLabel
            href="mailto:chukwuma619@gmail.com"
            icon={MailIcon}
          >
            chukwuma619@gmail.com
          </SocialLinkWithLabel>
          <SocialLinkWithLabel
            href="https://twitter.com/ebubedev"
            icon={XIcon}
            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
          >
            Follow on X
          </SocialLinkWithLabel>
          <SocialLinkWithLabel
            href="https://www.instagram.com/ebubedev/"
            icon={InstagramIcon}
            className="mt-4"
          >
            Follow on Instagram
          </SocialLinkWithLabel>
          <SocialLinkWithLabel
            href="https://github.com/chukwuma619"
            icon={GitHubIcon}
            className="mt-4"
          >
            Follow on GitHub
          </SocialLinkWithLabel>
          <SocialLinkWithLabel
            href="https://www.linkedin.com/in/ebubedev/"
            icon={LinkedInIcon}
            className="mt-4"
          >
            Follow on LinkedIn
          </SocialLinkWithLabel>
        </ul>
      </Container>
    </div>
  );
}
