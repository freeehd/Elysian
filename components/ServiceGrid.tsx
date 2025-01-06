import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { BarChartIcon, LayoutIcon, LoopIcon, RocketIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils"; // Assuming you have a utility function for class names

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
              name={service.name}
              className={cn(
                service.className,
                "p-6 transition-all duration-300"
              )}
              background={
                <div className={`absolute inset-0 bg-gradient-to-br `} />
              }
              Icon={service.Icon}
              description={service.description}
              href={service.href}
              cta={service.cta}
            >
              
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

