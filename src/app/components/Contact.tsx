"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can integrate with email service or backend API
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Get In Touch</h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-green-400 text-xl font-semibold"
          >
            Thank you for reaching out! I will get back to you soon.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-indigo-800 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-indigo-800 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 rounded bg-indigo-800 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 transition rounded py-3 text-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-10 mt-12 text-indigo-300"
        >
          <a
            href="https://github.com/surojN"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={28} className="hover:text-white transition" />
          </a>
          <a
            href="https://linkedin.com/in/surojnagarkoti-37781b256"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} className="hover:text-white transition" />
          </a>
          <a href="mailto:surojnagarkoti@gmail.com" aria-label="Email">
            <Mail size={28} className="hover:text-white transition" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
