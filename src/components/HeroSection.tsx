import { ChevronDown, ArrowRight, Code2, Shield, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-400" />
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text">Hemanth G</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 font-mono animate-slide-up animation-delay-200">
            <span className="text-primary">&lt;</span>
            Undergraduate Cyber Security Student
            <span className="text-primary">/&gt;</span>
            <br />
            <span className="text-primary">&lt;</span>
            Full-Stack Enthusiast | Vibe Coder
            <span className="text-primary">/&gt;</span>
          </p>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-400">
            A creative coder and designer pursuing BE CSE (Cyber Security) with a passion for 
            technology, security, and digital creativity. Building the future, one line of code at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up animation-delay-600">
            <Button variant="cyber" size="xl" asChild>
              <a href="#projects">
                View Portfolio
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Contact Me
              </a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fade-in animation-delay-600">
            <div className="flex flex-col items-center p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors">
              <Code2 className="w-6 h-6 text-primary mb-2" />
              <span className="text-xs text-muted-foreground">Full-Stack</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors">
              <Shield className="w-6 h-6 text-primary mb-2" />
              <span className="text-xs text-muted-foreground">Cyber Security</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors">
              <Sparkles className="w-6 h-6 text-primary mb-2" />
              <span className="text-xs text-muted-foreground">Creative</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
