import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/talleres/del-papel-a-la-ceramica", destination: "/talleres/experimentacion-pictorica-sobre-ceramica", permanent: true },
      { source: "/talleres/bodegones-en-porcelana", destination: "/talleres/sirviendo-un-plato-bodegon", permanent: true },
      { source: "/talleres/arcillas-silvestres", destination: "/talleres/arcillas-silvestres-y-paisaje-urbano", permanent: true },
    ];
  },
};

export default nextConfig;
