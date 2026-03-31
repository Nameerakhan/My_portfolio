"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  className?: string;
}

export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setShow(true), 200);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  return (
    <span
      ref={ref}
      className={className}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "scale(1)" : "scale(0.85)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        display: "inline-block",
      }}
    >
      {value}
    </span>
  );
}
