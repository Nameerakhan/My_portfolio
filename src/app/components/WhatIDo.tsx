"use client";

import FadeUp from "./FadeUp";

const pillars = [
  {
    title: "Systems",
    description:
      "Design and build production-grade backend systems that are fast, reliable, and scalable. From async APIs to distributed pipelines, I focus on architectures that hold under real-world load.",
  },
  {
    title: "AI / ML Engineering",
    description:
      "Develop end-to-end AI systems — from RAG pipelines to evaluation frameworks and LLM-powered applications. Not wrappers, but systems designed for measurable performance and real use cases.",
  },
  {
    title: "Automation & Workflows",
    description:
      "Build intelligent automation pipelines that reduce manual effort and improve system efficiency. From event-driven workflows to agentic task orchestration, I design systems that operate reliably with minimal intervention.",
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-16 md:py-24">
      <FadeUp delay={0}>
        <div className="mb-12 h-px w-full bg-border" />
        <p className="mb-12 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          What I Do
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">
        {pillars.map((item, i) => (
          <FadeUp key={item.title} delay={0.1 + i * 0.1}>
            <div>
              <h3 className="mb-4 font-display text-xl font-bold text-ink">
                {item.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-ink-2">
                {item.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.4}>
        <div className="mt-16 h-px w-full bg-border" />
      </FadeUp>
    </section>
  );
}
