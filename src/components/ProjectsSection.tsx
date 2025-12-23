import { Shield, MapPin, ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    icon: Shield,
    title: 'PersonoGuard',
    description: 'A college project focused on personal safety and security concepts. Exploring ways to protect personal data and ensure user safety in digital environments.',
    tags: ['Security', 'Student Project', 'Personal Safety'],
    tech: ['React', 'Node.js', 'Security APIs'],
    image: null,
    githubUrl: 'https://github.com/hemanth3152006/present-my-world',
  },
  {
    icon: MapPin,
    title: 'Institution Transport Tracker',
    description: 'A system designed to track institutional transportation efficiently. Helps students and staff monitor vehicle locations and estimated arrival times.',
    tags: ['Tracking', 'Student Project', 'Transportation'],
    tech: ['Web App', 'Real-time Data', 'GPS Integration'],
    image: null,
    githubUrl: 'https://github.com/hemanth3152006/campus-companion-pro',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-secondary/20">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">// PROJECTS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              My <span className="gradient-text">Work</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic and personal projects showcasing my journey in tech and security.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.title}
                  className="group rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Project Header with Icon (clickable) */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-48 bg-gradient-to-br from-secondary to-background flex items-center justify-center relative overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 cyber-grid opacity-10" />
                    <div className="relative z-10 p-6 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110">
                      <IconComponent className="w-16 h-16" />
                    </div>
                    {/* Student Project Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-mono bg-accent/20 text-accent rounded-full border border-accent/30">
                        Student Project
                      </span>
                    </div>
                  </a>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded-full border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* More Projects Coming */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-secondary/30 border border-border">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-mono text-primary">+</div>
                <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center text-xs font-mono text-accent">+</div>
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-mono text-primary">+</div>
              </div>
              <span className="text-muted-foreground">
                More projects coming soon as I continue learning and building!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
