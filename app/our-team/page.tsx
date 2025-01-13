/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Zap, Award, TrendingUp, Code } from 'lucide-react'
import DynamicBackground from '@/components/DynamicBackground'
import { FadeInSection } from '@/components/FadeInSection'

const teamMembers = [
  {
    name: "Syed Saeb Imam Zaidi",
    role: "CEO and Founding Director",
    bio: "With over three decades of experience in telecommunications, Saeb leads Elysian Innovations with unparalleled expertise in equipment evaluation, telecom services, regulatory compliance, and project management.",
    expertise: ["Telecommunications", "Project Management", "Strategic Leadership"]
  },
  {
    name: "Zulfiqar Mehdi",
    role: "Director and CTO",
    bio: "Zulfiqar brings 30+ years of expertise in communication and IT, specializing in mobile network deployment, technology management, and innovative solution delivery.",
    expertise: ["Network Deployment", "IT Consulting", "Technology Management"]
  },
  {
    name: "Rizwan Akhtar",
    role: "Director and COO",
    bio: "Rizwan brings over 30 years of experience in the telecom and IT sectors, including previous C-Level roles. He is passionate about growing Pakistan's IT industry and increasing national IT exports. Rizwan holds an MS in Electrical Engg, an MS in Engg Management, and a BE in Telecom Engg, complemented by over 40 industry certifications. This strong academic foundation and his proven track record, supports his expertise in strategic planning, program execution, and market entry strategies.  A dedicated mentor, Rizwan fosters creativity and innovation within his team and through various mentorship roles for startups. ",
    expertise: [
      "Tech Strategy Development & Implementation",
      "Project Management & Operational Excellence",
      "ICT Policy Management & Regulatory Frameworks",
      "Ethical Considerations in AI Development",
      "Lawful Interception System Architecture",
      "Internet Governance",
      "Team Leadership and Mentorship"
    ]
  },
  {
    name: "F.H. Malik",
    role: "Director of Projects and Business Development",
    bio: "F.H. Malik is a highly accomplished consultant with over 30 years of experience in business strategy, telecommunications, and technological innovation. With an MBA, MSc, a Bachelor's in Electronics, and Corporate Director certification, Malik excels at delivering transformative solutions for businesses seeking growth and efficiency in a tech-driven world.",
    expertise: [
      "Business Strategy",
      "Telecommunications",
      "Artificial Intelligence",
      "International Operations",
      "Corporate Governance"
    ]
  },
  {
    name: "Ovais Abbasi",
    role: "Telecommunications Consultant",
    bio: "Ovais Abbasi is a seasoned telecommunications professional with 30 years of expertise. He offers strategic guidance in spectrum acquisition & management, network planning, and regulatory compliance. His proven track record in project and program management, coupled with a deep understanding of risk and change management, enables him to assist organizations in successfully executing complex initiatives.",
    expertise: [
      "Spectrum Management",
      "Network Planning",
      "Regulatory Compliance",
      "Project Management",
      "Six Sigma",
      "Electronic Warfare",
      "Military Technology"
    ]
  },
  {
    name: "Sarim Ali",
    role: "Solutions Architect",
    bio: "Sarim Ali is a skilled Solutions Architect with expertise in client communication, environment elicitation, and full-stack development. With a strong background in creating tailored solutions, Sarim Ali excels in delivering outcomes that perfectly meet client needs. His passion for innovation and problem-solving drives his success in executing complex technical initiatives.",
    expertise: [
      "Full-Stack Development and Deployment",
      "Cloud Development",
      "Blockchain Technologies",
      "International Operations",
      "QA and Testing",
      "Requirements Engineering"
    ]
  },
]

const companyValues = [
  { icon: Zap, title: "Innovation", description: "Pushing boundaries and creating disruptive solutions" },
  { icon: Users, title: "Collaboration", description: "Fostering a culture of teamwork and shared success" },
  { icon: Award, title: "Excellence", description: "Striving for the highest standards in all we do" },
  { icon: TrendingUp, title: "Growth", description: "Continuously evolving and expanding our capabilities" }
]

export default function OurTeamPage() {
  return (
    <div className="relative min-h-screen">
      <DynamicBackground />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32">
      <div className="absolute inset-0 z-0">
        <DynamicBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-blue-600/80" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-bold mb-6">
                Our Team
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                We are a dynamic team of visionaries, engineers, and dreamers who thrive on pushing boundaries. Our passion lies in creating disruptive solutions that redefine industries, empower businesses, and enhance lives.
              </p>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-gray-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <value.icon className="w-16 h-16 mb-6 text-blue-600" />
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold mb-16 text-gray-800">Meet Our Visionaries</h2>
          <p className="text-xl mb-16 max-w-3xl text-gray-600">
            At Elysian Innovations, our strength lies in the collective wisdom of our founding members. With over 30 years of unparalleled experience, they've shaped the landscape of communication, information technology, electronic warfare, cybersecurity and training.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-10">
                    <h3 className="text-3xl font-semibold mb-4 text-gray-800">{member.name}</h3>
                    <p className="text-xl text-blue-600 mb-6">{member.role}</p>
                    <p className="text-gray-600 mb-8 text-lg">{member.bio}</p>
                    <h4 className="font-semibold mb-4 text-xl text-gray-800">Areas of Expertise:</h4>
                    <ul className="list-none pl-0 space-y-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
                          <span className="text-lg">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section
      <section className="py-32 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold mb-8">Join Our Team</h2>
          <p className="text-xl mb-12 max-w-2xl">
            We're always looking for talented individuals who share our passion for innovation and excellence. If you're ready to make an impact and shape the future of technology, we want to hear from you.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            View Open Positions
          </Button>
        </div>
      </section> */}

      {/* Our Expertise Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold mb-16 text-gray-800">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Code className="w-16 h-16 mb-6 text-blue-600" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Software Development</h3>
                <p className="text-gray-600 text-lg">Crafting robust and scalable solutions for complex business challenges.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Zap className="w-16 h-16 mb-6 text-blue-600" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Telecommunications</h3>
                <p className="text-gray-600 text-lg">Pioneering advanced communication systems and network infrastructures.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <TrendingUp className="w-16 h-16 mb-6 text-blue-600" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">IT Consulting</h3>
                <p className="text-gray-600 text-lg">Providing strategic guidance to optimize technology investments and operations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

