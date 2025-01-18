'use client'

import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { BarChart, Layout, CircleIcon, Rocket } from 'lucide-react';
import { cn } from "@/lib/utils";
import Image from "next/image";

const services = [
  {
    name: "Strategic Consulting",
    Icon: BarChart,
    description: "Our expert consultants analyze your unique challenges, developing tailored solutions to boost efficiency and drive growth.",
    href: "/consulting",
    cta: "Learn More",
    className: "md:col-span-1 md:row-span-1",
    image: "/images/service/1.png",
  },
  {
    name: "Future-Proof Strategy",
    Icon: Layout,
    description: "Navigate change with our data-driven strategies. We help you craft a robust vision aligned with your goals.",
    href: "/strategy",
    cta: "Explore Strategy",
    className: "md:col-span-1 md:row-span-1",
    image: "/images/service/2.png",
  },
  {
    name: "Digital Transformation",
    Icon: CircleIcon,
    description: "Reimagine your business for the digital age. We integrate people, processes, and technology seamlessly.",
    href: "/transformation",
    cta: "Transform Now",
    className: "md:col-span-1 md:row-span-1",
    image: "/images/service/3.png",
  },
  {
    name: "Innovation Consulting",
    Icon: Rocket,
    description: "Strategic innovation consulting to help your business stay ahead in the rapidly evolving technological landscape.",
    href: "/consulting",
    cta: "Innovate Today",
    className: "md:col-span-1 md:row-span-1",
    image: "/images/service/4.png",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-[#1f2d4e]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-white">THE </span>
            <span className="text-[#64A5DC]">ELYSIAN </span>
            <span className="text-white">PROCESS </span>

          </h2>
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Leveraging advanced technologies and industry expertise, we deliver comprehensive solutions designed to accelerate innovation and drive sustainable growth.
          </p>
        </div>
        <BentoGrid className="grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-[400px]">
          {services.map((service) => (
            <BentoCard
              key={service.name}
              className={cn(
                service.className,
                "p-0 transition-all duration-300 overflow-hidden group"
              )}
            >
              <div className="relative h-full flex flex-col">
                <div className="relative h-1/2 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />
                </div>
                <div className="relative p-6 flex flex-col justify-between flex-grow bg-white">
                  <div className="z-10">
                    <service.Icon className="w-8 h-8 text-gray-900 mb-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 border-t">
                    <a
                      href={service.href}
                      className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
                    >
                      {service.cta}
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

