import { DesktopNavigation } from "@/components/navigation";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Works from "@/components/works";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="border-t border-zinc-200 dark:border-zinc-500 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <div className="relative">
          <DesktopNavigation className="pointer-events-auto fixed z-50 top-6 right-4 hidden md:block" />
          <Works />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
