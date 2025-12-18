import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = 'https://thehaiderali.com'

  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // When you add a projects page, just add another object like this:
    // {
    //   url: `${baseURL}/projects`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
  ]
}