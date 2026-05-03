const techTags = ["React", "Node.js", "PostgreSQL", "AWS", "Python", "FastAPI", "Django"];

const terminalLines = [
  { prompt: true, cmd: "cat about.json" },
  { text: "{" },
  { key: '"name"',        val: '"Mukund Aparaj"',      comma: true },
  { key: '"role"',        val: '"Full Stack Developer"', comma: true },
  { key: '"location"',    val: '"Mumbai, India"',        comma: true },
  { key: '"available"',   val: "true",                   isLime: true, comma: true },
  { key: '"chai_per_day"',val: "4",                      isNum: true, comma: true },
  { key: '"loves"',       val: '["clean code", "open source", "dark mode"]', combo: true },
  { text: "}" },
  { prompt: true, cmd: "npm run hire-mukund", mt: true },
  { success: "✔ Ready to build something amazing together" },
];

export default function About() {
  return (
    <section id="about" className="py-[120px]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: Avatar */}
          <div className="rl relative">
            <div className="relative  overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan/12 before:to-lime/6 before:z-[1]">
              <div className="w-full bg-sur flex items-center justify-center" style={{ aspectRatio: "4/5" }}>
                <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[68%] opacity-55">
                  <circle cx="100" cy="58" r="34" stroke="#63d2ff" strokeWidth="1.5" fill="rgba(99,210,255,.05)"/>
                  <circle cx="100" cy="58" r="20" fill="rgba(99,210,255,.09)" stroke="#63d2ff" strokeWidth=".8"/>
                  <circle cx="100" cy="58" r="9" fill="#63d2ff" opacity=".45"/>
                  <path d="M66 140 Q100 118 134 140 L148 205 H52 Z" fill="rgba(99,210,255,.05)" stroke="#63d2ff" strokeWidth="1.2"/>
                  <rect x="62" y="170" width="76" height="46" rx="4" fill="#0a0e18" stroke="#63d2ff" strokeWidth=".8"/>
                  <text x="71" y="190" fill="#a8ff57" fontFamily="monospace" fontSize="8.5">&lt;/code&gt;</text>
                  <text x="68" y="207" fill="#63d2ff" fontFamily="monospace" fontSize="6.5">const dev = () =&gt; {"{}"}</text>
                  <path d="M42 120 L30 110 M42 120 L30 132" stroke="#63d2ff" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M158 120 L170 110 M158 120 L170 132" stroke="#a8ff57" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="ac-tl" />
            <div className="ac-br" />
            {/* Badge */}
            <div className="absolute -bottom-5 -right-5 bg-sur2 border border-cyan/20  px-5 py-4 z-[2]">
              <div className="font-display text-[2rem] font-bold text-cyan leading-none">5+</div>
              <div className="font-mono text-[.62rem] text-muted tracking-[.1em] mt-1">YEARS EXP.</div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="rr">
            <div className="slbl flex items-center gap-3 font-mono text-[.68rem] text-cyan tracking-[.15em] uppercase mb-4" data-n="01" />
            <h2
              className="font-display font-bold leading-[1.1] tracking-[-0.02em] mb-7"
              style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}
            >
              Turning ideas into<br />
              <span className="text-cyan">elegant code</span>
            </h2>
            <p className="text-muted leading-[1.8] mb-5">
              Hey — I'm Mukund, a{" "}
              <strong className="text-white font-medium">Full Stack Software Developer</strong>{" "}
              based in Mumbai, India. I specialize in building fast, accessible, and
              visually stunning web applications from concept to deployment.
            </p>
            <p className="text-muted leading-[1.8] mb-7">
              I've shipped products used by{" "}
              <strong className="text-white font-medium">10+ users</strong>, led
              engineering teams, and contributed to open-source projects. When I'm not
              coding, I'm writing about software architecture or playing chess.
            </p>
            <div className="flex flex-wrap gap-2">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[.68rem] px-[14px] py-[6px] border border-white/10 rounded text-muted hover:border-cyan hover:text-cyan transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Terminal block */}
        <div className="rv d2 mt-16 bg-[#0a0e18] border border-white/10 overflow-hidden">
          {/* Title bar */}
          <div className="bg-sur px-4 py-[10px] flex items-center gap-2">
            <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
            <span className="font-mono text-[.68rem] text-muted mx-auto tracking-[.05em]">mukund@portfolio ~</span>
          </div>
          <div className="p-6 font-mono text-[.76rem] leading-[2] text-muted">
            <div><span className="text-cyan">❯ </span><span className="text-white">cat about.json</span></div>
            <div>{"{"}</div>
            <div>&nbsp;&nbsp;<span className="text-lime">"name"</span>: <span className="text-org">"Mukund Aparaj"</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-lime">"role"</span>: <span className="text-org">"Full Stack Developer"</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-lime">"location"</span>: <span className="text-org">"Mumbai, India"</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-lime">"available"</span>: <span className="text-lime">true</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-lime">"chai_per_day"</span>: <span className="text-org">4</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-lime">"loves"</span>: [<span className="text-org">"clean code"</span>, <span className="text-org">"open source"</span>, <span className="text-org">"dark mode"</span>]</div>
            <div>{"}"}</div>
            <div className="mt-2"><span className="text-cyan">❯ </span><span className="text-white">npm run hire-mukund</span></div>
            <div><span className="text-lime">✔ Ready to build something amazing together</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
