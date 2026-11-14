import type { MetadataRoute } from "next";
import { barber } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${barber.siteUrl}/sitemap.xml`,
  };
}
