const experienceData = [
  {
    id: 'protection-one',
    role: 'Software Developer',
    org: 'Protection One (Pvt.) Ltd.',
    period: 'June 2024 – Present',
    employmentType: 'Full-time',
    location: 'Dhaka, Bangladesh',
    type: 'work',
    sections: [
      {
        title: 'Enterprise Resource Planning (ERP) Platform',
        bullets: [
          'Architecting an in-house ERP system from scratch using Next.js, Prisma, PostgreSQL, and Docker.',
          'Gathering operational requirements iteratively from accounting stakeholders, translating business rules into schema models and automated posting workflows.',
          'Designed and implemented core financial modules, including multi-branch debit vouchers, line-level bank validations, consolidated ledger posting, and bank reconciliation matching.',
        ],
      },
      {
        title: 'Security Operations & Guard Tracking Platform',
        bullets: [
          'Provisioned and hardened a Tenbyte Cloud VM Linux server, configuring Nginx reverse proxy routing, SSH key authentication, and Cloudflare R2 object storage.',
          'Completed backend deployment, environment configuration, and cPanel cross-origin (CORS) integration to bring the platform live.',
          'Authored comprehensive developer documentation, source code specs, and bilingual (English & Bengali) user manuals.',
          'Produced complete video onboarding tutorials for admin and client users using custom scripts and AI voice cloning.',
        ],
      },
    ],
    tech: [
      'Next.js',
      'PostgreSQL',
      'Docker',
      'Express.js',
      'Prisma',
      'Nginx',
      'Cloudflare R2',
      'Tailwind CSS',
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
      'Built and deployed a centralized web-based issue reporting platform deployed across 370+ branches, serving 400+ active users.',
      'Implemented cascading hierarchy logic to streamline incident tracking, reduce data entry errors, and cut submission times by 60%.',
      'Engineered custom API workflows integrating attachments into Google Drive with automated response sheet linking.',
      'Engineered automated Google Apps Script API handlers to inject and synchronize form submission data directly with Google Sheets spreadsheets.',
      'Worked with structured datasets across Salesforce and TaroWorks to standardize operational reporting and field data reliability.',
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
    location: 'Dhanmondi, Dhaka, Bangladesh • On-site',
    type: 'work',
    bullets: [
      'Configured MikroTik routers to manage bandwidth allocation, uplink/downlink distribution, and corporate firewall security rules across organizational systems.',
      'Set up MikroTik switches for floor-level port provisioning, isolating traffic across IP cameras, workstation connections, and network trunks.',
      'Architected and maintained the organizational IP addressing scheme for all network peripherals, including switches, IP cameras, printers, access points (APs), NVRs, intercoms, and smart board TVs.',
      'Designed and built a 30-workstation ICT laboratory from scratch, provisioning static IP schemes, OS deployment, and domain user permission policies.',
      'Conducted remote server, CLI, and network infrastructure diagnostics using SSH, DHCP configuration, and structured troubleshooting workflows.',
      'Managed Google Admin Console (admin.google.com) for organization-wide user access controls, mass email routing rules, and domain-level policy management.',
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
