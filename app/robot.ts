import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'], // Add any folders you don't want Google to see
    },
    sitemap: 'https://thehaiderali.com/sitemap.xml',
  };
}