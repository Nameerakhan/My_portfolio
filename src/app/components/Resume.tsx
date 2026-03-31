"use client";

import FadeUp from "./FadeUp";

export default function Resume() {
  return (
    <section className="py-16 md:py-22">
      <FadeUp delay={0}>
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-3">
            Resume
          </span>
          <h2 className="mb-5 font-display text-2xl font-bold text-ink sm:text-3xl">
            Looking for the full picture?
          </h2>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interactive inline-flex items-center gap-2.5 bg-accent px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:bg-accent-dark"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="opacity-70"
            >
              <path
                d="M7 1v8.5M3.5 6.5 7 10l3.5-3.5M2 12.5h10"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download Resume
          </a>

          <span className="mt-3 font-mono text-[10px] text-ink-3">
            PDF · Updated Mar 2026
          </span>
        </div>
      </FadeUp>
    </section>
  );
}
