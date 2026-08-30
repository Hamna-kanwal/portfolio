const skills = [
  { name: "BRAND IDENTITY", note: "Logos, systems, guidelines", icon: "✦" },
  { name: "TYPOGRAPHY", note: "Editorial & display", icon: "T" },
  { name: "PRINT DESIGN", note: "Books, posters, packaging", icon: "▣" },
  { name: "ART DIRECTION", note: "Campaign & concept", icon: "❖" },
  { name: "MOTION", note: "Animation & transitions", icon: "▶" },
  { name: "DIGITAL DESIGN", note: "UI / web / social", icon: "💻" },
];

export default function About() {
  return (
    <section className="about-skills-section" id="about">
      <div className="about-skills-container">
        
        {/* Main 2-Column Grid */}
        <div className="about-skills-grid">
          
          {/* Left Box: About Section */}
          <div className="content-boundary-box">
            <div className="section-header">
              <span className="section-num">02</span>
              <h2 className="section-title">About</h2>
            </div>
            
            <div className="about-text-content">
              <p>
                I&apos;m a graphic designer with <strong>5+ years of experience</strong> crafting visual identities and communications that are precise, purposeful, and beautiful.
              </p>
              <p>
                My work lives at the intersection of <strong>concept and craft</strong> — where a strong idea meets meticulous execution. I believe every design choice is a decision about what something means.
              </p>
              <p>
                Currently available for <strong>freelance projects</strong> and full-time collaborations.
              </p>
            </div>
          </div>

          {/* Right Box: Skills Section */}
          <div className="content-boundary-box">
            <div className="section-header">
              <span className="section-num">03</span>
              <h2 className="section-title">Skills</h2>
            </div>

            <div className="skills-grid-3rows">
              {skills.map((s, index) => (
                <div className="skill-row-card" key={index}>
                  <div className="skill-icon-box">
                    <span>{s.icon}</span>
                  </div>
                  <div className="skill-info">
                    <h4 className="skill-title">{s.name}</h4>
                    <p className="skill-note">{s.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}