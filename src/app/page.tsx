"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* ─── SVGs ──────────────────────────────────────────── */
function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857L1.4 2.25h6.293l4.265 5.64 5.286-5.64Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function IconLI() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function IconGH() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

/* ─── Mouse Tracker ─────────────────────────────────── */
function MouseGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="mouse-glow"
      style={{
        transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
      }}
      aria-hidden="true"
    />
  );
}

/* ─── Particles ─────────────────────────────────────── */
function Particles() {
  return (
    <div className="particles" aria-hidden="true">
      {Array.from({ length: 25 }).map((_, i) => (
        <div key={i} className="pt" />
      ))}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────── */
export default function Page() {
  return (
    <>
      <MouseGlow />
      {/* ── Background ── */}
      <div className="bg" aria-hidden="true">
        <div className="bg-burst" />
        <div className="bg-orb-tl" />
        <div className="bg-orb-br" />
        <div className="bg-scan" />
      </div>
      <div className="bg-grid" aria-hidden="true" />
      <Particles />

      {/* ── Progress line ── */}
      <div className="top-progress" aria-hidden="true" />

      {/* ── Hero ── */}
      <main className="page">

        {/* Logo */}
        <div className="logo-wrap" aria-label="GenoxLabs logo">
          <div className="logo-halo" aria-hidden="true" />
          <div className="logo-ring" aria-hidden="true" />
          <Image
            id="logo"
            src="/sqlogo.jpeg"
            alt="GenoxLabs"
            width={160}
            height={160}
            priority
            className="logo-img"
          />
        </div>

        {/* Eyebrow tag */}
        <p className="eyebrow" aria-label="Status">Arriving 2026</p>

        {/* Giant brand name */}
        <div className="brand-container">
          <h1 className="brand-word" aria-label="GenoxLabs">
            GENO<span className="brand-x">X</span>
          </h1>
          <span className="brand-labs">Labs</span>
        </div>

        <p className="coming-soon" aria-hidden="true">
          ——&nbsp;&nbsp;ICONIC INNOVATION&nbsp;&nbsp;——
        </p>

        {/* Divider */}
        <div className="divider" aria-hidden="true" />

        {/* Domain */}
        <div
          className="domain"
          role="note"
          aria-label="Launching at genox.com"
          id="domain-badge"
        >
          <span className="domain-dot" aria-hidden="true" />
          <span>IDENTITY AT&nbsp;<span className="domain-url">GENOX.COM</span></span>
        </div>

        {/* Subtle banner watermark */}
        <div className="banner-watermark">
          <Image
            src="/bannerlogo.jpeg"
            alt=""
            width={300}
            height={80}
            style={{ opacity: 0.15, filter: 'grayscale(1) invert(1)' }}
          />
        </div>

      </main>

      {/* ── Footer ── */}
      <footer className="footer" role="contentinfo">
        <div className="footer-left">
          <span className="footer-copy">
            &copy; 2026 GENOX LABS &middot;{" "}
            <a href="mailto:hello@genox.com">STAY CONNECTED</a>
          </span>
        </div>

        <nav className="footer-socials" aria-label="Social links">
          <a
            id="link-x"
            href="https://twitter.com/genoxlabs"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
          ><IconX /></a>
          <a
            id="link-li"
            href="https://linkedin.com/company/genoxlabs"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          ><IconLI /></a>
          <a
            id="link-gh"
            href="https://github.com/genoxlabs"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          ><IconGH /></a>
        </nav>
      </footer>
    </>
  );
}
