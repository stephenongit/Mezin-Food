import { MetadataRoute } from "next";
import { configuredSiteUrl, hasConfiguredSiteUrl } from "@/config/env";

export default function robots(): MetadataRoute.Robots {
  const robotRules: MetadataRoute.Robots = {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };

  // Only advertise sitemap when a real production domain is configured
  if (hasConfiguredSiteUrl && configuredSiteUrl) {
    robotRules.sitemap = `${configuredSiteUrl}/sitemap.xml`;
  }

  return robotRules;
}
