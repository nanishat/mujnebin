import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
  right_arrow_white,
  logo,
  logo_dark,
  profile_img,
  download_icon,
  moon_icon,
  sun_icon,
  menu_black,
  menu_white,
  close_black,
  close_white,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: 'Taroworks Troubleshooting Web App',
    description: 'TaroWorks troubleshooting platform for BRAC SDP, serving 400+ field users',
    bgImage: '/ttwf.png',
    link: 'https://github.com/nanishat/supreme-dollop',
  },
  {
    title: 'Chatbot',
    description: 'Interactive AI chatbot with real-time responses and natural language understanding, providing personalized assistance and engaging conversations.',
    bgImage: '/Chatbot.png',
    link: 'https://github.com/nanishat/chatbot',
  },
  {
    title: 'Amazon Clone',
    description: 'Amazon-inspired e-commerce platform with robust cart functionality and seamless user experience.',
    bgImage: '/amazon.png',
    link: 'https://github.com/nanishat/js-amazon-clone',
  },
  {
    title: 'GAME: Rock Paper Scissors',
    description: 'Rock Paper Scissors game with autoplay and scoring system, allowing players to compete against the computer and track their performance over time.',
    bgImage: '/RPS.png',
    link: 'https://github.com/nanishat/rock-paper-scissors',
  },
]

export const experienceData = [
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
          'Designed and implemented core financial modules, including multi-branch debit vouchers, line-level bank validations, consolidated ledger posting, and bank reconciliation matching.'
        ]
      },
      {
        title: 'Security Operations & Guard Tracking Platform',
        bullets: [
          'Provisioned and hardened a Tenbyte Cloud VM Linux server, configuring Nginx reverse proxy routing, SSH key authentication, and Cloudflare R2 object storage.',
          'Completed backend deployment, environment configuration, and cPanel cross-origin (CORS) integration to bring the platform live.',
          'Authored comprehensive developer documentation, source code specs, and bilingual (English & Bengali) user manuals.',
          'Produced complete video onboarding tutorials for admin and client users using custom scripts and AI voice cloning.'
        ]
      }
    ],
    tech: ['Next.js', 'PostgreSQL', 'Docker', 'Express.js', 'Prisma', 'Nginx', 'Cloudflare R2', 'Tailwind CSS']
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
      'Worked with structured datasets across Salesforce and TaroWorks to standardize operational reporting and field data reliability.'
    ],
    tech: ['Google Apps Script', 'Google Cloud APIs', 'SQL', 'Express.js', 'React', 'Node.js', 'Salesforce']
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
      'Managed Google Admin Console (admin.google.com) for organization-wide user access controls, mass email routing rules, and domain-level policy management.'
    ],
    tech: ['MikroTik', 'Networking', 'Firewalls', 'VLAN & Port Switching', 'SSH', 'DHCP', 'System Troubleshooting', 'Google Admin Console']
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
      'Completed 6+ full-stack and systems engineering software projects'
    ],
    tech: ['Computer Science', 'System Design', 'SDLC', 'Software Architecture', 'Research', 'Data Structures & Algorithms', 'Database Design', 'Networking', 'Cybersecurity']
  }
];

export const skillCategories = [
  {
    label: 'Core Technologies',
    skills: ['Next.js', 'React.js', 'TypeScript', 'Node.js', 'Express.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5/CSS3']
  },
  {
    label: 'Tools & DevOps',
    skills: ['Docker', 'Docker Compose', 'Nginx', 'Cloudflare R2', 'cPanel', 'Git/GitHub', 'Linux/SSH']
  },
  {
    label: 'Databases & Integrations',
    skills: ['PostgreSQL', 'Prisma ORM', 'SQL', 'Relational Data Modeling', 'Google Apps Script API', 'Google Cloud APIs', 'OAuth 2.0', 'REST APIs']
  },
  {
    label: 'Data Science & AI',
    skills: ['Pandas', 'NumPy', 'Time Series Analysis', 'Claude Code', 'GitHub Copilot', 'Prompt Engineering']
  },
  {
    label: 'Networking & Systems',
    skills: ['MikroTik RouterOS', 'Network Architecture', 'Firewall Security', 'VLAN & Port Switching', 'DHCP', 'SSH Diagnostics', 'Google Admin Console']
  }
];