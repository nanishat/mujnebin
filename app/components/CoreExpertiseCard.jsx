export default function CoreExpertiseCard() {
  return (
    <div className="w-full max-w-sm space-y-4 my-4">
      {/* Core Expertise Card */}
      <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-3">
          Core Expertise
        </span>
        <div className="flex flex-wrap gap-1.5">
          {["Machine Learning", "Python", "SQL", "Pandas"].map((skill, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Full-Stack Systems Card */}
      <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-3">
          Full-Stack Systems
        </span>
        <div className="flex flex-wrap gap-1.5">
          {["Next.js", "Prisma", "PostgreSQL", "Docker"].map((skill, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}