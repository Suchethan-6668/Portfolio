"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // UI-only form — wire to Formspree, Resend, or your API later
    // TODO: Connect form submission to a backend or email service
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      `Portfolio contact from ${name}`,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    window.location.href = mailto;
    setStatus("sent");
    form.reset();
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <p className="font-mono text-sm text-teal-400">05 — Contact</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Let&apos;s build something
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            Open to internships, backend roles, and collaborations. Reach out
            via email or the form below.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <a
              href={siteConfig.social.email}
              className="flex items-center gap-3 text-zinc-300 transition hover:text-teal-400"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50">
                <Mail size={18} aria-hidden />
              </span>
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zinc-300 transition hover:text-teal-400"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50">
                <GithubIcon size={18} />
              </span>
              github.com/Suchethan-6668
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zinc-300 transition hover:text-teal-400"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50">
                <LinkedinIcon size={18} />
              </span>
              LinkedIn Profile
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-6"
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm text-zinc-400"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-md border border-zinc-700 bg-zinc-950/60 px-3 py-2.5 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm text-zinc-400"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-md border border-zinc-700 bg-zinc-950/60 px-3 py-2.5 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm text-zinc-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-y rounded-md border border-zinc-700 bg-zinc-950/60 px-3 py-2.5 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40"
                placeholder="What would you like to talk about?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-teal-500 px-4 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-teal-400 sm:w-auto"
            >
              <Send size={16} aria-hidden />
              {status === "sent" ? "Opening mail…" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
