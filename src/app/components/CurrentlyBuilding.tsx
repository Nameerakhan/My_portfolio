"use client";

import FadeUp from "./FadeUp";

const currentProjects = [
  {
    title: "FLOW",
    subtitle:
      "AI-powered daily life optimizer — optimizes a full human day",
    description:
      "A personal AI that reads your morning state, pulls your calendar, and generates a realistic full-day plan balancing work, body, and relationships. Gets smarter over time through daily feedback loops — like having a life strategist that actually knows your schedule.",
    tags: ["Next.js 14", "TypeScript", "Supabase", "GPT-4o", "Tailwind CSS"],
    status: "In Development",
  },
  {
    title: "IMPA Product Matcher",
    subtitle:
      "Intelligent semantic search over 1M+ marine supply products mapped to the global IMPA catalog",
    description:
      "An AI/ML layer for a centralized marine supply platform — hybrid retrieval combining vector search and Elasticsearch to automatically map product descriptions to correct 6-digit IMPA codes with ≥96% Top-3 accuracy. Like having a procurement expert who's memorized the entire IMPA catalog.",
    tags: [
      "Python",
      "FAISS / Milvus",
      "Elasticsearch",
      "FastAPI",
      "Embeddings",
      "RAG",
      "GPU Inference",
    ],
    status: "In Development",
  },
];

export default function CurrentlyBuilding() {
  return (
    <section className="py-16 md:py-24">
      <FadeUp delay={0}>
        <div className="mb-10 flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-3">
            Currently Building
          </span>
        </div>
      </FadeUp>

      <div className="flex flex-col gap-10">
        {currentProjects.map((project, i) => (
          <FadeUp key={project.title} delay={0.1 + i * 0.15}>
            <div className="border-l-2 border-border pl-8 pr-4 py-2">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-1 font-display text-2xl font-bold text-ink">
                    {project.title}
                  </h3>

                  <p className="mb-3 text-sm font-medium text-ink-2">
                    {project.subtitle}
                  </p>

                  <p className="mb-5 text-sm font-light leading-relaxed text-ink-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 font-mono text-xs text-ink-3"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status badge */}
                <span className="inline-flex h-fit shrink-0 items-center rounded-full border border-accent/30 px-4 py-1.5 font-mono text-xs text-accent">
                  {project.status}
                </span>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
