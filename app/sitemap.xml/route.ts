import { NextResponse } from 'next/server'

const BASE_URL = 'https://www.elysian-innovations.com' // Replace with your actual domain

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/who-we-are', changefreq: 'monthly', priority: 0.8 },
  { url: '/our-team', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/api-development', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/app-modernization', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/cloud', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/devops', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/software-development', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/infrastructure', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/web-and-application-development', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/managed-services', changefreq: 'weekly', priority: 0.7 },
  { url: '/solutions/automation', changefreq: 'weekly', priority: 0.7 },
  { url: '/solutions/datacenter', changefreq: 'weekly', priority: 0.7 },
  { url: '/solutions/erp', changefreq: 'weekly', priority: 0.7 },
  { url: '/consulting', changefreq: 'monthly', priority: 0.6 },
  { url: '/strategy', changefreq: 'monthly', priority: 0.6 },
  { url: '/transformation', changefreq: 'monthly', priority: 0.6 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
]

function generateSitemapXml(pages: Array<{ url: string; changefreq: string; priority: number }>) {
  const xmlItems = pages.map(page => `
    <url>
      <loc>${BASE_URL}${page.url}</loc>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${xmlItems}
    </urlset>`
}

export async function GET() {
  const body = generateSitemapXml(pages)

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}

