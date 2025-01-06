import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { BarChartIcon, LayoutIcon, LoopIcon, RocketIcon } from "@radix-ui/react-icons";

const services = [
  {
    name: "Strategic Consulting",
    Icon: BarChartIcon,
    description: "Our expert consultants analyze your unique challenges, developing tailored solutions to boost efficiency and drive growth.",
    href: "/consulting",
    cta: "Learn More",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-purple-400 to-pink-600",
  },
  {
    name: "Future-Proof Strategy",
    Icon: LayoutIcon,
    description: "Navigate change with our data-driven strategies. We help you craft a robust vision aligned with your goals.",
    href: "/strategy",
    cta: "Explore Strategy",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-blue-400 to-teal-600",
  },
  {
    name: "Digital Transformation",
    Icon: LoopIcon,
    description: "Reimagine your business for the digital age. We integrate people, processes, and technology seamlessly.",
    href: "/transformation",
    cta: "Transform Now",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-orange-400 to-red-600",
  },
  {
    name: "Innovation Consulting",
    Icon: RocketIcon,
    description: "Strategic innovation consulting to help your business stay ahead in the rapidly evolving technological landscape.",
    href: "/consulting",
    cta: "Innovate Today",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-green-400 to-cyan-600",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <BentoGrid className="grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-[280px]">
          {services.map((service) => (
            <BentoCard 
              key={service.name} 
              {...service}
              className={`${service.className} p-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br-from-purple-400 to-pink-600 opacity-20 rounded-lg ${service.gradient}`} />
              <div className="relative flex flex-col h-full z-10">
                <div className="mb-4">
                  <service.Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.name}
                </h3>
                <p className="text-white text-sm opacity-90">
                  {service.description}
                </p>
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

