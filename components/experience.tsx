"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const FEATURES = [
  {
    title: "Web Development",
    description:
      "We build fast, scalable, and modern web applications using the latest technologies.",
    number: "01",
    visual: "layers",
  },
  {
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps with smooth performance and intuitive UI.",
    number: "02",
    visual: "create",
  },
  {
    title: "UI/UX & Product Design",
    description:
      "We design clean, user-focused interfaces that improve engagement and conversions.",
    number: "03",
    visual: "speed",
  },
  {
    title: "CRM Systems",
    description:
      "Custom CRM solutions to manage customers, automate workflows, and improve efficiency.",
    number: "04",
    visual: "crm",
  },
];

// --- Visuals ---

function LayersVisual() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        style={{
          transform: "perspective(600px) rotateX(10deg) rotateY(-18deg)",
          position: "relative",
          width: 160,
          height: 130,
        }}
      >
        {[
          { top: 0, left: 0, width: 145, accent: true },
          { top: 18, left: 14, width: 130 },
          { top: 36, left: 24, width: 115 },
          { top: 52, left: 32, width: 100 },
        ].map((layer, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: layer.top,
              left: layer.left,
              width: layer.width,
              height: 80,
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                i === 0
                  ? "linear-gradient(135deg,#1e1e22,#28282e)"
                  : `rgba(20,20,22,${1 - i * 0.15})`,
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "0 14px",
            }}
          >
            {layer.accent && (
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#e8c97a,#c8954a)",
                  flexShrink: 0,
                }}
              />
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <div
                style={{
                  height: 2,
                  width: i === 0 ? 60 : 40 - i * 5,
                  borderRadius: 2,
                  background: "rgba(255,255,255,0.12)",
                }}
              />
              <div
                style={{
                  height: 2,
                  width: i === 0 ? 40 : 25 - i * 3,
                  borderRadius: 2,
                  background: "rgba(255,255,255,0.07)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CreateVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 300 200"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="60" y1="180" x2="240" y2="40" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="30" y1="160" x2="270" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="80" y1="190" x2="220" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="210" cy="55" r="3" fill="rgba(255,255,255,0.35)" />
        <circle cx="148" cy="110" r="3" fill="rgba(255,255,255,0.25)" />
        <circle cx="100" cy="145" r="3" fill="rgba(255,255,255,0.2)" />
      </svg>
      <div
        style={{
          position: "relative",
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 8,
          padding: "7px 16px",
          fontSize: 13,
          fontWeight: 600,
          color: "rgba(255,255,255,0.75)",
          display: "flex",
          alignItems: "center",
          gap: 7,
          transform: "rotate(-8deg)",
          backdropFilter: "blur(6px)",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
          <line x1="6" y1="1" x2="6" y2="11" />
          <line x1="1" y1="6" x2="11" y2="6" />
        </svg>
        Create
      </div>
    </div>
  );
}

function SpeedVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <span
        style={{
          position: "absolute",
          top: 22,
          right: 22,
          fontSize: 11,
          color: "rgba(255,255,255,0.35)",
          fontWeight: 500,
          letterSpacing: "0.04em",
        }}
      >
        50ms
      </span>
      <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", height: "85%" }}>
        {[
          { x2: 200, y2: 115, opacity: 0.55, w: 1.5 },
          { x2: 210, y2: 100, opacity: 0.45, w: 1.5 },
          { x2: 220, y2: 84, opacity: 0.38, w: 1.5 },
          { x2: 228, y2: 68, opacity: 0.3, w: 1.2 },
          { x2: 232, y2: 52, opacity: 0.22, w: 1.2 },
          { x2: 234, y2: 36, opacity: 0.15, w: 1 },
          { x2: 234, y2: 22, opacity: 0.1, w: 1 },
          { x2: 232, y2: 10, opacity: 0.07, w: 0.8 },
        ].map((line, i) => (
          <line
            key={i}
            x1={40 + i * 8}
            y1={150 - i * 10}
            x2={line.x2}
            y2={line.y2}
            stroke={`rgba(255,255,255,${line.opacity})`}
            strokeWidth={line.w}
            strokeLinecap="round"
          />
        ))}
        <line x1="30" y1="158" x2="100" y2="150" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="28" y1="163" x2="88" y2="157" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function CRMVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", height: "85%" }}>
        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.07)" />
          </pattern>
        </defs>
        <rect width="280" height="180" fill="url(#dots)" />
        <path d="M40,90 C80,60 120,120 160,85 S220,55 260,70" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M40,110 C80,80 120,140 160,105 S220,75 260,90" stroke="rgba(255,255,255,0.07)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <circle cx="40" cy="90" r="4" fill="rgba(255,255,255,0.2)" />
        <circle cx="160" cy="85" r="4" fill="rgba(255,255,255,0.2)" />
        <circle cx="260" cy="70" r="4" fill="rgba(255,255,255,0.2)" />
        <rect x="100" y="50" width="80" height="52" rx="6" fill="#1e1e22" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <rect x="112" y="62" width="44" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
        <rect x="112" y="74" width="30" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
        <rect x="112" y="84" width="36" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
      </svg>
    </div>
  );
}

const VISUALS: Record<string, React.FC> = {
  layers: LayersVisual,
  create: CreateVisual,
  speed: SpeedVisual,
  crm: CRMVisual,
};

// --- Tilt card wrapper ---

function TiltCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col rounded-[18px] border border-white/[0.06] bg-[#141416] overflow-hidden cursor-pointer transition-[border-color] duration-300 hover:border-white/[0.12]"
    >
      {children}
    </motion.div>
  );
}

// --- Main Section ---

export default function Experience() {
  return (
    <section
      id="features"
      className="relative bg-[#0a0a0b] px-6 py-32 md:px-12 md:py-48"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4 block text-[10px] font-medium tracking-[0.5em] uppercase text-white/25"
        >
          Our Services
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 text-4xl font-semibold tracking-tight md:mb-20 md:text-6xl bg-gradient-to-r from-white to-white/35 bg-clip-text text-transparent"
        >
          What We Build
        </motion.h2>

        <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => {
            const Visual = VISUALS[feature.visual];
            return (
              <TiltCard key={feature.title} delay={0.1 * i}>
                {/* Visual area */}
                <div className="relative min-h-[200px] flex-1">
                  <Visual />
                </div>

                {/* Bottom bar */}
                <div className="flex items-end justify-between gap-3 border-t border-white/[0.04] px-5 py-5">
                  <p className="text-[15px] font-semibold leading-snug tracking-tight text-white max-w-[180px]">
                    {feature.title}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.92 }}
                    className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full border border-white/[0.14] transition-colors duration-300 group-hover:border-white/25 group-hover:bg-white/[0.08]"
                  >
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5">
                      <line x1="6.5" y1="1" x2="6.5" y2="12" />
                      <line x1="1" y1="6.5" x2="12" y2="6.5" />
                    </svg>
                  </motion.button>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}