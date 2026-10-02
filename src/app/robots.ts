import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/invite/'], // Prevent crawling of personalized guest links for privacy
    },
    sitemap: 'https://aditya-swathi-wedding.com/sitemap.xml',
  };
}
