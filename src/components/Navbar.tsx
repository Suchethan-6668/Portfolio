"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ProfileAvatar from "@/components/ProfileAvatar";
import { navLinks, siteConfig } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0c10]/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-zinc-100 transition hover:text-teal-400"
        >
          <ProfileAvatar size={32} showRing={false} />
          <span>
            {siteConfig.shortName}
            <span className="text-teal-400">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 transition hover:text-zinc-100"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-teal-500/40 px-3 py-1.5 text-sm text-teal-400 transition hover:bg-teal-500/10"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-zinc-300 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-[#0a0c10] px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm text-zinc-300"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-teal-400"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
