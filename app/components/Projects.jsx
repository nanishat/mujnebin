"use client";

import { useState } from "react";
import { assets } from "@/assets/assets";
import { projects } from "@/data/projects";
import { AnimatePresence, motion } from "motion/react";
import { Cpu, ShieldCheck } from "lucide-react";
import Image from "next/image";

const categories = [
  "All",
  "Software Engineering",
  "Data Science & AI",
  "Data Analytics",
];

const Projects = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:scroll-mt-24 md:px-12 md:py-28"
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
        Work I've done
      </p>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mb-6 text-3xl font-extrabold text-neutral-900 md:text-4xl dark:text-neutral-100"
      >
        Selected projects
      </motion.h2>

      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-8 inline-flex max-w-full flex-wrap gap-1 rounded-full border border-neutral-200 bg-neutral-100 p-1 dark:border-neutral-700 dark:bg-neutral-900"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-700 dark:text-white"
                : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="my-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              layout
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
            >
              <div className="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                {project.bgImage ? (
                  <Image
                    src={project.bgImage}
                    alt={project.imageAlt || project.title}
                    width={640}
                    height={360}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className={`flex h-full items-center justify-center ${
                      project.visual === "security"
                        ? "bg-gradient-to-br from-slate-950 via-slate-800 to-orange-900"
                        : "bg-gradient-to-br from-teal-950 via-slate-800 to-cyan-900"
                    }`}
                  >
                    {project.visual === "security" ? (
                      <ShieldCheck
                        className="h-20 w-20 text-white/70"
                        strokeWidth={1}
                      />
                    ) : (
                      <Cpu
                        className="h-20 w-20 text-white/70"
                        strokeWidth={1}
                      />
                    )}
                  </div>
                )}
                <span className="absolute right-3 top-3 rounded-full border border-white/30 bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-chineseWhite/80">
                  {project.description}
                </p>

                {project.note && (
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                    {project.note}
                  </p>
                )}

                <p className="mt-4 text-sm font-semibold text-[#E27355]">
                  {project.highlight}
                </p>

                <div className="mb-5 mt-auto flex flex-wrap gap-2 pt-5">
                  {project.techStack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-neutral-200/80 pt-4 dark:border-neutral-700">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#E27355] transition-colors hover:text-[#c95f43]"
                  >
                    {project.linkLabel || "View project"}
                    <Image src={assets.send_icon} alt="" className="w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="https://github.com/nanishat"
        target="_blank"
        rel="noreferrer"
        className="my-12 flex w-full items-center justify-center gap-2 rounded-full border-[0.5px] border-neutral-700 px-10 py-3 text-neutral-700 transition-colors hover:bg-neutral-100 md:mx-auto md:w-max dark:border-white dark:text-white dark:hover:bg-darkHover"
      >
        Show more
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt=""
          className="w-4"
        />
      </motion.a>
    </motion.section>
  );
};

export default Projects;
