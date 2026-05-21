// app/services/crm/CrmClient.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, BarChart3, Zap, Shield, ArrowRight, Target, Award, Clock, CheckCircle, TrendingUp, Mail, PhoneCall, Calendar } from "lucide-react";
import TestimonialsGrid from "@/components/testimonials-grid";

export default function CrmClient() {
  return (
    <>
      {/* Hero with graphic */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex gap-2 mb-4 flex-wrap"><span className="text-xs font-mono text-orange-400 border border-orange-400/30 px-2 py-0.5 rounded">Custom CRM</span><span className="text-xs font-mono text-orange-400 border border-orange-400/30 px-2 py-0.5 rounded">Sales Automation</span><span className="text-xs font-mono text-orange-400 border border-orange-400/30 px-2 py-0.5 rounded">AI Insights</span></div>
              <h1 className="text-5xl md:text-6xl font-bold mt-4">CRM Systems <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">That Drive Revenue</span></h1>
              <p className="text-xl text-white/70 mt-4 max-w-lg">Customised pipelines, automation, and analytics – built exactly for your sales process.</p>
              <div className="flex gap-4 mt-8"><button className="px-6 py-3 bg-orange-600 rounded-full hover:bg-orange-500 transition flex items-center gap-2">Book a demo <ArrowRight className="w-4 h-4"/></button><button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/5">See features</button></div>
            </motion.div>
            <div className="relative flex justify-center"><div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full"/><div className="relative grid grid-cols-1 gap-3 w-full max-w-xs"><div className="p-4 rounded-xl border border-white/10 bg-black/40 flex items-center gap-3"><Users className="w-5 h-5 text-orange-400"/><span className="text-sm">Lead scoring</span></div><div className="p-4 rounded-xl border border-white/10 bg-black/40 flex items-center gap-3"><BarChart3 className="w-5 h-5 text-orange-400"/><span className="text-sm">Sales analytics</span></div><div className="p-4 rounded-xl border border-white/10 bg-black/40 flex items-center gap-3"><Zap className="w-5 h-5 text-orange-400"/><span className="text-sm">Automated workflows</span></div><div className="p-4 rounded-xl border border-white/10 bg-black/40 flex items-center gap-3"><Mail className="w-5 h-5 text-orange-400"/><span className="text-sm">Email sequences</span></div></div></div>
          </div>
        </div>
      </section>

      {/* Trust metrics */}
      <section className="py-20 bg-zinc-950/40 border-y border-white/5"><div className="max-w-7xl mx-auto px-6"><div className="grid grid-cols-2 md:grid-cols-4 gap-6"><div className="text-center p-4 rounded-xl border border-white/10 bg-black/40"><Target className="w-8 h-8 text-orange-400 mx-auto"/><div className="text-2xl font-bold mt-2">40%</div><div className="text-xs text-white/50">more closed deals</div></div><div className="text-center p-4 rounded-xl border border-white/10 bg-black/40"><Clock className="w-8 h-8 text-orange-400 mx-auto"/><div className="text-2xl font-bold mt-2">60%</div><div className="text-xs text-white/50">faster follow‑ups</div></div><div className="text-center p-4 rounded-xl border border-white/10 bg-black/40"><TrendingUp className="w-8 h-8 text-orange-400 mx-auto"/><div className="text-2xl font-bold mt-2">90%</div><div className="text-xs text-white/50">forecast accuracy</div></div><div className="text-center p-4 rounded-xl border border-white/10 bg-black/40"><Award className="w-8 h-8 text-orange-400 mx-auto"/><div className="text-2xl font-bold mt-2">100%</div><div className="text-xs text-white/50">customisable</div></div></div></div></section>

      {/* Expertise pillars */}
      <section className="py-20"><div className="max-w-7xl mx-auto px-6"><div className="text-center max-w-2xl mx-auto mb-12"><h2 className="text-3xl md:text-4xl font-semibold">CRM Expertise</h2><p className="text-white/50 mt-3">We build CRMs that adapt to your sales motion, not the other way around.</p></div><div className="grid md:grid-cols-3 gap-8">{[
        { icon: Target, title: "Custom pipelines", desc: "Match your sales stages exactly – no workarounds.", graphic: "📊" },
        { icon: Zap, title: "Automation engine", desc: "Email sequences, task assignments, reminders, and more.", graphic: "⚡" },
        { icon: BarChart3, title: "Real‑time analytics", desc: "Dashboards that show conversion rates, revenue, bottlenecks.", graphic: "📈" }
      ].map((item,i)=>(
        <div key={i} className="p-6 rounded-2xl border border-white/10 bg-black/40 hover:bg-white/5 transition"><div className="text-3xl mb-2">{item.graphic}</div><item.icon className="w-8 h-8 text-orange-400 mb-3"/><h3 className="text-xl font-semibold">{item.title}</h3><p className="text-white/50 text-sm mt-2">{item.desc}</p></div>
      ))}</div></div></section>

      {/* Case study */}
      <section className="py-20"><div className="max-w-6xl mx-auto px-6"><div className="bg-gradient-to-r from-orange-950/40 to-amber-950/40 rounded-2xl p-8 md:p-10 border border-white/10"><div className="grid md:grid-cols-2 gap-8 items-center"><div><span className="text-orange-400 text-sm font-mono">CLIENT SUCCESS</span><h3 className="text-2xl md:text-3xl font-bold mt-2">B2B service company doubled sales after custom CRM</h3><p className="text-white/60 mt-4">"We were drowning in spreadsheets. Zap built a CRM that automated follow‑ups and gave our managers real‑time visibility. Within 3 months, our close rate increased 40%."</p><div className="flex items-center gap-2 mt-4 text-white/40 text-sm"><Users className="w-4 h-4"/> – VP of Sales, Logistics Firm</div></div><div className="flex justify-center gap-4"><div className="p-4 bg-black/50 rounded-xl text-center"><div className="text-3xl font-bold text-orange-400">40%</div><div className="text-xs">more deals</div></div><div className="p-4 bg-black/50 rounded-xl text-center"><div className="text-3xl font-bold text-orange-400">60%</div><div className="text-xs">faster</div></div></div></div></div></div></section>

      {/* Creative process: Funnel / Pipeline visual */}
      <section className="py-20 bg-gradient-to-b from-black via-orange-950/10 to-black overflow-hidden"><div className="max-w-7xl mx-auto px-6"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-semibold">Your CRM, built in 4 phases</h2><p className="text-white/50 mt-3">A transparent, iterative process</p></div><div className="relative flex flex-col md:flex-row justify-between items-start gap-6"><div className="absolute left-5 md:left-auto md:top-1/2 w-0.5 h-full md:w-full md:h-0.5 bg-gradient-to-b md:bg-gradient-to-r from-orange-500/30 via-orange-500/30 to-transparent -z-0" />{[{ phase: "Phase 1", title: "Discovery & Design", desc: "Map your sales process, user roles, and data model", icon: "🔍" },{ phase: "Phase 2", title: "Build Pipelines", desc: "Custom fields, workflows, automation rules", icon: "⚙️" },{ phase: "Phase 3", title: "Integrate & Test", desc: "Email, calendar, analytics, and training", icon: "🔌" },{ phase: "Phase 4", title: "Launch & Iterate", desc: "Go-live, feedback loop, continuous improvement", icon: "🚀" }].map((item,idx)=>(
          <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx*0.1 }} className="relative z-10 w-full md:w-1/4 p-5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm hover:bg-white/5 transition"><div className="text-3xl mb-2">{item.icon}</div><div className="text-orange-400 text-xs font-mono">{item.phase}</div><h3 className="text-xl font-semibold mt-1">{item.title}</h3><p className="text-white/50 text-sm mt-2">{item.desc}</p></motion.div>
        ))}</div><div className="md:hidden mt-8 space-y-4">{[{ phase: "Phase 1", title: "Discovery & Design", desc: "Map your sales process, user roles, and data model", icon: "🔍" },{ phase: "Phase 2", title: "Build Pipelines", desc: "Custom fields, workflows, automation rules", icon: "⚙️" },{ phase: "Phase 3", title: "Integrate & Test", desc: "Email, calendar, analytics, and training", icon: "🔌" },{ phase: "Phase 4", title: "Launch & Iterate", desc: "Go-live, feedback loop, continuous improvement", icon: "🚀" }].map((item)=>(
          <div key={item.phase} className="flex gap-4 p-4 rounded-xl border border-white/10 bg-black/30"><div className="text-3xl">{item.icon}</div><div><div className="text-xs text-orange-400 font-mono">{item.phase}</div><h3 className="text-lg font-semibold">{item.title}</h3><p className="text-white/50 text-sm">{item.desc}</p></div></div>
        ))}</div></div></section>

      {/* Enhanced tech stack */}
      <section className="py-20"><div className="max-w-6xl mx-auto px-6 text-center"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><h2 className="text-3xl font-semibold mb-3">Enterprise‑grade stack</h2><p className="text-white/50 mb-10">Secure, scalable, and ready for your data</p></motion.div><div className="flex flex-wrap justify-center gap-4">{[{ name: "React / Next", icon: "⚛️", color: "from-cyan-500/20 to-blue-500/20" },{ name: "Node.js", icon: "🟢", color: "from-green-500/20 to-emerald-500/20" },{ name: "PostgreSQL", icon: "🐘", color: "from-sky-500/20 to-blue-500/20" },{ name: "Redis", icon: "🔴", color: "from-red-500/20 to-rose-500/20" },{ name: "Docker", icon: "🐳", color: "from-blue-500/20 to-indigo-500/20" },{ name: "AWS/Azure", icon: "☁️", color: "from-gray-500/20 to-slate-500/20" },{ name: "AI/ML", icon: "🧠", color: "from-purple-500/20 to-pink-500/20" }].map((tech,idx)=>(
          <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx*0.05 }} whileHover={{ scale: 1.05 }} className={`bg-gradient-to-br ${tech.color} rounded-2xl p-0.5`}><div className="bg-black/60 backdrop-blur-sm rounded-2xl px-5 py-3 flex items-center gap-3 border border-white/10"><span className="text-2xl">{tech.icon}</span><span className="text-white/80 font-medium">{tech.name}</span></div></motion.div>
        ))}</div></div></section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-orange-950/20 to-transparent"><div className="max-w-3xl mx-auto px-6 text-center"><h2 className="text-3xl font-bold">Ready to supercharge your sales?</h2><p className="text-white/50 mt-3">Let's build a CRM that fits your team like a glove.</p><button className="mt-8 px-8 py-3 bg-orange-600 rounded-full hover:bg-orange-500 transition">Book a free consultation →</button></div></section>

      <TestimonialsGrid />
    </>
  );
}