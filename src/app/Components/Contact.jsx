"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaReddit } from "react-icons/fa";
import Link from "next/link";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      alert("Message sent successfully 🚀");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
    <section
      id="contact"
      className="py-30 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 overflow-x-hidden"
    >
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Let’s Work Together</h2>

        <p className="mt-6 text-gray-600 dark:text-gray-300">
          Have a project idea, job opportunity, or collaboration in mind? Feel
          free to reach out — I’d love to hear from you.
        </p>

        {/* Contact Info */}
        <div className="mt-6 space-y-3 text-sm">
          <p className="flex items-center gap-2">
            <Mail size={20} /> nawabthedeveloper@gmail.com
          </p>

          <div className="flex gap-4 mt-4">
            <Link href="https://github.com/aslammmahetar" target="_blank">
              <FaGithub className="w-7 h-7" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aslam-m-mahetar-b2081824b/"
              target="_blank"
            >
              <FaLinkedin className="w-7 h-7" />
            </Link>
            <Link
              href="https://www.reddit.com/user/nawab_developer/"
              target="_blank"
            >
              <FaReddit className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE FORM */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="p-6 rounded-2xl glass border border-border space-y-4"
      >
        <h1 className="text-center text-primary text-lg">
          Share Your Requirements Here
        </h1>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 rounded-xl bg-transparent border border-border outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-3 rounded-xl bg-transparent border border-border outline-none"
        />

        <textarea
          placeholder="Your Message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full p-3 rounded-xl bg-transparent border border-border outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary font-medium hover:scale-105 transition"
        >
          <Send size={16} />
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>
    </section>
  );
}
