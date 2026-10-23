export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-10 pb-40 dark:border-zinc-500 sm:py-16 sm:pb-32 lg:hidden">
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          &copy; {new Date().getFullYear()} Ebube Chukwuma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
