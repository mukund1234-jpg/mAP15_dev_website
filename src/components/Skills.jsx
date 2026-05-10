const skills = [
  {
    emoji: "⚛️",
    title: "Frontend",
    desc: "Pixel-perfect, performant UIs with modern frameworks and accessibility baked in.",
    tags: ["React", "three.js", "JavaScript", "Tailwind", "Flutter"],
    color: "cyan",
    bg: "bg-cyan/8",
    tagBg: "bg-cyan/7",
    border: "border-cyan/20",
    text: "text-cyan",
    delay: "d1",
  },
  {
    emoji: "🖥️",
    title: "Backend",
    desc: "Scalable APIs and microservices handling millions of requests without breaking a sweat.",
    tags: [ "Django", "Python", "FastAPI"],
    color: "lime",
    bg: "bg-lime/6",
    tagBg: "bg-lime/6",
    border: "border-lime/20",
    text: "text-lime",
    delay: "d2",
  },
  {
    emoji: "🗄️",
    title: "Databases",
    desc: "Efficient schemas and query strategies for both relational and document stores.",
    tags: ["PostgreSQL", "MongoDB", "Redis"],
    color: "org",
    bg: "bg-org/7",
    tagBg: "bg-org/7",
    border: "border-org/20",
    text: "text-org",
    delay: "d3",
  },
  {
    emoji: "☁️",
    title: "DevOps & Cloud",
    desc: "CI/CD pipelines, containerization, and cloud infra that developers actually love.",
    tags: ["AWS", "Docker", "GitHub Actions"],
    color: "pink",
    bg: "bg-pink/7",
    tagBg: "bg-pink/7",
    border: "border-pink/20",
    text: "text-pink",
    delay: "d4",
  },
];

// 3D tilt handler
function onCardMove(e) {
  const c = e.currentTarget;
  const r = c.getBoundingClientRect();
  const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
  const y = ((e.clientY - r.top) / r.height - 0.5) * 8;
  c.style.transform = `perspective(600px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-4px)`;
}
function onCardLeave(e) {
  e.currentTarget.style.transform = "";
}

export default function Skills() {
  return (
    <section id="skills" className="py-[120px] bg-bg2">
      <div className="max-w-6xl mx-auto px-8">
        <div className="rv">
          <div className="slbl flex items-center gap-3 font-mono text-[.68rem] text-cyan tracking-[.15em] uppercase mb-4" data-n="02" />
          <h2 className="font-display font-bold leading-[1.1] tracking-[-0.02em]" style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}>
            My Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {skills.map(({ emoji, title, desc, tags, bg, tagBg, border, text, delay }) => (
            <div
              key={title}
              className={`sc rv ${delay} relative bg-sur border border-white/10 p-7 overflow-hidden hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,.4)] transition-all duration-300 cursor-default`}
              onMouseMove={onCardMove}
              onMouseLeave={onCardLeave}
            >
              <div className={`w-11 h-11 rounded-lg ${bg} flex items-center justify-center mb-4 text-xl`}>
                {emoji}
              </div>
              <div className="font-display font-semibold text-base mb-1.5">{title}</div>
              <div className="text-muted text-[.84rem] leading-relaxed mb-4">{desc}</div>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`font-mono text-[.6rem] px-2.5 py-1 rounded-full ${tagBg} ${border} border ${text}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
