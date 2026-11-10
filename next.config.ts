import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Vercel Blob (production media storage)
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // PGlite is a WASM-backed Postgres used for local preview (no DATABASE_URL
  // configured). It must run via Node's native module loader, not the bundler.
  serverExternalPackages: ["@electric-sql/pglite"],
  experimental: {
    serverActions: {
      // Photo/PDF uploads in the admin; stays under Vercel's ~4.5MB body limit.
      bodySizeLimit: "4mb",
    },
  },
};

export default nextConfig;
