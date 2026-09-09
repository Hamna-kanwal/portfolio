"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS, GRID_ORDER, ProjectKey } from "@/lib/work-data";

const FILTERS: { label: string; key: "all" | ProjectKey }[] = [
  { label: "All", key: "all" },
  { label: "Logo Design", key: "logo" },
  { label: "Ad Creatives", key: "ad" },
  { label: "Carousel", key: "carousel" },
  { label: "LinkedIn", key: "linkedin" },
  { label: "Print Media", key: "print" },
  { label: "Brand Identity", key: "brand" },
];

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectKey>("all");

  const visibleCards = activeFilter === "all" ? GRID_ORDER : GRID_ORDER.filter((k) => k === activeFilter);

  return (
    <div className="page-grid">
      <div className="page-header fade-up">
        <p>Selected Projects</p>
      </div>

      <div className="filters fade-up">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-btn ${activeFilter === f.key ? "active" : ""}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-grid fade-up">
        {visibleCards.map((key) => {
          const p = PROJECTS[key];
          return (
            <Link href={`/work/${key}`} key={key} className={`project-card col-${p.colSpan}`}>
              <div className="card-count">{p.count}</div>
              <div
                className="card-visual"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(8,9,12,0.85) 0%, rgba(8,9,12,0.15) 55%, rgba(8,9,12,0.5) 100%), url(${p.image})`,
                }}
              >
                <div className="card-overlay">
                  <p className="card-cat">{p.cat}</p>
                  <p className="card-name">{p.cardName}</p>
                  <p className="card-cta">View Projects</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}