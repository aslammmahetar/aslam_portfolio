"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Zap,
  Users,
  Sparkles,
  ArrowRight,
  Award,
  Briefcase,
  Layers,
  Cpu,
} from "lucide-react";

export default function About() {
  const stats = [
    {
      value: "2.5+ Years",
      label: "Strong Professional Experience",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
      gradient: "from-blue-500/10 to-cyan-500/10",
      description: "Full-stack development",
    },
    {
      value: "10+",
      label: "Projects Completed",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
      gradient: "from-purple-500/10 to-pink-500/10",
      description: "Production ready",
    },
    {
      value: "MERN",
      label: "Tech Stack",
      icon: Code2,
      color: "from-green-500 to-emerald-500",
      gradient: "from-green-500/10 to-emerald-500/10",
      description: "Modern full-stack",
    },
    {
      value: "24/7",
      label: "Automation",
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      gradient: "from-orange-500/10 to-red-500/10",
      description: "Always running",
    },
  ];

  const highlights = [
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "Building systems that grow with your business",
    },
    {
      icon: Zap,
      title: "Real-time Systems",
      description: "Multiplayer experiences & live data sync",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Turning ideas into successful products",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden border-b-2 border-b-blue-700"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Get to know me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-800 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Passionate developer dedicated to creating exceptional digital
            experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-20 h-20 bg-primary/10 rounded-2xl -z-10" />
              <h3 className="text-2xl font-bold text-primary">
                I'm Aslam, Full Stack Developer
              </h3>
            </div>

            <div className="space-y-4 text-primary leading-relaxed">
              <p className="text-lg">
                I don't just write code — I design solutions that solve actual
                business problems.
              </p>

              <div className="space-y-3">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-white dark:hover:text-primary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        {item.title}
                      </h4>
                      <p className="text-sm text-primary">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="mt-4 pt-2 border-t border-gray-700 dark:border-gray-700 italic">
                From real-time multiplayer systems to full-fledged platforms
                like Housing Yards, I enjoy turning complex ideas into smooth,
                user-friendly products.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer inline-flex items-center gap-2 mt-4 px-6 py-3 bg-linear-to-r from-primary to-primary/80 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-primary"
              >
                Let's work together
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className={`relative group p-5 rounded-2xl backdrop-blur-sm bg-linear-to-br ${stat.gradient} border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                  >
                    {/* Animated gradient border */}
                    <div
                      className={`absolute inset-0 bg-linear-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    <div className="relative z-10">
                      <div
                        className={`inline-flex p-2 rounded-xl bg-linear-to-br ${stat.color} bg-opacity-20 mb-3`}
                      >
                        <Icon
                          className={`w-5 h-5 bg-linear-to-r bg-clip-text`}
                        />
                      </div>
                      <h3
                        className={`text-2xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent text-primary`}
                      >
                        {stat.value}
                      </h3>
                      <p className="text-sm font-medium text-primary mt-1">
                        {stat.label}
                      </p>
                      <p className="text-xs text-primary mt-2">
                        {stat.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tech Stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/30"
            >
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-primary" />
                Tech Stack & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "Javascript",
                  "jQuery",
                  "VB.NET",
                  "ASPX Pages",
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "SQL",
                  "postGreSQL",
                  "Tailwind",
                ].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="px-3 py-1.5 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-linear-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20"
            >
              <Award className="w-8 h-8 text-amber-500" />
              <div>
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                  Available for freelance work
                </p>
                <p className="text-xs text-amber-600/70 dark:text-amber-500/70">
                  Let's build something amazing together
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
