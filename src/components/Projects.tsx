"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <p className="font-mono text-sm text-teal-400">03 — Projects</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Backend systems, RAG infrastructure, and microservices — built for
            reliability and scale.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex flex-col rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-6 transition hover:border-teal-500/30 hover:bg-zinc-900/50"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-zinc-50">
                  {project.title}
                </h3>
                <span className="shrink-0 font-mono text-xs text-zinc-500">
                  {project.period}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2">
                {project.highlights.slice(0, 2).map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 text-xs leading-relaxed text-zinc-500"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-500/70"
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <ul
                className="mt-5 flex flex-wrap gap-1.5"
                aria-label="Tech stack"
              >
                {project.tech.slice(0, 6).map((t) => (
                  <li
                    key={t}
                    className="rounded border border-zinc-800 bg-zinc-950/60 px-2 py-0.5 font-mono text-[10px] text-zinc-400"
                  >
                    {t}
                  </li>
                ))}
                {project.tech.length > 6 && (
                  <li className="px-1 font-mono text-[10px] text-zinc-500">
                    +{project.tech.length - 6}
                  </li>
                )}
              </ul>

              <div className="mt-auto flex gap-4 pt-6">
                {/* TODO: Replace github/live URLs in src/data/portfolio.ts */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition hover:text-teal-400"
                >
                  <GithubIcon size={15} />
                  GitHub
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition hover:text-teal-400"
                  >
                    <ExternalLink size={15} aria-hidden />
                    Live Demo
                  </a>
                )}
                {project.live === "#" && (
                  <span
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-600"
                    title="Add live demo URL in src/data/portfolio.ts"
                  >
                    <ExternalLink size={15} aria-hidden />
                    Live Demo
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
