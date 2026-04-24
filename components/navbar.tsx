"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/#features",
    dropdown: [
      { label: "Cloud Support Services", href: "/services/cloud" },
      { label: "Mobile App Development", href: "/services/mobile" },
      { label: "Web App Development", href: "/services/web" },
      { label: "CRM Development", href: "/services/crm" },
      { label: "Responsive Design", href: "/services/design" },
    ],
  },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // ── Navbar visibility on homepage scroll ──
  useEffect(() => {
    if (!isHomePage) {
      setVisible(true);
      return;
    }

    const heroEl = document.getElementById("hero");

    const onScroll = () => {
      if (!heroEl) { setVisible(true); return; }
      const rect = heroEl.getBoundingClientRect();
      const scrollable = heroEl.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      setVisible(progress >= 0.4);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  // ── Lock body scroll when mobile menu open ──
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // ── Reset mobile services accordion on menu close ──
  useEffect(() => {
    if (!menuOpen) setMobileServicesOpen(false);
  }, [menuOpen]);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    if (!isHomePage && href.startsWith("/#")) {
      window.location.href = href;
      return;
    }
    if (href.startsWith("/#")) {
      const el = document.getElementById(href.substring(2));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── NAVBAR BAR ── */}
      <motion.nav
        initial={false}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05] bg-black/20 backdrop-blur-md"
        style={{ pointerEvents: visible ? "auto" : "none" }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12">

          {/* LOGO */}
          <Link href="/" className="relative z-50 flex items-center" onClick={() => setMenuOpen(false)}>
            <img
              src="https://res.cloudinary.com/dxwoomfzw/image/upload/v1776238986/Zap-Solutionz_2_ypw7bt.png"
              alt="Zap Solutionz"
              className="h-10 w-auto"
            />
          </Link>

          {/* ── DESKTOP MENU ── */}
          <div className="hidden items-center md:flex">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => {
                  if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                  setActiveDropdown(link.label);
                }}
                onMouseLeave={() => {
                  dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="group relative flex items-center gap-1 px-6 py-2 text-[11px] font-bold tracking-[0.25em] uppercase text-white transition-all duration-500 hover:text-white/80 hover:tracking-[0.3em]"
                >
                  {link.label}
                  {link.dropdown && (
                    <motion.span
                      animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-[9px] text-white/50"
                    >
                      ▾
                    </motion.span>
                  )}
                  <span className="absolute bottom-1 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </Link>

                {/* Desktop dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-0 top-full mt-4 w-64 rounded-xl border border-white/10 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-xl shadow-xl overflow-hidden"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => handleLinkClick(item.href)}
                          className="flex items-center gap-2 px-6 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                        >
                          <span className="h-px w-3 bg-white/20 flex-shrink-0" />
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* ── HAMBURGER (mobile only) ── */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block h-[1.5px] w-6 rounded-full bg-white origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 0.5, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-[1.5px] w-6 rounded-full bg-white origin-center"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block h-[1.5px] w-6 rounded-full bg-white origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* ── MOBILE FULL-SCREEN MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col overflow-y-auto"
          >
            {/* Top padding so content clears the navbar */}
            <div className="flex-1 flex flex-col justify-center px-8 py-24">

              {/* Nav items */}
              <nav className="flex flex-col">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-b border-white/[0.06] last:border-0"
                  >
                    {link.dropdown ? (
                      /* ── Services: accordion ── */
                      <div>
                        <button
                          onClick={() => setMobileServicesOpen((o) => !o)}
                          className="flex w-full items-center justify-between py-5 text-left"
                        >
                          <span className="text-3xl font-bold tracking-tight text-white">
                            {link.label}
                          </span>
                          <motion.div
                            animate={{ rotate: mobileServicesOpen ? 45 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/50"
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col pb-4 pl-4 gap-1">
                                {link.dropdown.map((item, di) => (
                                  <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: di * 0.05, duration: 0.3 }}
                                  >
                                    <Link
                                      href={item.href}
                                      onClick={() => handleLinkClick(item.href)}
                                      className="flex items-center gap-3 py-2.5 text-base text-white/50 hover:text-white transition-colors duration-200"
                                    >
                                      <span className="h-px w-4 bg-white/20 flex-shrink-0" />
                                      {item.label}
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      /* ── Regular link ── */
                      <Link
                        href={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className="group flex items-center justify-between py-5"
                      >
                        <span className="text-3xl font-bold tracking-tight text-white/80 transition-colors duration-200 group-hover:text-white">
                          {link.label}
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* ── Bottom CTA ── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.07 + 0.1, duration: 0.4 }}
                className="mt-10"
              >
                <Link
                  href="/#contact"
                  onClick={() => handleLinkClick("/#contact")}
                  className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[11px] font-bold uppercase tracking-[0.35em] text-black transition-all duration-300 hover:bg-white/85 w-full justify-center"
                >
                  Start a Project
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>

              {/* ── Footer note ── */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.07 + 0.25 }}
                className="mt-8 text-center text-[10px] uppercase tracking-[0.45em] text-white/20"
              >
                Zap Solutionz © {new Date().getFullYear()}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}