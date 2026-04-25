"use client";

import { experiences } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 mx-auto border-b-2 border-b-blue-700"
    >
      {/* Heading */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            My journey building real-world applications
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-border ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12 ml-6"
            >
              {/* Dot */}
              <div className="absolute -left-2.5 w-5 h-5 rounded-full bg-gray-500" />

              {/* Card */}
              <div className="p-6 rounded-2xl glass border border-border">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {exp.company} • {exp.duration}
                </p>

                <ul className="mt-4 space-y-2 text-primary text-sm">
                  {exp.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
