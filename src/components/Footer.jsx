const footerLinks = [
  { label: "Top",    href: "#hero" },
  { label: "Work",   href: "#projects" },
  { label: "Email",  href: "mailto:mukund@example.com" },
  { label: "GitHub", href: "https://github.com", target: "_blank" },
];

function smoothScroll(href) {
  if (href.startsWith("#")) {
    const target = document.querySelector(href);
    if (target) window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
  }
}

export default function Footer() {
  return (
    <>
      <div className="gdiv" />
      <footer className="bg-bg2 border-t border-white/5 py-10">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between flex-wrap gap-4">
          <div className="font-mono text-[.85rem] text-cyan">&lt;map.dev /&gt;</div>
          <div className="font-mono text-[.62rem] text-muted tracking-[.08em]">
            Designed &amp; Built by Mukund Aparaj · © 2025
          </div>
          <div className="flex gap-5">
            {footerLinks.map(({ label, href, target }) => (
              <a
                key={label}
                href={href}
                target={target}
                rel={target ? "noreferrer" : undefined}
                onClick={href.startsWith("#") ? (e) => { e.preventDefault(); smoothScroll(href); } : undefined}
                className="font-mono text-[.62rem] text-muted hover:text-cyan transition-colors tracking-[.05em]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
