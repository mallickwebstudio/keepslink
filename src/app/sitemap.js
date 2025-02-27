import { datas } from "@/lib/database";
import { siteConfig } from "@/lib/metadata";

export default function sitemap() {
  const urls = datas.flatMap((data) =>
    [
      { url: siteConfig.baseUrl + "/resources/" + data.slug }
    ]
  );

  return [
    {
      url: siteConfig.baseUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteConfig.baseUrl}/about-us`,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.baseUrl}/bookmarks`,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.baseUrl}/personal`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${siteConfig.baseUrl}/privacy-policy`,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    ...urls
  ]
}