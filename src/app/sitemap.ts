import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://annanditabhati.com/', lastModified: new Date() }];
}
