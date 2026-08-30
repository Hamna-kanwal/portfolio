export default function Navbar() {
  return (
    <nav className="navbar">
      {/* 1. Left: Logo */}
      <span className="nav-logo">Kiran Maya — Portfolio</span>
      
      {/* 2. Center: Sirf yeh 3 links blue pill background ke andar aayenge */}
      <ul className="nav-links">
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* 3. Right: LinkedIn Button alag div mein */}
      <div className="nav-right" style={{ justifySelf: 'end' }}>
        <a
          href="https://www.linkedin.com/in/kiran-s-maya-89716b302/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn-glow"
        >
          LinkedIn ↗
        </a>
      </div>
    </nav>
  );
}