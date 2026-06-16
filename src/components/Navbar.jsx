import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "About", href: "#about", num: "01." },
  { label: "Skills", href: "#skills", num: "02." },
  { label: "Projects", href: "#projects", num: "03." },
  { label: "Experience", href: "#experience", num: "04." },
  { label: "Contact", href: "#contact", num: "05." },
];

function smoothScroll(href) {
  const target = document.querySelector(href);
  if (target)
    window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const navRef = useRef(null);

  // Sticky style
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section highlight
  useEffect(() => {
    const secs = document.querySelectorAll("section[id]");
    const onScroll = () => {
      let cur = "";
      secs.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 150) cur = s.id;
      });
      setActiveId(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = scrolled
    ? "bg-bg/92 backdrop-blur-xl border-b border-white/5 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,.4)]"
    : "py-5";

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navClass}`}
      >
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("#hero");
            }}
            className="font-mono text-[0.95rem] text-cyan"
          >
            <span className="text-muted">&lt;</span>map15.dev
            <span className="text-muted">/&gt;</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-9 list-none">
            {navLinks.map(({ label, href, num }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll(href);
                  }}
                  className="font-mono text-[0.73rem] text-muted hover:text-cyan transition-colors tracking-widest"
                  style={{ color: activeId === href.slice(1) ? "#63d2ff" : "" }}
                >
                  <span className="text-cyan mr-1">{num}</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="mailto:aparajmukund8@gmail.com"
            className="hidden md:inline-block font-mono text-[0.73rem] text-cyan border border-cyan px-[18px] py-2 rounded hover:bg-cyan/10 hover:shadow-cyan-sm transition-all tracking-widest"
          >
            Say Hello ↗
          </a>

          {/* Hamburger */}
          <button
            id="ham"
            className={`md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-0 p-1 ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-[22px] h-px bg-cyan transition-all duration-300" />
            <span className="block w-[22px] h-px bg-cyan transition-all duration-300" />
            <span className="block w-[22px] h-px bg-cyan transition-all duration-300" />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } fixed inset-0 z-[999] flex-col items-center justify-center gap-8 
  bg-black/40 backdrop-blur-md transition-all duration-300`}
      >
        {navLinks.map(({ label, href, num }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => {
              e.preventDefault();
              smoothScroll(href);
              setMenuOpen(false);
            }}
            className="font-mono text-2xl text-white hover:text-cyan transition-colors"
          >
            {num} {label}
          </a>
        ))}
      </div>
    </>
  );
}
