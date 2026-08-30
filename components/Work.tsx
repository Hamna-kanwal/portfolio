"use client";

const services = [
  {
    num: "1",
    label: "Brand Identity",
    tag: "Identity",
    title: "Brand Identity",
    imageUrl: "/images/project-pixo.gif", 
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="17" cy="7" r="1" />
      </svg>
    ),
  },
  {
    num: "2",
    label: "Logo And Motion",
    tag: "Animation",
    title: "Logo And Motion",
    imageUrl: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600&auto=format&fit=crop", 
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3l3 6 6 1-4.5 4.3 1 6.2L12 17.5 6.5 20.5l1-6.2L3 10l6-1 3-6z" />
      </svg>
    ),
  },
  {
    num: "3",
    label: "Website Header Design",
    tag: "Digital",
    title: "Website Header Design",
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=600&auto=format&fit=crop", 
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <circle cx="6" cy="6.5" r="1" />
        <circle cx="9" cy="6.5" r="1" />
      </svg>
    ),
  },
  {
    num: "4",
    label: "Brand Identity And Packaging",
    tag: "Packaging",
    title: "Packaging Design",
    imageUrl: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600&auto=format&fit=crop", 
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2l10 5.5v11L12 22 2 18.5v-11L12 2z" />
        <polyline points="12 22 12 12.5 2 7.5" />
        <polyline points="12 12.5 22 7.5" />
      </svg>
    ),
  },
];

export default function ServicesRail() {
  return (
    <section className="services-section">
      <h2 className="section-title">Selected Work</h2>
      <p className="services-sub"></p>

      <div className="services-grid-container">
        {services.map((s) => (
          <div className="services-col" key={s.num}>
            <div className="services-pill">
              <span className="services-num">{s.num}</span>
              <span className="services-label">{s.label}</span>
            </div>
            
            <div className="services-stem" style={{ height: '16px' }} /> 
            
            <div
              className="services-card has-image"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(11, 15, 25, 0.1) 0%, rgba(11, 15, 25, 0.9) 100%), url(${s.imageUrl})`,
              }}
            >
              <div className="services-icon">{s.icon}</div>
              <div className="services-content-box">
                <div className="services-tag">{s.tag}</div>
                <div className="services-title">{s.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}