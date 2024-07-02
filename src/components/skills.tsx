import Image from "next/image";
import { Container } from "./container";
export default function Skills() {
  return (
    <div id="skills" className="py-24 sm:py-32">
      <Container>
        <h2 className="flex text-lg font-semibold items-center text-teal-500">
          Skills
        </h2>
      </Container>
      <div className="lg:border-t sm:mt-4 pt-4 sm:pt-8  lg:mt-8  border-zinc-100  dark:border-zinc-100/10">
        <div className="grid grid-cols-1 text-sm text-zinc-600 dark:text-zinc-400 relative mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0 gap-x-18 gap-y-16 sm:grid-cols-2">
          <div>
            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              Programming Languages
            </h3>
            <ul className="flex flex-wrap gap-8 mt-6 ">
              <li className="flex items-center">
                <Image
                  src={"/typescript.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 flex-none"
                />
                <span className="ml-3">Typescript</span>
              </li>

              <li className="flex items-center">
                <Image
                  src={"/javascript.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 flex-none"
                />
                <span className="ml-3">Javascript</span>
              </li>

              <li className="flex items-center">
                <Image
                  src={"/python.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 flex-none"
                />
                <span className="ml-3">Python</span>
              </li>

              <li className="flex items-center">
                <Image
                  src={"/html.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 flex-none"
                />
                <span className="ml-3">Html</span>
              </li>

              <li className="flex items-center">
                <Image
                  src={"/css.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 flex-none"
                />
                <span className="ml-3">Css</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              Libraries & Frameworks
            </h3>
            <ul className="flex flex-wrap gap-8 mt-6 ">
              <li className="flex items-center">
                <Image
                  src={"/react.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 flex-none"
                />
                <span className="ml-3">React</span>
              </li>

              <li className="flex items-center">
                <Image
                  src={"/django.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 flex-none"
                />
                <span className="ml-3">Django</span>
              </li>
              <li className="flex items-center">
                <Image
                  src={"/next.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 flex-none"
                />
                <span className="ml-3">Nextjs</span>
              </li>

              <li className="flex items-center">
                <Image
                  src={"/tailwind.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 flex-none"
                />
                <span className="ml-3">Tailwind</span>
              </li>

              <li className="flex items-center">
                <Image
                  src={"/supabase.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 flex-none"
                />
                <span className="ml-3">Supabase</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              Tools & Platforms
            </h3>
            <ul className="flex flex-wrap gap-8 mt-6 ">
              <li className="flex items-center">
                <Image
                  src={"/git.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 flex-none"
                />
                <span className="ml-3">Git</span>
              </li>

              <li className="flex items-center">
                <Image
                  src={"/github.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 flex-none"
                />
                <span className="ml-3">Github</span>
              </li>
              <li className="flex items-center">
                <Image
                  src={"/vercel.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 flex-none"
                />
                <span className="ml-3">Vercel</span>
              </li>

              <li className="flex items-center">
                <Image
                  src={"/figma.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 flex-none"
                />
                <span className="ml-3">Figma</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
