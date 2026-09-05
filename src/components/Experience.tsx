"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <p className="font-mono text-sm text-teal-400">02 — Experience</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Where I&apos;ve built
          </h2>
        </motion.div>

        <div className="mt-12 space-y-8">
          {experience.map((job, index) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-6 sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-50">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-teal-400">{job.company}</p>
                </div>
                <p className="font-mono text-sm text-zinc-500">{job.period}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-[15px]"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {job.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-zinc-700/80 bg-zinc-950/50 px-2.5 py-1 font-mono text-xs text-zinc-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
