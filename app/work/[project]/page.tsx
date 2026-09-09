"use client";

import { useState, use } from "react";
import Link from "next/link";
import { PROJECTS, ProjectKey } from "@/lib/work-data";

export default function ProjectDetail({ params }: { params: Promise<{ project: string }> }) {
  const { project } = use(params);
  const key = project as ProjectKey;
  const active = PROJECTS[key];

  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!active) return null;

  const currentGalleryItem = active.gallery && active.gallery[selectedIndex] ? active.gallery[selectedIndex] : null;

  const currentImage = currentGalleryItem ? currentGalleryItem.img : active.image;
  const sampleLabel = currentGalleryItem ? currentGalleryItem.label : "Sample";

  const dummyTitles = [
    "Innovative Brand Mark & Identity",
    "Modern Minimalist Concept",
    "Creative Visual Direction",
    "Dynamic Layout & Typography",
    "Strategic Design Execution",
    "Complete Vector Package"
  ];

  const dummyDescs = [
    "Yeh pehle sample ki mukammal detail hai jo user ke click karne par dynamically update ho rahi hai.",
    "Is project sample mein modern design trends aur clean typography ka khas khayal rakha gaya hai.",
    "Yeh concept brand ki core values ko mad-e-nazar rakh kar design kiya gaya hai.",
    "Is visual element ko mukhtalif platforms ki requirements ke mutabiq optimize kiya gaya hai.",
    "Yeh design execution client ki target audience ko attract karne ke liye banai gayi hai.",
    "Aakhri sample jo is poori category ke standard aur quality ko represent karta hai."
  ];

  // Safely handling properties with fallback types
  const currentTitle = currentGalleryItem && currentGalleryItem.title ? currentGalleryItem.title : (dummyTitles[selectedIndex] || active.line1);
  const currentDesc = currentGalleryItem && currentGalleryItem.desc ? currentGalleryItem.desc : (dummyDescs[selectedIndex] || active.desc);
  const currentTags = currentGalleryItem && currentGalleryItem.tags ? currentGalleryItem.tags : active.tags;

  return (
    <div className="page-detail" style={{ background: "radial-gradient(circle at top, #11141d 0%, #08090c 100%)", minHeight: "100vh", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Back Button */}
        <div style={{ paddingTop: "32px", marginBottom: "32px" }}>
          <Link href="/#work" className="back-btn" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#94a3b8", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}>
            ← Back to Work
          </Link>
        </div>

        {/* Hero Section */}
        <div className="detail-hero fade-up">
          
          {/* Hero Visual Image */}
          <div
            className="detail-visual"
            style={{
              backgroundImage: `linear-gradient(160deg, rgba(8,9,12,0.2), rgba(8,9,12,0.6)), url(${currentImage})`,
              transition: "background-image 0.4s ease-in-out",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "420px",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              border: "1px solid rgba(59, 130, 246, 0.3)"
            }}
          />

          <div className="detail-info" style={{ width: "100%" }}>
            <p className="detail-cat" style={{ color: "#3b82f6", textTransform: "uppercase", fontSize: "12px", letterSpacing: "2px", fontWeight: 700, marginBottom: "12px" }}>
              {active.cat}
            </p>
            
            <h1 className="detail-title" style={{ fontSize: "2rem", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "16px" }}>
              {currentTitle}<br />
              <span style={{ color: "#94a3b8" }}>{active.line2Prefix}</span><em style={{ color: "#3b82f6", fontStyle: "normal" }}>{active.line2Em}</em>{active.line2Suffix}
            </h1>

            <p className="detail-desc" style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: 1.6, marginBottom: "20px" }}>
              {currentDesc}
            </p>

            <div style={{ display: "inline-block", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", padding: "6px 14px", borderRadius: "20px", color: "#60a5fa", fontSize: "13px", marginBottom: "20px", fontWeight: 500 }}>
              ✨ Viewing Sample: {sampleLabel}
            </div>

            <div className="detail-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
              {currentTags.map((t: string) => (
                <span className="tag" key={t} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", color: "#e2e8f0" }}>
                  {t}
                </span>
              ))}
            </div>

            <div className="detail-meta" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px" }}>
              <div className="meta-item"><p className="meta-label" style={{ fontSize: "12px", color: "#64748b" }}>Deliverables</p><p className="meta-val" style={{ fontSize: "14px", color: "#f8fafc", fontWeight: 600 }}>{active.deliverables}</p></div>
              <div className="meta-item"><p className="meta-label" style={{ fontSize: "12px", color: "#64748b" }}>Tools</p><p className="meta-val" style={{ fontSize: "14px", color: "#f8fafc", fontWeight: 600 }}>{active.tools}</p></div>
              <div className="meta-item"><p className="meta-label" style={{ fontSize: "12px", color: "#64748b" }}>Clients</p><p className="meta-val" style={{ fontSize: "14px", color: "#f8fafc", fontWeight: 600 }}>{active.clients}</p></div>
              <div className="meta-item"><p className="meta-label" style={{ fontSize: "12px", color: "#64748b" }}>Turnaround</p><p className="meta-val" style={{ fontSize: "14px", color: "#f8fafc", fontWeight: 600 }}>{active.turnaround}</p></div>
            </div>
          </div>
        </div>

        {/* Responsive Styling for Desktop & Mobile */}
        <style jsx>{`
          .detail-hero {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 40px;
            align-items: center;
            background: rgba(17, 20, 29, 0.7);
            backdrop-filter: blur(12px);
            border: 2px solid rgba(59, 130, 246, 0.5);
            border-radius: 24px;
            padding: 32px;
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.2), 0 20px 40px rgba(0,0,0,0.4);
          }
          
          @media (max-width: 768px) {
            .detail-hero {
              display: flex !important;
              flex-direction: column !important;
              padding: 20px !important;
            }
            .detail-visual {
              order: 1 !important;
              width: 100% !important;
              height: 300px !important;
              min-height: 300px !important;
              margin-bottom: 20px !important;
            }
            .detail-info {
              order: 2 !important;
              width: 100% !important;
            }
          }
        `}</style>

        {/* Project Samples Gallery Section */}
        <div className="gallery-section fade-up" style={{ marginTop: "70px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "24px" }}>
            <div>
              <p style={{ color: "#3b82f6", textTransform: "uppercase", fontSize: "12px", letterSpacing: "2px", fontWeight: 700, marginBottom: "6px" }}>Portfolio Gallery</p>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", margin: 0 }}>Project Samples</h3>
            </div>
            <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0 }}>Click any card to preview above</p>
          </div>

          <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {active.gallery.map((g, i) => {
              const isSelected = selectedIndex === i;
              return (
                <div 
                  key={i} 
                  onClick={() => setSelectedIndex(i)}
                  style={{ 
                    position: "relative",
                    height: "260px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    cursor: "pointer",
                    background: "#11141d",
                    border: isSelected ? "2px solid #3b82f6" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isSelected ? "0 0 25px rgba(59, 130, 246, 0.4)" : "0 8px 20px rgba(0,0,0,0.3)",
                    transform: isSelected ? "translateY(-6px)" : "translateY(0)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  <div 
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${g.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: isSelected ? 1 : 0.75,
                      transform: isSelected ? "scale(1.05)" : "scale(1)",
                      transition: "all 0.5s ease"
                    }}
                  />

                  <div 
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(8,9,12,0.95) 0%, rgba(8,9,12,0.4) 60%, transparent 100%)"
                    }}
                  />

                  {isSelected && (
                    <div style={{ position: "absolute", top: "16px", right: "16px", background: "#3b82f6", color: "#fff", fontSize: "10px", fontWeight: 700, padding: "4px 10px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1px", boxShadow: "0 2px 10px rgba(59,130,246,0.5)" }}>
                      Active
                    </div>
                  )}

                  <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
                    <p style={{ color: "#3b82f6", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Sample 0{i + 1}</p>
                    <p style={{ color: "#fff", fontSize: "16px", fontWeight: 600, margin: 0, textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}>{g.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Section */}
        <div className="process-section fade-up" style={{ marginTop: "70px" }}>
          <p className="gallery-title" style={{ fontSize: "1.1rem", fontWeight: 600, color: "#fff", marginBottom: "20px" }}>— My Process</p>
          <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {active.process.map((s) => (
              <div className="process-step" key={s.num} style={{ background: "rgba(17, 20, 29, 0.4)", border: "1px solid rgba(255,255,255,0.06)", padding: "24px", borderRadius: "16px" }}>
                <p className="step-num" style={{ color: "#3b82f6", fontWeight: 700, fontSize: "1.2rem", marginBottom: "8px" }}>{s.num}</p>
                <p className="step-title" style={{ color: "#fff", fontWeight: 600, fontSize: "1rem", marginBottom: "8px" }}>{s.title}</p>
                <p className="step-desc" style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="detail-cta fade-up" style={{ marginTop: "70px", textAlign: "center", background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(17, 20, 29, 0.8))", border: "1px solid rgba(59, 130, 246, 0.2)", borderRadius: "24px", padding: "48px 24px" }}>
          <p className="cta-label" style={{ color: "#3b82f6", fontWeight: 600, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Ready to work together?</p>
          <h2 className="cta-title" style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 700, marginBottom: "24px" }}>Let&apos;s design your next<br />{active.cat.toLowerCase()} project</h2>
          <a href="mailto:Kayarts91@gmail.com" className="btn-primary" style={{ display: "inline-block", background: "#3b82f6", color: "#fff", padding: "12px 28px", borderRadius: "8px", fontWeight: 600, textDecoration: "none", boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)", transition: "background 0.2s" }}>Start a Project →</a>
        </div>

        {/* Next Project Footer */}
        <div className="next-project fade-up" style={{ marginTop: "40px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", textAlign: "right" }}>
          <Link href={`/work/${active.next}`} className="next-btn" style={{ textDecoration: "none", display: "inline-flex", flexDirection: "column", alignItems: "flex-end" }}>
            <span className="next-label" style={{ fontSize: "12px", color: "#64748b" }}>Next Project</span>
            <span className="next-name" style={{ fontSize: "1.1rem", color: "#fff", fontWeight: 600 }}>{PROJECTS[active.next].cat} →</span>
          </Link>
        </div>

      </div>
    </div>
  );
}