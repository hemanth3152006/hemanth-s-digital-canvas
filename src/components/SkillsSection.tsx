import { Code2, Palette, Video, Sparkles, Brain, Wrench } from 'lucide-react';

const skills = [
  {
    icon: Sparkles,
    name: 'Vibe Coding',
    level: 90,
    description: 'Creating code that just feels right',
    color: 'primary',
  },
  {
    icon: Code2,
    name: 'Full-Stack Development',
    level: 75,
    description: 'Learning & practice based web development',
    color: 'primary',
  },
  {
    icon: Palette,
    name: 'Canva Designing',
    level: 85,
    description: 'Creating stunning visual designs',
    color: 'accent',
  },
  {
    icon: Video,
    name: 'Video Editing',
    level: 80,
    description: 'Crafting engaging video content',
    color: 'accent',
  },
  {
    icon: Brain,
    name: 'Prompt Engineering',
    level: 95,
    description: 'Best Prompter - Mastering AI interactions',
    color: 'primary',
  },
  {
    icon: Wrench,
    name: 'Creative Problem Solving',
    level: 88,
    description: 'Finding innovative solutions',
    color: 'accent',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-secondary/20">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">// SKILLS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              My <span className="gradient-text">Toolkit</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              const isPrimary = skill.color === 'primary';
              
              return (
                <div
                  key={skill.name}
                  className="group p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${isPrimary ? 'bg-primary/10 text-primary group-hover:bg-primary' : 'bg-accent/10 text-accent group-hover:bg-accent'} group-hover:text-primary-foreground transition-all`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-muted-foreground">Proficiency</span>
                      <span className={`text-xs font-mono ${isPrimary ? 'text-primary' : 'text-accent'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${isPrimary ? 'bg-gradient-to-r from-primary to-primary/60' : 'bg-gradient-to-r from-accent to-accent/60'}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Best Prompter Badge */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 glow-primary">
              <Brain className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm">
                <span className="text-primary">Best Prompter</span>
                <span className="text-muted-foreground"> - Master of AI Interactions</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
