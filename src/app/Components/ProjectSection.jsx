"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/lib/data";
import { Code2, ExternalLink } from "lucide-react";
import ProjectCard from "./ProjectSection/ProjectCard";
import FeaturedSection from "./ProjectSection/FeaturedSection";
import { useRef } from "react";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, rotateY: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen py-30 px-6 border-b-2 border-b-blue-700"
      id="projects"
      ref={sectionRef}
      style={{ opacity, scale }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Real-world applications I’ve built
          </p>
        </div>
        <FeaturedSection
          featured={featured}
          itemVariants={itemVariants}
          imageVariants={imageVariants}
        />
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Add this to your global CSS or tailwind config for smooth scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </motion.div>
  );
}
