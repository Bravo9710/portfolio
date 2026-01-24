"use client";

import Link from "next/link";
import Logo from "../blocks/Logo";
import { cn } from "@/lib";
import { SiGithub, SiLinkedin } from "react-icons/si";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full py-4 left-0  bg-background/80 backdrop-blur-sm border-b border-border px-4">
      <nav className="container mx-auto grid items-center grid-cols-3">
        <Logo />
        <ul className="flex items-center gap-6 justify-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-lg font-black text-primary-50 transition-colors hover:text-secondary duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 justify-end">
          <Link
            href="https://github.com/bravo9710"
            className={cn(
              "w-10 h-10 text-white relative rounded-full bg-primary-50/10 flex items-center justify-center",
              "before:content-[''] before:w-full before:h-full before:rounded-full before:bg-secondary before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:transition-transform before:duration-300",
              "hover:before:scale-100",
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <SiGithub className="relative" />
          </Link>
          <Link
            href="https://linkedin.com/in/vencislav-venkov-0865071a7/"
            className={cn(
              "w-10 h-10 text-white relative rounded-full bg-primary-50/10 flex items-center justify-center",
              "before:content-[''] before:w-full before:h-full before:rounded-full before:bg-secondary before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:transition-transform before:duration-300",
              "hover:before:scale-100",
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="relative" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
