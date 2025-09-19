import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chukwuma Ebube - Senior Software Engineer ",
  description:
    "Senior Software Engineer specializing in modern web development with Next.js, React, TypeScript, and AI technologies.",

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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
