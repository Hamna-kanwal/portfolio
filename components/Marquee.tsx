export default function Marquee() {
  return (
    <div className="marquee-bar">
      <div className="marquee-inner">
        <span>Brand Identity &nbsp;✦&nbsp; Print Design &nbsp;◆&nbsp; Typography &nbsp;✦&nbsp; Visual Identity &nbsp;◆&nbsp; Art Direction &nbsp;✦&nbsp; Packaging &nbsp;◆&nbsp; Motion Graphics &nbsp;✦&nbsp; Editorial</span>
        {/* Duplicate text lagana zaroori hota hai seamless infinite loop ke liye */}
        <span aria-hidden="true">Brand Identity &nbsp;✦&nbsp; Print Design &nbsp;◆&nbsp; Typography &nbsp;✦&nbsp; Visual Identity &nbsp;◆&nbsp; Art Direction &nbsp;✦&nbsp; Packaging &nbsp;◆&nbsp; Motion Graphics &nbsp;✦&nbsp; Editorial</span>
      </div>
    </div>
  );
}