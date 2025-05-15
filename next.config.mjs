/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com', 'v0.blob.com'],
  },
}

export default nextConfig
