import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "blog", "project", "certificate", "resume", "about"].map(
    (route) => ({
      url: `${process.env.APP_URL}/${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    }),
  );

  return routes;
}
