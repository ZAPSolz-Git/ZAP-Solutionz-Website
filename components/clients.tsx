// components/clients.tsx
"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Client {
  name: string;
  logo: string; // image URL or placeholder text
  logoType: "image" | "text";
}

const CLIENTS: Client[] = [
  {
    name: "Nezal Herbacare",
    logo: "https://res.cloudinary.com/demo/image/upload/v1/samples/logo.png", // replace with actual
    logoType: "text",
  },
  { name: "Organic Hygiene Products LLP", logo: "", logoType: "text" },
  { name: "Dev Associates", logo: "", logoType: "text" },
  { name: "Aditya Birla Group", logo: "", logoType: "text" },
  { name: "Heckyl", logo: "", logoType: "text" },
  { name: "Instapeel", logo: "", logoType: "text" },
];

// Initials avatar fallback
function ClientCard({ client }: { client: Client }) {
  const initials = client.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-8 py-6 min-w-[180px] hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300">
      {/* Logo placeholder circle */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] text-sm font-bold text-white/50">
        {initials}
      </div>
      <span className="text-center text-[12px] font-medium text-white/40 leading-snug max-w-[140px]">
        {client.name}
      </span>
    </div>
  );
}

export default function Clients() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Infinite scroll animation via CSS — no JS overhead
  return (
    <section className="relative bg-[#050505] pb-32 overflow-hidden" id="clients">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.5em] text-white/30">
            Our Clients
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Trusted by industry leaders.
          </h2>
          <p className="max-w-xl text-base text-white/40 leading-relaxed">
            From Fortune 500 conglomerates to fast-growing startups — companies
            across India rely on ZAP to power their operations.
          </p>
        </div>
      </div>

      {/* Marquee track */}
      <div className="relative overflow-hidden">
        {/* Left/right fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#050505] to-transparent" />

        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {/* Duplicate for seamless loop */}
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <ClientCard key={`${client.name}-${i}`} client={client} />
          ))}
        </motion.div>
      </div>

      {/* Stats row */}
      <div className="relative mx-auto mt-20 max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "25+", label: "Years of Experience" },
            { value: "50+", label: "Projects Delivered" },
            { value: "6+", label: "Enterprise Clients" },
            { value: "5", label: "Software Products" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-8 text-center"
            >
              <p className="text-4xl font-black text-white">{stat.value}</p>
              <p className="mt-2 text-[12px] text-white/35 font-medium uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}