import { Card, CardContent } from "@/components/ui/card"
import { Pen, Smartphone, Monitor, Palette, FolderCog } from 'lucide-react'

const offerings = [
  {
    icon: Pen,
    title: "Custom Web Development",
    description: "Create a unique online presence with our bespoke web development services. We tailor every aspect of your website to reflect your brand and engage your audience.",
    gradient: "from-[#7F3AFF] to-[#4A21EF]"
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description: "Reach your customers on the go with our mobile app development services. We design and develop high-performance mobile apps for iOS and Android platforms.",
    gradient: "from-[#0047AB] to-[#002D6B]"
  },
  {
    icon: Monitor,
    title: "Web Application Development",
    description: "Transform your business processes with powerful web applications. Our team specializes in building secure, scalable, and high-performing web applications tailored to your requirements.",
    gradient: "from-[#00008B] to-[#000066]"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Deliver exceptional user experiences with our UI/UX design services. We focus on creating visually stunning and highly intuitive interfaces that keep users engaged.",
    gradient: "from-[#7F3AFF] to-[#4A21EF]"
  },
  {
    icon: FolderCog,
    title: "Maintenance and Support",
    description: "Keep your websites and applications running smoothly with our maintenance and support services. We provide ongoing support to address any issues and implement updates.",
    gradient: "from-[#4169E1] to-[#0000CD]"
  }
]

export function OfferingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-4xl font-bold">
          <span className="text-[#3584C0]">OUR OFFERING</span>
        </h2>
        <p className="mb-16 max-w-3xl text-lg text-gray-600">
          As a premier Web and Application Development firm, Elysian offers a comprehensive range of solutions tailored to your unique digital needs. Our services include, but are not limited to:
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering) => (
            <Card key={offering.title} className="transition-shadow hover:shadow-lg">
              <CardContent className="p-8">
                <div className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r ${offering.gradient}`}>
                  <offering.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{offering.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{offering.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

