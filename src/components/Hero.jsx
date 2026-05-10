import { useEffect, useRef } from "react";
import * as THREE from "three";

// ── Typing Effect Hook ─────────────────────────────────────────
function useTyping(elRef) {
  useEffect(() => {
    const words = [
      "full stack applications",
      "responsive websites",
      "REST APIs",
      "mobile applications",
      "modern UI/UX",
      "FastAPI backends",
      "Flutter apps",
      "React dashboards",
      "database systems",
      "AI chat agents",
      "cloud deployment",
      "open source projects",
    ];
    let wi = 0,
      ci = 0,
      del = false;
    let timer;

    function type() {
      const w = words[wi];
      if (elRef.current)
        elRef.current.textContent = del ? w.slice(0, ci--) : w.slice(0, ci++);
      let d = del ? 55 : 105;
      if (!del && ci > w.length) {
        del = true;
        d = 1700;
      }
      if (del && ci < 0) {
        del = false;
        wi = (wi + 1) % words.length;
        ci = 0;
        d = 280;
      }
      timer = setTimeout(type, d);
    }
    type();
    return () => clearTimeout(timer);
  }, [elRef]);
}

// ── Three.js Hook ──────────────────────────────────────────────
function useThreeCanvas(canvasRef) {
  useEffect(() => {
    const cv = canvasRef.current;

    if (!cv) return;

    const renderer = new THREE.WebGLRenderer({
      canvas: cv,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(innerWidth, innerHeight);

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(
      55,
      innerWidth / innerHeight,
      0.1,
      500,
    );
    cam.position.z = 90;

    // // Particles
    const N = 280;
    const pos = new Float32Array(N * 3);
    const vel = [];
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 220;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 130;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 70;
      vel.push({
        x: (Math.random() - 0.5) * 0.035,
        y: (Math.random() - 0.5) * 0.022,
      });
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    scene.add(
      new THREE.Points(
        geo,
        new THREE.PointsMaterial({
          color: 0x63d2ff,
          size: 0.55,
          transparent: true,
          opacity: 0.45,
        }),
      ),
    );

    // Lines
    const lp = new Float32Array(N * N * 6);
    const lgeo = new THREE.BufferGeometry();
    const la = new THREE.BufferAttribute(lp, 3);
    la.setUsage(THREE.DynamicDrawUsage);
    lgeo.setAttribute("position", la);
    scene.add(
      new THREE.LineSegments(
        lgeo,
        new THREE.LineBasicMaterial({
          color: 0x63d2ff,
          transparent: true,
          opacity: 0.055,
        }),
      ),
    );

    // Wireframe objects
    const addW = (g, col, x, y, z) => {
      const m = new THREE.Mesh(
        g,
        new THREE.MeshBasicMaterial({
          color: col,
          wireframe: true,
          transparent: true,
          opacity: 0.09,
        }),
      );
      m.position.set(x, y, z);
      scene.add(m);
      return m;
    };
    const o1 = addW(new THREE.IcosahedronGeometry(7, 1), 0x63d2ff, 55, 18, -30);
    const o2 = addW(new THREE.OctahedronGeometry(5), 0xa8ff57, -58, -14, -20);
    const o3 = addW(
      new THREE.TorusGeometry(9, 1, 8, 20),
      0xff7b3d,
      -15,
      28,
      -40,
    );

    let cx2 = 0,
      cy2 = 0,
      cmx = 0,
      cmy = 0,
      fr = 0;
    const onMouse = (e) => {
      cmx = (e.clientX / innerWidth - 0.5) * 10;
      cmy = -(e.clientY / innerHeight - 0.5) * 7;
    };
    document.addEventListener("mousemove", onMouse);

    let rafId;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      fr++;
      cx2 += (cmx - cx2) * 0.03;
      cy2 += (cmy - cy2) * 0.03;
      cam.position.x = cx2;
      cam.position.y = cy2;
      cam.lookAt(scene.position);

      for (let i = 0; i < N; i++) {
        pos[i * 3] += vel[i].x;
        pos[i * 3 + 1] += vel[i].y;
        if (pos[i * 3] > 110) pos[i * 3] = -110;
        if (pos[i * 3] < -110) pos[i * 3] = 110;
        if (pos[i * 3 + 1] > 65) pos[i * 3 + 1] = -65;
        if (pos[i * 3 + 1] < -65) pos[i * 3 + 1] = 65;
      }
      geo.attributes.position.needsUpdate = true;

      if (fr % 3 === 0) {
        let lc = 0;
        const D = 20;
        for (let i = 0; i < N && lc < 1800; i++)
          for (let j = i + 1; j < N && lc < 1800; j++) {
            const dx = pos[i * 3] - pos[j * 3],
              dy = pos[i * 3 + 1] - pos[j * 3 + 1];
            if (
              Math.abs(dx) < D &&
              Math.abs(dy) < D &&
              dx * dx + dy * dy < D * D
            ) {
              lp[lc * 6] = pos[i * 3];
              lp[lc * 6 + 1] = pos[i * 3 + 1];
              lp[lc * 6 + 2] = pos[i * 3 + 2];
              lp[lc * 6 + 3] = pos[j * 3];
              lp[lc * 6 + 4] = pos[j * 3 + 1];
              lp[lc * 6 + 5] = pos[j * 3 + 2];
              lc++;
            }
          }
        lgeo.setDrawRange(0, lc * 2);
        lgeo.attributes.position.needsUpdate = true;
      }

      const t = fr * 0.008;
      o1.rotation.x += 0.003;
      o1.rotation.y += 0.005;
      o1.position.y = 18 + Math.sin(t * 0.7) * 3;
      o2.rotation.x += 0.004;
      o2.rotation.z += 0.003;
      o2.position.y = -14 + Math.cos(t * 0.5) * 4;
      o3.rotation.x += 0.002;
      o3.rotation.y += 0.003;
      o3.position.y = 28 + Math.sin(t * 0.6) * 2;
      renderer.render(scene, cam);
    };
    animate();

    const onResize = () => {
      cam.aspect = innerWidth / innerHeight;
      cam.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, [canvasRef]);
}

// ── GitHub SVG ─────────────────────────────────────────────────
const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const XIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials = [
  { href: "https://github.com/mukund1234-jpg", Icon: GithubIcon },
  { href: "https://linkedin.com/in/mukund-aparaj", Icon: LinkedinIcon },
  { href: "https://twitter.com/mukund1234_jpg", Icon: XIcon },
];

export default function Hero() {
  const canvasRef = useRef(null);
  const typRef = useRef(null);
  useThreeCanvas(canvasRef);
  useTyping(typRef);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-[2] max-w-6xl mx-auto px-8 pt-[120px] pb-20 w-full">
        {/* Available badge */}
        <div className="h-tag inline-flex items-center gap-2 font-mono text-[0.7rem] text-cyan tracking-[.12em] uppercase mb-7 bg-cyan/5 border border-cyan/20 px-[14px] py-[6px] rounded">
          <span className="pdot w-[6px] h-[6px] rounded-full bg-cyan" />
          Available for work
        </div>

        {/* Name */}
        <h1
          className="h-name font-display font-bold leading-[.95] tracking-[-0.03em] mb-5"
          style={{ fontSize: "clamp(3.2rem,8vw,7rem)" }}
        >
          Mukund
          <br />
          <span className="text-cyan">Aparaj.</span>
        </h1>

        {/* Role */}
        <p
          className="h-role font-mono text-muted mb-8"
          style={{ fontSize: "clamp(.85rem,1.8vw,1rem)" }}
        >
          I build &nbsp;
          <span className="text-lime" ref={typRef} />
          <span className="cblk" />
        </p>

        {/* Bio */}
        <p className="h-bio max-w-[500px] text-muted text-base leading-[1.8] mb-10">
          Full-stack developer with{" "}
          <strong className="text-white font-medium">1+ years</strong> crafting
          high-performance digital experiences. Passionate about{" "}
          <strong className="text-white font-medium">clean code</strong>,
          scalable architecture, and beautiful UI that users actually love.
        </p>

        {/* Buttons */}
        <div className="h-btns flex flex-wrap gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-mono text-[.78rem] px-7 py-[13px] bg-cyan text-bg  font-bold tracking-[.06em] border border-cyan hover:shadow-cyan hover:-translate-y-0.5 transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-mono text-[.78rem] px-7 py-[13px] bg-transparent text-white  tracking-[.06em] border border-white/15 hover:border-cyan hover:text-cyan hover:-translate-y-0.5 transition-all"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      {/* <div className="h-scr absolute bottom-8 left-8 flex items-center gap-3 font-mono text-[.62rem] text-muted tracking-[.1em]">
        <div className="w-10 h-px" style={{ background: "linear-gradient(90deg,transparent,#5a6a85)" }} />
        SCROLL DOWN
      </div> */}

      {/* Social sidebar */}
      <div className="hsoc h-soc absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-[18px] items-center">
        {socials.map(({ href, Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="si w-9 h-9 border border-white/10 rounded-md flex items-center justify-center text-muted hover:border-cyan hover:text-cyan hover:shadow-cyan-sm hover:-translate-x-0.5 transition-all"
          >
            <Icon />
          </a>
        ))}
      </div>
    </section>
  );
}
