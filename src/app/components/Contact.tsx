"use client";

import FadeUp from "./FadeUp";

const openTo = [
  "ML/AI Engineering Roles",
  "Backend & Systems Engineering",
  "Applied AI Research Positions",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative -mx-6 px-6 py-16 md:-mx-12 md:px-12 md:py-24"
      style={{ background: "#781D3A" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* ── Left Column ── */}
          <FadeUp delay={0}>
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-[#F5D6C3]">
                04 /
              </span>
              <h2 className="mb-4 font-display font-bold leading-[1.1] text-white [font-size:clamp(2rem,3vw,2.8rem)]">
                Building something with AI? Let&apos;s talk.
              </h2>
              <p className="mb-8 max-w-md text-base font-light leading-relaxed text-white/55">
                Open to ML/AI engineering roles — May 2026. I bring fast
                pipelines, rigorous evals, and backends that hold under load.
              </p>

              {/* Contact links */}
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:nameerakhan1105@gmail.com"
                  className="group flex items-center gap-2 font-mono text-sm text-white transition-colors hover:text-[#F5D6C3]"
                >
                  <span className="text-[#F5D6C3]">→</span>
                  nameerakhan1105@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/khan-nameera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 font-mono text-sm text-white/55 transition-colors hover:text-[#F5D6C3]"
                >
                  <span className="text-[#F5D6C3]/50">→</span>
                  linkedin.com/in/khan-nameera
                </a>
              </div>
            </div>
          </FadeUp>

          {/* ── Right Column — Open To (desktop only) ── */}
          <FadeUp delay={0.15} className="hidden lg:block">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-white/30">
              Open to
            </p>
            <div className="flex flex-col gap-3">
              {openTo.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="block h-1.5 w-1.5 bg-[#F5D6C3]" />
                  <span className="text-sm font-light text-white/70">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── Footer Bar ── */}
      <div className="mx-auto mt-24 max-w-[1200px] border-t border-white/[0.08] pt-6">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="font-mono text-xs text-white/25">
            © 2026 Nameera Khan
          </span>
          <span className="font-mono text-xs text-white/25">
            Built with Next.js & Tailwind
          </span>
        </div>
      </div>
    </section>
  );
}
