// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://dsite.sa/en/acp", // Your website's URL.
  generateRobotsTxt: true, // Generates robots.txt along with the sitemap
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Allow all crawlers to access all pages
      // { userAgent: "*", disallow: ["/admin", "/drafts"] }, // Disallow specific paths
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`, // Include additional sitemaps
    ],
  },
  sitemapSize: 5000, // Split sitemap if you have more than 5000 URLs
  // exclude: ["/admin", "/drafts/*"], // Exclude specific pages
};
