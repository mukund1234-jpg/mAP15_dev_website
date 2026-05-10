import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// ── Custom Cursor ──────────────────────────────────────────────
function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${e.clientX - 3}px,${e.clientY - 3}px)`;
    };

    let raf;
    const lerp = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${ring.current.x - 16}px,${ring.current.y - 16}px)`;
      raf = requestAnimationFrame(lerp);
    };
    raf = requestAnimationFrame(lerp);

    const addBig = () => ringRef.current?.classList.add("big");
    const remBig = () => ringRef.current?.classList.remove("big");

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a,button,.pi,.sc").forEach((el) => {
      el.addEventListener("mouseenter", addBig);
      el.addEventListener("mouseleave", remBig);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} id="cdot" />
      <div ref={ringRef} id="cring" />
    </>
  );
}

// ── Scroll Reveal Observer ─────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rv,.rl,.rr");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}

// ── Page Fade In ───────────────────────────────────────────────
function usePageFade() {
  useEffect(() => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity .5s ease";
    const raf = requestAnimationFrame(() => {
      document.body.style.opacity = "1";
    });
    return () => cancelAnimationFrame(raf);
  }, []);
}

export default function App() {
  useScrollReveal();
  usePageFade();
  const canvasRef = useRef(null);

  return (
    <>
      {/* <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" /> */}
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
