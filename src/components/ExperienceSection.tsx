import { Briefcase, Rocket, Code } from 'lucide-react';

const experiences = [
  {
    icon: Rocket,
    title: 'Intern',
    company: 'Z1 Study Abroad',
    type: 'Startup',
    duration: '1 Month',
    description: 'Gained exposure to startup culture, tech support, and real-world problem solving in a fast-paced environment.',
    skills: ['Startup Culture', 'Tech Support', 'Problem Solving'],
  },
  {
    icon: Code,
    title: 'Intern',
    company: '8Queens Software Technology',
    type: 'Software Company',
    duration: '1 Month',
    description: 'Gained hands-on experience with software development practices and industry-standard workflows.',
    skills: ['Software Development', 'Industry Practices', 'Team Collaboration'],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">// EXPERIENCE</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 text-xs font-mono bg-accent/20 text-accent rounded-full">
                          {exp.type}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {exp.duration}
                        </span>
                      </div>
                      <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded-full border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note */}
          <div className="mt-8 p-4 rounded-xl bg-secondary/30 border border-border text-center">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-mono">Note:</span> As a student, I'm actively seeking more 
              opportunities to grow and contribute. Open to internships and collaborations!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
