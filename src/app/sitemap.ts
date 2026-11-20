import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adda247couponcode.com';
  const currentDate = new Date('2026-11-20T00:00:00Z');

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/coupon-codes/', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/adda247-referral-code/', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/adda247-offers/', priority: 0.8, changeFrequency: 'daily' as const },
    { path: '/adda247-banking-coupon-code/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/adda247-ssc-coupon-code/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/adda247-upsc-coupon-code/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/adda247-teaching-coupon-code/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/adda247-railway-coupon-code/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/how-to-use-adda247-coupon-code/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about-us/', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/contact-us/', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy/', priority: 0.4, changeFrequency: 'yearly' as const },
    { path: '/terms-and-conditions/', priority: 0.4, changeFrequency: 'yearly' as const },
    { path: '/disclaimer/', priority: 0.4, changeFrequency: 'yearly' as const },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: currentDate,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
