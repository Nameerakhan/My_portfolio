"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";

const ARCH_NODES = [
  { id: "query", label: "User Query", col: 0, row: 1 },
  { id: "embed", label: "Embedding", col: 1, row: 0 },
  { id: "vector", label: "Vector Search", col: 2, row: 0 },
  { id: "redis", label: "Redis Cache", col: 1, row: 2 },
  { id: "retrieval", label: "Retrieval", col: 3, row: 1 },
  { id: "llm", label: "LLM", col: 4, row: 1 },
  { id: "sse", label: "SSE Stream", col: 5, row: 1 },
];

const EDGES: [string, string][] = [
  ["query", "embed"],
  ["query", "redis"],
  ["embed", "vector"],
  ["redis", "retrieval"],
  ["vector", "retrieval"],
  ["retrieval", "llm"],
  ["llm", "sse"],
];

// Grid positions for node placement
const COL_PX = [20, 85, 170, 255, 330, 415];
const ROW_PX = [10, 50, 90];

function getNodePos(id: string) {
  const node = ARCH_NODES.find((n) => n.id === id)!;
  return {
    x: COL_PX[node.col],
    y: ROW_PX[node.row],
  };
}

function FlowEdge({
  from,
  to,
  index,
}: {
  from: string;
  to: string;
  index: number;
}) {
  const a = getNodePos(from);
  const b = getNodePos(to);

  // Offset to center of node boxes
  const x1 = a.x + 30;
  const y1 = a.y + 14;
  const x2 = b.x + 30;
  const y2 = b.y + 14;

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="var(--border)"
        strokeWidth="1"
      />
      <motion.circle
        r="3"
        fill="var(--accent)"
        animate={{
          cx: [x1, x2],
          cy: [y1, y2],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: index * 0.35,
          repeatDelay: 2.5,
          ease: "easeInOut",
        }}
      />
    </g>
  );
}

function ArchNode({ id, label, index }: { id: string; label: string; index: number }) {
  const pos = getNodePos(id);

  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.06 + 0.2 }}
    >
      <motion.rect
        x={pos.x}
        y={pos.y}
        width="60"
        height="28"
        rx="6"
        fill="var(--bg-card)"
        stroke="var(--border)"
        strokeWidth="1"
        animate={{
          stroke: ["var(--border)", "var(--accent)", "var(--border)"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: index * 0.35,
          repeatDelay: 2.5,
        }}
      />
      <text
        x={pos.x + 30}
        y={pos.y + 18}
        textAnchor="middle"
        className="text-[7px] font-mono fill-ink-2"
        style={{ fontSize: "7px" }}
      >
        {label}
      </text>
    </motion.g>
  );
}

export default function ArchitectureDiagram() {
  const [expanded, setExpanded] = useState(false);
  const reduced = useReducedMotion();

  return (
    <div className="mt-3">
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-[11px] font-mono text-white/60 hover:text-white/90 transition-colors flex items-center gap-1.5 group"
      >
        <motion.span
          animate={{ rotate: expanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          ▸
        </motion.span>
        {expanded ? "Hide" : "View"} Architecture
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pt-3">
              {reduced ? (
                <div className="flex flex-wrap gap-1.5">
                  {ARCH_NODES.map((n) => (
                    <span
                      key={n.id}
                      className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-1 rounded"
                    >
                      {n.label}
                    </span>
                  ))}
                </div>
              ) : (
                <svg
                  viewBox="0 0 490 118"
                  className="w-full max-w-[490px]"
                  style={{ height: "auto" }}
                >
                  {/* Edges first (behind nodes) */}
                  {EDGES.map(([from, to], i) => (
                    <FlowEdge key={`${from}-${to}`} from={from} to={to} index={i} />
                  ))}
                  {/* Nodes */}
                  {ARCH_NODES.map((node, i) => (
                    <ArchNode
                      key={node.id}
                      id={node.id}
                      label={node.label}
                      index={i}
                    />
                  ))}
                  {/* Labels for parallel paths */}
                  <text
                    x="128"
                    y="8"
                    className="fill-ink-3"
                    style={{ fontSize: "6px", fontFamily: "monospace" }}
                  >
                    embedding path
                  </text>
                  <text
                    x="128"
                    y="115"
                    className="fill-ink-3"
                    style={{ fontSize: "6px", fontFamily: "monospace" }}
                  >
                    cache path
                  </text>
                </svg>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
