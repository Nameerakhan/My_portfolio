"use client";

import { useState, FormEvent } from "react";
import FadeUp from "./FadeUp";

const openTo = [
  "ML/AI Engineering",
  "Backend & Systems",
  "Applied AI Research",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setStatusMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setStatusMsg("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setStatusMsg(err instanceof Error ? err.message : "Failed to send message.");
    }
  }

  return (
    <section
      id="contact"
      className="relative -mx-6 overflow-hidden px-6 py-16 md:-mx-12 md:px-12 md:py-24"
      style={{ background: "#781D3A" }}
    >
      {/* Subtle top-right glow — only background accent */}
      <div
        className="pointer-events-none absolute -right-[200px] -top-[200px] h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(245,214,195,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* ── Left Column ── */}
          <FadeUp delay={0}>
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-[#F5D6C3]">
                06 /
              </span>
              <h2 className="mb-4 font-display font-bold leading-[1.1] text-white [font-size:clamp(2rem,3vw,2.8rem)]">
                Building something with AI? Let&apos;s talk.
              </h2>
              <p className="mb-8 max-w-md text-base font-light leading-relaxed text-white/55">
                Open to ML/AI engineering roles — May 2026. I bring fast
                pipelines, rigorous evals, and backends that hold under load.
              </p>

              {/* Contact links */}
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:nameerakhan1105@gmail.com"
                  className="group flex items-center gap-2 font-mono text-sm text-white transition-colors hover:text-[#F5D6C3]"
                >
                  <span className="text-[#F5D6C3]">→</span>
                  nameerakhan1105@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/khan-nameera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 font-mono text-sm text-white/55 transition-colors hover:text-[#F5D6C3]"
                >
                  <span className="text-[#F5D6C3]/50">→</span>
                  linkedin.com/in/khan-nameera
                </a>
              </div>

              {/* Open to pills */}
              <div className="mt-8 flex flex-wrap gap-2">
                {openTo.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-white/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* ── Right Column — Contact Form ── */}
          <FadeUp delay={0.15}>
            <div className="card-glow rounded-lg border border-white/[0.06] bg-[#5A1228]/40 p-6 md:p-8">
              <p className="mb-5 font-mono text-xs uppercase tracking-widest text-[#F5D6C3]/50">
                Send a message
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-white/[0.06] bg-white/[0.04] px-4 py-3 font-mono text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-[#F5D6C3]/30"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-white/[0.06] bg-white/[0.04] px-4 py-3 font-mono text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-[#F5D6C3]/30"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full border border-white/[0.06] bg-white/[0.04] px-4 py-3 font-mono text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-[#F5D6C3]/30"
                />
                <textarea
                  placeholder="Message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none border border-white/[0.06] bg-white/[0.04] px-4 py-3 font-mono text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-[#F5D6C3]/30"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#F5D6C3] px-6 py-3 font-mono text-sm text-[#5A1228] transition-colors hover:bg-[#F5D6C3]/90 disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Message →"}
                </button>
                {statusMsg && (
                  <p
                    className={`font-mono text-xs ${
                      status === "success" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {statusMsg}
                  </p>
                )}
              </form>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── Footer Bar ── */}
      <div className="relative mx-auto mt-24 max-w-[1200px] border-t border-white/[0.08] pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-white/25">
              © 2026 Nameera Khan
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-mono text-xs text-white/25 transition-colors hover:text-[#F5D6C3]"
              aria-label="Back to top"
            >
              ↑ Top
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 transition-colors hover:text-[#F5D6C3]"
              aria-label="GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/khan-nameera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 transition-colors hover:text-[#F5D6C3]"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
