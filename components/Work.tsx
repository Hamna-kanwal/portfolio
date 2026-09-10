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

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectKey>("all");

  const visibleCards = activeFilter === "all" ? GRID_ORDER : GRID_ORDER.filter((k) => k === activeFilter);

  return (
    <div className="page-grid" id="work">
      <div className="page-header fade-up" style={{ marginTop: "10px" }}>
         <h2 className="section-title">Selected Work</h2>
      </div>

      {/* Horizontal Scrollable Filter Bar with proper spacing */}
      <div 
        className="filters fade-up" 
        style={{ 
          display: "flex", 
          justifyContent: "flex-start", 
          flexWrap: "nowrap", 
          overflowX: "auto", 
          gap: "10px", 
          margin: "20px 0 35px 0",
          paddingBottom: "8px",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}
      >
        {FILTERS.map((f) => {
          const isActive = activeFilter === f.key;
          return (
            <button
              key={f.key}
              className={`filter-btn ${isActive ? "active" : ""}`}
              onClick={() => setActiveFilter(f.key)}
              style={{
                background: isActive 
                  ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" 
                  : "rgba(17, 20, 29, 0.7)",
                color: isActive ? "#ffffff" : "#94a3b8",
                border: isActive ? "1px solid #60a5fa" : "1px solid rgba(255, 255, 255, 0.08)",
                padding: "10px 22px",
                borderRadius: "30px",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                cursor: "pointer",
                backdropFilter: "blur(12px)",
                boxShadow: isActive ? "0 0 15px rgba(59, 130, 246, 0.3)" : "0 4px 12px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                whiteSpace: "nowrap",
                flexShrink: 0
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <style jsx>{`
        .filters::-webkit-scrollbar {
          display: none;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
          width: 100%;
        }
      `}</style>

      <div className="projects-grid fade-up">
        {visibleCards.map((key) => {
          const p = PROJECTS[key];
          return (
            <Link 
              href={`/work/${key}`} 
              key={key} 
              className="project-card"
              style={{
                border: "1px solid rgba(59, 130, 246, 0.3)", // Border ko halka aur subtle kar diya hai
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
                borderRadius: "20px",
                overflow: "hidden",
                display: "block",
                position: "relative",
                width: "100%",
                minHeight: "340px",
                transition: "all 0.3s ease"
              }}
            >
              <div 
                className="card-count" 
                style={{ 
                  position: "absolute", 
                  top: "16px", 
                  right: "16px", 
                  zIndex: 10, 
                  background: "rgba(17, 20, 29, 0.85)", 
                  border: "1px solid rgba(96, 165, 250, 0.3)", 
                  color: "#60a5fa", 
                  padding: "4px 10px", 
                  borderRadius: "20px", 
                  fontSize: "12px",
                  fontWeight: 600 
                }}
              >
                {p.count}
              </div>

              <div
                className="card-visual"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(8,9,12,0.9) 0%, rgba(8,9,12,0.2) 50%, rgba(8,9,12,0.4) 100%), url(${p.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  minHeight: "340px",
                  position: "relative"
                }}
              >
                <div className="card-overlay" style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px" }}>
                  <p className="card-cat" style={{ color: "#3b82f6", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>{p.cat}</p>
                  <p className="card-name" style={{ color: "#ffffff", fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>{p.cardName}</p>
                  <p className="card-cta" style={{ color: "#60a5fa", fontSize: "13px", fontWeight: 600 }}>View Projects</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}