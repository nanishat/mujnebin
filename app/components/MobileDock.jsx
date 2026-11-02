"use client";

import { Briefcase, Code, Folder, Mail, User } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const dockItems = [
  { href: "#hero", label: "Home", avatar: true },
  { href: "#about", label: "About", icon: User },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#skills", label: "Skills", icon: Code },
  { href: "#projects", label: "Projects", icon: Folder },
  { href: "#contact", label: "Contact", icon: Mail },
];

const MobileDock = () => {
  const [activeHref, setActiveHref] = useState("#hero");

  useEffect(() => {
    const sections = dockItems
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section) => section !== null);

    const handleScroll = () => {
      if (window.scrollY <= 80) {
        setActiveHref("#hero");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY <= 80) {
          setActiveHref("#hero");
          return;
        }

        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              Math.abs(first.boundingClientRect.top - window.innerHeight / 2) -
              Math.abs(second.boundingClientRect.top - window.innerHeight / 2),
          );

        if (visibleSections.length > 0) {
          setActiveHref(`#${visibleSections[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-0 left-0 right-0 z-50 flex w-full items-center border-t border-neutral-800/80 bg-neutral-950/95 px-2 pb-3 pt-2 backdrop-blur-md md:hidden"
    >
      {dockItems.map(({ href, label, icon: Icon, avatar }) => {
        const isActive = activeHref === href;

        return (
          <motion.a
            key={href}
            href={href}
            aria-label={label}
            aria-current={isActive ? "location" : undefined}
            whileTap={{ scale: 0.92 }}
            className={`flex min-w-0 flex-1 flex-col items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${isActive
                ? "text-emerald-400"
                : "text-neutral-400 hover:text-white"
              }`}
          >
            <span
              aria-hidden="true"
              className={`flex h-7 w-12 items-center justify-center rounded-full ${isActive ? "bg-emerald-800/40 text-emerald-400" : ""
                }`}
            >
              {avatar ? (
                <Image
                  src="/profile-hero.png"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full border-2 border-current object-cover"
                />
              ) : (
                <Icon
                  aria-hidden="true"
                  focusable="false"
                  size={20}
                  strokeWidth={2}
                />
              )}
            </span>
            <span
              className={`text-[11px] leading-none ${isActive ? "font-semibold text-emerald-400" : "text-neutral-400"
                }`}
            >
              {label}
            </span>
          </motion.a>
        );
      })}
    </nav>
  );
};

export default MobileDock;
