// app/services/web/WebClient.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe, Database, LayoutDashboard, Zap, ArrowRight, Code2, Cloud, Shield, Users, Rocket, Gauge, GitBranch, Award, Clock, TrendingUp
} from "lucide-react";
import TestimonialsGrid from "@/components/testimonials-grid";
import FeaturesGrid from "@/components/features-grid";

export default function WebClient() {
  return (
    <>
      {/* Hero with graphic */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="text-xs font-mono text-green-400 border border-green-400/30 px-2 py-0.5 rounded">Full‑stack Experts</span>
                <span className="text-xs font-mono text-green-400 border border-green-400/30 px-2 py-0.5 rounded">99.9% Uptime</span>
                <span className="text-xs font-mono text-green-400 border border-green-400/30 px-2 py-0.5 rounded">PCI Compliant</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mt-4">
                Web Apps{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  That Scale
                </span>
              </h1>
              <p className="text-xl text-white/70 mt-4 max-w-lg">
                From MVP to enterprise – modern, secure, lightning‑fast web applications.
              </p>
              <div className="flex gap-4 mt-8">
                <button className="px-6 py-3 bg-green-600 rounded-full hover:bg-green-500 transition flex items-center gap-2">
                  Start a project <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/5">See tech stack</button>
              </div>
            </motion.div>

            {/* Graphic: interactive terminal / code representation */}
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full" />
              <div className="relative grid grid-cols-2 gap-3 w-full max-w-xs">
                <div className="p-3 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm text-center">
                  <Code2 className="w-8 h-8 text-green-400 mx-auto" />
                  <p className="text-xs mt-1">React/Next</p>
                </div>
                <div className="p-3 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm text-center">
                  <Database className="w-8 h-8 text-green-400 mx-auto" />
                  <p className="text-xs mt-1">Postgres</p>
                </div>
                <div className="p-3 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm text-center">
                  <Cloud className="w-8 h-8 text-green-400 mx-auto" />
                  <p className="text-xs mt-1">AWS/GCP</p>
                </div>
                <div className="p-3 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm text-center">
                  <Gauge className="w-8 h-8 text-green-400 mx-auto" />
                  <p className="text-xs mt-1">99.9%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust metrics with icons */}
      <section className="py-20 bg-zinc-950/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-xl border border-white/10 bg-black/40"><Rocket className="w-8 h-8 text-green-400 mx-auto"/><div className="text-2xl font-bold mt-2">50+</div><div className="text-xs text-white/50">Apps shipped</div></div>
            <div className="text-center p-4 rounded-xl border border-white/10 bg-black/40"><Users className="w-8 h-8 text-green-400 mx-auto"/><div className="text-2xl font-bold mt-2">10M+</div><div className="text-xs text-white/50">Monthly requests</div></div>
            <div className="text-center p-4 rounded-xl border border-white/10 bg-black/40"><Zap className="w-8 h-8 text-green-400 mx-auto"/><div className="text-2xl font-bold mt-2">99.9%</div><div className="text-xs text-white/50">Uptime SLA</div></div>
            <div className="text-center p-4 rounded-xl border border-white/10 bg-black/40"><Shield className="w-8 h-8 text-green-400 mx-auto"/><div className="text-2xl font-bold mt-2">SOC2</div><div className="text-xs text-white/50">Compliant</div></div>
          </div>
        </div>
      </section>

      {/* Expertise pillars with graphics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">Web Expertise</h2>
            <p className="text-white/50 mt-3">Modern stack, enterprise patterns, developer experience.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: LayoutDashboard, title: "Full‑stack mastery", desc: "Next.js, React, Node, Python – we build both ends.", graphic: "⚡" },
              { icon: Database, title: "Real‑time & data", desc: "WebSockets, caching, and optimized queries.", graphic: "🔄" },
              { icon: Shield, title: "Security hardened", desc: "OWASP top 10, auth, rate limiting, DDoS protection.", graphic: "🔒" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/10 bg-black/40 hover:bg-white/5 transition group">
                <div className="text-3xl mb-2">{item.graphic}</div>
                <item.icon className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-white/50 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study with metrics */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-green-950/40 to-emerald-950/40 rounded-2xl p-8 md:p-10 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div><span className="text-green-400 text-sm font-mono">CLIENT SUCCESS</span><h3 className="text-2xl md:text-3xl font-bold mt-2">E‑commerce platform scaled to handle 1M+ visitors on Black Friday</h3><p className="text-white/60 mt-4">"Zap rebuilt our legacy PHP app into a Next.js + Node microservices architecture. We saw 3x faster load times and zero downtime during peak traffic."</p><div className="flex items-center gap-2 mt-4 text-white/40 text-sm"><Users className="w-4 h-4"/> – CTO, Fashion Retailer</div></div>
              <div className="flex justify-center gap-4"><div className="p-4 bg-black/50 rounded-xl text-center"><div className="text-3xl font-bold text-green-400">3x</div><div className="text-xs">faster</div></div><div className="p-4 bg-black/50 rounded-xl text-center"><div className="text-3xl font-bold text-green-400">0</div><div className="text-xs">downtime</div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative process: "Build Pipeline" with animated steps */}
      <section className="py-20 overflow-hidden bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-semibold">Our Web Development Pipeline</h2><p className="text-white/50 mt-3">From idea to production – with full transparency</p></div>
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 hidden md:block" />
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "Requirements, architecture, tech stack", icon: "🔍" },
                { step: "02", title: "Design & Build", desc: "Agile sprints, weekly demos", icon: "⚙️" },
                { step: "03", title: "Review & QA", desc: "Testing, security audit, performance tuning", icon: "✅" },
                { step: "04", title: "Launch & Scale", desc: "Deployment, monitoring, continuous optimisation", icon: "🚀" },
              ].map((item, idx) => {
                const ref = useRef(null);
                const inView = useInView(ref, { once: true });
                return (
                  <motion.div key={item.step} ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: idx * 0.15 }} className="relative group">
                    <div className="p-6 rounded-2xl border border-white/10 bg-black/40 hover:bg-white/5 transition-all hover:-translate-y-2">
                      <div className="absolute -top-4 left-6 text-6xl font-black text-green-500/10 select-none">{item.step}</div>
                      <div className="relative z-10"><div className="text-4xl mb-3">{item.icon}</div><h3 className="text-xl font-semibold">{item.title}</h3><p className="text-white/50 text-sm mt-2">{item.desc}</p></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="md:hidden mt-8 space-y-4">
            {[{ step: "01", title: "Discovery", desc: "Requirements, architecture, tech stack", icon: "🔍" },{ step: "02", title: "Design & Build", desc: "Agile sprints, weekly demos", icon: "⚙️" },{ step: "03", title: "Review & QA", desc: "Testing, security audit, performance tuning", icon: "✅" },{ step: "04", title: "Launch & Scale", desc: "Deployment, monitoring, continuous optimisation", icon: "🚀" }].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 rounded-xl border border-white/10 bg-black/30"><div className="text-3xl">{item.icon}</div><div><div className="text-sm text-green-400 font-mono">{item.step}</div><h3 className="text-lg font-semibold">{item.title}</h3><p className="text-white/50 text-sm">{item.desc}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced tech stack with icons & gradient chips */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><h2 className="text-3xl font-semibold mb-3">Modern Web Stack</h2><p className="text-white/50 mb-10">We use the tools that power the web's most successful platforms</p></motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {[{ name: "Next.js", icon: "▲", color: "from-black/40 to-gray-500/20" },{ name: "React", icon: "⚛️", color: "from-cyan-500/20 to-blue-500/20" },{ name: "Node.js", icon: "🟢", color: "from-green-500/20 to-emerald-500/20" },{ name: "TypeScript", icon: "🔷", color: "from-blue-500/20 to-indigo-500/20" },{ name: "PostgreSQL", icon: "🐘", color: "from-sky-500/20 to-blue-500/20" },{ name: "Tailwind", icon: "🎨", color: "from-teal-500/20 to-cyan-500/20" },{ name: "GraphQL", icon: "📡", color: "from-purple-500/20 to-pink-500/20" }].map((tech, idx) => (
              <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.05, y: -2 }} className={`group bg-gradient-to-br ${tech.color} rounded-2xl p-0.5`}>
                <div className="relative bg-black/60 backdrop-blur-sm rounded-2xl px-5 py-3 flex items-center gap-3 border border-white/10 group-hover:border-white/20 transition"><span className="text-2xl">{tech.icon}</span><span className="text-white/80 font-medium">{tech.name}</span></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-green-950/20 to-transparent"><div className="max-w-3xl mx-auto px-6 text-center"><h2 className="text-3xl font-bold">Ready to build your web app?</h2><p className="text-white/50 mt-3">Let's turn your vision into a scalable, high‑performance reality.</p><button className="mt-8 px-8 py-3 bg-green-600 rounded-full hover:bg-green-500 transition">Start your project →</button></div></section>

      <TestimonialsGrid />
    </>
  );
}