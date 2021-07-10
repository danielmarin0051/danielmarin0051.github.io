import { CgSun as SunIcon } from "react-icons/cg";
import { BsMoon as MoonIcon } from "react-icons/bs";
import { useTheme } from "next-themes";
import Link from "next/link";

const NavLink = ({ name, href }) => (
  <li className="inline-block mr-6 sm:mr-9 md:mr-14 font-light hover:font-normal sm:text-base md:text-lg border-b px-1 sm:px-2 border-transparent hover:border-black dark:hover:border-white">
    <Link href={href}>{name}</Link>
  </li>
);

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <nav className="fixed navbar top-0 w-screen z-50 px-5 sm:px-6 md:px-10 dark:text-white">
      <div className="flex justify-between items-center py-4 md:py-5 mx-auto max-w-7xl">
        <Link href="/" className="cursor-pointer">
          <a className="flex items-center">
            <img src="/icons/cube.svg" className="h-6 md:h-6 inline-block" />
            <p className="hidden sm:inline-block ml-3 md:ml-6 font-light text-sm sm:text-base md:text-lg tracking-wider">
              Daniel Marin
            </p>
          </a>
        </Link>
        <div className="flex items-center">
          <ul className="flex">
            <NavLink
              name="Notes"
              href="https://www.notion.so/danielmarin/Notes-6a264b6c6f72422cb74d6f8bee75d230"
            />
            <NavLink
              name="Projects"
              href="https://www.notion.so/danielmarin/Projects-da1ddd8f8efc474283687a97244a4d60"
            />
          </ul>
          <button
            className="transition duration-300 border border-gray-300 dark:bg-transparent p-2.5 md:p-3 rounded-lg focus:outline-none focus:ring-transparent"
            onClick={toggleTheme}
          >
            <SunIcon className="w-4 h-4 dark-transition text-white hidden dark:block" />
            <MoonIcon className="w-4 h-4 dark-transition text-black block dark:hidden" />
          </button>
        </div>
      </div>
    </nav>
  );
}
