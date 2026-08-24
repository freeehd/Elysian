"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

const company = [
  { title: "Who We Are", href: "/who-we-are" },
  { title: "Our Team", href: "/our-team" },
  { title: "Contact Us", href: "/contact-us" },
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
  {
    title: "Web and Application Development",
    href: "/services/web-and-application-development",
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
  },
  { title: "Managed Services", href: "/services/managed-services" },
]

const solutions = [
  { title: "Datacenter Solutions", href: "/solutions/datacenter" },
  { title: "Enterprise Resource Planning", href: "/solutions/erp" },
]

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/elysian-innovations", label: "LinkedIn" },

]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient border at the top */}
      <div className="h-1 bg-gradient-to-r from-teal via-caribbean to-teal"></div>
      
      {/* Main footer content */}
      <div className="bg-rich-black-100 text-white">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-caribbean blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-teal/5 to-caribbean/5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Logo and Company Info */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center space-x-3 mb-8">
                <div className="relative w-12 h-12 ">
                  <Image src="/Logo.png" alt="Elysian Innovations Logo" fill className="object-cover" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">
                  ELYSIAN INNOVATIONS
                </span>
              </Link>
              
              <p className="text-gray-400 mb-8 text-base leading-relaxed">
                Transforming businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-400 hover:text-teal transition-colors group">
                  <Mail className="w-5 h-5 mr-3 text-teal group-hover:text-caribbean transition-colors" />
                  <a href="mailto:info@elysian-innovations.com" className="text-sm">info@elysian-innovations.com</a>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-rich-black-200/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-teal hover:to-caribbean transition-all duration-300 shadow-sm"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <Link
                href="https://www.hostinger.com/pk?REFERRALCODE=FEOSARIMAMIZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8"
              >
                <Image
                  src="/images/hostinger-footer-badge.png"
                  alt="Hostinger Partner"
                  width={160}
                  height={60}
                  className="h-auto w-[160px]"
                />
              </Link>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-teal transition-colors duration-300 flex items-center group text-sm"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-teal to-caribbean mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-lg font-semibold mb-6 mt-10 text-white">Approach</h3>
              <ul className="space-y-3">
                {approach.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-teal transition-colors duration-300 flex items-center group text-sm"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-teal to-caribbean mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-teal transition-colors duration-300 flex items-center group text-sm"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-teal to-caribbean mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-lg font-semibold mb-6 text-white">Solutions</h3>
              <ul className="space-y-3">
                {solutions.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-teal transition-colors duration-300 flex items-center group text-sm"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-teal to-caribbean mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 p-6 bg-rich-black-200/30 rounded-lg border border-rich-black-300/30 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 text-white">Ready to transform your business?</h3>
                <p className="text-gray-400 text-sm mb-4">Let's discuss how our solutions can help you achieve your goals.</p>
                <Link 
                  href="/contact-us" 
                  className="inline-flex items-center text-sm font-medium bg-gradient-to-r from-teal to-caribbean text-white px-4 py-2 rounded-md hover:shadow-lg transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-rich-black-300/20 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-500 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Elysian Innovations. All rights reserved.
              </div>
              <div className="flex space-x-8">
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-teal text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="text-gray-400 hover:text-teal text-sm transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
