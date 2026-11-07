export const projects = [
  {
    title: "ERP Solution: Accounting Module & Engine",
    description:
      "A web-based accounting system and double-entry engine for an in-house ERP, built from scratch. Covers general ledger and journal entries with posting and reversals, customer invoices and vendor bills, payment allocation, VAT/TDS/VDS tax handling, CSV bank statement import with match/unmatch reconciliation, and financial reports (trial balance, general ledger, balance sheet, profit & loss, and cash flow) with XLSX and PDF export. Includes an income vs. expense dashboard, receivables and payables, and branch- and period-level filtering.",
    category: "Software Development",
    techStack: [
      "TypeScript",
      "Next.js 16",
      "React 19",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Recharts",
      "Docker",
    ],
    highlight: "Double-entry accounting · Financial reporting",
    bgImage: "/accounting-dashboard.png",
    imageAlt: "Accounting dashboard with financial reports and ERP metrics",
    note: "Screenshots use mock data.",
    link: "https://github.com/nanishat/musical-spork",
    linkLabel: "View on GitHub",
  },
  {
    title: "BRAC SDP Operational Performance Dashboard",
    description:
      "End-to-end analytics project: cleaned and structured a mock dataset modelled on the BRAC Skills Development Programme, performed exploratory data analysis, and built an interactive Looker Studio dashboard covering enrollment, graduation, dropout, demographics, district-wise performance, trade-wise breakdowns, and batch completion rates by gender.",
    category: "Data & AI",
    techStack: ["Looker Studio", "Google Sheets", "Data cleaning", "EDA"],
    highlight:
      "4,678 learners · 4,401 graduated (94.1%) · 5 districts · 8 batches",
    bgImage: "/brac-dashboard.png",
    imageAlt:
      "BRAC SDP dashboard showing learner outcomes and programme performance",
    note: "Built on mock data provided by BRAC, cleared for sharing.",
    link: "https://datastudio.google.com/reporting/bf9349d8-bd21-436d-ad78-6aa0231da639",
    linkLabel: "View Dashboard",
  },
  {
    title: "Titanic Survival: Exploratory Data Analysis",
    description:
      "End-to-end EDA of the Kaggle Titanic dataset in Python. Handled missing values, duplicates, and outliers; engineered age group, family size, and is-alone features; and analysed survival by gender, class, and age group with univariate and bivariate analysis, a correlation heatmap, and a t-test on gender survival differences.",
    category: "Data & AI",
    techStack: [
      "Python",
      "pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "SciPy",
      "Google Colab",
    ],
    highlight:
      "Gender and passenger class were the strongest survival factors; female passengers had significantly higher survival odds.",
    bgImage: "/titanic-eda.png",
    imageAlt: "Correlation heatmap from Titanic passenger survival analysis",
    note: "Built on the public Kaggle Titanic dataset.",
    link: "https://github.com/nanishat/EDA-Titanic",
    linkLabel: "View on GitHub",
  },
  {
    title: "Protection One Security Platform",
    description:
      "Security operations and guard-tracking platform supporting Protection One teams, backed by a production Linux deployment and secure web infrastructure.",
    category: "Software Development",
    techStack: ["Linux", "Nginx", "SSH", "CORS"],
    highlight: "2,000+ guards",
    bgImage: null,
    link: "https://github.com/nanishat",
    visual: "security",
  },
  {
    title: "BRAC SDP Troubleshooting Web App",
    description:
      "Centralized issue reporting across 370+ BRAC branches, streamlining incident tracking for field teams nationwide.",
    category: "Software Development",
    techStack: ["React", "Node.js", "Express.js", "SQL"],
    highlight: "400+ active users",
    bgImage: "/ttwf.png",
    link: "https://github.com/nanishat/supreme-dollop",
  },
  {
    title: "Conversational AI Chatbot",
    description:
      "An interactive chatbot built around natural-language understanding and real-time responses.",
    category: "Data & AI",
    techStack: ["Python", "Natural Language Processing", "AI"],
    highlight: "Real-time responses",
    bgImage: "/Chatbot.png",
    link: "https://github.com/nanishat/chatbot",
  },
];
