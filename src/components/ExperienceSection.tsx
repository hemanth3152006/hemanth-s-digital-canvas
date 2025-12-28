import { Rocket, Code } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

const experiences = [
  {
    icon: Rocket,
    title: 'Intern',
    company: 'Z1 Study Abroad',
    type: 'Startup',
    duration: '30 days (June 1 – June 30)',
    description: 'Completed a 30-day internship from June 1 to June 30, gaining exposure to startup culture, tech support, and real-world problem solving in a fast-paced environment.',
    skills: ['Startup Culture', 'Tech Support', 'Problem Solving'],
    certificateUrl:
      'https://ik.imagekit.io/hemanth/intern%20certificate/Red%20Professional%20Certificate%20of%20Completion%20salto.png',
  },
  {
    icon: Code,
    title: 'Intern',
    company: '8Queens Software Technology',
    type: 'Software Company',
    duration: '15 days (Dec 8 – Dec 26)',
    description: 'Completed a 15-day internship from December 8 to December 26, gaining hands-on experience with software development practices and industry-standard workflows.',
    skills: ['Software Development', 'Industry Practices', 'Team Collaboration'],
    certificateUrl: 'https://example.com/8queens-internship-certificate', // TODO: replace with real certificate link
  },
  {
    icon: Rocket,
    title: 'Participant',
    company: 'Loyola College Symposium',
    type: 'Symposium',
    duration: '1 day',
    description:
      'Attended a technical symposium at Loyola College, exploring sessions on emerging technologies, cybersecurity, and innovation while connecting with peers from different institutions.',
    skills: ['Tech Talks', 'Networking', 'Industry Exposure'],
  },
  {
    icon: Code,
    title: 'Participant',
    company: 'SRM KTR Campus – 24h Hackathon',
    type: 'Hackathon',
    duration: '24-hour Hackathon',
    description:
      'Participated in a 24-hour hackathon at SRM Kattankulathur (KTR) campus, collaborating with teammates to brainstorm, prototype, and present a solution under time pressure.',
    skills: ['Hackathon Experience', 'Teamwork', 'Problem Solving', 'Time Management'],
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
                  <Dialog>
                    <div className="flex items-start gap-4 mb-4">
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all cursor-pointer"
                          aria-label={`Open ${exp.title} flashcard for ${exp.company}`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </button>
                      </DialogTrigger>
                      <div className="flex-1 text-left">
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

                    <DialogContent className="card-gradient border border-primary/40">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-3">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                            <IconComponent className="w-5 h-5" />
                          </span>
                          <span>{exp.title} – {exp.company}</span>
                        </DialogTitle>
                        <DialogDescription>
                          <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                            {exp.type}
                          </span>
                          <span className="text-primary"> • </span>
                          <span className="font-mono text-xs text-muted-foreground">{exp.duration}</span>
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4 space-y-3 text-sm">
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                        <div>
                          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                            Key Skills
                          </span>
                          <div className="mt-2 flex flex-wrap gap-2">
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
                        {exp.certificateUrl && (
                          <div className="pt-2">
                            <Button variant="hero" size="sm" asChild>
                              <a
                                href={exp.certificateUrl}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`View certificate for ${exp.title} at ${exp.company}`}
                              >
                                View Certificate
                              </a>
                            </Button>
                          </div>
                        )}
                        <p className="mt-2 text-xs text-muted-foreground/80 leading-relaxed">
                          This flashcard summarizes my responsibilities, learning outcomes, and core skills developed during this internship.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
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
