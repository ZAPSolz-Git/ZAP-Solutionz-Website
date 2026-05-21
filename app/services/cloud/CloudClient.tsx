// app/services/cloud/CloudClient.tsx
"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  Database,
  Zap,
  ArrowRight,
  CheckCircle,
  Award,
  Clock,
  Server,
  Users,
  BarChart3,
} from "lucide-react";
import FeaturesGrid from "@/components/features-grid";
import TestimonialsGrid from "@/components/testimonials-grid";

export default function CloudClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="text-xs font-mono text-blue-400 border border-blue-400/30 px-2 py-0.5 rounded">
                  AWS Advanced Partner
                </span>
                <span className="text-xs font-mono text-blue-400 border border-blue-400/30 px-2 py-0.5 rounded">
                  ISO 27001
                </span>
                <span className="text-xs font-mono text-blue-400 border border-blue-400/30 px-2 py-0.5 rounded">
                  24/7 Support
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mt-4">
                Cloud Support{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  That Never Sleeps
                </span>
              </h1>
              <p className="text-xl text-white/70 mt-4 max-w-lg">
                Enterprise-grade infrastructure, FinOps optimization, and round‑the‑clock monitoring.
              </p>
              <div className="flex gap-4 mt-8">
                <button className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-500 transition flex items-center gap-2">
                  Get a free cloud audit <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/5">
                  Read case studies
                </button>
              </div>
            </motion.div>

            {/* Trust metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                <Clock className="w-8 h-8 text-blue-400 mx-auto" />
                <div className="text-2xl font-bold mt-2">99.99%</div>
                <div className="text-xs text-white/50">Uptime SLA</div>
              </div>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                <Server className="w-8 h-8 text-blue-400 mx-auto" />
                <div className="text-2xl font-bold mt-2">50+</div>
                <div className="text-xs text-white/50">Migrations</div>
              </div>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                <Shield className="w-8 h-8 text-blue-400 mx-auto" />
                <div className="text-2xl font-bold mt-2">SOC2</div>
                <div className="text-xs text-white/50">Compliant</div>
              </div>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                <Award className="w-8 h-8 text-blue-400 mx-auto" />
                <div className="text-2xl font-bold mt-2">$180k</div>
                <div className="text-xs text-white/50">Avg client savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise pillars */}
      <section className="py-20 bg-zinc-950/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">Cloud Expertise</h2>
            <p className="text-white/50 mt-3">
              Certified, battle-tested methodologies that deliver results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "FinOps Certified",
                desc: "We optimize cloud spend with automated rightsizing – average 30% cost reduction.",
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                desc: "SOC2, HIPAA, GDPR, PCI DSS – implemented out of the box.",
              },
              {
                icon: Database,
                title: "Disaster Recovery",
                desc: "RTO < 15 min, RPO < 5 min with automated failover.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/10 bg-black/40 hover:bg-white/5 transition"
              >
                <item.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-white/50 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study highlight */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-950/40 to-cyan-950/40 rounded-2xl p-8 md:p-10 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-blue-400 text-sm font-mono">CLIENT SUCCESS</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2">
                  Fintech startup saved $180k/year after cloud re‑architecture
                </h3>
                <p className="text-white/60 mt-4">
                  "Zap migrated our entire stack to AWS with zero downtime, reduced our monthly bill by 42%, and gave us real-time dashboards. Our engineers now focus on product, not fires."
                </p>
                <div className="flex items-center gap-2 mt-4 text-white/40 text-sm">
                  <Users className="w-4 h-4" /> – CTO, Series A Fintech
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-black/50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-400">42%</div>
                  <div className="text-xs text-white/50">cost reduction</div>
                </div>
                <div className="text-center p-4 bg-black/50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-400">99.99%</div>
                  <div className="text-xs text-white/50">uptime achieved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid (your existing component) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl text-center mb-12">What's included in our cloud support</h2>
          <FeaturesGrid />
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl text-center mb-12">Our engagement model</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Audit current infrastructure, costs, and risks." },
              { step: "02", title: "Architect", desc: "Design resilient, scalable cloud blueprint." },
              { step: "03", title: "Migrate / Optimise", desc: "Zero-downtime migration or optimisation." },
              { step: "04", title: "Manage", desc: "24/7 monitoring, patches, FinOps reviews." },
            ].map((item) => (
              <div key={item.step} className="p-5 border-l-2 border-blue-400 bg-black/30">
                <div className="text-3xl font-mono text-blue-400">{item.step}</div>
                <h4 className="text-lg font-semibold mt-2">{item.title}</h4>
                <p className="text-white/50 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted tools */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl mb-6">Trusted by cloud-native teams</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker"].map((tech) => (
              <span key={tech} className="px-4 py-2 border border-white/10 rounded-full text-white/60 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to elevate your cloud infrastructure?</h2>
          <p className="text-white/50 mt-3">
            Get a no‑obligation cloud health check from our senior architects.
          </p>
          <button className="mt-8 px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-500 transition">
            Talk to a cloud expert →
          </button>
        </div>
      </section>

      <TestimonialsGrid />
    </>
  );
}