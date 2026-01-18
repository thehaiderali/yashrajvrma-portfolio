import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = 'https://thehaiderali.com'

  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Increased from monthly to encourage faster crawls
      priority: 1,
    },
    {
      url: `${baseURL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
