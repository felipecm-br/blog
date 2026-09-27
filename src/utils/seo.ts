import { siteConfig } from '../data/siteConfig';

export interface ArticleSchemaProps {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  url: string;
  image?: string;
  authorName?: string;
}

export function generateArticleSchema({
  title,
  description,
  pubDate,
  updatedDate,
  url,
  image,
  authorName = siteConfig.author,
}: ArticleSchemaProps) {
  const imageUrl = image 
    ? (image.startsWith('http') ? image : new URL(image, siteConfig.siteUrl).toString())
    : new URL(siteConfig.seo.defaultImage, siteConfig.siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": [imageUrl],
    "datePublished": pubDate.toISOString(),
    "dateModified": (updatedDate || pubDate).toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": siteConfig.siteUrl,
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.seo.siteName,
      "logo": {
        "@type": "ImageObject",
        "url": new URL(siteConfig.avatar, siteConfig.siteUrl).toString(),
      },
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": siteConfig.siteUrl,
    "name": siteConfig.title,
    "description": siteConfig.description,
    "author": {
      "@type": "Person",
      "name": siteConfig.author,
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}
