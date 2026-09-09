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

      {/* RIGHT: Image with Floating Icons positioned at red circles */}
      <div className="hero-right">
        {/* Left & Top custom positions */}
        <div className="floating-icon icon-ps">Ps</div>
        <div className="floating-icon icon-ai">Ai</div>
        <div className="floating-icon icon-xd">Xd</div>
        <div className="floating-icon icon-ae">Ae</div>
        <div className="floating-icon icon-figma">Fg</div>

        {/* Right side custom positions */}
        <div className="floating-icon icon-wireframe">📱</div>
        <div className="floating-icon icon-palette">🎨</div>
        <div className="floating-icon icon-ux">UX</div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-photo" src="/images/hero-photo.png" alt="Kiran Maya" />
    
      </div>
    </section>
  );
}