// app/services/design/DesignClient.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Smartphone, Monitor, Zap, ArrowRight, Eye, Heart, Users, Award, TrendingUp, Layers, PenTool } from "lucide-react";
import TestimonialsGrid from "@/components/testimonials-grid";

export default function DesignClient() {
  return (
    <>
      {/* Hero with graphic */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex gap-2 mb-4 flex-wrap"><span className="text-xs font-mono text-pink-400 border border-pink-400/30 px-2 py-0.5 rounded">UI/UX Design</span><span className="text-xs font-mono text-pink-400 border border-pink-400/30 px-2 py-0.5 rounded">Responsive</span><span className="text-xs font-mono text-pink-400 border border-pink-400/30 px-2 py-0.5 rounded">Conversion Focused</span></div>
              <h1 className="text-5xl md:text-6xl font-bold mt-4">Design Systems <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">That Convert</span></h1>
              <p className="text-xl text-white/70 mt-4 max-w-lg">Beautiful, user‑first interfaces that drive engagement and revenue.</p>
              <div className="flex gap-4 mt-8"><button className="px-6 py-3 bg-pink-600 rounded-full hover:bg-pink-500 transition flex items-center gap-2">Get a design audit <ArrowRight className="w-4 h-4"/></button><button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/5">See portfolio</button></div>
            </motion.div>
            <div className="relative flex justify-center gap-4"><div className="relative"><div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full"/><div className="relative bg-black/40 p-4 rounded-2xl border border-white/20"><Smartphone className="w-16 h-16 text-pink-400"/></div></div><div className="relative"><div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full"/><div className="relative bg-black/40 p-4 rounded-2xl border border-white/20"><Monitor className="w-16 h-16 text-pink-400"/></div></div><div className="relative"><div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full"/><div className="relative bg-black/40 p-4 rounded-2xl border border-white/20"><Layers className="w-16 h-16 text-pink-400"/></div></div></div>
          </div>
        </div>
      </section>

      {/* Trust metrics */}
      <section className="py-20 bg-zinc-950/40 border-y border-white/5"><div className="max-w-7xl mx-auto px-6"><div className="grid grid-cols-2 md:grid-cols-4 gap-6"><div className="text-center p-4 rounded-xl border border-white/10 bg-black/40"><Eye className="w-8 h-8 text-pink-400 mx-auto"/><div className="text-2xl font-bold mt-2">73%</div><div className="text-xs text-white/50">less bounce</div></div><div className="text-center p-4 rounded-xl border border-white/10 bg-black/40"><Heart className="w-8 h-8 text-pink-400 mx-auto"/><div className="text-2xl font-bold mt-2">4.9★</div><div className="text-xs text-white/50">client satisfaction</div></div><div className="text-center p-4 rounded-xl border border-white/10 bg-black/40"><TrendingUp className="w-8 h-8 text-pink-400 mx-auto"/><div className="text-2xl font-bold mt-2">120%</div><div className="text-xs text-white/50">mobile conversion lift</div></div><div className="text-center p-4 rounded-xl border border-white/10 bg-black/40"><Award className="w-8 h-8 text-pink-400 mx-auto"/><div className="text-2xl font-bold mt-2">50+</div><div className="text-xs text-white/50">design systems shipped</div></div></div></div></section>

      {/* Expertise pillars */}
      <section className="py-20"><div className="max-w-7xl mx-auto px-6"><div className="text-center max-w-2xl mx-auto mb-12"><h2 className="text-3xl md:text-4xl font-semibold">Design Expertise</h2><p className="text-white/50 mt-3">Research‑driven, pixel‑perfect, and built for performance.</p></div><div className="grid md:grid-cols-3 gap-8">{[
        { icon: Palette, title: "User‑first design", desc: "Wireframes, prototypes, and user testing.", graphic: "🎨" },
        { icon: Smartphone, title: "Responsive mastery", desc: "Flawless on every device, from watch to 4K.", graphic: "📱" },
        { icon: Zap, title: "Performance obsessed", desc: "Design handoff that developers love – no guesswork.", graphic: "⚡" }
      ].map((item,i)=>(
        <div key={i} className="p-6 rounded-2xl border border-white/10 bg-black/40 hover:bg-white/5 transition"><div className="text-3xl mb-2">{item.graphic}</div><item.icon className="w-8 h-8 text-pink-400 mb-3"/><h3 className="text-xl font-semibold">{item.title}</h3><p className="text-white/50 text-sm mt-2">{item.desc}</p></div>
      ))}</div></div></section>

      {/* Case study */}
      <section className="py-20"><div className="max-w-6xl mx-auto px-6"><div className="bg-gradient-to-r from-pink-950/40 to-rose-950/40 rounded-2xl p-8 md:p-10 border border-white/10"><div className="grid md:grid-cols-2 gap-8 items-center"><div><span className="text-pink-400 text-sm font-mono">CLIENT SUCCESS</span><h3 className="text-2xl md:text-3xl font-bold mt-2">E‑commerce brand increased mobile conversions by 120% after redesign</h3><p className="text-white/60 mt-4">"Our old site was losing 60% of mobile users. Zap redesigned it with a mobile‑first approach, and within 3 months mobile revenue doubled."</p><div className="flex items-center gap-2 mt-4 text-white/40 text-sm"><Users className="w-4 h-4"/> – Head of Product, D2C Brand</div></div><div className="flex justify-center gap-4"><div className="p-4 bg-black/50 rounded-xl text-center"><div className="text-3xl font-bold text-pink-400">120%</div><div className="text-xs">mobile revenue</div></div><div className="p-4 bg-black/50 rounded-xl text-center"><div className="text-3xl font-bold text-pink-400">60%</div><div className="text-xs">bounce reduction</div></div></div></div></div></div></section>

      {/* Creative process: Design Diamond */}
      <section className="py-20 bg-gradient-to-b from-black via-pink-950/10 to-black overflow-hidden"><div className="max-w-7xl mx-auto px-6"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-semibold">Our Design Process</h2><p className="text-white/50 mt-3">A human‑centred approach that delivers results</p></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{[
        { stage: "Discover", title: "Research & Empathy", desc: "User interviews, competitor analysis, personas", icon: "🔍" },
        { stage: "Define", title: "Strategy & IA", desc: "User flows, wireframes, information architecture", icon: "📐" },
        { stage: "Design", title: "Visual & Interaction", desc: "High‑fidelity mockups, prototypes, design system", icon: "🎨" },
        { stage: "Deliver", title: "Test & Iterate", desc: "Usability testing, handoff, design QA", icon: "🚀" }
      ].map((item,idx)=>{
        const ref = useRef(null);
        const inView = useInView(ref, { once: true });
        return (
          <motion.div key={idx} ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: idx*0.1 }} className="p-5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm text-center group hover:bg-white/5 transition"><div className="text-4xl mb-3">{item.icon}</div><div className="text-pink-400 text-xs font-mono">{item.stage}</div><h3 className="text-xl font-semibold mt-1">{item.title}</h3><p className="text-white/50 text-sm mt-2">{item.desc}</p></motion.div>
        );
      })}</div><div className="mt-12 text-center text-white/30 text-sm">✦ We involve you at every step – no black boxes ✦</div></div></section>

      {/* Enhanced tech stack */}
      <section className="py-20"><div className="max-w-6xl mx-auto px-6 text-center"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><h2 className="text-3xl font-semibold mb-3">Tools We Master</h2><p className="text-white/50 mb-10">From concept to code – we use industry‑leading tools</p></motion.div><div className="flex flex-wrap justify-center gap-4">{[{ name: "Figma", icon: "🎨", color: "from-purple-500/20 to-pink-500/20" },{ name: "Adobe XD", icon: "🟣", color: "from-indigo-500/20 to-purple-500/20" },{ name: "Sketch", icon: "✏️", color: "from-orange-500/20 to-yellow-500/20" },{ name: "Zeplin", icon: "📐", color: "from-blue-500/20 to-cyan-500/20" },{ name: "Framer", icon: "🔲", color: "from-gray-500/20 to-slate-500/20" },{ name: "Webflow", icon: "🌊", color: "from-sky-500/20 to-blue-500/20" },{ name: "Protopie", icon: "⚡", color: "from-rose-500/20 to-pink-500/20" }].map((tech,idx)=>(
          <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx*0.05 }} whileHover={{ scale: 1.05 }} className={`bg-gradient-to-br ${tech.color} rounded-2xl p-0.5`}><div className="bg-black/60 backdrop-blur-sm rounded-2xl px-5 py-3 flex items-center gap-3 border border-white/10"><span className="text-2xl">{tech.icon}</span><span className="text-white/80 font-medium">{tech.name}</span></div></motion.div>
        ))}</div></div></section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-pink-950/20 to-transparent"><div className="max-w-3xl mx-auto px-6 text-center"><h2 className="text-3xl font-bold">Let's create something beautiful together</h2><p className="text-white/50 mt-3">Ready to delight your users and boost your conversion?</p><button className="mt-8 px-8 py-3 bg-pink-600 rounded-full hover:bg-pink-500 transition">Start a design project →</button></div></section>

      <TestimonialsGrid />
    </>
  );
}