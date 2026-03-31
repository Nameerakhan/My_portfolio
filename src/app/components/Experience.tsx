"use client";

import FadeUp from "./FadeUp";

const roles = [
  {
    period: "Aug 2024 – Jun 2025",
    company: "Texas Tech University, WCOE",
    location: "Lubbock, TX · Part-time",
    role: "Graduate Research Assistant — Software Engineering Lead",
    bullets: [
      "Led teams building production backend platforms with async execution and concurrent workloads, improving iteration speed by 30%+.",
      "Designed non-blocking APIs and background task pipelines, reducing latency and enabling scalable concurrent task handling.",
      "Mentored engineers on data structures, concurrency models, and clean system abstractions.",
    ],
  },
  {
    period: "Jul 2023 – Jul 2024",
    company: "Rakuten Symphony",
    location: "Indore, India · Full-time",
    role: "Software Engineer",
    bullets: [
      "Built and enhanced monitoring pipelines for distributed telecom network systems, reducing incident detection time by ~30%.",
      "Applied early-stage AI techniques to identify failure patterns — enabling proactive issue detection and reducing recurring incidents.",
      "Improved mean time to resolution (MTTR) by ~20% through root-cause analysis tooling across cloud-native Open RAN infrastructure.",
    ],
  },
  {
    period: "Mar 2023 – Jun 2023",
    company: "Rakuten Symphony",
    location: "Indore, India · Internship",
    role: "Software Engineering Intern",
    bullets: [
      "Analyzed UAT and regression defect trends across cloud-native network modules, reducing post-release issues by 40%.",
      "Built structured defect analysis pipelines and release validation reports used for QA and engineering go/no-go decisions.",
    ],
  },
  {
    period: "Feb 2022 – Apr 2022",
    company: "Cylsys Software Solution",
    location: "Mumbai, India · Internship",
    role: "Software Engineering Intern",
    bullets: [
      "Developed Node.js backend services with normalized MySQL schemas for healthcare data workflows.",
      "Implemented reusable APIs and components, reducing repeated operations by 25%+.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative -mx-6 bg-bg-card px-6 py-16 md:-mx-12 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section header */}
        <FadeUp delay={0}>
          <div className="mb-4 flex items-baseline gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-3">
              02 /
            </span>
            <h2 className="font-display text-4xl font-bold text-ink">
              Experience
            </h2>
          </div>
          <div className="mb-12 h-px w-full bg-border" />
        </FadeUp>

        {/* Roles */}
        <div>
          {roles.map((item, i) => (
            <FadeUp key={item.period} delay={i * 0.1}>
              <div
                className={`grid grid-cols-1 gap-4 border-t border-border py-10 lg:grid-cols-[200px_1fr] lg:gap-12 ${
                  i === roles.length - 1 ? "border-b" : ""
                }`}
              >
                {/* Left — Period & Company */}
                <div>
                  <p className="font-mono text-xs text-ink-3">{item.period}</p>
                  <p className="mt-2 font-mono text-sm font-medium text-ink-2">
                    {item.company}
                  </p>
                  <p className="mt-1 font-mono text-xs text-ink-3">
                    {item.location}
                  </p>
                </div>

                {/* Right — Role & Bullets */}
                <div>
                  <h3 className="mb-4 font-display text-xl font-bold text-ink">
                    {item.role}
                  </h3>
                  <ul className="space-y-3">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-4 text-sm font-light leading-relaxed text-ink-2"
                      >
                        <span className="absolute left-0 text-accent">—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
