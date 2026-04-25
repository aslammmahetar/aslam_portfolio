"use client"
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ProjectSection from "./Components/ProjectSection";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import ThemeToggle from "./Components/ThemeToggle";
import Link from "next/link";
import { Download } from "lucide-react";
export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor(x, y, radius, speedX, speedY, opacity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
        this.opacity = opacity;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 0.5;
        const speedY = (Math.random() - 0.5) * 0.5;
        const opacity = Math.random() * 0.3 + 0.1;
        particles.push(new Particle(x, y, radius, speedX, speedY, opacity));
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)
              })`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Canvas Background Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-20 w-full h-full"
        style={{ pointerEvents: "none" }}
      />

      {/* Gradient Orbs Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-400/20 dark:bg-blue-500/15 blur-3xl"
          animate={{
            x: [0, 100, 0, -100, 0],
            y: [0, -50, 0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-400/20 dark:bg-purple-500/15 blur-3xl"
          animate={{
            x: [0, -80, 0, 80, 0],
            y: [0, 60, 0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-cyan-400/10 dark:bg-cyan-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1, 0.8, 1],
            opacity: [0.3, 0.5, 0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      <Navbar />
      <div className="md:hidden fixed top-4 right-4 z-50">
        <div className="p-2 rounded-xl glass shadow-soft">
          <ThemeToggle />
        </div>
      </div>
      <div className="md:hidden fixed bottom-27 right-7 z-50">
        <Link
          href="/Docs/Aslam-Mahetar-Resume.pdf"
          target="_blank"
          download
          className="flex items-center gap-2 px-3 py-2 rounded-xl glass shadow-soft text-sm font-medium hover:scale-105 hover:shadow-lg transition"
        >
          <Download size={16} />
          CV
        </Link>
      </div>
      <Hero />
      <About />
      <Experience />
      <ProjectSection />
      <Contact />
    </div>
  );
}