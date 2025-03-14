import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NEXUS AI - Advanced AI Agents",
    short_name: "NEXUS AI",
    description: "Innovative AI agents company delivering cutting-edge solutions to transform the future of business and technology",
    start_url: "/",
    display: "standalone",
    background_color: "#111111",
    theme_color: "#e07a5f",
    icons: [
      {
        src: "/icon?size=192x192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon?size=512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
