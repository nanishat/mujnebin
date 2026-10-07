import { credentials } from '@/data/credentials'

const Credentials = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
      <p className="mb-2 block text-xs font-bold uppercase tracking-widest text-neutral-400">
        CREDENTIALS &amp; ADVANCED TRAINING
      </p>
      <h2 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
        Certifications &amp; Specialized Training
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {credentials.map((credential) => (
          <article
            key={credential.title}
            className="rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/60"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm text-neutral-600 dark:text-chineseWhite/80">
                {credential.issuer}
              </p>
              <span
                className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${credential.statusClass}`}
              >
                {credential.status}
              </span>
            </div>
            <h3 className="mt-4 font-semibold text-neutral-900 dark:text-neutral-100">
              {credential.title}
            </h3>
            {credential.metadata && (
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                {credential.metadata}
              </p>
            )}
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-chineseWhite/80">
              {credential.details}
            </p>
            {credential.topics && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {credential.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Credentials
