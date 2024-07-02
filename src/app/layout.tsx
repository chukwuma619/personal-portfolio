import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chukwuma Ebube - Software Engineer | Portfolio",
  description:
    "Chukwuma Ebube is a Software Engineer based in Nigeria, specializing in building exceptional websites and applications with a focus on accessibility.",
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "Frontend Engineer",
    "Web Developer",
    "Nigeria",
    "Accessible Web Development",
    "Portfolio",
    "Websites",
    "Applications",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} flex min-h-full w-full bg-white dark:bg-zinc-900`}
      >
        <Providers>
          <div className="w-full">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
