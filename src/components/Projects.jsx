const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const featured = {
  title: "PriceBid - Auction Platform with Real-Time Bidding",
  desc: "A full-stack auction platform built with Django, Html , css and javascript, featuring real-time bidding using WebSockets, if like selling and auction type platform, and Redis for caching.",
  tags: ["Django", "JavaScript", "WebSockets", "Redis"],
  github: "#",
  live: "#",
};

const projects = [
  {
    num: "01",
    title: "Uddhar - Mobile App for Borrowing",
    desc: "A Flutter-based peer-to-peer lending platform with borrowing features,for the customers to borrow money from the shopkeepers can lend money to the customers. It also has a feature of tracking the borrowed amount and the due date.",
    tags: ["Flutter", "SQLite"],
    github: "https://github.com/mukund1234-jpg/udhari_kirana_app",
    delay: "d2",
  },
  {
    num: "02",
    title: "AMC - Full-Backend API",
    desc: "A comprehensive backend API for an AMC (Annual Management Company) system, built with Python Framework FastAPI . It includes user authentication, order service management, transaction processing.",
    tags: ["FastAPI", "Python", "Sqlite"],
    github: "#",
    delay: "d3",
  },
];

function IconBtn({ href, children }) {
  return (
    <a
      href={href}
      className="w-9 h-9 border border-white/10 rounded-md flex items-center justify-center text-muted hover:border-cyan hover:text-cyan transition-all"
    >
      {children}
    </a>
  );
}

function onCardMove(e) {
  const c = e.currentTarget;
  const r = c.getBoundingClientRect();
  const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
  const y = ((e.clientY - r.top) / r.height - 0.5) * 8;
  c.style.transform = `perspective(600px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-4px)`;
}
function onCardLeave(e) { e.currentTarget.style.transform = ""; }

export default function Projects() {
  return (
    <section id="projects" className="py-[120px]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="rv">
          <div className="slbl flex items-center gap-3 font-mono text-[.68rem] text-cyan tracking-[.15em] uppercase mb-4" data-n="03" />
          <h2 className="font-display font-bold leading-[1.1] tracking-[-0.02em]" style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}>
            Things I've Built
          </h2>
        </div>

        <div className="mt-14 flex flex-col gap-[3px]">
          {/* Featured */}
          <div
            className="pi rv d1 bg-gradient-to-r from-sur to-cyan/4 border border-cyan/20 rounded-lg px-8 py-7 grid gap-6 hover:bg-sur2 hover:translate-x-1.5 transition-all duration-300 cursor-pointer mb-2"
            style={{ gridTemplateColumns: "auto 1fr auto" }}
            onMouseMove={onCardMove}
            onMouseLeave={onCardLeave}
          >
            <div className="font-mono text-[.68rem] text-lime opacity-60 w-7">★</div>
            <div>
              <span className="inline-block font-mono text-[.58rem] px-2.5 py-1 bg-lime/7 border border-lime/20 rounded-full text-lime tracking-[.1em] mb-2.5">
                FEATURED PROJECT
              </span>
              <div className="font-display font-semibold text-[1.05rem] mb-1.5 hover:text-cyan transition-colors">
                {featured.title}
              </div>
              <div className="text-[.84rem] text-muted leading-relaxed">{featured.desc}</div>
              <div className="flex flex-wrap gap-2 mt-2.5">
                {featured.tags.map((t) => (
                  <span key={t} className="font-mono text-[.6rem] px-2.5 py-1 bg-cyan/5 border border-cyan/15 rounded text-cyan tracking-[.05em]">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <IconBtn href={featured.github}><GithubIcon /></IconBtn>
              <IconBtn href={featured.live}><ExternalIcon /></IconBtn>
            </div>
          </div>

          {/* Project rows */}
          {projects.map(({ num, title, desc, tags, github, delay }) => (
            <div
              key={num}
              className={`pi rv ${delay} bg-sur border border-white/10 rounded-lg px-8 py-7 grid gap-6 hover:bg-sur2 hover:translate-x-1.5 transition-all duration-300 cursor-pointer mb-2`}
              style={{ gridTemplateColumns: "auto 1fr auto" }}
              onMouseMove={onCardMove}
              onMouseLeave={onCardLeave}
            >
              <div className="font-mono text-[.68rem] text-cyan/50 w-7">{num}</div>
              <div>
                <div className="font-display font-semibold text-[1.05rem] mb-1.5">{title}</div>
                <div className="text-[.84rem] text-muted leading-relaxed">{desc}</div>
                <div className="flex flex-wrap gap-2 mt-2.5">
                  {tags.map((t) => (
                    <span key={t} className="font-mono text-[.6rem] px-2.5 py-1 bg-cyan/5 border border-cyan/15 rounded text-cyan">{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <IconBtn href={github}><GithubIcon /></IconBtn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
