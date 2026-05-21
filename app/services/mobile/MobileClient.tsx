// app/services/mobile/MobileClient.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Smartphone,
  Palette,
  BarChart3,
  Users,
  ArrowRight,
  Star,
  Download,
  Zap,
  Shield,
  Clock,
  Award,
} from "lucide-react";
import TestimonialsGrid from "@/components/testimonials-grid";

export default function MobileClient() {
  return (
    <>
      {/* Hero section (unchanged) */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="text-xs font-mono text-purple-400 border border-purple-400/30 px-2 py-0.5 rounded">
                  iOS · Android · Cross‑platform
                </span>
                <span className="text-xs font-mono text-purple-400 border border-purple-400/30 px-2 py-0.5 rounded">
                  4.8★ Avg Rating
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mt-4">
                Mobile Apps{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Users Love
                </span>
              </h1>
              <p className="text-xl text-white/70 mt-4 max-w-lg">
                Native performance, beautiful UI, and features that drive retention.
              </p>
              <div className="flex gap-4 mt-8">
                <button className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-500 transition flex items-center gap-2">
                  Get a free consultation <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/5">
                  See portfolio
                </button>
              </div>
            </motion.div>

            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />
              <div className="relative bg-black/50 p-3 rounded-3xl border border-white/20 backdrop-blur-sm">
                <div className="w-64 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl flex flex-col items-center justify-center gap-3">
                  <Smartphone className="w-16 h-16 text-purple-400" />
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 fill-purple-400 text-purple-400" />)}
                  </div>
                  <p className="text-xs text-white/50">App preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust metrics (unchanged) */}
      <section className="py-20 bg-zinc-950/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-xl border border-white/10 bg-black/40">
              <Star className="w-8 h-8 text-purple-400 mx-auto" />
              <div className="text-2xl font-bold mt-2">4.8★</div>
              <div className="text-xs text-white/50">Average rating</div>
            </div>
            <div className="text-center p-4 rounded-xl border border-white/10 bg-black/40">
              <Download className="w-8 h-8 text-purple-400 mx-auto" />
              <div className="text-2xl font-bold mt-2">2M+</div>
              <div className="text-xs text-white/50">Downloads</div>
            </div>
            <div className="text-center p-4 rounded-xl border border-white/10 bg-black/40">
              <Users className="w-8 h-8 text-purple-400 mx-auto" />
              <div className="text-2xl font-bold mt-2">65%</div>
              <div className="text-xs text-white/50">30‑day retention</div>
            </div>
            <div className="text-center p-4 rounded-xl border border-white/10 bg-black/40">
              <Zap className="w-8 h-8 text-purple-400 mx-auto" />
              <div className="text-2xl font-bold mt-2">40%</div>
              <div className="text-xs text-white/50">Faster launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise pillars (unchanged) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">Mobile Expertise</h2>
            <p className="text-white/50 mt-3">End‑to‑end app development that delivers results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Native & Cross",
                desc: "Swift, Kotlin, Flutter, React Native – we choose what's right for you.",
                graphic: "📱",
              },
              {
                icon: Palette,
                title: "UI/UX Excellence",
                desc: "Design systems that delight users and boost engagement.",
                graphic: "🎨",
              },
              {
                icon: BarChart3,
                title: "ASO & Analytics",
                desc: "App Store Optimization and retention analytics built in.",
                graphic: "📊",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/10 bg-black/40 hover:bg-white/5 transition group"
              >
                <div className="text-3xl mb-3">{item.graphic}</div>
                <item.icon className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-white/50 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study (unchanged) */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-950/40 to-pink-950/40 rounded-2xl p-8 md:p-10 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-purple-400 text-sm font-mono">CLIENT SUCCESS</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2">
                  Meditation app hit #3 on App Store Health & Fitness
                </h3>
                <p className="text-white/60 mt-4">
                  "Zap took our sketch and built a polished, crash‑free app. Within 6 months, we had 500k downloads and a 4.9 rating. Their design and engineering are world‑class."
                </p>
                <div className="flex items-center gap-2 mt-4 text-white/40 text-sm">
                  <Users className="w-4 h-4" /> – Founder, Mindfulness Startup
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-white/10">
                    <Download className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">App Store</span>
                    <span className="text-xs text-white/40">★★★★★</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-white/10">
                    <Download className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">Google Play</span>
                    <span className="text-xs text-white/40">★★★★½</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CREATIVE PROCESS SECTION (Redesigned) ========== */}
      <section className="py-20 bg-gradient-to-b from-black via-purple-950/10 to-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold">Our App Development Process</h2>
            <p className="text-white/50 mt-3">A friction‑free journey from idea to launch</p>
          </div>

          {/* Animated timeline with connectors */}
          <div className="relative">
            {/* Gradient connector line (desktop horizontal) */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-pink-500/0 hidden md:block" />
            
            <div className="relative grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discover", desc: "User research, wireframes, and tech stack selection", icon: "🔍", color: "purple" },
                { step: "02", title: "Design", desc: "High‑fidelity UI/UX with interactive prototypes", icon: "🎨", color: "pink" },
                { step: "03", title: "Build", desc: "Agile sprints, CI/CD, weekly demo releases", icon: "⚙️", color: "purple" },
                { step: "04", title: "Launch", desc: "App store submission, ASO, post‑launch support", icon: "🚀", color: "pink" },
              ].map((item, idx) => {
                const ref = useRef(null);
                const isInView = useInView(ref, { once: true, margin: "-50px" });
                return (
                  <motion.div
                    key={item.step}
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative group"
                  >
                    {/* Floating card */}
                    <div className="relative p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 hover:-translate-y-2">
                      {/* Step number background glow */}
                      <div className={`absolute -top-4 left-6 text-6xl font-black text-${item.color}-500/10 select-none`}>
                        {item.step}
                      </div>
                      <div className="relative z-10">
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                        <p className="text-white/50 text-sm mt-2">{item.desc}</p>
                      </div>
                    </div>
                    {/* Animated connector dot (desktop) */}
                    {idx < 3 && (
                      <div className="hidden md:block absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: simple vertical list with icons */}
          <div className="md:hidden mt-8 space-y-4">
            {[
              { step: "01", title: "Discover", desc: "User research, wireframes, and tech stack selection", icon: "🔍" },
              { step: "02", title: "Design", desc: "High‑fidelity UI/UX with interactive prototypes", icon: "🎨" },
              { step: "03", title: "Build", desc: "Agile sprints, CI/CD, weekly demo releases", icon: "⚙️" },
              { step: "04", title: "Launch", desc: "App store submission, ASO, post‑launch support", icon: "🚀" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 rounded-xl border border-white/10 bg-black/30">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <div className="text-sm text-purple-400 font-mono">{item.step}</div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* Technology trust – Enhanced & Creative */}
<section className="py-20 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold mb-3">Powered by Modern Mobile Tech</h2>
      <p className="text-white/50 mb-10">We master the tools that matter</p>
    </motion.div>

    <div className="flex flex-wrap justify-center gap-4">
      {[
        { name: "Swift", icon: "🟠", color: "from-orange-500/20 to-red-500/20" },
        { name: "Kotlin", icon: "🟣", color: "from-purple-500/20 to-indigo-500/20" },
        { name: "Flutter", icon: "💙", color: "from-blue-500/20 to-cyan-500/20" },
        { name: "React Native", icon: "⚛️", color: "from-sky-500/20 to-blue-500/20" },
        { name: "Firebase", icon: "🔥", color: "from-yellow-500/20 to-orange-500/20" },
        { name: "GraphQL", icon: "📡", color: "from-pink-500/20 to-rose-500/20" },
      ].map((tech, idx) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
          whileHover={{ scale: 1.05, y: -4 }}
          className={`group relative bg-gradient-to-br ${tech.color} rounded-2xl p-0.5`}
        >
          <div className="relative bg-black/60 backdrop-blur-sm rounded-2xl px-5 py-3 flex items-center gap-3 border border-white/10 group-hover:border-white/20 transition">
            <span className="text-2xl">{tech.icon}</span>
            <span className="text-white/80 font-medium">{tech.name}</span>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Optional: animated scroller for extra flair */}
    <div className="mt-12 relative overflow-hidden h-12 opacity-60">
      <div className="absolute inset-0 flex items-center justify-center gap-8 animate-pulse">
        <span className="text-xs text-white/30">✦</span>
        <span className="text-xs text-white/30">CI/CD pipelines</span>
        <span className="text-xs text-white/30">✦</span>
        <span className="text-xs text-white/30">Test automation</span>
        <span className="text-xs text-white/30">✦</span>
        <span className="text-xs text-white/30">App store compliance</span>
      </div>
    </div>
  </div>
</section>

      {/* CTA (unchanged) */}
      <section className="py-20 bg-gradient-to-b from-purple-950/20 to-transparent">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to launch your app?</h2>
          <p className="text-white/50 mt-3">
            Let's turn your idea into a top‑rated mobile experience.
          </p>
          <button className="mt-8 px-8 py-3 bg-purple-600 rounded-full hover:bg-purple-500 transition">
            Start your app →
          </button>
        </div>
      </section>

      <TestimonialsGrid />
    </>
  );
}