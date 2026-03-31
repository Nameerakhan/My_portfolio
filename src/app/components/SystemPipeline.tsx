"use client";

import { motion, useReducedMotion } from "framer-motion";

const NODE_COUNT = 5;
const CYCLE = 5;
const STEP = 0.5;

function Connector({ index }: { index: number }) {
  return (
    <div className="flex items-center flex-shrink-0 w-8 sm:w-12 lg:w-16">
      <svg viewBox="0 0 60 6" className="w-full h-1.5" preserveAspectRatio="none">
        <line x1="0" y1="3" x2="60" y2="3" stroke="var(--border)" strokeWidth="1" />
        <motion.circle
          r="2"
          cy="3"
          fill="var(--ink-3)"
          animate={{ cx: [0, 60], opacity: [0, 0.5, 0.5, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * STEP + 0.2,
            repeatDelay: CYCLE - 1,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
}

function Node({ index }: { index: number }) {
  return (
    <motion.div
      className="flex-shrink-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <motion.div
        className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-border bg-bg-card"
        animate={{
          borderColor: ["var(--border)", "var(--ink-3)", "var(--border)"],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: index * STEP,
          repeatDelay: CYCLE - 1.2,
        }}
      />
    </motion.div>
  );
}

export default function SystemPipeline() {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className="flex items-center gap-3 py-2 opacity-40">
        {Array.from({ length: NODE_COUNT }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full border border-border" />
            {i < NODE_COUNT - 1 && <div className="w-8 h-px bg-border" />}
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="flex items-center py-2 opacity-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {Array.from({ length: NODE_COUNT }).map((_, i) => (
        <div key={i} className="flex items-center">
          <Node index={i} />
          {i < NODE_COUNT - 1 && <Connector index={i} />}
        </div>
      ))}
    </motion.div>
  );
}
