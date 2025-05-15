"use client"

import Image from "next/image"
import Link from "next/link"
import { FadeInSection } from "@/components/FadeInSection"

export default function PartnersSection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-caribbean/5 to-teal/5 dark:from-rich-black-100 dark:to-rich-black-200relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              OUR{" "}
              <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">PARTNERS</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver exceptional solutions and drive innovation.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="group">
              <Link
                href="https://www.digineox.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white dark:bg-rich-black-200/70 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-rich-black-300"
              >
                <div className="flex flex-col items-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-MtEcypuSe8Ea1ByJnq8rXvgU4akkwX.png"
                    alt="Digineox Logo"
                    width={180}
                    height={120}
                    className="mb-4"
                  />
                  <p className="text-center text-gray-700 dark:text-gray-300 font-medium">Proud Partner</p>
                </div>
              </Link>
            </div>

            {/* You can add more partners here in the future */}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
