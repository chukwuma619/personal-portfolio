import { Container } from "./container";
import { SocialLinkWithLabel } from "@/components/social-icons";

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
    <div id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Want to work together?
        </h2>
        <p className="mt-3 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
          I am available for senior full-stack and 0-to-1 product work. Email is
          the fastest way to reach me.
        </p>

        <ul className="mt-6">
          <SocialLinkWithLabel
            href="mailto:chukwuma619@gmail.com"
            icon={MailIcon}
          >
            chukwuma619@gmail.com
          </SocialLinkWithLabel>
        </ul>
      </Container>
    </div>
  );
}
