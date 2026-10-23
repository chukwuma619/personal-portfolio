import { projects } from "@/data/project";
import { Container } from "./container";
import Image from "next/image";

function LinkIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Projects() {
  const featured = projects.filter((project) => project.image);
  const rest = projects.filter((project) => !project.image);

  return (
    <div id="projects" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Projects
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Selected products I designed and shipped.
        </p>
      </Container>
      <div className="border-zinc-100 pt-6 sm:pt-8 lg:mt-6 lg:border-t dark:border-zinc-100/10">
        <ul className="relative mx-auto grid grid-cols-1 gap-x-12 gap-y-16 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
          {featured.map((project) => (
            <li
              className="group relative flex flex-col items-start"
              key={project.name}
            >
              <div className="relative z-10 mb-6 aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10">
                <Image
                  src={project.image ?? project.logo}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 36rem, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  width={32}
                  height={32}
                  src={project.logo}
                  alt=""
                  className="h-6 w-6 object-contain"
                  unoptimized
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative z-10">{project.name}</span>
                </a>
              </h3>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <p className="relative z-10 mt-4 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </li>
          ))}
        </ul>
        <ul className="relative mx-auto mt-16 grid grid-cols-1 gap-x-12 gap-y-16 px-4 sm:grid-cols-2 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
          {rest.map((project) => (
            <li
              className="group relative flex flex-col items-start"
              key={project.name}
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  width={40}
                  height={40}
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 object-contain"
                  unoptimized
                />
              </div>
              <h3 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative z-10">{project.name}</span>
                </a>
              </h3>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
