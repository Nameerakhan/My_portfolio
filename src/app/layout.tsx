import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Syne } from "next/font/google";
import Nav from "./components/Nav";
import CursorGlow from "./components/CursorGlow";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-mono",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Nameera Khan — AI/ML Systems Engineer",
  description:
    "I engineer AI systems that are fast, measurable, and production-ready.",
};

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${dmSans.variable} ${dmMono.variable} ${syne.variable} font-sans antialiased`}
      >
        <Nav />
        <div className="hidden md:block">
          <CursorGlow />
        </div>
        <main
          className="mx-auto max-w-[1200px] px-6 md:px-12"
          style={{ animation: "pageLoad 0.4s ease forwards" }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
