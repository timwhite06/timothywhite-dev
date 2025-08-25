"use client";
import Link from "next/link";
import { useState, useEffect, JSX } from "react";
import { usePathname } from "next/navigation";
import SideMenu from "./sidemenu";
import { tabs } from "@/app/tabs";

type Tab = {
  name: string;
  route: string;
};

const Header = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          <Link href={"/"}>
            <div className="text-white text-2xl font-bold">Timothy White</div>
          </Link>

          <ul className="hidden md:flex items-center space-x-3 text-lg">
            {tabs.map((tab: Tab, i: number) => (
              <li key={`${tab.name}_${i}`}>
                <Link href={tab.route}>
                  <div
                    className={`btn btn-ghost ${
                      pathname === tab.route
                        ? "bg-cyan-400 text-black"
                        : "text-white"
                    } hover:text-black hover:bg-cyan-400`}
                  >
                    {tab.name}
                  </div>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://github.com/timwhite06"
                className="hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-white text-xl"></i>
              </Link>
            </li>
          </ul>

          <div className="block md:hidden">
            <SideMenu tabs={tabs} pathname={pathname} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
