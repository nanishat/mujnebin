const credentials = [
  {
    title: 'Database Programming',
    issuer: 'Bangladesh Technical Education Board (BTEB)',
    metadata: 'Issued Dec 2020 · Credential ID: 3000722557',
    details:
      '6-month formal certification covering relational database design, SQL, and data structures.',
  },
  {
    title: 'Java Workshop for Absolute Beginners (Season 01)',
    issuer: 'Ostad - Learn Skills Live',
    details:
      'Hands-on training on core object-oriented programming (OOP) principles and Java syntax.',
  },
  {
    title: 'Certificate on Data Science (ITS 507)',
    issuer: 'BRAC University (Sponsored by SICIP, Govt. of Bangladesh & ADB)',
    badge: '4-Month Professional Training',
    details:
      'An intensive 4-month professional certificate program covering end-to-end data pipelines, advanced machine learning, Big Data infrastructure, and production model deployment (MLOps).',
    topics: [
      'Data Wrangling',
      'EDA',
      'Time Series',
      'Big Data (Spark/Hadoop)',
      'MLOps',
      'Docker',
      'Kubernetes',
      'NLP',
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
        Certifications
      </h2>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {credentials.map((credential) => (
          <article
            key={credential.title}
            className='rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/60'
          >
            <h3 className='font-semibold text-neutral-900 dark:text-neutral-100'>
              {credential.title}
            </h3>
            <p className='mt-2 text-neutral-600 dark:text-chineseWhite/80'>
              {credential.issuer}
            </p>
            {credential.badge && (
              <p className='mt-3 w-fit rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'>
                {credential.badge}
              </p>
            )}
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
