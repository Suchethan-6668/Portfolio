"use client";

import { motion } from "framer-motion";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <p className="font-mono text-sm text-teal-400">01 — About</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Education &amp; background
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {about.summary}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.ol
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="space-y-6 border-l border-zinc-800 pl-6"
          >
            {about.education.map((item) => (
              <li key={item.school} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[1.625rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-teal-400 bg-[#0a0c10]"
                />
                <p className="font-mono text-xs text-zinc-500">{item.period}</p>
                <h3 className="mt-1 text-lg font-medium text-zinc-100">
                  {item.school}
                </h3>
                <p className="text-sm text-zinc-400">{item.degree}</p>
                <p className="mt-1 text-sm text-teal-400/90">{item.detail}</p>
              </li>
            ))}
          </motion.ol>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {about.achievements.map((a) => (
              <li
                key={a.label}
                className="rounded-lg border border-zinc-800/80 bg-zinc-900/40 px-5 py-4"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  {a.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-zinc-50">
                  {a.value}
                </p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
