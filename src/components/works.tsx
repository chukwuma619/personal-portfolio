import { resume } from "@/data/work";
import { Container } from "./container";

function formatDate(date: string) {
  const [day, month, year] = date.split("-").map(Number);
  const dateInstance = new Date(year, month - 1, day);
  
  const months: Array<string> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[dateInstance.getMonth()]} ${dateInstance.getFullYear()}`;
}

export default function Works() {
  return (
    <div id="works" className="py-24 sm:py-32">
      <Container>
        <h2 className="flex text-lg font-semibold items-center text-teal-500">
          Work Experiences
        </h2>
      </Container>
      <ol className="space-y-4 lg:border-t divide-y divide-zinc-100 dark:divide-zinc-100/10 sm:mt-4 lg:mt-8 border-zinc-100  dark:border-zinc-100/10">
        {resume.map((role, roleIndex) => {
          let startLabel =
            typeof role.start === "string"
              ? formatDate(role.start)
              : role.start.label;
          let startDate =
            typeof role.start === "string" ? role.start : role.start.dateTime;

          let endLabel =
            typeof role.end === "string"
              ? formatDate(role.end)
              : role.end.label;
          let endDate =
            typeof role.end === "string" ? role.end : role.end.dateTime;
          return (
            <li
              key={roleIndex}
              className="flex gap-4 py-2 sm:py-4 mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0"
            >
              {/* <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
                    </div> */}
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
              </dl>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
