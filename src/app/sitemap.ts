import type { MetadataRoute } from "next";
import { barber, cuts } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = barber.siteUrl;
  const pages = ["", "/work", "/about", "/contact"].map((p) => ({
    url: `${base}${p}`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const cutPages = cuts.map((c) => ({
    url: `${base}/work/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
    images: [c.images[0].src],
  }));
  return [...pages, ...cutPages];
}
