'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Users, User, Box, Cloud, Code2, Server, Settings, Database, BarChart, Building2, Network, Cpu, LineChart, BrainCircuit, BookOpen, Lightbulb, Menu, X, ChevronDown, BoltIcon } from 'lucide-react'

const company = [
  {
    title: "Who We Are",
    href: "/who-we-are",
    icon: User,
  },
  {
    title: "Our Team",
    href: "/our-team",
    icon: Users,
  },
]

const services = [
  {
    title: "API Development & Integration",
    href: "/services/api-development",
    icon: Box,
  },
  {
    title: "Application Modernization",
    href: "/services/app-modernization",
    icon: Settings,
  },
  {
    title: "Cloud",
    href: "/services/cloud",
    icon: Cloud,
  },
  {
    title: "DevOps",
    href: "/services/devops",
    icon: BoltIcon,
  },
  {
    title: "Software Development",
    href: "/services/software-development",
    icon: Code2,
  },
  {
    title: "Infrastructure Solutions",
    href: "/services/infrastructure",
    icon: Server,
  },
  {
    title: "Web and Application Development",
    href: "/services/web-and-application-development",
    icon: Code2,
  },
  {
    title: "Managed Services",
    href: "/services/managed-services",
    icon: Settings,
  }
]

const solutions = [
  {
    title: "Automation Solutions",
    href: "/solutions/automation",
    icon: Cpu,
  },
  {
    title: "Datacenter Solutions",
    href: "/solutions/datacenter",
    icon: Database,
  },
  {
    title: "Enterprise Resource Planning",
    href: "/solutions/erp",
    icon: BarChart,
  },
]

const approach = [
  {
    title: "Consulting",
    href: "/consulting",
    icon: Lightbulb,
  },
  {
    title: "Strategy",
    href: "/strategy",
    icon: LineChart,
  },
  {
    title: "Transformation",
    href: "/transformation",
    icon: BrainCircuit,
  },
]

const industries = [
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    icon: Building2,
  },
  {
    title: "Technology",
    href: "/industries/technology",
    icon: Network,
  },
]

const insights = [
  {
    title: "Blog",
    href: "/blog",
    icon: BookOpen,
  },
]

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/90 backdrop-blur-md dark:bg-gray-900/90 shadow-lg" 
        : "bg-transparent"
    )}>
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Logo.png"
                alt="Elysian Innovations Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#6fabd8] to-[#6fabd8] bg-clip-text text-transparent">
                ELYSIAN INNOVATIONS
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="text-sm  transition-colors hover:text-[#3584C0] data-[state=open]:text-[#3584C0] font-bold text-cyan-400 dark:text-gray-200"
                  >
                    COMPANY
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <motion.ul
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="grid w-[200px] gap-2 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
                    >
                      {company.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                          icon={item.icon}
                        />
                      ))}
                    </motion.ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="text-sm  transition-colors hover:text-[#3584C0] data-[state=open]:text-[#3584C0] font-bold text-cyan-400 dark:text-gray-200"
                  >
                    APPROACH
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <motion.ul
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="grid w-[200px] gap-2 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
                    >
                      {approach.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                          icon={item.icon}
                        />
                      ))}
                    </motion.ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="text-sm  transition-colors hover:text-[#3584C0] data-[state=open]:text-[#3584C0]  font-bold text-cyan-400 dark:text-gray-200"
                  >
                    SERVICES & SOLUTIONS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="grid w-[600px] grid-cols-2 p-4 gap-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
                    >
                      <div>
                        <h3 className="font-medium text-sm text-gray-800 dark:text-gray-400 mb-2 px-2">Services</h3>
                        <ul className="grid gap-2">
                          {services.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                              icon={item.icon}
                            />
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-gray-800 dark:text-gray-400 mb-2 px-2">Solutions</h3>
                        <ul className="grid gap-2">
                          {solutions.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                              icon={item.icon}
                            />
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <Button 
              asChild
              className="bg-[#3584C0] hover:bg-[#2d6fa3] text-white transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white dark:bg-gray-900 rounded-lg shadow-lg"
            >
              <div className="py-4 space-y-4">
                {/* Mobile menu items */}
                <MobileMenuItem title="COMPANY" items={company} />
                <MobileMenuItem title="APPROACH" items={approach} />
                <MobileMenuItem title="SERVICES & SOLUTIONS" items={[...services, ...solutions]} />
                
                <div className="pt-4">
                  <Button 
                    asChild
                    className="w-full bg-[#3584C0] hover:bg-[#2d6fa3] text-white"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

type ListItemProps = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

function ListItem({ title, href, icon: Icon }: ListItemProps) {
  return (
    <motion.li
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
            "flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-800",
            "text-gray-800 dark:text-gray-200"
          )}
        >
          <Icon className="h-5 w-5 text-[#3584C0]" />
          <span className="font-medium">{title}</span>
        </Link>
      </NavigationMenuLink>
    </motion.li>
  )
}

type MobileMenuItemProps = {
  title: string;
  items: { title: string; href: string; icon: React.ComponentType<{ className?: string }> }[];
};

function MobileMenuItem({ title, items }: MobileMenuItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100"
      >
        {title}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-2 space-y-2">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#3584C0] dark:hover:text-[#6fabd8] rounded-md transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

