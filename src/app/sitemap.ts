import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "blog", "projects"].map((route) => ({
    url: `${process.env.APP_URL}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return routes;
}
