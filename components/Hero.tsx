"use client";

import { useEffect, useRef, useState } from "react";

const taglines = [
  "Designing Bold, Thinking Deep",
  "Where Concept Meets Craft",
  "Visual Identity. Reimagined.",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState<"visible" | "exit" | "enter">("visible");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase("exit");
      timeoutRef.current = setTimeout(() => {
        setCurrent((c) => (c + 1) % taglines.length);
        setPhase("enter");
        rafRef.current = requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setPhase("visible");
          });
        });
      }, 500);
    }, 3000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="hero">
      {/* Corner glows */}
      <div className="hero-glow-bl"></div>

      {/* LEFT: Text */}
      <div className="hero-left fade-up">
        <p className="hero-tag">Graphic Designer — Islamabad, Pakistan</p>
        <h1 className="hero-name">
          <span className="hero-static">
            Kiran <em>Maya</em>
          </span>
          <span className="tagline-wrap">
            <span className={`tagline-slide ${phase}`}>{taglines[current]}</span>
          </span>
        </h1>
        <p className="hero-desc">
          I&apos;m Kiran Maya, a graphic designer from Islamabad crafting brands,
          identities, and visual experiences that are bold, intentional and
          built to last.
        </p>
        <div className="hero-btns">
          <a href="#work" className="btn-primary">
            View My Work →
          </a>
          <a href="#contact" className="btn-ghost">
            Get in Touch
          </a>
        </div>
      </div>

      {/* RIGHT: Image with tool logos around it */}
      <div className="hero-right">
        {/* Adobe Photoshop */}
        <div className="floating-icon icon-ps" title="Adobe Photoshop">
          <span className="tool-badge tool-ps">Ps</span>
        </div>

        {/* Adobe Illustrator */}
        <div className="floating-icon icon-ai" title="Adobe Illustrator">
          <span className="tool-badge tool-ai">Ai</span>
        </div>

        {/* Canva */}
        <div className="floating-icon icon-xd" title="Canva">
          <span className="tool-badge tool-canva">Canva</span>
        </div>
{/* CapCut */}
<div className="floating-icon icon-ae" title="CapCut">
  {/* eslint-disable-next-line @next/next/no-img-element */}
  <img src="/images/capcut.png" alt="CapCut" className="tool-capcut" />
</div>
        {/* Figma */}
        <div className="floating-icon icon-figma" title="Figma">
          <svg className="tool-svg figma-svg" viewBox="0 0 38 57" aria-hidden="true">
            <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe" />
            <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83" />
            <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262" />
            <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e" />
            <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff" />
          </svg>
        </div>

        {/* UI */}
        <div className="floating-icon icon-wireframe" title="UI Design">
          <span className="tool-badge tool-ui">UI</span>
        </div>

        {/* UX */}
        <div className="floating-icon icon-ux" title="UX Design">
          <span className="tool-badge tool-ux">UX</span>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-photo" src="/images/hero-photo.png" alt="Kiran Maya" />
      </div>
    </section>
  );
}