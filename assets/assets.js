import publications_icon from './publications-icon.png';
import publications_icon_dark from './publications-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
  publications_icon,
  publications_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark
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

export const serviceData = [
  { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
  { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
  { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
  { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
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
      'Worked with structured datasets across Salesforce and TaroWorks to standardize operational reporting and field data reliability.'
    ],
    tech: ['SQL', 'Express.js', 'React', 'Node.js', 'Google Cloud APIs', 'Salesforce']
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
      'Configured Linux-based network infrastructure, DHCP services, and MikroTik router rules across corporate networks.',
      'Performed structured network diagnostics, hardware security setups, and end-user IT infrastructure support.'
    ],
    tech: ['Linux', 'MikroTik', 'Networking', 'DHCP', 'Troubleshooting']
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
    tech: ['Computer Science', 'Data Structures', 'Web Engineering', 'Software Architecture']
  }
];

export const toolsData = [
  assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];

export const skillCategories = [
  {
    label: 'Frontend',
    skills: [
      { name: 'ReactJS', icon: assets.git },
      { name: 'TailwindCSS', icon: assets.git },
      { name: 'NextJS', icon: assets.git },
      { name: 'RxJS', icon: assets.git },
      { name: 'NgRx', icon: assets.git },
      { name: 'Leaflet', icon: assets.git },
      { name: 'Capacitor', icon: assets.git },
    ]
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: assets.git },
      { name: 'Express.js', icon: assets.git },
      { name: 'Socket.IO', icon: assets.git },
      { name: 'Auth0', icon: assets.git },
      { name: '.NET Core', icon: assets.git },
    ]
  },
  {
    label: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: assets.git },
      { name: 'MySQL', icon: assets.git },
      { name: 'Redis', icon: assets.git },
    ]
  },
  {
    label: 'Tools & Platforms',
    skills: [
      { name: 'Prisma', icon: assets.git },
      { name: 'Git', icon: assets.git },
      { name: 'GitHub', icon: assets.git },
    ]
  },
  {
    label: 'Domain Knowledge',
    skills: [
      { name: 'Business Intelligence' },
      { name: 'Cloud Computing' },
      { name: 'Network Security' },
      { name: 'Data Structures & Algorithms' }
    ]
  }
];

export const story = [
  "I'm Md Safiul Mujnebin, a Computer Science graduate who builds software to understand and solve the real problem behind the requirement. I enjoy turning vague, complex business needs into systems that are clear, reliable, and actually used.",
  "My work sits at the intersection of engineering, business processes, and execution. I focus on breaking down problems, shaping abstract requirements into structured solutions, and building full-stack tools that create real value. Right now that means a custom in-house ERP, built from scratch at Protection One with React, Next.js, Node.js, and GCP.",
  "Beyond the technical side, I'm interested in how ideas move from prototype to impact: serving as Treasurer of IUB's CSE club JUKTI, publishing research indexed on IEEE Xplore, and keeping outcomes in focus. When I'm not at the keyboard, you'll find me [hobby], [hobby], or [hobby].",
];