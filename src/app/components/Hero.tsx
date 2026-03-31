"use client";

import FadeUp from "./FadeUp";
import MagneticButton from "./MagneticButton";
import PhotoRing from "./PhotoRing";
import SystemPipeline from "./SystemPipeline";
import { CountUpMetric, ShrinkingTimeline } from "./AnimatedMetric";

const stats = [
  {
    prefix: "<",
    value: 100,
    suffix: "ms",
    label: "RAG Pipeline Latency",
    sub: "NetSec Arcade — 1,000+ indexed chunks",
  },
  {
    prefix: "",
    value: 95,
    suffix: "%",
    label: "Semantic Grading Accuracy",
    sub: "Embedding-based, no fine-tuning",
  },
  {
    prefix: "",
    value: 30,
    suffix: "%+",
    label: "Async Throughput Gain",
    sub: "Non-blocking APIs & pipelines",
  },
  {
    prefix: "",
    value: 30,
    suffix: "+",
    label: "Concurrent Tasks",
    sub: "FastAPI + Redis + SSE, zero blocking",
  },
];

export default function Hero() {
  return (
    <section className="hero-bg relative grid grid-cols-1 items-start gap-8 pb-16 pt-6 md:pb-20 md:pt-8 lg:grid-cols-2 lg:gap-12 lg:pt-10">
      {/* ── Left Column ── */}
      <div className="flex max-w-xl flex-col justify-start gap-4 lg:self-center">
        {/* Availability badge */}
        <FadeUp delay={0}>
          <div className="inline-flex items-center gap-2 self-start bg-accent-hover px-3 py-1.5 font-mono text-xs text-accent">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available · Full-time roles · May 2026 · OPT eligible
          </div>
        </FadeUp>

        {/* Eyebrow + Headline */}
        <FadeUp delay={0.1}>
          <div className="mb-1 flex items-center gap-3">
            <span className="block h-px w-7 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-3">
              AI/ML Systems Engineer
            </span>
          </div>
          <h1 className="mt-0 font-display font-bold leading-[1.05] tracking-[-0.02em] text-ink [font-size:clamp(1.8rem,3vw,2.6rem)]">
            I engineer AI systems that are fast, measurable, and
            production&#8209;ready.
          </h1>
        </FadeUp>

        {/* Subtext */}
        <FadeUp delay={0.2}>
          <p className="max-w-[480px] font-light leading-[1.7] text-ink-2">
            Fast pipelines. Rigorous evals. Backends that hold under load.
            MS&nbsp;Computer Science at Texas Tech (GPA&nbsp;3.8), building at
            the intersection of applied AI and production systems&nbsp;— from
            sub-100ms RAG to concurrent async inference at scale.
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.3}>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <MagneticButton
              as="a"
              href="#work"
              className="bg-accent px-7 py-3 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:bg-accent-dark"
            >
              See my work
            </MagneticButton>
            <MagneticButton
              as="a"
              href="mailto:nameerakhan1105@gmail.com"
              className="font-mono text-xs uppercase tracking-widest text-ink-2 transition-colors hover:text-accent"
            >
              Get in touch →
            </MagneticButton>
          </div>
        </FadeUp>

        {/* Pipeline visualization — below CTAs on all screens */}
        <FadeUp delay={0.4}>
          <SystemPipeline />
        </FadeUp>
      </div>

      {/* ── Right Column — Photo + Stat Tiles ── */}
      <div className="flex flex-col items-center justify-center gap-8 lg:self-center lg:pt-4">
        {/* Photo with rotating ring */}
        <FadeUp delay={0.15}>
          <PhotoRing />
        </FadeUp>

        {/* Stat tiles 2x2 grid */}
        <div className="grid w-full grid-cols-2 gap-3">
          {stats.map(({ prefix, value, suffix, label, sub }, i) => (
            <FadeUp key={label} delay={0.2 + i * 0.1}>
              <div className="card-glow border border-border bg-bg-card p-4 sm:p-6 group hover:scale-[1.02] transition-transform duration-300">
                <CountUpMetric
                  prefix={prefix}
                  to={value}
                  suffix={suffix}
                  delay={200 + i * 150}
                  className="font-display text-2xl font-bold text-accent sm:text-3xl"
                />
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-3">
                  {label}
                </p>
                <p className="mt-1 text-xs font-light italic text-ink-3">
                  {sub}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Latency shrink visualization */}
        <FadeUp delay={0.6}>
          <div className="w-full px-1">
            <ShrinkingTimeline
              fromMs={400}
              toMs={97}
              label="Pipeline optimization"
              delay={0.3}
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
