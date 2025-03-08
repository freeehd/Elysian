/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Zap, Award, TrendingUp, Code } from "lucide-react"
import DynamicBackground from "@/components/DynamicBackground"
import { FadeInSection } from "@/components/FadeInSection"

const teamMembers = [
  {
    name: "Syed Saeb Imam Zaidi",
    role: "CEO and Founding Director",
    bio: "With over three decades of experience in telecommunications, Saeb leads Elysian Innovations with unparalleled expertise in equipment evaluation, telecom services, regulatory compliance, and project management.",
    expertise: ["Telecommunications", "Project Management", "Strategic Leadership"],
  },
  {
    name: "Zulfiqar Mehdi",
    role: "Director and CTO",
    bio: "Zulfiqar brings 30+ years of expertise in communication and IT, specializing in mobile network deployment, technology management, and innovative solution delivery.",
    expertise: ["Network Deployment", "IT Consulting", "Technology Management"],
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
      "Team Leadership and Mentorship",
    ],
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
      "Corporate Governance",
    ],
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
      "Military Technology",
    ],
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
      "Requirements Engineering",
    ],
  },
]

const companyValues = [
  { icon: Zap, title: "Innovation", description: "Pushing boundaries and creating disruptive solutions" },
  { icon: Users, title: "Collaboration", description: "Fostering a culture of teamwork and shared success" },
  { icon: Award, title: "Excellence", description: "Striving for the highest standards in all we do" },
  { icon: TrendingUp, title: "Growth", description: "Continuously evolving and expanding our capabilities" },
]

export default function OurTeamPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal to-caribbean text-white py-32">
        <div className="absolute inset-0 z-0">
          <DynamicBackground />
          <div className="absolute inset-0 bg-gradient-to-br from-teal/80 to-caribbean/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                We are a dynamic team of visionaries, engineers, and dreamers who thrive on pushing boundaries. Our
                passion lies in creating disruptive solutions that redefine industries, empower businesses, and enhance
                lives.
              </p>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-teal/5 to-caribbean/5 dark:from-rich-black-100 dark:to-rich-black-200 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-800 dark:text-white">
            Our Core{" "}
            <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal/10 to-caribbean/10 dark:from-teal/20 dark:to-caribbean/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-teal/20 group-hover:to-caribbean/20 dark:group-hover:from-teal/30 dark:group-hover:to-caribbean/30 transition-all duration-300">
                      <value.icon className="w-8 h-8 text-teal dark:text-teal-400" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-caribbean/5 to-teal/5 dark:from-rich-black-200 dark:to-rich-black-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
          <div className="absolute bottom-1/3 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Visionaries</span>
          </h2>
          <p className="text-xl mb-16 max-w-3xl text-gray-600 dark:text-gray-300">
            At Elysian Innovations, our strength lies in the collective wisdom of our founding members. With over 30
            years of unparalleled experience, they've shaped the landscape of communication, information technology,
            electronic warfare, cybersecurity and training.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              >
                <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-lg md:text-xl text-teal dark:text-teal-400 mb-6">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-base md:text-lg">{member.bio}</p>
                    <h4 className="font-semibold mb-4 text-lg md:text-xl text-gray-800 dark:text-white">
                      Areas of Expertise:
                    </h4>
                    <ul className="list-none pl-0 space-y-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-5 h-5 mr-3 text-teal dark:text-teal-400 flex-shrink-0" />
                          <span className="text-base md:text-lg">{skill}</span>
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

      {/* Our Expertise Section */}
      <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-teal/5 to-caribbean/5 dark:from-rich-black-100 dark:to-rich-black-200 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-800 dark:text-white">
            Our <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal/10 to-caribbean/10 dark:from-teal/20 dark:to-caribbean/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-teal/20 group-hover:to-caribbean/20 dark:group-hover:from-teal/30 dark:group-hover:to-caribbean/30 transition-all duration-300">
                  <Code className="w-8 h-8 text-teal dark:text-teal-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Software Development</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Crafting robust and scalable solutions for complex business challenges.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal/10 to-caribbean/10 dark:from-teal/20 dark:to-caribbean/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-teal/20 group-hover:to-caribbean/20 dark:group-hover:from-teal/30 dark:group-hover:to-caribbean/30 transition-all duration-300">
                  <Zap className="w-8 h-8 text-teal dark:text-teal-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Telecommunications</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Pioneering advanced communication systems and network infrastructures.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal/10 to-caribbean/10 dark:from-teal/20 dark:to-caribbean/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-teal/20 group-hover:to-caribbean/20 dark:group-hover:from-teal/30 dark:group-hover:to-caribbean/30 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-teal dark:text-teal-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">IT Consulting</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Providing strategic guidance to optimize technology investments and operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

