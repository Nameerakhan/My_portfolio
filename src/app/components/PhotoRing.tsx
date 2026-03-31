// TO ADD YOUR PHOTO:
// 1. Create folder: public/images/
// 2. Add your photo as: public/images/nameera.jpg
// 3. Recommended: square or portrait crop,
//    minimum 600x700px, JPG or PNG
// 4. The rotating ring will appear automatically

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LIGHT_GRADIENT =
  "conic-gradient(" +
  "#781D3A 0deg, " +
  "#C75B75 60deg, " +
  "#F7DCC1 120deg, " +
  "#C75B75 180deg, " +
  "#781D3A 240deg, " +
  "#C75B75 300deg, " +
  "#781D3A 360deg)";

const DARK_GRADIENT =
  "conic-gradient(" +
  "#C75B75 0deg, " +
  "#E8809A 60deg, " +
  "#F5E3E1 120deg, " +
  "#E8809A 180deg, " +
  "#C75B75 240deg, " +
  "#E8809A 300deg, " +
  "#C75B75 360deg)";

const LIGHT_GLOW =
  "conic-gradient(" +
  "rgba(120,29,58,0.4) 0deg, " +
  "rgba(199,91,117,0.3) 90deg, " +
  "rgba(247,220,193,0.15) 180deg, " +
  "rgba(120,29,58,0.4) 360deg)";

const DARK_GLOW =
  "conic-gradient(" +
  "rgba(199,91,117,0.4) 0deg, " +
  "rgba(232,128,154,0.3) 90deg, " +
  "rgba(245,227,225,0.15) 180deg, " +
  "rgba(199,91,117,0.4) 360deg)";

export default function PhotoRing() {
  const [hovered, setHovered] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const ringGradient = isDark ? DARK_GRADIENT : LIGHT_GRADIENT;
  const glowGradient = isDark ? DARK_GLOW : LIGHT_GLOW;
  const spinDuration = hovered ? "1.5s" : "4s";

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* SPINNING RING */}
      <div
        style={{
          position: "absolute",
          inset: "-3px",
          borderRadius: "22px",
          background: ringGradient,
          animation: `spinRing ${spinDuration} linear infinite`,
          zIndex: 0,
        }}
      />

      {/* GLOW LAYER */}
      <div
        style={{
          position: "absolute",
          inset: hovered ? "-14px" : "-8px",
          borderRadius: "30px",
          background: glowGradient,
          animation: `spinRing ${spinDuration} linear infinite`,
          filter: hovered ? "blur(14px)" : "blur(8px)",
          opacity: hovered ? 1 : 0.7,
          transition:
            "inset 0.4s ease, filter 0.4s ease, opacity 0.4s ease",
          zIndex: 0,
        }}
      />

      {/* PHOTO / PLACEHOLDER */}
      <div
        style={{
          position: "relative",
          width: "260px",
          height: "300px",
          borderRadius: "18px",
          overflow: "hidden",
          zIndex: 1,
          transform: hovered ? "scale(1.02)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
      >
        {imgError ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #F5E3E1, #E8C8C0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "3rem",
                color: "#781D3A",
                fontWeight: 700,
              }}
            >
              NK
            </span>
          </div>
        ) : (
          <Image
            src="/images/nameera1.jpeg"
            alt="Nameera Khan"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
            onError={() => setImgError(true)}
          />
        )}
      </div>
    </div>
  );
}
