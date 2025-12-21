import { Code2, Palette, Video, Brain, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Building and experimenting with complete web solutions. From frontend interfaces to backend APIs, I create cohesive digital experiences.',
    features: ['React & TypeScript', 'Node.js & APIs', 'Database Design', 'Responsive UI'],
  },
  {
    icon: Palette,
    title: 'Design & Creative Services',
    description: 'Crafting visually stunning designs that communicate effectively. From social media graphics to professional presentations.',
    features: ['Canva Designs', 'Social Media Graphics', 'Presentations', 'Brand Assets'],
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Transforming raw footage into engaging content. Creating videos that capture attention and tell compelling stories.',
    features: ['Content Editing', 'Motion Graphics', 'Color Grading', 'Audio Sync'],
  },
  {
    icon: Brain,
    title: 'Prompt Engineering',
    description: 'Creating effective AI prompts for productivity and creativity. Helping you leverage AI tools to their full potential.',
    features: ['AI Optimization', 'Custom Prompts', 'Workflow Automation', 'ChatGPT/Claude'],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">// SERVICES</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              What I <span className="gradient-text">Offer</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From development to design, I provide creative solutions tailored to your needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative p-8 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button variant="ghost" className="group/btn p-0 h-auto font-mono text-primary hover:bg-transparent">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
