import { useState } from "react";

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const contacts = [
  {
    href: "mailto:aparajmukund8@gmail.com",
    icon: <span>✉</span>,
    label: "aparajmukund8@gmail.com",
  },
  {
    href: "https://linkedin.com",
    icon: <span className="font-bold text-[10px]">in</span>,
    label: "linkedin.com/in/mukundaparaj",
    target: "_blank",
  },
  {
    href: "https://github.com/mukund1234-jpg",
    icon: <GithubIcon />,
    label: "github.com/mAp15_dev",
    target: "_blank",
  },
  {
    href: "https://twitter.com",
    icon: <span className="text-[11px]">𝕏</span>,
    label: "@mAP15_dev",
    target: "_blank",
  },
];

const inputClass =
  "bg-sur border border-white/10 rounded-md px-4 py-3 text-white font-body text-[.9rem] outline-none focus:border-cyan focus:shadow-[0_0_0_3px_rgba(99,210,255,0.08)] transition-all placeholder:text-muted/50";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  };

  const btnText =
    status === "sending" ? "Sending..." :
    status === "sent"    ? "✓ Message Sent!" :
    "Send Message ↗";

  const btnStyle =
    status === "sent"
      ? { background: "#a8ff57", color: "#080c14" }
      : status === "sending"
      ? { opacity: 0.6 }
      : {};

  return (
    <section id="contact" className="py-[120px]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="rv">
          <div className="slbl flex items-center gap-3 font-mono text-[.68rem] text-cyan tracking-[.15em] uppercase mb-4" data-n="06" />
          <h2 className="font-display font-bold leading-[1.1] tracking-[-0.02em]" style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}>
            Let's Build Together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-14">
          {/* Info */}
          <div className="rl">
            <p className="text-muted leading-[1.8] mb-8">
              I'm currently open to{" "}
              <strong className="text-white font-medium">freelance projects</strong> and{" "}
              <strong className="text-white font-medium">full-time roles</strong>. If you
              have an interesting problem to solve, I'd love to talk.
            </p>
            <div className="flex flex-col gap-3.5">
              {contacts.map(({ href, icon, label, target }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel={target ? "noreferrer" : undefined}
                  className="flex items-center gap-3.5 font-mono text-[.78rem] text-muted hover:text-cyan transition-colors group"
                >
                  <div className="w-[38px] h-[38px] border border-white/10 rounded-md flex items-center justify-center group-hover:border-cyan transition-all">
                    {icon}
                  </div>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Form — NO <form> tag per React artifact rules; use div + onSubmit via button */}
          <div className="rr flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[.66rem] text-muted tracking-[.08em] uppercase">NAME</label>
              <input type="text" placeholder="Jane Doe" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[.66rem] text-muted tracking-[.08em] uppercase">EMAIL</label>
              <input type="email" placeholder="jane@company.com" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[.66rem] text-muted tracking-[.08em] uppercase">MESSAGE</label>
              <textarea
                rows={5}
                placeholder="Hey Mukund, I'd like to talk about..."
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="w-full font-mono text-[.78rem] px-7 py-[14px] bg-cyan text-bg font-bold tracking-[.06em] rounded hover:shadow-cyan hover:-translate-y-0.5 transition-all cursor-pointer mt-1"
              style={btnStyle}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
