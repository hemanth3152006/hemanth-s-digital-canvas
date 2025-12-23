import { useEffect, useRef, useState } from 'react';
import { GraduationCap, School } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

const educationData = [
  {
    icon: GraduationCap,
    degree: 'BE – Computer Science & Engineering (Cyber Security)',
    institution: "St. Joseph's College of Engineering",
    location: 'Chennai',
    period: '2024 – 2028',
    status: 'Currently Pursuing',
    isCurrent: true,
  },
  {
    icon: School,
    degree: 'Higher Secondary Education',
    institution: 'Velammal Matriculation Higher Secondary School',
    location: 'Chennai',
    period: '2022-2024',
    status: 'Completed',
    group: 'Computer Science',
    isCurrent: false,
  },
  {
    icon: School,
    degree: 'Primary & Secondary Education',
    institution: 'Vani Vidyalaya Senior Secondary & Junior College',
    location: 'Chennai',
    period: '2013-2022',
    status: 'Completed',
    isCurrent: false,
  },
];

const EducationSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-secondary/20"
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">// EDUCATION</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Academic <span className="gradient-text">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />

            {educationData.map((edu, index) => {
              const IconComponent = edu.icon;
              const yearsMatch = edu.period.match(/(\d{4})\D+(\d{4})/);
              const totalYears = yearsMatch
                ? parseInt(yearsMatch[2], 10) - parseInt(yearsMatch[1], 10)
                : null;
              return (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full ${edu.isCurrent ? 'bg-primary animate-pulse-glow' : 'bg-accent'}`} />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div
                      className={`p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 group ${
                        edu.isCurrent ? 'glow-primary' : ''
                      } ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}
                      style={isVisible ? { animationDelay: `${index * 150}ms` } : undefined}
                    >
                      {edu.isCurrent ? (
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-primary text-primary-foreground transition-all">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-2 py-0.5 text-xs font-mono bg-primary/20 text-primary rounded-full">
                                Current
                              </span>
                            </div>
                            <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                              {edu.degree}
                            </h3>
                            <p className="text-muted-foreground mb-2">{edu.institution}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground/70">
                              <span>{edu.location}</span>
                              <span className="text-primary">•</span>
                              <span className="font-mono">{edu.period}</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Dialog>
                          <div className="flex items-start gap-4">
                            <DialogTrigger asChild>
                              <button
                                type="button"
                                className="p-3 rounded-xl bg-secondary text-primary transition-all hover:bg-primary hover:text-primary-foreground cursor-pointer"
                              >
                                <IconComponent className="w-6 h-6" />
                              </button>
                            </DialogTrigger>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                                {edu.degree}
                              </h3>
                              <p className="text-muted-foreground mb-2">{edu.institution}</p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground/70">
                                <span>{edu.location}</span>
                                <span className="text-primary">•</span>
                                <span className="font-mono">{edu.period}</span>
                              </div>
                            </div>
                          </div>
                          <DialogContent className="card-gradient border border-primary/40">
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-3">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                                  <IconComponent className="w-5 h-5" />
                                </span>
                                <span>{edu.degree}</span>
                              </DialogTitle>
                              <DialogDescription>
                                {edu.institution}
                                <span className="text-primary"> • </span>
                                {edu.location}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4 space-y-3 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Study Period</span>
                                <span className="font-mono">{edu.period}</span>
                              </div>
                              {totalYears !== null && (
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Duration</span>
                                  <span className="font-mono text-primary">{totalYears} years</span>
                                </div>
                              )}
                              {edu.group && (
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Group</span>
                                  <span className="font-mono text-primary">{edu.group}</span>
                                </div>
                              )}
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Status</span>
                                <span className="font-mono text-accent">{edu.status}</span>
                              </div>
                              <p className="mt-4 text-xs text-muted-foreground/80 leading-relaxed">
                                This flashcard shows how long I studied at this institution and
                                marks the completion of this chapter in my academic journey.
                              </p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
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

export default EducationSection;
