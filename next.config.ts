import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/talleres/del-papel-a-la-ceramica", destination: "/talleres/experimentacion-pictorica-sobre-ceramica", permanent: true },
      { source: "/talleres/bodegones-en-porcelana", destination: "/talleres/sirviendo-un-plato-bodegon", permanent: true },
      { source: "/talleres/arcillas-silvestres", destination: "/talleres/arcillas-silvestres-y-paisaje-urbano", permanent: true },
    ];
  },
};

export default nextConfig;
