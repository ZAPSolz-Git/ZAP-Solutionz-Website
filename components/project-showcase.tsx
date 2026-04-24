"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────
// DATA – same as your existing project list
// ─────────────────────────────────────────────
interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Cinecms",
    category: "Media Managing Platform",
    year: "2024",
    image: "https://res.cloudinary.com/dxwoomfzw/image/upload/v1776152992/cinecms_dl9wvb.png",
  },
  {
    id: 2,
    title: "Movement Creation",
    category: "Creative Studio",
    year: "2024",
    image: "https://res.cloudinary.com/dxwoomfzw/image/upload/v1776152992/movementcreation_t8zepe.png",
  },
  {
    id: 3,
    title: "Tradingwala",
    category: "Trading Simulation",
    year: "2023",
    image: "https://res.cloudinary.com/dxwoomfzw/image/upload/v1776152994/tradingwala_olswqn.png",
  },
  {
    id: 4,
    title: "Link-n-Smile",
    category: "E-commerce",
    year: "2023",
    image: "https://res.cloudinary.com/dxwoomfzw/image/upload/v1776152993/linkn-smile_xfvwm9.png",
  },
  {
    id: 5,
    title: "Quickscan",
    category: "Appointment Booking",
    year: "2024",
    image: "https://res.cloudinary.com/dxwoomfzw/image/upload/v1776152992/quickscan_epd5xc.png",
  },
  {
    id: 6,
    title: "Instapeel",
    category: "Beauty E-commerce",
    year: "2024",
    image: "https://res.cloudinary.com/dxwoomfzw/image/upload/v1776152992/instapeels_jorkvk.png",
  },
  {
    id: 7,
    title: "Society CRM",
    category: "Society Management",
    year: "2023",
    image: "https://res.cloudinary.com/dxwoomfzw/image/upload/v1776152991/admin_healthcare_asia_zme062.png",
  },
  {
    id: 8,
    title: "Prevago",
    category: "Preventive Medicine",
    year: "2024",
    image: "https://res.cloudinary.com/dxwoomfzw/image/upload/v1776152993/prevego_bsfhd2.png",
  },
  {
    id: 9,
    title: "Samsom Orgo",
    category: "Fertilizers",
    year: "2023",
    image: "https://res.cloudinary.com/dxwoomfzw/image/upload/v1776152994/samson-orgo_tq5iy1.png",
  },
];

// ─────────────────────────────────────────────
// PROJECT CARD
// ─────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex-shrink-0 snap-start"
      style={{ width: "clamp(280px, 28vw, 400px)" }}
    >
      {/* Card shell */}
      <div className="relative h-[420px] md:h-[480px] w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0a] cursor-pointer transition-all duration-500 group-hover:border-white/[0.14]">

        {/* Image */}
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 80vw, 28vw"
            loading="lazy"
            unoptimized
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500 group-hover:from-black/95" />
        </div>

        {/* Index number — top left */}
        <div className="absolute top-5 left-5 text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Year badge — top right */}
        <div className="absolute top-5 right-5 px-2.5 py-1 rounded-full bg-white/[0.07] backdrop-blur-sm border border-white/[0.08]">
          <span className="text-[9px] font-semibold tracking-[0.4em] text-white/50 uppercase">
            {project.year}
          </span>
        </div>

        {/* Arrow — appears on hover */}
        <div className="absolute top-5 right-5 h-8 w-8 flex items-center justify-center rounded-full bg-white opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-[9px] font-semibold uppercase tracking-[0.5em] text-white/35 block mb-2">
            {project.category}
          </span>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-tight">
            {project.title}
          </h3>

          {/* Bottom accent bar */}
          <div className="mt-4 h-px w-0 bg-gradient-to-r from-white/60 to-white/0 transition-all duration-500 group-hover:w-full" />
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// CTA CARD (last item in scroll lane)
// ─────────────────────────────────────────────
function CtaCard() {
  return (
    <div
      className="group relative flex-shrink-0 snap-start"
      style={{ width: "clamp(220px, 20vw, 300px)" }}
    >
      <Link href="/work">
        <div className="relative h-[420px] md:h-[480px] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-transparent cursor-pointer flex flex-col items-center justify-center gap-6 transition-all duration-500 hover:border-white/25 hover:bg-white/[0.02]">

          {/* Circle button */}
          <div className="h-16 w-16 rounded-full border border-white/20 flex items-center justify-center transition-all duration-400 group-hover:border-white group-hover:bg-white group-hover:scale-110">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white transition-colors duration-300 group-hover:text-black"
            >
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="text-center px-6">
            <p className="text-white font-bold text-lg tracking-tight">View All Work</p>
            <p className="text-white/30 text-[11px] uppercase tracking-[0.4em] mt-1">
              {PROJECTS.length}+ projects
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

// ─────────────────────────────────────────────
// SCROLL PROGRESS BAR
// ─────────────────────────────────────────────
function ScrollProgress({ scrollRef }: { scrollRef: React.RefObject<HTMLDivElement | null> }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [scrollRef]);

  return (
    <div className="relative h-px w-full bg-white/[0.06] rounded-full overflow-hidden">
      <motion.div
        className="absolute left-0 top-0 h-full bg-white/40 rounded-full"
        style={{ width: `${progress * 100}%` }}
        transition={{ duration: 0 }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function ProjectShowcaseHome() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  // Arrow scroll navigation
  const scrollBy = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 380;
    el.scrollBy({ left: direction === "right" ? cardWidth + 24 : -(cardWidth + 24), behavior: "smooth" });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-[#050505] py-20 md:py-28 overflow-hidden"
    >
      {/* ── HEADER ── */}
      <div
        ref={headerRef}
        className="px-6 md:px-12 lg:px-16 mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-semibold uppercase tracking-[0.5em] text-white/35 block mb-4"
          >
            Featured Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[0.95]"
          >
            Projects we're
            <br />
            <span className="text-white/25">proud of.</span>
          </motion.h2>
        </div>

        {/* Desktop CTA + nav arrows */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center gap-3"
        >
          {/* Prev */}
          <button
            onClick={() => scrollBy("left")}
            aria-label="Scroll left"
            className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:border-white/30 hover:text-white transition-all duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={() => scrollBy("right")}
            aria-label="Scroll right"
            className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:border-white/30 hover:text-white transition-all duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* View All */}
          <Link
            href="/work"
            className="group ml-2 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.35em] text-black transition-all duration-300 hover:bg-white/85"
          >
            View All Work
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* ── SCROLL LANE ── */}
      {/* Left fade edge */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#050505] to-transparent" />
      {/* Right fade edge */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#050505] to-transparent" />

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 md:px-12 lg:px-16 pb-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Hide native scrollbar in Webkit */}
        <style>{`
          #work-scroll::-webkit-scrollbar { display: none; }
        `}</style>

        {PROJECTS.map((project, i) => (
          <div key={project.id} data-card>
            <ProjectCard project={project} index={i} />
          </div>
        ))}

        {/* CTA as last card */}
        <CtaCard />
      </div>

      {/* ── SCROLL PROGRESS + MOBILE CTA ── */}
      <div className="px-6 md:px-12 lg:px-16 mt-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
        <div className="flex-1">
          <ScrollProgress scrollRef={scrollRef} />
        </div>

        {/* Mobile CTA */}
        <Link
          href="/work"
          className="md:hidden group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.35em] text-black transition-all duration-300 hover:bg-white/85 w-full"
        >
          View All Work
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        {/* Project count label */}
        <span className="hidden md:block text-[10px] font-semibold uppercase tracking-[0.45em] text-white/20 whitespace-nowrap">
          {PROJECTS.length} Projects
        </span>
      </div>
    </section>
  );
}