"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-base-100 dark:bg-base-300 w-full border-b border-base-300 transition-colors duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="text-2xl font-semibold text-base-content">LOGO</Link>
        <ThemeSwitcher />
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-base-content rounded-lg md:hidden hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-base-200 dark:hover:bg-base-300"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menu Links */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"
            }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 font-medium bg-base-200 border border-base-300 rounded-lg md:border-0 md:bg-base-100 dark:bg-base-300">
            <li>
              <Link href="/">
                <span
                  className={`block py-2 px-4 rounded ${isActive("/")
                    ? "bg-base-content text-base-100"
                    : "text-base-content hover:bg-base-200 md:hover:bg-transparent"
                    } transition-colors duration-200`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/meals">
                <span
                  className={`block py-2 px-4 rounded ${isActive("/meals")
                    ? "bg-base-content text-base-100"
                    : "text-base-content hover:bg-base-200 md:hover:bg-transparent"
                    } transition-colors duration-200`}
                >
                  Meals
                </span>
              </Link>
            </li>
            <li>
              <Link href="/community">
                <span
                  className={`block py-2 px-4 rounded ${isActive("/community")
                    ? "bg-base-content text-base-100"
                    : "text-base-content hover:bg-base-200 md:hover:bg-transparent"
                    } transition-colors duration-200`}
                >
                  Community
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span
                  className={`block py-2 px-4 rounded ${isActive("/about")
                    ? "bg-base-content text-base-100"
                    : "text-base-content hover:bg-base-200 md:hover:bg-transparent"
                    } transition-colors duration-200`}
                >
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span
                  className={`block py-2 px-4 rounded ${isActive("/contact")
                    ? "bg-base-content text-base-100"
                    : "text-base-content hover:bg-base-200 md:hover:bg-transparent"
                    } transition-colors duration-200`}
                >
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

