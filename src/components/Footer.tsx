import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <p className="text-sm text-zinc-500">
          © {year} {siteConfig.name}. Built with Next.js &amp; Tailwind.
        </p>
        <ul className="flex items-center gap-5">
          <li>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition hover:text-teal-400"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
          </li>
          <li>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition hover:text-teal-400"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </li>
          <li>
            <a
              href={siteConfig.social.email}
              className="text-zinc-500 transition hover:text-teal-400"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
