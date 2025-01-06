'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Facebook, Linkedin, Instagram } from 'lucide-react'

const company = [
  { title: "Who We Are", href: "/who-we-are" },
  { title: "Our Team", href: "/our-team" },
]

const approach = [
  { title: "Consulting", href: "/consulting" },
  { title: "Strategy", href: "/strategy" },
  { title: "Transformation", href: "/transformation" },
]

const services = [
  { title: "API Development & Integration", href: "/services/api-development" },
  { title: "Application Modernization", href: "/services/app-modernization" },
  { title: "DevOps", href: "/services/devops" },
  { title: "Cloud", href: "/services/cloud" },
  { title: "Software Development", href: "/services/software-development" },
  { title: "Infrastructure Solutions", href: "/services/infrastructure" },
  { title: "Web and Application Development", href: "/services/web-and-application-development" },
  { title: "Managed Services", href: "/services/managed-services" },
]

const solutions = [
  { title: "Automation Solutions", href: "/solutions/automation" },
  { title: "Datacenter Solutions", href: "/solutions/datacenter" },
  { title: "Enterprise Resource Planning", href: "/solutions/erp" },
  { title: "Business Process Management", href: "/solutions/business-process-management" },
  { title: "Robotic Process Automation", href: "/solutions/robotic-process-automation" },
]

const industries = [
  { title: "Banking & Financial Services", href: "/industries/banking-and-financial-services" },
  { title: "Oil & Gas", href: "/industries/oil-and-gas" },
  { title: "Public Sector", href: "/industries/public-sector" },
  { title: "Small & Medium Enterprise", href: "/industries/sme" },
  { title: "Telecommunication", href: "/industries/telecommunication" },
]

const insights = [
  { title: "Blog", href: "/blog" },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image
                src="/Logo.png"
                alt="Elysian Innovations Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-[#ffffff] to-[#6fabd8] bg-clip-text text-transparent">
                ELYSIAN INNOVATIONS
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative technology solutions
            </p>
            <div className="flex space-x-4">
              
               
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#3584C0] font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-gray-400 hover:text-[#3584C0] transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-[#3584C0] font-semibold mb-4 mt-8">APPROACH</h3>
            <ul className="space-y-2">
              {approach.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-gray-400 hover:text-[#3584C0] transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#3584C0] font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-gray-400 hover:text-[#3584C0] transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#3584C0] font-semibold mb-4">SOLUTIONS</h3>
            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-gray-400 hover:text-[#3584C0] transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="text-[#3584C0] font-semibold mb-4">INDUSTRIES</h3>
            <ul className="space-y-2">
              {industries.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-gray-400 hover:text-[#3584C0] transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-[#3584C0] font-semibold mb-4 mt-8">INSIGHTS</h3>
            <ul className="space-y-2">
              {insights.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-gray-400 hover:text-[#3584C0] transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Elysian Innovations. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#3584C0] text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#3584C0] text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

