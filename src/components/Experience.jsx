import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    period: "2026 — Present",
    company: "Distinct Digital Solutions",
    type: "Full-time · Remote",
    delay: "d1",
    bullets: [
      "Collaborated with the development team to build responsive full stack web applications using React.js, Tailwind CSS, and modern frontend technologies.",
      
      "Developed cross-platform mobile applications using Flutter with clean UI, responsive layouts, and API integration.",
      
      "Built scalable backend APIs using Python and FastAPI, including authentication, CRUD operations, file uploads, and database integration.",
      
      "Integrated third-party backend APIs, payment gateways, and external services to improve application functionality and automation.",
      
      "Developed AI automation chatbots using LangGraph and LangChain for workflow automation, intelligent conversations, and customer support systems.",
      
      "Used Git and GitHub for version control, team collaboration, branch management, and maintaining clean development workflows.",
    ],
  },
];

// const stats = [
//   { target: 50, label: "PROJECTS SHIPPED" },
//   { target: 5,  label: "YEARS EXPERIENCE" },
//   { target: 12, label: "OPEN SOURCE REPOS" },
//   { target: 3,  label: "COMPANIES" },
// ];

// ── Animated counter ───────────────────────────────────────────
function Counter({ target, label }) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        let s = 0;
        const go = () => {
          s++;
          el.textContent = s + "+";
          if (s < target) setTimeout(go, 900 / target);
        };
        go();
        obs.disconnect();
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div className="bg-sur hover:bg-sur2 transition-colors p-7 text-center">
      <div ref={elRef} className="font-display font-bold text-[2.2rem] text-cyan leading-none">
        0+
      </div>
      <div className="font-mono text-[.62rem] text-muted tracking-[.1em] mt-1.5">{label}</div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-[120px] bg-bg2">
      <div className="max-w-6xl mx-auto px-8">
        <div className="rv">
          <div className="slbl flex items-center gap-3 font-mono text-[.68rem] text-cyan tracking-[.15em] uppercase mb-4" data-n="04" />
          <h2 className="font-display font-bold leading-[1.1] tracking-[-0.02em]" style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}>
            Where I've Worked
          </h2>
        </div>

        {/* Timeline */}
        <div className="tl relative pl-7 mt-14">
          {experiences.map(({ role, period, company, type, delay, bullets }) => (
            <div key={company} className={`rv ${delay} relative pb-14 group`}>
              {/* Timeline dot */}
              <div className="absolute -left-[33px] top-[6px] w-[10px] h-[10px] rounded-full bg-bg border-2 border-cyan transition-all duration-300 group-hover:bg-cyan group-hover:shadow-cyan-sm" />

              <div className="flex items-start justify-between gap-4 mb-1.5 flex-wrap">
                <div className="font-display font-semibold text-[1.05rem]">{role}</div>
                <div className="font-mono text-[.66rem] text-cyan tracking-[.08em] px-3 py-1 border border-cyan/20 rounded-full whitespace-nowrap">
                  {period}
                </div>
              </div>

              <div className="font-mono text-[.73rem] text-muted mb-3">
                <a href="#" className="text-cyan hover:opacity-70 transition-opacity">{company}</a>
                {" "}· {type}
              </div>

              <ul className="flex flex-col gap-1.5 list-none">
                {bullets.map((b, i) => (
                  <li
                    key={i}
                    className="text-[.87rem] text-muted pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-cyan before:text-[.62rem] leading-[1.65]"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        {/* <div className="rv d2 mt-20 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10 border border-white/10 rounded-xl overflow-hidden">
          {stats.map(({ target, label }) => (
            <Counter key={label} target={target} label={label} />
          ))}
        </div> */}
      </div>
    </section>
  );
}
