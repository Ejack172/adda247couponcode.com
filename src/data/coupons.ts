export interface CouponOffer {
  id: string;
  code: string;
  title: string;
  category: string;
  tag: string;
  badge: string;
  description: string;
  instructions: string;
  expiryNote: string;
  isVerified: boolean;
  applyUrl: string;
}

export const PRIMARY_COUPON_CODE = 'REF_HIE37576';
export const OFFICIAL_ADDA_URL = 'https://www.adda247.com/';

export const ALL_COUPON_OFFERS: CouponOffer[] = [
  {
    id: 'primary-all',
    code: 'REF_HIE37576',
    title: "Today's Verified Adda247 Coupon Code",
    category: 'All Courses',
    tag: 'Best Offer',
    badge: 'Verified & Working',
    description: 'Use this referral code at checkout to check for exclusive discounts on Adda247 courses, Mahapacks, and test series.',
    instructions: 'Enter code at checkout on adda247.com and verify your final discount before completing payment.',
    expiryNote: 'Valid for November 2026',
    isVerified: true,
    applyUrl: 'https://www.adda247.com/'
  },
  {
    id: 'banking-special',
    code: 'REF_HIE37576',
    title: 'Adda247 Banking Courses Coupon Code',
    category: 'Banking',
    tag: 'Bank Mahapack',
    badge: 'Popular',
    description: 'Get applicable savings on SBI PO, IBPS Clerk, RRB PO, RBI Grade B & Bank Mahapack live coaching batches.',
    instructions: 'Apply in the coupon box during Bank course checkout on Adda247.',
    expiryNote: 'Active November 2026',
    isVerified: true,
    applyUrl: 'https://www.adda247.com/bank-study-material'
  },
  {
    id: 'ssc-special',
    code: 'REF_HIE37576',
    title: 'Adda247 SSC Courses Coupon Code',
    category: 'SSC Exams',
    tag: 'SSC Mahapack',
    badge: 'Top Choice',
    description: 'Save on SSC CGL Tier 1 & 2, CHSL, GD Constable, and CPO live classes and test series packages.',
    instructions: 'Paste code in the coupon field on Adda247 SSC checkout.',
    expiryNote: 'Active November 2026',
    isVerified: true,
    applyUrl: 'https://www.adda247.com/ssc-study-material'
  },
  {
    id: 'upsc-special',
    code: 'REF_HIE37576',
    title: 'Adda247 UPSC IAS & State PSC Promo Code',
    category: 'UPSC / IAS',
    tag: 'IAS Mahapack',
    badge: 'High Value',
    description: 'Exclusive referral code applicable for UPSC Civil Services foundation batches, CSAT, and optional courses.',
    instructions: 'Select your UPSC course and apply during checkout.',
    expiryNote: 'Active November 2026',
    isVerified: true,
    applyUrl: 'https://www.adda247.com/upsc-study-material'
  },
  {
    id: 'teaching-special',
    code: 'REF_HIE37576',
    title: 'Adda247 Teaching Exams Coupon Code',
    category: 'Teaching Exams',
    tag: 'Teaching Mahapack',
    badge: 'Verified',
    description: 'Applicable for CTET Paper 1 & 2, State TETs, DSSSB, KVS, and BPSC teacher recruitment batches.',
    instructions: 'Enter code at checkout on Adda247 teaching section.',
    expiryNote: 'Active November 2026',
    isVerified: true,
    applyUrl: 'https://www.adda247.com/teaching-study-material'
  },
  {
    id: 'railway-special',
    code: 'REF_HIE37576',
    title: 'Adda247 Railway Exams Coupon Code',
    category: 'Railways',
    tag: 'Railway Mahapack',
    badge: 'Trending',
    description: 'Save on RRB NTPC, ALP, Group D, and Technician live course batches and online mock tests.',
    instructions: 'Enter code at checkout on Adda247 railway section.',
    expiryNote: 'Active November 2026',
    isVerified: true,
    applyUrl: 'https://www.adda247.com/railway-study-material'
  }
];
