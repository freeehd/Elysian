'use client'

import Image from 'next/image'
import { FadeInSection } from './FadeInSection'

const technologies = [
  // Row 1
  { name: '.NET', logo: '/images/tech/dotnet.svg' },
  { name: 'Node.js', logo: '/images/tech/nodejs.svg' },
  { name: 'React', logo: '/images/tech/react.svg' },
  { name: 'Angular', logo: '/images/tech/angular.svg' },
  { name: 'Python', logo: '/images/tech/python.svg' },
  { name: 'Laravel', logo: '/images/tech/laravel.svg' },
  { name: 'Java', logo: '/images/tech/java.svg' },
  
  // Row 2
  { name: 'PostgreSQL', logo: '/images/tech/postgresql.svg' },
  { name: 'SQL Server', logo: '/images/tech/sqlserver.svg' },
  { name: 'MongoDB', logo: '/images/tech/mongodb.svg' },
  { name: 'MariaDB', logo: '/images/tech/mariadb.svg' },
  { name: 'Oracle', logo: '/images/tech/oracle.svg' },
  { name: 'MySQL', logo: '/images/tech/mysql.svg' },
  { name: 'AWS', logo: '/images/tech/aws.svg' },
  
  // Row 3
  { name: 'Azure', logo: '/images/tech/azure.svg' },
  { name: 'Google Cloud', logo: '/images/tech/gcloud.svg' },
  { name: 'Terraform', logo: '/images/tech/terraform.svg' },
  { name: 'Jira', logo: '/images/tech/jira.svg' },
  { name: 'HashiCorp', logo: '/images/tech/hashicorp.svg' },
  { name: 'Adobe', logo: '/images/tech/adobe.svg' },
  { name: 'Figma', logo: '/images/tech/figma.svg' },
]

export default function TechnologyExpertise() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-black dark:text-white">Technology</span>{' '}
              <span className="text-[#3584C0]">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our skilled team is dedicated to leveraging the latest technologies 
              to deliver exceptional results.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {technologies.map((tech) => (
            <FadeInSection key={tech.name}>
              <div className="group relative bg-white dark:bg-gray-100 dark:opacity-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                <div className="relative w-16 h-16">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white dark:to-transparent p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-center text-sm font-bold text-blue-500 ">
                    {tech.name}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

