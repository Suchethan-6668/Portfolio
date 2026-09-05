"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/data/portfolio";

type ProfileAvatarProps = {
  /** Diameter in pixels */
  size?: number;
  className?: string;
  /** Load eagerly in the hero */
  priority?: boolean;
  showRing?: boolean;
};

function initialsFromName(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * Circular profile photo.
 * Place your LinkedIn photo at the path in siteConfig.profileImage
 * (default: public/profile.jpg). Falls back to initials if missing.
 */
export default function ProfileAvatar({
  size = 160,
  className = "",
  priority = false,
  showRing = true,
}: ProfileAvatarProps) {
  const [failed, setFailed] = useState(false);
  const initials = initialsFromName(siteConfig.name);

  const ring = showRing
    ? "ring-2 ring-teal-500/40 ring-offset-2 ring-offset-[#0a0c10]"
    : "";

  if (failed) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-full bg-zinc-800 font-semibold text-teal-400 ${ring} ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.32 }}
        aria-label={siteConfig.name}
        title={`Add your photo at public${siteConfig.profileImage}`}
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={siteConfig.profileImage}
      alt={`${siteConfig.name} profile photo`}
      width={size}
      height={size}
      priority={priority}
      onError={() => setFailed(true)}
      className={`shrink-0 rounded-full object-cover ${ring} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
