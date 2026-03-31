"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/khan-nameera",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const getHref = (anchor: string) => {
    return pathname === "/" ? anchor : `/${anchor}`;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border transition-colors duration-200 ${
        scrolled ? "bg-bg/90 backdrop-blur-md" : "bg-bg"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-12">
        {/* Left — Logo + Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-lg font-bold text-ink"
        >
          <span
            className="inline-flex h-8 w-8 items-center justify-center font-display text-xs font-bold text-white"
            style={{
              background: "linear-gradient(135deg, #8C1D40, #C75B75)",
              transform: "skewX(-6deg)",
              borderRadius: "4px",
            }}
          >
            <span style={{ transform: "skewX(6deg)" }}>NK</span>
          </span>
          Nameera Khan
        </Link>

        {/* Center — Section links (hidden on mobile) */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={getHref(href)}
                className="font-mono text-xs uppercase tracking-widest text-ink-3 transition-colors hover:text-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right — Socials + Toggle + CTA */}
        <div className="flex items-center gap-3">
          {/* Social icons */}
          <div className="hidden items-center gap-1 sm:flex">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-md p-2 text-ink-3 transition-all duration-200 hover:-translate-y-0.5 hover:text-accent hover:opacity-100"
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="mx-1 hidden h-5 w-px bg-border sm:block" />

          <ThemeToggle />
          <Link
            href="/contact"
            className="whitespace-nowrap bg-accent px-5 py-2 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:bg-accent-dark"
          >
            Get in touch
          </Link>
        </div>
      </nav>
    </header>
  );
}
