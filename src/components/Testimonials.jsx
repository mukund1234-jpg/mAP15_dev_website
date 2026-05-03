const testimonials = [
  {
    quote: "Mukund is the best engineer I've worked with. He delivered a project 2 weeks ahead of schedule with code so clean it practically reviewed itself.",
    name: "Sarah Kim",
    title: "Engineering Manager @ Stripe",
    initial: "S",
    gradient: "linear-gradient(135deg,#63d2ff,#a8ff57)",
    color: "#080c14",
    delay: "d1",
  },
  {
    quote: "Rare combination of deep technical skills and great product instincts. Mukund shaped our platform architecture and it scales beautifully to this day.",
    name: "James Liu",
    title: "CTO @ DevFlow",
    initial: "J",
    gradient: "linear-gradient(135deg,#ff7b3d,#ff4dab)",
    color: "#fff",
    delay: "d2",
  },
  {
    quote: "The frontend work Mukund did was next-level. Users specifically commented on how fast and smooth the app felt. Exceeded every single expectation.",
    name: "Maya Patel",
    title: "Product Lead @ Vercel",
    initial: "M",
    gradient: "linear-gradient(135deg,#a8ff57,#63d2ff)",
    color: "#080c14",
    delay: "d3",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[120px]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="rv">
          <div className="slbl flex items-center gap-3 font-mono text-[.68rem] text-cyan tracking-[.15em] uppercase mb-4" data-n="05" />
          <h2 className="font-display font-bold leading-[1.1] tracking-[-0.02em]" style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}>
            Kind Words
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {testimonials.map(({ quote, name, title, initial, gradient, color, delay }) => (
            <div
              key={name}
              className={`rv ${delay} bg-sur border border-white/10 rounded-xl p-7 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,.4)] transition-all duration-300`}
            >
              <div className="text-[2.2rem] text-cyan/25 leading-none mb-3" style={{ fontFamily: "Georgia,serif" }}>
                "
              </div>
              <p className="text-[.88rem] text-muted leading-[1.75] mb-5 italic">{quote}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-[38px] h-[38px] rounded-full flex items-center justify-center font-display font-bold text-[.9rem] flex-shrink-0"
                  style={{ background: gradient, color }}
                >
                  {initial}
                </div>
                <div>
                  <div className="font-display font-semibold text-[.88rem]">{name}</div>
                  <div className="font-mono text-[.62rem] text-muted mt-0.5">{title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
