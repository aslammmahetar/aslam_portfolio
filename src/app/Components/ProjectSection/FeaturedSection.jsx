"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  ChevronRight,
  Zap,
  Award,
  Code2,
} from "lucide-react";

const FeaturedSection = ({ featured, imageVariants, itemVariants }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative max-w-6xl mx-auto mb-32 px-4"
    >
      {/* Badge */}
      <motion.div variants={itemVariants} className="flex justify-start mb-6">
        <div className="inline-flex items-start gap-2 px-4 py-2 rounded-full bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-primary">
            Featured Project
          </span>
          <Award className="w-4 h-4 text-pink-400" />
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section with 3D Effect */}
        <motion.div
          variants={imageVariants}
          whileHover={{ scale: 1.02, rotateY: 5 }}
          className="relative group"
        >
          {/* Glow effect behind image */}
          <div className="absolute -inset-4 bg-linear-to-r from-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Main Image Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <motion.img
              src={featured.image}
              alt={featured.title}
              className="w-full h-auto rounded-2xl border border-white/10 shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Overlay linear */}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Floating tech icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {featured.tech.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-lg bg-black/10 backdrop-blur-sm text-primary border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Title with linear */}
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-primary"
          >
            {featured.title}
          </motion.h3>

          {/* Description with animated underline */}
          <motion.div variants={itemVariants} className="relative">
            <p className="text-primary text-lg leading-relaxed">
              {featured.description}
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="h-0.5 bg-linear-to-r from-purple-500 to-pink-500 mt-3 rounded-full"
            />
          </motion.div>

          {/* Tech Stack with staggered animation */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-purple-400">
              <Code2 size={16} />
              <span>Technologies Used</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {featured.tech.map((t, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.05, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 text-sm rounded-xl bg-linear-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm text-primary font-mono hover:border-purple-500/50 transition-all duration-300"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Key Features with icons */}
          {featured?.features && featured.features.length > 0 && (
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-pink-400">
                <Zap size={16} />
                <span>Key Features</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {featured.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.07 }}
                    className="flex items-center gap-2 text-xs text-primary"
                  >
                    <ChevronRight size={12} className="text-purple-400" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Action Buttons with enhanced effects */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              href={featured.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group/btn px-6 py-3 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              <div className="relative flex items-center gap-2">
                <ExternalLink size={16} />
                Live Demo
              </div>
            </motion.a>

            <motion.a
              href={featured.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-primary text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg flex items-center gap-2"
            >
              <Code2 size={16} />
              GitHub Repository
            </motion.a>
          </motion.div>

          {/* Stats or additional info */}
          <motion.div
            variants={itemVariants}
            className="pt-6 flex gap-6 text-xs text-gray-500 border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>Production Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Responsive Design</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span>Modern Stack</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturedSection;
