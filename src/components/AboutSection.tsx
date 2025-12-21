import { Calendar, MapPin, GraduationCap, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">// ABOUT ME</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Who is <span className="gradient-text">Hemanth?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Info Cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Date of Birth</h3>
                    <p className="text-muted-foreground">31 May 2006 (Age 19)</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Education</h3>
                    <p className="text-muted-foreground">BE – CSE (Cyber Security)</p>
                    <p className="text-sm text-muted-foreground/70">St. Joseph's College of Engineering</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">Chennai, India</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expected Graduation</h3>
                    <p className="text-muted-foreground">2028</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Bio */}
            <div className="space-y-6">
              <div className="p-8 rounded-2xl card-gradient border border-border">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a <span className="text-primary font-semibold">vibe coder</span> with strong creative and 
                  technical curiosity. My journey in tech started with a fascination for how things work 
                  behind the screens, which naturally led me to explore both development and cybersecurity.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I completed my schooling at <span className="text-foreground">Vani Vidyalaya</span> and 
                  <span className="text-foreground"> Velammal</span>, where I discovered my passion for 
                  technology and creative problem-solving.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, I'm pursuing my degree while actively building projects, learning new technologies, 
                  and exploring the intersection of <span className="text-primary">coding</span>, 
                  <span className="text-accent"> design</span>, and 
                  <span className="text-primary"> security concepts</span>.
                </p>
              </div>

              {/* Interests Tags */}
              <div className="flex flex-wrap gap-3">
                {['Vibe Coder', 'Security Enthusiast', 'Creative Mind', 'Tech Explorer', 'Problem Solver'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm font-mono text-muted-foreground hover:border-primary/50 hover:text-primary transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
