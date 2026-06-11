// components/products-showcase.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  accentColor: string;
}

const PRODUCTS: Product[] = [
  {
    id: "pmis",
    label: "P.M.I.S.",
    title: "Preventive Maintenance Information System",
    description:
      "A software-based system that helps organizations manage and track their preventive maintenance activities — integrating scheduling, work orders, and asset tracking to prevent failures before they happen.",
    tags: ["Asset Management", "Scheduling", "Reporting"],
    highlights: [
      "Equipment tracking & maintenance history",
      "Work order generation & assignment",
      "Maintenance scheduling & activity tracking",
      "Reporting, analytics & compliance alerts",
    ],
    accentColor: "#3B82F6",
  },
  {
    id: "om",
    label: "O & M",
    title: "Operations & Maintenance",
    description:
      "A comprehensive O&M platform covering the full lifecycle of physical asset management — from routine operations to corrective maintenance, built for teams in the field and in the office.",
    tags: ["Field Operations", "Asset Lifecycle", "Compliance"],
    highlights: [
      "Operations planning & resource allocation",
      "Corrective & preventive maintenance workflows",
      "Mobile-first interface for field teams",
      "Real-time status tracking & reporting",
    ],
    accentColor: "#8B5CF6",
  },
  {
    id: "mfg",
    label: "Manufacturing Unit",
    title: "Manufacturing Unit Management",
    description:
      "End-to-end management software for tissue manufacturing facilities — tracking production processes, machinery status, quality control, and distribution across the entire supply chain.",
    tags: ["Production Tracking", "Quality Control", "Supply Chain"],
    highlights: [
      "Screening, refining & processing workflows",
      "Machinery status & maintenance scheduling",
      "Multi-product SKU management",
      "Packaging & distribution tracking",
    ],
    accentColor: "#F59E0B",
  },
  {
    id: "tms",
    label: "Ticketing System",
    title: "Ticket Management System",
    description:
      "A digital tool designed to streamline the creation, assignment, tracking, and resolution of tickets — incidents, requests, and problems — across your entire organization.",
    tags: ["Help Desk", "IT Service", "Issue Tracking"],
    highlights: [
      "Automated ticket assignment & routing",
      "Priority, category & SLA management",
      "Collaboration, comments & audit trail",
      "Analytics dashboard & resolution reporting",
    ],
    accentColor: "#EF4444",
  },
  {
    id: "sims",
    label: "S.I.M.S.",
    title: "Society Information & Management System",
    description:
      "A complete digital platform for cooperative housing societies — automating administrative tasks, managing member data, finances, communication, and property records in one place.",
    tags: ["Member Management", "Finance", "Property"],
    highlights: [
      "Member registration, payments & contributions",
      "Income, expense & budget management",
      "Notices, circulars & mass communication",
      "Property records & maintenance history",
    ],
    accentColor: "#10B981",
  },
];

export default function ProductsShowcase() {
  const [active, setActive] = useState(PRODUCTS[0].id);
  const current = PRODUCTS.find((p) => p.id === active)!;

  return (
    <section className="relative bg-[#050505] py-32 overflow-hidden" id="products">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.5em] text-white/30">
            Our Products
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Built for real operations.
          </h2>
          <p className="max-w-xl text-base text-white/40 leading-relaxed">
            Enterprise-grade software systems we've designed and deployed across
            industries — from manufacturing floors to housing societies.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="mb-12 flex flex-wrap gap-2">
          {PRODUCTS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                active === p.id
                  ? "text-black"
                  : "text-white/40 hover:text-white/70 border border-white/10 hover:border-white/20"
              }`}
            >
              {active === p.id && (
                <motion.span
                  layoutId="pill-bg"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: current.accentColor }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{p.label}</span>
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid gap-8 md:grid-cols-2"
          >
            {/* Left: Text */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8">
              <div>
                <div
                  className="mb-4 h-1 w-10 rounded-full"
                  style={{ backgroundColor: current.accentColor }}
                />
                <h3 className="mb-4 text-2xl font-bold text-white leading-snug">
                  {current.title}
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-white/50">
                  {current.description}
                </p>
                <ul className="space-y-3">
                  {current.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                      <span
                        className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: current.accentColor }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {current.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-3 py-1 text-[11px] font-medium tracking-wide"
                    style={{
                      backgroundColor: `${current.accentColor}18`,
                      color: current.accentColor,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Visual accent card */}
            <div
              className="relative flex flex-col justify-end overflow-hidden rounded-2xl p-8 min-h-[320px]"
              style={{
                background: `radial-gradient(ellipse at 70% 30%, ${current.accentColor}22 0%, transparent 70%), #0d0d0d`,
                border: `1px solid ${current.accentColor}25`,
              }}
            >
              {/* Big background number */}
              <span
                className="pointer-events-none absolute right-6 top-6 select-none text-[10rem] font-black leading-none opacity-[0.04]"
                style={{ color: current.accentColor }}
              >
                {(PRODUCTS.findIndex((p) => p.id === active) + 1)
                  .toString()
                  .padStart(2, "0")}
              </span>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/25">
                  Module
                </span>
                <p
                  className="mt-2 text-5xl font-black tracking-tight"
                  style={{ color: current.accentColor }}
                >
                  {current.label}
                </p>
                <p className="mt-3 text-sm text-white/30 max-w-xs leading-relaxed">
                  Part of the ZAP enterprise software suite — designed for
                  Indian businesses.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}