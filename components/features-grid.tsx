// feature-grid.tsx
"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  BarChart3,
  Users,
  LayoutDashboard,
  Zap,
  MessageCircle,
  Wifi,
  Bot,
  Puzzle,
  Shield,
  Eye,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string; // changed to gradient for more visual pop
}

const features: Feature[] = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Overview",
    description: "Complete visibility into your digital ecosystem.",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Teamwork",
    description: "Collaborative tools that unite your team.",
    gradient: "from-purple-400 to-pink-400",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analytics",
    description: "Track user behavior and make data-driven decisions.",
    gradient: "from-green-400 to-emerald-400",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Dashboard",
    description: "Centralized data view for instant insights.",
    gradient: "from-orange-400 to-amber-400",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Efficiency",
    description: "Optimized workflows that save time and resources.",
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Collaboration",
    description: "Work together seamlessly across teams.",
    gradient: "from-indigo-400 to-blue-400",
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Connectivity",
    description: "Seamless integration with your existing stack.",
    gradient: "from-teal-400 to-cyan-400",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Automation",
    description: "Streamline workflows with intelligent automation.",
    gradient: "from-red-400 to-rose-400",
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: "Integration",
    description: "Connect your favorite tools effortlessly.",
    gradient: "from-sky-400 to-blue-400",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security",
    description: "Enterprise-grade protection for peace of mind.",
    gradient: "from-gray-400 to-slate-400",
  },
];

const FRAME_OFFSET = -32;      // slightly more spacing
const FRAMES_VISIBLE = 3;
const SCROLL_THRESHOLD = 30;   // more sensitive

function clamp(value: number, [min, max]: [number, number]) {
  return Math.min(Math.max(value, min), max);
}

export default function FeaturesGrid() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollAccumulator = React.useRef(0);
  const lastUpdateTime = React.useRef(Date.now());
  const touchStartY = React.useRef(0);

  const maxIndex = features.length - 1;

  // Smooth wheel/touch handler with better debounce
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const MIN_UPDATE_INTERVAL = 60;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      // Normalize delta for smoother accumulation
      const delta = e.deltaY > 0 ? Math.min(e.deltaY, 50) : Math.max(e.deltaY, -50);
      scrollAccumulator.current += delta;

      const now = Date.now();
      if (
        Math.abs(scrollAccumulator.current) >= SCROLL_THRESHOLD &&
        now - lastUpdateTime.current >= MIN_UPDATE_INTERVAL
      ) {
        const direction = scrollAccumulator.current > 0 ? 1 : -1;
        setCurrentIndex((prev) => clamp(prev + direction, [0, maxIndex]));
        scrollAccumulator.current = 0;
        lastUpdateTime.current = now;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const deltaY = touchStartY.current - e.touches[0].clientY;
      touchStartY.current = e.touches[0].clientY;
      scrollAccumulator.current += deltaY;

      const now = Date.now();
      if (
        Math.abs(scrollAccumulator.current) >= SCROLL_THRESHOLD &&
        now - lastUpdateTime.current >= MIN_UPDATE_INTERVAL
      ) {
        const direction = scrollAccumulator.current > 0 ? 1 : -1;
        setCurrentIndex((prev) => clamp(prev + direction, [0, maxIndex]));
        scrollAccumulator.current = 0;
        lastUpdateTime.current = now;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [maxIndex]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setCurrentIndex((prev) => clamp(prev + 1, [0, maxIndex]));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setCurrentIndex((prev) => clamp(prev - 1, [0, maxIndex]));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [maxIndex]);

  return (
    <section className="relative py-28 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.5em] text-white/40">
            Our Capabilities
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Scale
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/50 text-lg">
            From strategy to execution, we provide end-to-end solutions that drive results.
          </p>
        </motion.div>

        {/* Two-column layout: redesigned with better responsiveness */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Stacking cards with 3D tilt on active card */}
          <div
            ref={containerRef}
            className="relative w-full lg:w-1/2 h-[500px] flex items-center justify-center cursor-grab select-none"
          >
            {features.map((feature, index) => {
              const offsetIndex = index - currentIndex;
              const isBelow = index < currentIndex;
              const scale = clamp(1 - offsetIndex * 0.08, [0.65, 1]);
              const y = clamp(
                offsetIndex * FRAME_OFFSET,
                [FRAME_OFFSET * FRAMES_VISIBLE, Infinity]
              );
              const opacity = isBelow ? 0 : clamp(1 - offsetIndex * 0.2, [0, 1]);
              const blur = isBelow ? 6 : 0;

              // Only the active card gets tilt effect
              const isActive = index === currentIndex;
              
              return (
                <motion.div
                  key={index}
                  className="absolute w-[85%] max-w-[420px]"
                  initial={false}
                  animate={{
                    y,
                    scale,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      mass: 0.6,
                    },
                  }}
                  style={{
                    zIndex: 1000 - index,
                    opacity,
                    filter: `blur(${blur}px)`,
                    transition: "opacity 0.25s ease, filter 0.25s ease",
                  }}
                >
                  {isActive ? (
                    <TiltCard feature={feature} />
                  ) : (
                    <StaticCard feature={feature} />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right side: enhanced detail + progress */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl bg-gradient-to-br ${features[currentIndex].gradient} bg-opacity-10`}>
                  <div className="text-white">
                    {features[currentIndex].icon}
                  </div>
                </div>
                <span className="text-sm font-mono text-white/40">
                  {String(currentIndex + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {features[currentIndex].title}
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                {features[currentIndex].description}
              </p>
            </motion.div>

            {/* Progress dots with animations */}
            <div className="flex gap-2 flex-wrap">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                    i === currentIndex
                      ? "w-12 bg-gradient-to-r from-blue-400 to-cyan-400"
                      : i < currentIndex
                      ? "w-4 bg-white/40"
                      : "w-4 bg-white/10 hover:bg-white/20"
                  }`}
                  aria-label={`Go to feature ${i + 1}`}
                />
              ))}
            </div>

            {/* Nav buttons - redesigned with glass effect */}
            <div className="flex gap-4">
              <NavButton
                onClick={() => setCurrentIndex((p) => clamp(p - 1, [0, maxIndex]))}
                disabled={currentIndex === 0}
                direction="prev"
              />
              <NavButton
                onClick={() => setCurrentIndex((p) => clamp(p + 1, [0, maxIndex]))}
                disabled={currentIndex === maxIndex}
                direction="next"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3D Tilt Card component for active card
function TiltCard({ feature }: { feature: Feature }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [6, -6]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-6, 6]), { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    x.set(mouseX - centerX);
    y.set(mouseY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="cursor-pointer"
    >
      <CardContent feature={feature} isActive />
    </motion.div>
  );
}

function StaticCard({ feature }: { feature: Feature }) {
  return <CardContent feature={feature} isActive={false} />;
}

function CardContent({ feature, isActive }: { feature: Feature; isActive: boolean }) {
  return (
    <div className="relative group">
      {/* Animated gradient border on active card */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 ${
          isActive ? "group-hover:opacity-100" : ""
        } blur-md`}
        style={{ opacity: isActive ? 0.6 : 0 }}
      />
      <div className="relative p-6 rounded-2xl border border-white/[0.15] bg-white/[0.06] backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-white/[0.25]">
        <div className="w-12 h-12 rounded-xl bg-white/[0.08] border border-white/[0.1] flex items-center justify-center mb-4 text-white/90">
          {feature.icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          {feature.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

function NavButton({
  onClick,
  disabled,
  direction,
}: {
  onClick: () => void;
  disabled: boolean;
  direction: "prev" | "next";
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="relative px-6 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white/60 hover:text-white hover:border-white/[0.2] disabled:opacity-20 disabled:pointer-events-none transition-all duration-200 backdrop-blur-sm font-medium text-sm"
    >
      {direction === "prev" ? "← Previous" : "Next →"}
    </button>
  );
}