"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ── Count-up number that triggers on scroll ── */
export function CountUpMetric({
  from = 0,
  to,
  suffix = "",
  prefix = "",
  duration = 1400,
  delay = 0,
  className = "",
}: {
  from?: number;
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }

    let frame: number;
    let start: number | null = null;

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(from + (to - from) * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [inView, from, to, duration, delay, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

/* ── Shrinking timeline bar (e.g., 400ms → 100ms) ── */
export function ShrinkingTimeline({
  fromMs,
  toMs,
  label,
  delay = 0,
}: {
  fromMs: number;
  toMs: number;
  label?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const ratio = toMs / fromMs;

  return (
    <div ref={ref} className="w-full space-y-1.5">
      {label && (
        <span className="text-xs font-mono text-ink-3">{label}</span>
      )}
      <div className="relative h-2 rounded-full bg-border/50 overflow-hidden">
        {/* Before bar (full width) */}
        <motion.div
          className="absolute inset-0 rounded-full bg-ink-3/30"
          initial={{ scaleX: 1 }}
          animate={inView ? { scaleX: ratio } : {}}
          transition={{
            duration: 1,
            delay: delay + 0.3,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          style={{ originX: 0 }}
        />
        {/* After bar (target width) */}
        <motion.div
          className="absolute inset-0 rounded-full bg-accent"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: ratio } : {}}
          transition={{
            duration: 1.2,
            delay: delay + 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          style={{ originX: 0 }}
        />
      </div>
      <div className="flex justify-between text-[10px] font-mono text-ink-3">
        <span>{fromMs}ms</span>
        <motion.span
          className="text-accent font-semibold"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 1.2 }}
        >
          {toMs}ms
        </motion.span>
      </div>
    </div>
  );
}

/* ── Progress bar that fills to a percentage ── */
export function ProgressMetric({
  value,
  label,
  suffix = "%",
  delay = 0,
}: {
  value: number;
  label?: string;
  suffix?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="w-full space-y-1.5">
      {label && (
        <div className="flex justify-between">
          <span className="text-xs font-mono text-ink-3">{label}</span>
          <CountUpMetric
            to={value}
            suffix={suffix}
            delay={delay}
            className="text-xs font-mono text-accent font-semibold"
          />
        </div>
      )}
      <div className="h-1.5 rounded-full bg-border/50 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: value / 100 } : {}}
          transition={{
            duration: 1,
            delay: delay + 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          style={{ originX: 0 }}
        />
      </div>
    </div>
  );
}
