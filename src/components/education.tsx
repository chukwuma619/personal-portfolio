import { education } from "@/data/education";
import { formatDate } from "@/lib/format-date";
import { Container } from "./container";

export default function Education() {
  const item = education[0];

  if (!item) {
    return null;
  }

  const startLabel = formatDate(item.start);
  const endLabel = formatDate(item.end);

  return (
    <div className="py-8 sm:py-10 lg:hidden">
      <Container>
        <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          Education
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {item.degree}, {item.school} · {item.location}
        </p>
        <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
          <time dateTime={item.start}>{startLabel}</time>
          <span aria-hidden="true"> — </span>
          <time dateTime={item.end}>{endLabel}</time>
        </p>
      </Container>
    </div>
  );
}
