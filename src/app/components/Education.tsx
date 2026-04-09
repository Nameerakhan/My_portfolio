"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeUp from "./FadeUp";

const degrees = [
  {
    degree: "Master's in Computer Science",
    school: "Texas Tech University",
    gpa: "3.8",
    period: "Aug 2024 – May 2026",
    location: "Lubbock, TX",
    focus: "AI systems, distributed systems, production ML",
  },
  {
    degree: "B.Tech in Computer Science",
    school: "IPS Academy",
    gpa: "3.74",
    period: "Sep 2020 – Apr 2024",
    location: "India",
    focus: "Core CS, algorithms, system design",
  },
];

function TimelineDot({delay}: {delay: number}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-[7px] h-[7px] rounded-full border border-[#F5D6C3]/40 bg-[#6B1530]"
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
    />
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="relative -mx-6 px-6 py-16 pb-10 md:-mx-12 md:px-12 md:pt-20 md:pb-14 overflow-hidden"
      style={{ background: "#8C1D40" }}
    >
      {/* Gradient blobs (subtle, optional styling) */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, #F5D6C3 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, #F5D6C3 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, #F5D6C3 0%, transparent 60%)",
        }}
      />

      <FadeUp delay={0}>
        <div className="mx-auto max-w-[1200px] relative">
              {/* Header */}
              <div className="mb-4 flex items-baseline gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-white/25">
                  04 /
                </span>
                <h2 className="font-display text-3xl font-bold text-white">
                  Education
                </h2>
              </div>

              <div className="mb-10 h-px w-full bg-white/[0.08]" />

              {/* Cards */}
              <div className="relative pl-6 sm:pl-8">
                {degrees.map((deg, i) => (
                  <FadeUp key={deg.school} delay={0.15 + i * 0.12}>
                    <div
                      className={`relative group ${
                        i < degrees.length - 1 ? "pb-8 md:pb-10" : ""
                      }`}
                    >
                      <TimelineDot delay={0.25 + i * 0.18} />

                      {/* Period + Location */}
                      <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-mono text-xs text-white/35">
                          {deg.period}
                        </span>
                        <span className="hidden sm:inline text-white/15">
                          ·
                        </span>
                        <span className="font-mono text-xs text-white/25">
                          {deg.location}
                        </span>
                      </div>

                      {/* Degree */}
                      <h3 className="mb-1 font-display text-lg font-bold text-white/90 group-hover:text-white transition-colors duration-300">
                        {deg.degree}
                      </h3>

                      {/* School + GPA */}
                      <p className="mb-2 text-sm text-[#F5D6C3]/65 group-hover:text-[#F5D6C3]/85 transition-colors duration-300">
                        {deg.school}
                        <span className="mx-2 text-white/15">·</span>
                        <span className="font-mono text-xs text-white/30">
                          GPA {deg.gpa}
                        </span>
                      </p>

                      {/* Focus */}
                      <p className="text-sm font-light text-white/30">
                        {deg.focus}
                      </p>

                      {/* Separator */}
                      {i < degrees.length - 1 && (
                        <div className="mt-8 h-px w-full bg-white/[0.06] group-hover:bg-[#F5D6C3]/15 transition-colors duration-500 md:mt-10" />
                      )}
                    </div>
                  </FadeUp>
                ))}
              </div>
        </div>
      </FadeUp>
    </section>
  );
}