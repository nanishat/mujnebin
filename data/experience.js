const experienceData = [
  {
    id: 'protection-one',
    role: 'Software Developer',
    org: 'Protection One Pvt. Ltd.',
    period: 'June 2026 – Nov 2026 (6 mos)',
    employmentType: 'Contract',
    location: 'Dhaka, Bangladesh',
    type: 'work',
    sections: [
      {
        title: 'Enterprise Resource Planning (ERP) Platform',
        bullets: [
          'Architected a custom internal ERP system using Next.js, Prisma, PostgreSQL, and Docker, leading the end-to-end design of the core accounting and financial engine.',
          'Translated complex business, tax, and accounting rules into relational database schemas, multi-branch debit voucher systems, and automated consolidated ledger workflows.',
          'Collaborated directly with accounting stakeholders to map operational business logic, building automated bank reconciliation algorithms and line-level financial validations.'
        ],
      },
      {
        title: 'Security Operations & Guard Tracking Platform',
        bullets: [
          'Provisioned and configured a production Linux VM environment to deploy and host the backend tracking services and admin applications.',
          'Configured Nginx as a reverse proxy, set up secure SSH key authentication, and integrated cross-origin (CORS) routing for web and mobile clients.',
          'Audited the existing codebase to understand system architecture and generated end-to-end user manuals and operational guides for internal stakeholders.'
        ],
      }
    ],
    tech: [
      'Next.js',
      'PostgreSQL',
      'Docker',
      'Prisma',
      'Nginx',
      'Linux (Ubuntu/VM)',
      'SQL'
    ],
  },
  {
    id: 'brac-sdp',
    role: 'Product & Data Intern',
    org: 'BRAC — Skills Development Programme (SDP)',
    period: 'Dec 2025 – May 2026 (6 mos)',
    employmentType: 'Internship',
    location: 'Mohakhali, Dhaka, Bangladesh • On-site',
    type: 'work',
    bullets: [
      'Launched a centralized issue-reporting platform across 370+ BRAC branches, supporting 400+ active users nationwide.',
      'Streamlined incident tracking with cascading relational hierarchy logic, eliminating manual data-entry errors and delivering 60% time savings in ticket submission.',
      'Automated Google Cloud and Apps Script pipelines to ingest form data, link Google Drive media, and synchronize reports to Google Sheets.',
      'Standardized Salesforce and TaroWorks field datasets to improve reporting workflows and data reliability for programme stakeholders.'
    ],
    tech: [
      'Google Apps Script',
      'Google Cloud APIs',
      'SQL',
      'Express.js',
      'React',
      'Node.js',
      'Salesforce',
    ],
  },
  {
    id: 'akij-insaf',
    role: 'Information Technology Assistant (Intern)',
    org: 'Akij INSAF Ltd.',
    period: 'Feb 2024 – May 2024 (4 mos)',
    employmentType: 'Internship',
    location: 'Lighthouse International School, Dhanmondi, Dhaka, Bangladesh • On-site',
    type: 'work',
    bullets: [
      'Sustained campus network infrastructure for 500+ users with throughput controls and zero-trust security policies.',
      'Configured MikroTik routers and switches for port provisioning, bandwidth allocation, and VLAN isolation across campus systems.',
      'Established a 30-workstation ICT laboratory, designing its network topology, automated OS deployment, and domain permissions.',
      'Administered Google Admin Console identity management, email routing, and domain security policies for faculty and students.',
      'Diagnosed network issues through CLI troubleshooting, SSH management, and DHCP configuration to maintain 99.9% uptime.'
    ],
    tech: [
      'MikroTik',
      'Networking',
      'Firewalls',
      'VLAN & Port Switching',
      'SSH',
      'DHCP',
      'System Troubleshooting',
      'Google Admin Console',
    ],
  },
  {
    id: 'independent-university-bangladesh',
    role: 'B.Sc. in Computer Science and Engineering',
    org: 'Independent University, Bangladesh (IUB)',
    period: 'Graduated Spring 2024',
    type: 'education',
    bullets: [
      'Research & Conference Publication: Nursing Robot — IEEE Conference Paper',
      'Research Case Study: IP Security Case Study',
      'Completed 6+ full-stack and systems engineering software projects',
    ],
    tech: [
      'Computer Science',
      'System Design',
      'SDLC',
      'Software Architecture',
      'Research',
      'Data Structures & Algorithms',
      'Database Design',
      'Networking',
      'Cybersecurity',
    ],
  },
]

export const workExperience = experienceData.filter(
  (item) => item.type !== 'education',
)

export const education = experienceData.filter(
  (item) => item.type === 'education',
)

export const volunteerExperience = [
  {
    role: 'Treasurer & Executive Member',
    organization:
      'JUKTI (Official CSE Club of Independent University, Bangladesh)',
    period: 'Apr 2021 – Mar 2023 (2 yrs)',
    responsibilities: [
      'Managed financial budgeting, expense tracking, and reporting for department-wide technical workshops and programs.',
      'Coordinated academic events and student–faculty engagement initiatives to promote independent learning.',
    ],
  },
  {
    role: 'Academic & Tech Event Volunteer',
    responsibilities: [
      'Organizing Volunteer — Intra IUB Tech Fest (2023)',
      'Volunteer — National Hackathon on Frontier Technologies (Feb 2020)',
      'Organizing Volunteer — Bangladesh Physics Olympiad at IUB (2020)',
      'Event Volunteer — Bangladesh Retail Congress by APEX & BBF (2020)',
      'Organizing Volunteer (Runner) — Ascension19 Parliamentary Debate Tournament by IUBDC (2019)',
    ],
  },
]
