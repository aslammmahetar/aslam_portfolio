"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  User,
  FolderKanban,
  Mail,
  Sparkles,
  Briefcase,
  ContactIcon,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for glass effect enhancement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#experience", label: "Experience", icon: Briefcase },
    { href: "#projects", label: "Projects", icon: FolderKanban },
    { href: "#contact", label: "Contact", icon: ContactIcon },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 w-[80%] max-w-5xl z-50"
      >
        <div
          className={`flex items-center justify-between w-full px-8 py-4 rounded-2xl transition-all duration-300 backdrop-blur-xl ${
            scrolled
              ? "bg-white/70 dark:bg-gray-900/70 shadow-lg shadow-black/5"
              : "bg-white/50 dark:bg-gray-900/50 shadow-soft"
          } border border-white/20 dark:border-gray-700/30`}
        >
          {/* Logo with gradient */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-green-300" />
            <h1 className="font-bold text-xl bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Aslam.dev
            </h1>
          </motion.div>

          <div className="flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group py-1 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/Docs/Aslam-Mahetar-Resume.pdf"
                target="_blank"
                className="px-5 py-2.5 rounded-xl bg-linear-to-r from-primary to-primary/80 text-white text-sm font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Resume
              </Link>
            </motion.div>
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] z-50"
      >
        <div className="flex justify-between items-center px-5 py-3 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-700/30 shadow-lg shadow-black/10">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.label.toLowerCase();
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.label.toLowerCase())}
                className="flex flex-col items-center gap-1 group"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-gray-600 dark:text-gray-400 group-hover:text-primary"
                  }`}
                >
                  <Icon size={20} strokeWidth={1.8} />
                </motion.div>
                <span
                  className={`text-[11px] font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-gray-600 dark:text-gray-400 group-hover:text-primary"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </motion.div>

      <style jsx global>{`
        .shadow-soft {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </>
  );
}
