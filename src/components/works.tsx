import { resume } from "@/data/work";
import { formatDate } from "@/lib/format-date";
import { Container } from "./container";

export default function Works() {
  return (
    <div id="works" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Work
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Consulting runs alongside employed roles.
        </p>
      </Container>
      <ol className="divide-y divide-zinc-100 border-zinc-100 sm:mt-4 lg:mt-6 lg:border-t dark:divide-zinc-100/10 dark:border-zinc-100/10">
        {resume.map((role, roleIndex) => {
          const startLabel =
            typeof role.start === "string"
              ? formatDate(role.start)
              : role.start.label;
          const startDate =
            typeof role.start === "string" ? role.start : role.start.dateTime;

          const endLabel =
            typeof role.end === "string"
              ? formatDate(role.end)
              : role.end.label;
          const endDate =
            typeof role.end === "string" ? role.end : role.end.dateTime;
          return (
            <li
              key={roleIndex}
              className="mx-auto flex gap-4 px-4 py-4 sm:px-6 sm:py-5 md:max-w-2xl md:px-4 lg:px-0"
            >
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {role.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label={`${startLabel} until ${endLabel}`}
                >
                  <time dateTime={startDate}>{startLabel}</time>{" "}
                  <span aria-hidden="true">—</span>{" "}
                  <time dateTime={endDate}>{endLabel}</time>
                </dd>
                <dt className="sr-only">Highlights</dt>
                <dd className="mt-3 w-full">
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {role.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span
                          className="mt-2 h-1 w-1 flex-none rounded-full bg-teal-500"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </dl>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
