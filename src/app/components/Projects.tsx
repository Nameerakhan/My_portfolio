"use client";

import { motion } from "framer-motion";
import FadeUp from "./FadeUp";
import { CountUpMetric } from "./AnimatedMetric";
import ArchitectureDiagram from "./ArchitectureDiagram";

const featuredTags = [
  "RAG",
  "FastAPI",
  "Redis",
  "SSE Streaming",
  "Embeddings",
  "OpenAI API",
  "Python",
];

const featuredMetrics = [
  { value: 100, prefix: "<", suffix: "ms", label: "RAG Pipeline Latency" },
  { value: 95, prefix: "", suffix: "%", label: "Semantic Grading Accuracy" },
  { value: 30, prefix: "", suffix: "+", label: "Concurrent Tasks — Zero Blocking" },
];

const standardProjects = [
  {
    number: "02",
    status: "Live",
    title: "getScholarSite",
    subtitle: "Academic Profile SaaS — Linktree meets Google Scholar for researchers",
    description:
      "Unified academic presence across publications, talks, and profiles. Researchers get a beautiful, indexed page instead of a scattered Google Scholar + LinkedIn + personal site. Full-stack SaaS with authentication, payments, and dynamic profile generation.",
    metrics: [
      { display: "Live", label: "In Production" },
      { display: "SaaS", label: "Full Product" },
    ],
    tags: ["Next.js", "Supabase", "TypeScript", "Stripe"],
    link: "https://getscholarsite.com/",
  },
  {
    number: "03",
    status: "Applied ML",
    title: "AI vs Human Text Detection",
    subtitle: "Applied Machine Learning System",
    description:
      "Systematic evaluation of 6+ ML/DL models — fine-tuned classifiers, embedding-based approaches, and ensemble methods — for detecting AI-generated text. Deployed a real-time inference service with embedding-based feature extraction and per-prediction confidence scoring. High-80% validation accuracy on an adversarial classification problem.",
    metrics: [
      { display: "6+", label: "Models Evaluated" },
      { display: "High-80%", label: "Val Accuracy" },
    ],
    tags: ["PyTorch", "Hugging Face", "Embeddings", "Model Eval", "Python"],
    link: "https://github.com/Nameerakhan/AI_vs_Human_Text_Classifier",
  },
  {
    number: "04",
    status: "In Development",
    title: "FLOW",
    subtitle: "AI-Powered Life & Day Optimizer",
    description:
      "Solo-built AI life optimizer targeting professionals aged 20–40. 60-second morning check-in → AI-generated 4-block day plan → evening feedback loop, tracking Energy & Body, Mental Space, and Meaningful Connections. Full-stack: Next.js 14, Supabase, gpt-4o, Tailwind. Building in public.",
    metrics: [
      { display: "Solo", label: "Founder & Dev" },
      { display: "Full", label: "Stack" },
    ],
    tags: ["Next.js 14", "Supabase", "OpenAI API", "TypeScript", "Tailwind"],
  },
  {
    number: "05",
    status: "Research",
    title: "Modular Visual Localization",
    subtitle: "Applied ML Pipeline — KITTI Dataset",
    description:
      "Modular visual odometry pipeline over KITTI sequences. 99% convergence stability in sparse Jacobian optimization. Reduced trajectory drift through pose-graph optimization and smoothing techniques. Demonstrates CV and numerical optimization depth beyond LLM work.",
    metrics: [
      { display: "99%", label: "Convergence Stability" },
      { display: "KITTI", label: "Dataset" },
    ],
    tags: ["Python", "OpenCV", "NumPy", "Pose-Graph Optimization"],
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-16 md:py-24">
      {/* Section header */}
      <FadeUp delay={0}>
        <div className="mb-4 flex items-baseline gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-3">
            02 /
          </span>
          <h2 className="font-display text-4xl font-bold text-ink">
            Selected Work
          </h2>
        </div>
        <div className="mb-12 h-px w-full bg-border" />
      </FadeUp>

      {/* ── Featured Card — NetSec Arcade ── */}
      <FadeUp delay={0.1}>
        <a
          href="https://github.com/Quiz-Rag/next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
        <motion.div
          className="border border-[#5A1228] bg-[#781D3A] p-6 transition-shadow duration-300 sm:p-10 cursor-pointer"
          whileHover={{ y: -3, boxShadow: "0 12px 40px rgba(120,29,58,0.3)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="mb-4 font-mono text-xs tracking-widest text-[#F5D6C3]">
                01
              </p>
              <span className="mb-3 inline-block bg-green-100 px-3 py-1 font-mono text-xs text-green-700 border border-green-300 rounded-full">
                Live
              </span>
              <h3 className="mb-1 font-display text-2xl font-bold text-white">
                NetSec Arcade
              </h3>
              <p className="mb-4 font-mono text-xs text-[#F5D6C3]">
                AI-Powered Cybersecurity Learning Platform
              </p>
              <p className="mb-6 text-sm font-light leading-relaxed text-white/60">
                End-to-end RAG system for a cybersecurity learning platform, built
                under a 3-day deadline. Optimized retrieval from scratch — took
                latency from ~400ms to under 100ms over 1,000+ indexed chunks.
                Designed an AI grading pipeline using embedding-based semantic
                comparison, achieving 85–95% agreement with human graders without
                fine-tuning. Async FastAPI inference with Redis caching and SSE
                streaming handles 30+ concurrent tasks with zero blocking.
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredTags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/10 px-3 py-1 font-mono text-xs text-white/60 hover:bg-white/20 hover:text-white/80 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Architecture Diagram */}
              <ArchitectureDiagram />
            </div>

            {/* Right — Animated Metrics */}
            <div className="flex flex-col justify-center gap-6">
              {featuredMetrics.map(({ value, prefix, suffix, label }, i) => (
                <div key={label}>
                  <CountUpMetric
                    prefix={prefix}
                    to={value}
                    suffix={suffix}
                    delay={i * 200}
                    className="font-display text-4xl font-bold text-[#F5D6C3]"
                  />
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-white/40">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        </a>
      </FadeUp>

      {/* ── Standard Cards ── */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {standardProjects.map((project, i) => (
          <FadeUp key={project.number} delay={0.1 + i * 0.1} className="h-full">
            <a
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full group"
            >
              <motion.div
                className="card-glow h-full border border-border bg-bg-card p-8 cursor-pointer"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                }}
                transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <p className="mb-3 font-mono text-xs tracking-widest text-ink-3">
                  {project.number}
                </p>

                <span
                  className={`mb-3 inline-block rounded-full px-3 py-1 font-mono text-xs ${
                    project.status === "Live"
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-accent-hover text-accent"
                  }`}
                  style={
                    project.status === "In Development"
                      ? { background: "#FEF3C7", color: "#B45309", border: "1px solid #FCD34D" }
                      : {}
                  }
                >
                  {project.status}
                </span>

                <h3 className="mb-1 font-display text-xl font-bold text-ink">
                  {project.title}
                </h3>

                <p className="mb-4 font-mono text-xs text-ink-3">
                  {project.subtitle}
                </p>

                <p className="mb-6 text-sm font-light leading-relaxed text-ink-2">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="mb-6 flex gap-6">
                  {project.metrics.map(({ display, label }) => (
                    <div key={label}>
                      <span className="font-display text-2xl font-bold text-accent">
                        {display}
                      </span>
                      <p className="font-mono text-xs uppercase tracking-widest text-ink-3">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent-soft/30 px-3 py-1 font-mono text-xs text-ink-2 group-hover:bg-accent-soft/50 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.link && (
                  <span className="mt-4 inline-block text-xs font-mono text-accent group-hover:underline">
                    View Project →
                  </span>
                )}
              </motion.div>
            </a>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
