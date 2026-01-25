"use client";

import Link from "next/link";
import Logo from "../blocks/Logo";
import { cn } from "@/lib";
import { SiGithub, SiLinkedin } from "react-icons/si";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

export default function Nav() {
  return (
    <header className="bg-background/80 border-border fixed top-0 left-0 z-50 w-full border-b px-4 py-4 backdrop-blur-sm">
      <nav className="container mx-auto grid grid-cols-3 items-center">
        <Logo />
        <ul className="flex items-center justify-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-primary-50 hover:text-secondary text-lg font-black transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-end gap-3">
          <Link
            href="https://github.com/bravo9710"
            className={cn(
              "bg-primary-50/10 relative flex h-10 w-10 items-center justify-center rounded-full text-white",
              "before:bg-secondary before:absolute before:top-1/2 before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:rounded-full before:transition-transform before:duration-300 before:content-['']",
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
              "bg-primary-50/10 relative flex h-10 w-10 items-center justify-center rounded-full text-white",
              "before:bg-secondary before:absolute before:top-1/2 before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:rounded-full before:transition-transform before:duration-300 before:content-['']",
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
