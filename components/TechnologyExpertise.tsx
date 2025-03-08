"use client"

import Image from "next/image"
import { FadeInSection } from "./FadeInSection"

const technologies = [
  // Row 1
  { name: ".NET", logo: "/images/tech/dotnet.svg" },
  { name: "Node.js", logo: "/images/tech/nodejs.svg" },
  { name: "React", logo: "/images/tech/react.svg" },
  { name: "Angular", logo: "/images/tech/angular.svg" },
  { name: "Python", logo: "/images/tech/python.svg" },
  { name: "Laravel", logo: "/images/tech/laravel.svg" },
  { name: "Java", logo: "/images/tech/java.svg" },

  // Row 2
  { name: "PostgreSQL", logo: "/images/tech/postgresql.svg" },
  { name: "SQL Server", logo: "/images/tech/sqlserver.svg" },
  { name: "MongoDB", logo: "/images/tech/mongodb.svg" },
  { name: "MariaDB", logo: "/images/tech/mariadb.svg" },
  { name: "Oracle", logo: "/images/tech/oracle.svg" },
  { name: "MySQL", logo: "/images/tech/mysql.svg" },
  { name: "AWS", logo: "/images/tech/aws.svg" },

  // Row 3
  { name: "Azure", logo: "/images/tech/azure.svg" },
  { name: "Google Cloud", logo: "/images/tech/gcloud.svg" },
  { name: "Terraform", logo: "/images/tech/terraform.svg" },
  { name: "Jira", logo: "/images/tech/jira.svg" },
  { name: "HashiCorp", logo: "/images/tech/hashicorp.svg" },
  { name: "Adobe", logo: "/images/tech/adobe.svg" },
  { name: "Figma", logo: "/images/tech/figma.svg" },
]

export default function TechnologyExpertise() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-teal/5 to-caribbean/5 dark:from-rich-black-200 dark:to-rich-black-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
              Technology{" "}
              <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our skilled team is dedicated to leveraging the latest technologies to deliver exceptional results.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {technologies.map((tech) => (
            <FadeInSection key={tech.name}>
              <div className="group relative bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-24">
                <div className="absolute inset-0 bg-gradient-to-r from-teal/10 to-caribbean/10 dark:from-teal-900 dark:to-teal-900 opacity-20 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                <div className="relative w-12 h-12 z-10">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={`${tech.name} logo`}
                    fill
                    className="object-contain transition-transform duration-300  group-hover:scale-110"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 to-transparent dark:from-rich-black-200/90 dark:to-transparent p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                  <p className="text-center text-xs font-medium text-teal dark:text-white">{tech.name}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

