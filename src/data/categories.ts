export interface Category {
  id: string;
  name: string;
  shortName: string;
  exams: string;
  iconName: string;
  slug: string;
  colorBg: string;
  colorBorder: string;
  badgeColor: string;
  description: string;
  longDescription: string;
  popularExamsList: string[];
}

export const EXAM_CATEGORIES: Category[] = [
  {
    id: 'banking',
    name: 'Banking Exams',
    shortName: 'Banking',
    exams: 'RRB, SBI, IBPS, RBI',
    iconName: 'Building2',
    slug: '/adda247-banking-coupon-code/',
    colorBg: 'bg-blue-50/70',
    colorBorder: 'border-blue-100',
    badgeColor: 'text-blue-700 bg-blue-100/80',
    description: 'SBI PO, SBI Clerk, IBPS PO, RRB Assistant & RBI Grade B live classes and mock tests.',
    longDescription: 'Prepare for top public sector and regulatory bank examinations with comprehensive live video batches, test series, and mentorship programs from India’s leading banking educators on Adda247.',
    popularExamsList: ['SBI PO & Clerk', 'IBPS PO & SO', 'IBPS RRB Officer Scale I & Office Assistant', 'RBI Grade B & Assistant', 'NABARD Grade A & Development Assistant']
  },
  {
    id: 'ssc',
    name: 'SSC Exams',
    shortName: 'SSC',
    exams: 'CGL, CHSL, GD, MTS',
    iconName: 'Users',
    slug: '/adda247-ssc-coupon-code/',
    colorBg: 'bg-red-50/70',
    colorBorder: 'border-red-100',
    badgeColor: 'text-red-700 bg-red-100/80',
    description: 'SSC CGL Tier 1 & 2, CHSL, GD Constable, CPO & Stenographer master courses and practice kits.',
    longDescription: 'Master quantitative aptitude, general reasoning, English comprehension, and general awareness with specialized SSC faculty on Adda247 Mahapack and subject-wise live courses.',
    popularExamsList: ['SSC CGL (Combined Graduate Level)', 'SSC CHSL (10+2 Level)', 'SSC GD Constable', 'SSC MTS & Havaldar', 'SSC CPO (Sub-Inspector)']
  },
  {
    id: 'upsc',
    name: 'UPSC Preparation',
    shortName: 'UPSC',
    exams: 'CSE, CDS, NDA, CAPF',
    iconName: 'Landmark',
    slug: '/adda247-upsc-coupon-code/',
    colorBg: 'bg-amber-50/70',
    colorBorder: 'border-amber-100',
    badgeColor: 'text-amber-800 bg-amber-100/80',
    description: 'Civil Services Prelims & Mains foundation batches, UPSC EPFO, CDS, NDA & state PSC options.',
    longDescription: 'Structured civil services test preparation covering GS foundation, CSAT mastery, optional subjects, answer writing workshops, and daily current affairs analysis on Adda247 IAS.',
    popularExamsList: ['UPSC Civil Services (CSE Prelims + Mains)', 'UPSC EPFO / EO / AO', 'CDS (Combined Defence Services)', 'NDA & NA', 'CAPF Assistant Commandant']
  },
  {
    id: 'teaching',
    name: 'Teaching Exams',
    shortName: 'Teaching',
    exams: 'CTET, TET, PRT, TGT, PGT',
    iconName: 'GraduationCap',
    slug: '/adda247-teaching-coupon-code/',
    colorBg: 'bg-emerald-50/70',
    colorBorder: 'border-emerald-100',
    badgeColor: 'text-emerald-700 bg-emerald-100/80',
    description: 'Central TET Paper 1 & 2, State TETs, DSSSB, KVS, NVS & super-TET preparation modules.',
    longDescription: 'Crack national and state teaching eligibility tests with specialized pedagogy experts, child development guidance, bilingual test series, and previous year paper discussions.',
    popularExamsList: ['CTET Paper 1 & Paper 2', 'DSSSB TGT/PGT/PRT', 'KVS Primary & Trained Graduate Teachers', 'UP Super TET & UPTET', 'Bihar Teacher BPSC TRE']
  },
  {
    id: 'state-exams',
    name: 'State Government Exams',
    shortName: 'State Exams',
    exams: 'WB, UP, BPSC, MP, Rajasthan',
    iconName: 'MapPin',
    slug: '/adda247-offers/',
    colorBg: 'bg-purple-50/70',
    colorBorder: 'border-purple-100',
    badgeColor: 'text-purple-700 bg-purple-100/80',
    description: 'State PSC, Police Constable & Sub-Inspector, Revenue Inspector, Patwari & administrative exams.',
    longDescription: 'Learn in your regional language with state-specific syllabus coverage for Uttar Pradesh, Bihar, West Bengal, Maharashtra, Madhya Pradesh, Rajasthan, and Punjab state tests.',
    popularExamsList: ['BPSC & Bihar Police', 'UPPSC, UPSSSC & UP Police', 'WBP Constable & WBPSC', 'MPPSC & MP Patwari', 'Rajasthan CET & Police']
  },
  {
    id: 'railway',
    name: 'Railway Exams',
    shortName: 'Railway',
    exams: 'RRB NTPC, Group D, ALP, JE',
    iconName: 'Train',
    slug: '/adda247-railway-coupon-code/',
    colorBg: 'bg-indigo-50/70',
    colorBorder: 'border-indigo-100',
    badgeColor: 'text-indigo-700 bg-indigo-100/80',
    description: 'RRB NTPC CBT 1 & 2, Assistant Loco Pilot (ALP), Group D & Junior Engineer comprehensive batches.',
    longDescription: 'Score high in Railway Recruitment Board examinations with targeted CBT modules, general science theory, speed test series, and bilingual live revisions.',
    popularExamsList: ['RRB NTPC (Non-Technical Popular Categories)', 'RRB Assistant Loco Pilot (ALP)', 'RRB Group D (Level 1)', 'RRB Junior Engineer (JE)', 'RRB Technician Grade I & III']
  },
  {
    id: 'defence',
    name: 'Defence Exams',
    shortName: 'Defence',
    exams: 'AFCAT, NDA, CDS, Agniveer',
    iconName: 'Shield',
    slug: '/adda247-offers/',
    colorBg: 'bg-orange-50/70',
    colorBorder: 'border-orange-100',
    badgeColor: 'text-orange-700 bg-orange-100/80',
    description: 'Air Force AFCAT, Indian Army Agniveer, Navy SSR/MR & Coast Guard targeted crash courses.',
    longDescription: 'Dedicated coaching for armed forces entrance tests including SSB interview preparation, psychological assessment guidance, and physical test knowledge tips.',
    popularExamsList: ['AFCAT (Air Force Common Admission Test)', 'Indian Army Agniveer', 'Navy SSR & MR', 'Indian Coast Guard Navik', 'Territorial Army']
  },
  {
    id: 'engineering-other',
    name: 'Other Competitive Exams',
    shortName: 'Engineering & Other',
    exams: 'GATE, SSC JE, Law, CUET',
    iconName: 'BookOpen',
    slug: '/coupon-codes/',
    colorBg: 'bg-rose-50/70',
    colorBorder: 'border-rose-100',
    badgeColor: 'text-rose-700 bg-rose-100/80',
    description: 'GATE engineering, CUET UG & PG entrance, CLAT law tests, ITI and specialized certifications.',
    longDescription: 'Achieve your university admission and engineering PSU goals with disciplined syllabus tracking, subject-wise video lectures, and real exam simulation tests.',
    popularExamsList: ['CUET UG & CUET PG', 'GATE & PSUs Engineering', 'CLAT & Law Entrance', 'SSC JE Mechanical / Civil / Electrical', 'Commerce & Accountancy Exams']
  }
];
