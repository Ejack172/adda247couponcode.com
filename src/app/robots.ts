import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://adda247couponcode.com/sitemap.xml',
    host: 'https://adda247couponcode.com',
  };
}
