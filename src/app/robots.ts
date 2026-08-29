import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: process.env.SITE_URL,
  };
}

export const dynamic = "force-static";
