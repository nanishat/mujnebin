const credentials = [
  {
    title: 'Database Programming',
    issuer: 'Bangladesh Technical Education Board (BTEB)',
    status: 'Completed',
    statusClass:
      'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    metadata: 'Issued Dec 2020 · Credential ID: 3000722557',
    details:
      '6-month formal certification covering relational database design, SQL, and data structures.',
  },
  {
    title: 'Java Workshop for Absolute Beginners (Season 01)',
    issuer: 'Ostad - Learn Skills Live',
    status: 'Completed',
    statusClass:
      'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    details:
      'Hands-on workshop focusing on core object-oriented programming (OOP) principles, data structures, and Java syntax.',
  },
  {
    title: 'Certificate on Data Science (ITS 507)',
    issuer: 'BRAC University (Sponsored by SICIP, Govt. of Bangladesh & ADB)',
    status: 'Incoming',
    statusClass:
      'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    metadata: '4-Month Professional Training · 16 Sessions',
    details:
      'Advanced training covering end-to-end data wrangling, EDA, time series forecasting, Big Data (Spark/Hadoop), MLOps, Docker, Kubernetes, and model deployment.',
    topics: [
      'Data Wrangling',
      'EDA',
      'Time Series',
      'Big Data (Spark/Hadoop)',
      'MLOps',
      'Docker',
      'Kubernetes',
    ],
  },
]

const Credentials = () => {
  return (
    <section className='mx-auto max-w-6xl px-6 py-16 md:px-12'>
      <p className='mb-2 block text-xs font-bold uppercase tracking-widest text-neutral-400'>
        CREDENTIALS &amp; ADVANCED TRAINING
      </p>
      <h2 className='mb-6 text-2xl font-bold text-neutral-900 dark:text-neutral-100'>
        Certifications &amp; Specialized Training
      </h2>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {credentials.map((credential) => (
          <article
            key={credential.title}
            className='rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/60'
          >
            <div className='flex items-start justify-between gap-3'>
              <p className='text-sm text-neutral-600 dark:text-chineseWhite/80'>
                {credential.issuer}
              </p>
              <span
                className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${credential.statusClass}`}
              >
                {credential.status}
              </span>
            </div>
            <h3 className='mt-4 font-semibold text-neutral-900 dark:text-neutral-100'>
              {credential.title}
            </h3>
            {credential.metadata && (
              <p className='mt-2 text-sm text-neutral-500 dark:text-neutral-400'>
                {credential.metadata}
              </p>
            )}
            <p className='mt-4 text-sm leading-relaxed text-neutral-600 dark:text-chineseWhite/80'>
              {credential.details}
            </p>
            {credential.topics && (
              <div className='mt-4 flex flex-wrap gap-1.5'>
                {credential.topics.map((topic) => (
                  <span
                    key={topic}
                    className='rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300'
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
