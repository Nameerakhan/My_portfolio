"use client";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/khan-nameera",
  },
];

export default function ContactPage() {
  return (
    <div className="page-enter pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_400px]">
        {/* ── Left Column — Form ── */}
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-3">
            Get in touch
          </p>
          <h1 className="mb-4 font-display font-bold leading-[1.1] text-ink [font-size:clamp(2.4rem,4vw,3.2rem)]">
            Let&apos;s work together.
          </h1>
          <p className="mb-12 max-w-md text-base font-light leading-relaxed text-ink-2">
            I&apos;m open to ML/AI engineering roles, backend systems positions,
            and applied AI research. Available full-time from May 2026, OPT
            eligible.
          </p>

          {/* Form */}
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "mailto:nameerakhan1105@gmail.com";
            }}
          >
            {/* Name */}
            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-3">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-border bg-bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-3 focus:border-accent focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-3">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border border-border bg-bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-3 focus:border-accent focus:outline-none"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-3">
                Subject
              </label>
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full border border-border bg-bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-3 focus:border-accent focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-3">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about the role or project..."
                className="w-full resize-none border border-border bg-bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-3 focus:border-accent focus:outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-accent py-4 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:bg-accent-dark"
            >
              Send Message →
            </button>
          </form>
        </div>

        {/* ── Right Column — Info Cards ── */}
        <div className="flex flex-col gap-4">
          {/* Direct Email */}
          <div className="card-glow border border-border bg-bg-card p-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-3">
              Direct Email
            </p>
            <p className="font-mono text-sm text-ink">
              nameerakhan1105@gmail.com
            </p>
          </div>

          {/* Find Me Online */}
          <div className="card-glow border border-border bg-bg-card p-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-3">
              Find Me Online
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-ink-2 transition-colors hover:text-accent"
                >
                  <span className="block h-1.5 w-1.5 bg-accent" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="card-glow border border-border bg-bg-card p-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-3">
              Availability
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="text-sm text-ink-2">Open to opportunities</span>
            </div>
            <p className="mt-2 font-mono text-xs text-ink-3">
              Full-time · May 2026 · OPT eligible
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
