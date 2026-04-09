"use client";

import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

const skillGroups = [
  {
    category: "Applied AI & ML",
    tags: [
      "LLMs",
      "RAG Systems",
      "Agentic AI",
      "NLP",
      "Model Evaluation",
      "Semantic Search",
      "Anomaly Detection",
    ],
  },
  {
    category: "ML Frameworks",
    tags: [
      "PyTorch",
      "LangChain",
      "OpenAI API",
      "Hugging Face",
      "Vector Databases",
    ],
  },
  {
    category: "Backend & Systems",
    tags: [
      "FastAPI",
      "REST APIs",
      "Async/Concurrent Systems",
      "Redis",
      "Kubernetes",
      "Microservices",
    ],
  },
  {
    category: "Languages",
    tags: ["Python", "C++", "SQL", "TypeScript"],
  },
  {
    category: "Infrastructure",
    tags: ["Docker", "Git/GitHub", "Linux", "Vercel", "Supabase"],
  },
  {
    category: "Frontend",
    tags: ["Next.js 14", "React", "Tailwind CSS", "TypeScript"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      {/* Section header */}
      <FadeUp delay={0}>
        <div className="mb-4 flex items-baseline gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-3">
            05 /
          </span>
          <h2 className="font-display text-4xl font-bold text-ink">Skills</h2>
        </div>
        <div className="mb-12 h-px w-full bg-border" />
      </FadeUp>

      {/* Skill group grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ category, tags }, i) => (
          <FadeUp key={category} delay={i * 0.05} className="h-full">
            <motion.div
              className="card-glow h-full border border-border bg-bg-card p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <h3 className="mb-4 border-b border-border pb-3 font-mono text-xs uppercase tracking-widest text-accent">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent-soft/30 px-3 py-1 font-mono text-xs text-ink-2 transition-all duration-150 hover:bg-accent hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
