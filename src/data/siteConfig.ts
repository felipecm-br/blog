export interface SiteConfig {
  title: string;
  author: string;
  description: string;
  siteUrl: string;
  locale: string;
  avatar: string;
  socials: {
    github: string;
    twitter?: string;
    linkedin?: string;
    email: string;
  };
  nav: Array<{
    text: string;
    href: string;
    badge?: string;
  }>;
  seo: {
    twitterHandle: string;
    siteName: string;
    defaultImage: string;
  };
}

export const siteConfig: SiteConfig = {
  title: "Felipe Miranda // dev blog",
  author: "Felipe Miranda",
  description: "Senior Software Engineer writing about state-of-the-art frontend architecture, terminal ergonomics, Astro, and low-latency systems.",
  siteUrl: "https://felipecm.dev",
  locale: "en_US",
  avatar: "/avatar.svg",
  socials: {
    github: "https://github.com/fcmiranda",
    email: "fecmbr@gmail.com",
    twitter: "https://twitter.com/felipecm",
  },
  nav: [
    { text: "Home", href: "/" },
    { text: "Blog", href: "/blog" },
    { text: "Tags", href: "/tags" },
    { text: "Projects", href: "/projects" },
    { text: "About", href: "/about" },
  ],
  seo: {
    twitterHandle: "@felipecm",
    siteName: "Felipe Miranda Dev Blog",
    defaultImage: "/og-default.png",
  },
};
